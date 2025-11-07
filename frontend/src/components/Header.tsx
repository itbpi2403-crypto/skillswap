import React from 'react';
import { useAuthStore } from '../store/authStore';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-purple-500 text-white shadow-lg">
            <div className="container mx-auto px-4 py-2.5">
                <div className="flex justify-between items-center">
                    {/* Логотип и название */}
                    <img 
                      src={logo} 
                      alt="SkillSwap Logo" 
                      className="h-12 w-auto object-contain" 
                      />
          
          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-black">Привет, {user.name}</span>
                <button 
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-gray-700 hover:text-blue-600">Войти</a>
                <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Регистрация
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;