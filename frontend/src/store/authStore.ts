// src/store/authStore.ts
import { create } from 'zustand'; // Импорт функции создания хранилища из Zustand

// Определение интерфейса для состояния аутентификации
interface AuthState {
  user: null | { id: string; email: string; name: string }; // Данные пользователя или null если не авторизован
  isAuthenticated: boolean; // Флаг авторизации
  login: (email: string, password: string) => void; // Функция входа
  logout: () => void; // Функция выхода
  register: (name: string, email: string, password: string) => void; // Функция регистрации
}

// Создание хранилища с начальным состоянием и методами
export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Начальное состояние - пользователь не авторизован
  isAuthenticated: false, // Начальное состояние - не аутентифицирован
  login: async (email: string, password: string) => {
    // Заглушка для функции входа
    console.log('Login attempt:', email); // Логирование попытки входа
    // Здесь будет реальный API вызов
    set({ user: { id: '1', email, name: 'Test User' }, isAuthenticated: true }); // Временная заглушка
  },
  logout: () => set({ user: null, isAuthenticated: false }), // Очистка данных пользователя
  register: async (name: string, email: string, password: string) => {
    // Заглушка для функции регистрации
    console.log('Register attempt:', name, email); // Логирование попытки регистрации
    // Здесь будет реальный API вызов
    set({ user: { id: '1', email, name }, isAuthenticated: true }); // Временная заглушка
  },
}));