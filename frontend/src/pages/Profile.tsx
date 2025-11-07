import React, { useState } from 'react';
import { useAuthStore } from '../store/authStore';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Студент МТУСИ, увлекаюсь программированием и дизайном',
    skills: ['React', 'TypeScript', 'Node.js'],
    newSkill: ''
  });

  // Обновляем стор при изменении имени
  const updateAuthStore = (newName: string) => {
    if (user) {
      useAuthStore.setState({ 
        user: { ...user, name: newName } 
      });
    }
  };

  const handleSave = () => {
    updateAuthStore(formData.name);
    setIsEditing(false);
    // Здесь можно добавить сохранение на бэкенд
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      bio: 'Студент МТУСИ, увлекаюсь программированием и дизайном',
      skills: ['React', 'TypeScript', 'Node.js'],
      newSkill: ''
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (formData.newSkill.trim() && !formData.skills.includes(formData.newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill.trim()],
        newSkill: ''
      });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleNewSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">Войдите в систему</h1>
          <p className="text-gray-600">Для просмотра профиля необходимо авторизоваться</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Заголовок и кнопка редактирования */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-700">Мой профиль</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-200 font-semibold"
            >
              Редактировать
            </button>
          ) : (
            <div className="flex space-x-3">
              <button
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition duration-200 font-semibold"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-200 font-semibold"
              >
                Сохранить
              </button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Левая колонка - Основная информация */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Основная информация</h2>
            
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Введите ваш email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">О себе</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Расскажите о себе"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-700">Имя:</span>
                  <p className="text-gray-900 mt-1">{formData.name}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Email:</span>
                  <p className="text-gray-900 mt-1">{formData.email}</p>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-700">Кредиты:</span>
                  <p className="text-purple-600 font-bold mt-1">{user?.credits || 0} 💰</p>
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка - Навыки и информация */}
          <div className="space-y-8">
            {/* Навыки */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Мои навыки</h2>
              
              {isEditing ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                      >
                        <span>{skill}</span>
                        <button
                          onClick={() => removeSkill(skill)}
                          className="text-purple-500 hover:text-purple-700 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={formData.newSkill}
                      onChange={(e) => setFormData({ ...formData, newSkill: e.target.value })}
                      onKeyPress={handleNewSkillKeyPress}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Добавить навык"
                    />
                    <button
                      onClick={addSkill}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition duration-200"
                    >
                      Добавить
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* О себе (в режиме просмотра) */}
            {!isEditing && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">О себе</h2>
                <p className="text-gray-600 leading-relaxed">{formData.bio}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;