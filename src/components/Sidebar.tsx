import React from 'react';
import { useAuthStore } from '../store/authStore';
import profileIcon from '../assets/icons/ProfileIcon.svg';
import feedIcon from '../assets/icons/FeedIcon.svg';
import createIcon from '../assets/icons/CreateIcon.svg';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { user } = useAuthStore();

  const menuItems = [
    { 
      id: 'profile', 
      label: 'Профиль', 
      icon: profileIcon,
    },
    { 
      id: 'feed', 
      label: 'Лента заданий', 
      icon: feedIcon,
    },
    { 
      id: 'create', 
      label: 'Создать задачу', 
      icon: createIcon,
    },
  ];

  // Получаем первую букву имени для аватарки
  const getInitial = () => {
    return user?.name?.charAt(0)?.toUpperCase() || 'U';
  };

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      {/* Заголовок */}
    

      {/* Информация пользователя */}
      <div className="p-4 border-b border-purple-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {getInitial()}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-800">{user?.name || 'Пользователь'}</p>
            <p className="text-sm text-purple-600">{user?.credits || 0} кредитов</p>
          </div>
        </div>
      </div>

      {/* Меню навигации */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition duration-200 ${
                    isActive
                      ? 'bg-purple-100 text-purple-700 border-l-4 border-purple-500'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {/* SVG иконка с фильтром для изменения цвета */}
                  <div className={`w-5 h-5 flex items-center justify-center ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}>
                    <img 
                      src={item.icon} 
                      alt={item.label}
                      className="w-5 h-5"
                      style={{
                        filter: isActive 
                          ? 'invert(39%) sepia(57%) saturate(748%) hue-rotate(230deg) brightness(97%) contrast(94%)' 
                          : 'invert(60%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(90%)'
                      }}
                    />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Дополнительная информация */}
      <div className="p-4 mt-8">
        <div className="bg-purple-50 rounded-lg p-4">
          <h3 className="font-semibold text-purple-700 text-sm">Статистика</h3>
          <div className="mt-2 space-y-1 text-xs text-purple-600">
            <p>✅ Выполнено: 5 заданий</p>
            <p>🔄 В процессе: 2 задания</p>
            <p>⭐ Рейтинг: 4.8/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;