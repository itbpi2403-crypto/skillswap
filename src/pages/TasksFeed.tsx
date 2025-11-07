import React from 'react';

const TasksFeed: React.FC = () => {
  const tasks = [
    {
      id: 1,
      title: 'Помощь с React компонентами',
      author: 'Анна Петрова',
      price: 50,
      skills: ['React', 'JavaScript'],
      date: '2 часа назад',
    },
    {
      id: 2,
      title: 'Объяснение алгоритмов',
      author: 'Иван Сидоров',
      price: 75,
      skills: ['Алгоритмы', 'Python'],
      date: '5 часов назад',
    },
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Лента заданий</h1>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-2">от {task.author}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-purple-600">{task.price} 💰</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                Взять задание
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksFeed;