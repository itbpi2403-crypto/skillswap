// src/services/api.ts
import axios from 'axios'; // Импорт библиотеки HTTP-запросов

// Создание экземпляра axios с базовыми настройками
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Базовый URL из переменных окружения
  timeout: 10000, // Таймаут запроса 10 секунд
  headers: {
    'Content-Type': 'application/json', // Установка типа контента
  },
});

// Интерцептор для добавления токена к запросам
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token'); // Получение токена из localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Добавление токена в заголовки
  }
  return config; // Возврат конфигурации
});