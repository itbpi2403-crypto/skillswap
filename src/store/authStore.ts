import { create } from 'zustand';
import { authApi } from '../services/api';

interface User {
  id: string;
  email: string;
  name: string;
  credits: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: {
    id: '1',
    email: 'test@example.com',
    name: 'Тестовый Пользователь',
    credits: 100
  },
  isAuthenticated: true,
  isLoading: false,
  
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // Временно заглушка для тестирования
      setTimeout(() => {
        const mockUser = {
          id: '1',
          email,
          name: 'Тестовый Пользователь',
          credits: 100
        };
        set({ 
          user: mockUser, 
          isAuthenticated: true, 
          isLoading: false 
        });
        localStorage.setItem('token', 'mock-token');
      }, 1000);
      
      // Когда бэкенд будет готов, раскомментируй:
      // const response = await authApi.login(email, password);
      // set({ user: response.user, isAuthenticated: true });
      // localStorage.setItem('token', response.token);
    } catch (error) {
      console.error('Login error:', error);
      set({ isLoading: false });
      throw error;
    }
  },
  
  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    try {
      // Временно заглушка для тестирования
      setTimeout(() => {
        const mockUser = {
          id: '1',
          email,
          name,
          credits: 100
        };
        set({ 
          user: mockUser, 
          isAuthenticated: true, 
          isLoading: false 
        });
        localStorage.setItem('token', 'mock-token');
      }, 1000);
      
      // Когда бэкенд будет готов, раскомментируй:
      // const response = await authApi.register(email, password, name);
      // set({ user: response.user, isAuthenticated: true });
      // localStorage.setItem('token', response.token);
    } catch (error) {
      console.error('Register error:', error);
      set({ isLoading: false });
      throw error;
    }
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
    localStorage.removeItem('token');
  },
  
  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Временно заглушка
        const mockUser = {
          id: '1',
          email: 'test@example.com',
          name: 'Тестовый Пользователь',
          credits: 100
        };
        set({ user: mockUser, isAuthenticated: true });
        
        // Когда бэкенд будет готов, раскомментируй:
        // const user = await authApi.getProfile();
        // set({ user, isAuthenticated: true });
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
  },

  updateUser: (userData: Partial<User>) => {
    set((state) => ({
      user: state.user ? { ...state.user, ...userData } : null
    }));
  },
}));