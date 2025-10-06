// src/pages/Login.tsx
import { useState } from 'react'; // Импорт хука состояния
import { useAuthStore } from '../store/authStore'; // Импорт хранилища аутентификации

export default function Login() {
  // Локальное состояние для полей формы
  const [email, setEmail] = useState(''); // Состояние email
  const [password, setPassword] = useState(''); // Состояние пароля
  
  // Получение функции входа из хранилища
  const { login } = useAuthStore();

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращение перезагрузки страницы
    login(email, password); // Вызов функции входа
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md"> {/* Центрирующий контейнер */}
      <h1 className="text-3xl font-bold text-center mb-8">Вход в систему</h1> {/* Заголовок */}
      
      <form onSubmit={handleSubmit} className="space-y-4"> {/* Форма с обработчиком */}
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-700">Email</label> {/* Метка поля */}
          <input 
            type="email" 
            id="email"
            value={email} // Привязка значения
            onChange={(e) => setEmail(e.target.value)} // Обработчик изменения
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" // Стили поля
            required // Обязательное поле
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block mb-2 text-gray-700">Пароль</label> {/* Метка поля */}
          <input 
            type="password" 
            id="password"
            value={password} // Привязка значения
            onChange={(e) => setPassword(e.target.value)} // Обработчик изменения
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" // Стили поля
            required // Обязательное поле
          />
        </div>
        
        <button 
          type="submit" // Тип кнопки - отправка формы
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200" // Стили кнопки
        >
          Войти
        </button>
      </form>
    </div>
  );
}