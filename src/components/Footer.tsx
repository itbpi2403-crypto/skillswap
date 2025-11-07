import React from 'react';
import { useAuthStore } from '../store/authStore';

const Footer: React.FC = () => {
    const { isAuthenticated, logout } = useAuthStore();

    return (
        <footer className="bg-purple-700 text-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                {/* Верхняя часть футера */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    
                    {/* Логотип и описание */}
                    <div className="mb-6 md:mb-0 md:max-w-md">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <span className="text-purple-700 font-bold text-sm">S</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">SkillSwap</h3>
                        </div>
                        <p className="text-purple-200">
                            Платформа для взаимного обучения внутри университетского сообщества. 
                            Обменивайся знаниями и навыками без денежных расчетов.
                        </p>
                    </div>

                    {/* Навигационные ссылки */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Основное */}
                        <div>
                            <h4 className="font-semibold text-purple-300 mb-3">Основное</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-purple-200 hover:text-white transition">Главная</a></li>
                                <li><a href="/search" className="text-purple-200 hover:text-white transition">Поиск</a></li>
                                {isAuthenticated && (
                                    <li><a href="/profile" className="text-purple-200 hover:text-white transition">Профиль</a></li>
                                )}
                            </ul>
                        </div>

                        {/* Аккаунт */}
                        <div>
                            <h4 className="font-semibold text-purple-300 mb-3">Аккаунт</h4>
                            <ul className="space-y-2">
                                {isAuthenticated ? (
                                    <>
                                        <li><a href="/profile" className="text-purple-200 hover:text-white transition">Мой профиль</a></li>
                                        <li>
                                            <button 
                                                onClick={logout}
                                                className="text-purple-200 hover:text-white transition text-left"
                                            >
                                                Выйти
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li><a href="/login" className="text-purple-200 hover:text-white transition">Войти</a></li>
                                        <li><a href="/register" className="text-purple-200 hover:text-white transition">Регистрация</a></li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Помощь */}
                        <div>
                            <h4 className="font-semibold text-purple-300 mb-3">Помощь</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-purple-200 hover:text-white transition">О проекте</a></li>
                                <li><a href="#" className="text-purple-200 hover:text-white transition">Контакты</a></li>
                                <li><a href="#" className="text-purple-200 hover:text-white transition">Правила</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Разделительная линия */}
                <div className="border-t border-purple-500 my-6"></div>

                {/* Нижняя часть */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-purple-300 text-sm mb-4 md:mb-0">
                        © 2025 SkillSwap. Все права защищены.
                    </div>
                    
                    {/* Социальные сети */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-purple-300 hover:text-white transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 496 512">
                                <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                            </svg>
                        </a>

                        
                        <a href="https://github.com/itbpi2403-crypto/skillswap" className="text-purple-300 hover:text-white transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;