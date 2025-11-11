import React, { useState } from 'react';

const CreateTask: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    subject: '',
    course: '',
    photos: [] as string[],
  });

  const subjects = [
    'Программирование',
    'Математика',
    'Физика',
    'Английский язык',
    'Дизайн',
    'Маркетинг',
    'Экономика',
    'Другое'
  ];

  const courses = [
    '1 курс',
    '2 курс', 
    '3 курс',
    '4 курс',
    '5 курс',
    '6 курс',
    'Магистратура',
    'Аспирантура'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Создаем задание:', formData);
    alert('Задание успешно создано!');
    
    // Сброс формы
    setFormData({
      title: '',
      description: '',
      price: '',
      subject: '',
      course: '',
      photos: [],
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newPhotos]
      }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Конструктор задания</h1>
        <p className="text-gray-600 mb-8">Создайте новое задание для других студентов</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Название задания */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Название задания *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
              placeholder="Например: Помощь с React компонентами"
              required
            />
          </div>

          {/* Описание задания */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Подробное описание задания *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
              placeholder="Опишите подробно, какая помощь требуется, какие конкретно задачи нужно решить, сроки выполнения..."
              required
            />
          </div>

          {/* Предмет и курс - в одной строке */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Предмет */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Предмет *
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                required
              >
                <option value="">Выберите предмет</option>
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            {/* Курс */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Курс *
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
                required
              >
                <option value="">Выберите курс</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Цена */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Цена (в кредитах) *
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pl-12"
                placeholder="0"
                min="0"
                required
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                💰
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Укажите, сколько кредитов готовы заплатить за выполнение задания
            </p>
          </div>

          {/* Прикрепление фотографий */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Прикрепить фотографии
            </label>
            
            {/* Превью фотографий */}
            {formData.photos.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Прикрепленные фото:</p>
                <div className="flex flex-wrap gap-3">
                  {formData.photos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={photo} 
                        alt={`Прикрепленное фото ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Кнопка загрузки */}
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Нажмите для загрузки</span> или перетащите файлы
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, GIF (макс. 10MB)</p>
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Кнопка создания */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: '',
                  description: '',
                  price: '',
                  subject: '',
                  course: '',
                  photos: [],
                });
              }}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 font-semibold"
            >
              Очистить
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition duration-200 font-semibold shadow-lg"
            >
              Создать задание
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;