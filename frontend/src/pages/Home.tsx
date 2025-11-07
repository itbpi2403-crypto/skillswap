import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Profile from './Profile';
import TasksFeed from './TasksFeed';
import CreateTask from './CreateTask';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'feed':
        return <TasksFeed />;
      case 'create':
        return <CreateTask />;
      default:
        return <Profile />;
    }
  };

  return (
    
      <div className="flex-1 flex min-h-0">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 p-8 overflow-auto">
          {renderContent()}
        </div>
      </div>
  );
};

export default Home;