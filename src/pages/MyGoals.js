import React from 'react';
import { Target, Plus, Edit, Trash2 } from 'lucide-react';

const MyGoals = () => {
  // Sample goals data
  const goals = [
    { id: 1, title: 'Learn React & Tailwind', progress: 70, deadline: '2025-03-15' },
    { id: 2, title: 'Build 5 Portfolio Projects', progress: 40, deadline: '2025-06-30' },
    { id: 3, title: 'Complete Fitness Challenge', progress: 25, deadline: '2025-04-10' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Goals</h1>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          <Plus size={16} /> Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map(goal => (
          <div key={goal.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Target className="text-indigo-600" size={20} />
                <h3 className="font-semibold text-lg">{goal.title}</h3>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Edit size={18} />
                </button>
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Deadline: {new Date(goal.deadline).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGoals;