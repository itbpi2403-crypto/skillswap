// Базовые настройки API
const API_BASE_URL = 'http://localhost:3001/api';

// Общая функция для HTTP запросов
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}

// API для аутентификации
export const authApi = {
  // Вход пользователя
  async login(email: string, password: string) {
    return fetchAPI('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  // Регистрация пользователя
  async register(email: string, password: string, name: string) {
    return fetchAPI('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  },

  // Получение профиля пользователя
  async getProfile() {
    return fetchAPI('/auth/profile');
  },

  // Выход пользователя
  async logout() {
    localStorage.removeItem('token');
    return Promise.resolve();
  }
};

// API для пользователей
export const usersApi = {
  // Поиск пользователей
  async searchUsers(query: string) {
    return fetchAPI(`/users/search?q=${encodeURIComponent(query)}`);
  },

  // Получение пользователя по ID
  async getUserById(id: string) {
    return fetchAPI(`/users/${id}`);
  },

  // Обновление профиля
  async updateProfile(userData: any) {
    return fetchAPI('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }
};

// API для навыков
export const skillsApi = {
  // Получение всех навыков
  async getSkills() {
    return fetchAPI('/skills');
  },

  // Добавление навыка пользователю
  async addSkill(skillId: string) {
    return fetchAPI('/skills/user', {
      method: 'POST',
      body: JSON.stringify({ skillId }),
    });
  },

  // Удаление навыка у пользователя
  async removeSkill(skillId: string) {
    return fetchAPI('/skills/user', {
      method: 'DELETE',
      body: JSON.stringify({ skillId }),
    });
  }
};

// API для запросов на обучение
export const requestsApi = {
  // Создание запроса
  async createRequest(data: any) {
    return fetchAPI('/requests', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Получение моих запросов
  async getMyRequests() {
    return fetchAPI('/requests/my');
  },

  // Принятие запроса
  async acceptRequest(requestId: string) {
    return fetchAPI(`/requests/${requestId}/accept`, {
      method: 'POST',
    });
  },

  // Отклонение запроса
  async declineRequest(requestId: string) {
    return fetchAPI(`/requests/${requestId}/decline`, {
      method: 'POST',
    });
  }
};

export default {
  authApi,
  usersApi,
  skillsApi,
  requestsApi,
};