// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Импорт компонентов маршрутизации
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Импорт провайдера кэширования
import Header from './components/Header'; // Импорт компонента шапки
import Home from './pages/Home'; // Импорт страницы главной
import Login from './pages/Login'; // Импорт страницы входа
import Register from './pages/Register'; // Импорт страницы регистрации
import Profile from './pages/Profile'; // Импорт страницы профиля
import Search from './pages/Search'; // Импорт страницы поиска

// Создание клиента для кэширования запросов
const queryClient = new QueryClient();

function App() {
  return (
    // Обертка для кэширования запросов
    <QueryClientProvider client={queryClient}>
      {/* Обертка для маршрутизации */}
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col"> {/* Основной контейнер */}
          <Header /> {/* Компонент шапки */}
          <main className="flex-grow"> {/* Основное содержимое */}
            {/* Конфигурация маршрутов */}
            <Routes>
              <Route path="/" element={<Home />} /> {/* Маршрут главной страницы */}
              <Route path="/login" element={<Login />} /> {/* Маршрут входа */}
              <Route path="/register" element={<Register />} /> {/* Маршрут регистрации */}
              <Route path="/profile" element={<Profile />} /> {/* Маршрут профиля */}
              <Route path="/search" element={<Search />} /> {/* Маршрут поиска */}
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App; // Экспорт компонента