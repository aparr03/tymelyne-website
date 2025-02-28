import React from 'react';
import { Award, Star, Zap, Trophy } from 'lucide-react';

// Define the missing Target component
const Target = ({ size }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
};

const Achievements = () => {
  const achievements = [
    { id: 1, title: 'First Goal Set', description: 'Created your first goal', icon: <Target size={20} />, date: '2025-01-10', completed: true },
    { id: 2, title: '7-Day Streak', description: 'Used TymeLyne for 7 consecutive days', icon: <Zap size={20} />, date: '2025-01-16', completed: true },
    { id: 3, title: 'Goal Master', description: 'Completed 3 goals', icon: <Trophy size={20} />, date: '2025-02-05', completed: true },
    { id: 4, title: 'Task Champion', description: 'Completed 50 tasks', icon: <Star size={20} />, date: '2025-02-15', completed: false },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Achievements & Rewards</h1>
      
      {/* User Level Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Current Level</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">12</span>
              </div>
              <div>
                <p className="font-medium">Goal Explorer</p>
                <p className="text-sm text-gray-600">4,250 XP</p>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-600">Next Level: 5,000 XP</p>
            <div className="mt-2 w-32 bg-gray-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`bg-white rounded-lg shadow-sm p-5 border-l-4 ${
              achievement.completed ? 'border-indigo-500' : 'border-gray-300'
            }`}
          >
            <div className="flex gap-4">
              <div className={`p-3 rounded-lg ${
                achievement.completed ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-500'
              }`}>
                {achievement.icon}
              </div>
              
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  {achievement.completed 
                    ? `Earned on ${new Date(achievement.date).toLocaleDateString()}` 
                    : 'Not yet earned'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Streaks */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Current Streaks</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">14</p>
            <p className="text-sm text-gray-600">Daily Login</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-green-600">8</p>
            <p className="text-sm text-gray-600">Task Completion</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">5</p>
            <p className="text-sm text-gray-600">Goal Progress</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-amber-600">3</p>
            <p className="text-sm text-gray-600">Weekly Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
