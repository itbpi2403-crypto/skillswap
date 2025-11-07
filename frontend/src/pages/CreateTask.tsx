import React, { useState } from 'react';

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Задание создано: ' + title);
    setTitle('');
  };

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-8">Создать задание</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Название задания</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Введите название задания"
            />
          </div>
          
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg"
          >
            Создать задание
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;