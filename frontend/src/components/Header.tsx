// src/components/Header.tsx
import { useAuthStore } from '../store/authStore'; // Импорт хранилища аутентификации

export default function Header() {
  // Получение состояния и методов из хранилища
  const { user, isAuthenticated, logout } = useAuthStore();
  
  return (
    <header className="bg-white shadow-sm"> {/* Контейнер шапки */}
      <div className="container mx-auto px-4 py-3"> {/* Центрирующий контейнер */}
        <div className="flex justify-between items-center"> {/* Флекс-контейнер */}
          <h1 className="text-xl font-bold text-blue-600">SkillSwap</h1> {/* Логотип */}
          
          <nav className="flex items-center space-x-4"> {/* Навигация */}
            {isAuthenticated ? ( // Условный рендеринг для авторизованных */}
              <>
                <span className="text-gray-700">Привет, {user?.name}</span> {/* Приветствие */}
                <a href="/profile" className="text-blue-500 hover:text-blue-700">Профиль</a> {/* Ссылка на профиль */}
                <a href="/search" className="text-blue-500 hover:text-blue-700">Поиск</a> {/* Ссылка на поиск */}
                <button 
                  onClick={logout} // Обработчик выхода
                  className="bg-red-500 text-white px-3 py-1 rounded" // Стили кнопки
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-blue-500 hover:text-blue-700">Войти</a> {/* Ссылка на вход */}
                <a href="/register" className="bg-green-500 text-white px-3 py-1 rounded">Регистрация</a> {/* Ссылка на регистрацию */}
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}