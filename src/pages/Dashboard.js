import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardOverview from './DashboardOverview';
import MyGoals from './MyGoals';
import TaskList from './TaskList';
import ProgressTracker from './ProgressTracker';
import Achievements from './Achievements';
import Community from './Community';
import Settings from './Settings';

function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  
  // Extract current page from URL path
  const currentPath = location.pathname.split('/dashboard/')[1] || '';
  const currentPage = currentPath === '' ? 'dashboard' : currentPath;

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Sidebar 
        currentPage={currentPage}
        isCollapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <main className={`flex-1 overflow-auto transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-0 md:ml-64'}`}>
        <div className="p-4 md:p-6 lg:p-8">
          <Routes>
            <Route index element={<DashboardOverview />} />
            <Route path="goals" element={<MyGoals />} />
            <Route path="tasks" element={<TaskList />} />
            <Route path="progress" element={<ProgressTracker />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="community" element={<Community />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;