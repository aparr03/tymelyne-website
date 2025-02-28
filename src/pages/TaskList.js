import React from 'react';
import { Calendar, CheckSquare, Filter } from 'lucide-react';

const TaskList = () => {
  // Sample tasks data 
  const tasks = [
    { id: 1, title: 'Research React hooks', completed: true, due: '2025-02-26', category: 'Learning' },
    { id: 2, title: 'Create dashboard wireframes', completed: false, due: '2025-02-27', category: 'Design' },
    { id: 3, title: 'Complete coding challenge', completed: false, due: '2025-02-27', category: 'Practice' },
    { id: 4, title: 'Review portfolio feedback', completed: false, due: '2025-02-28', category: 'Career' },
    { id: 5, title: 'Morning workout routine', completed: true, due: '2025-02-27', category: 'Health' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task List</h1>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-2 bg-white border rounded-md text-sm">
            <Calendar size={16} /> Today
          </button>
          <button className="flex items-center gap-1 px-3 py-2 bg-white border rounded-md text-sm">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h2 className="font-medium">Tasks for today</h2>
        </div>

        <div className="divide-y">
          {tasks.map(task => (
            <div key={task.id} className="p-4 flex items-center hover:bg-gray-50">
              <input 
                type="checkbox" 
                checked={task.completed}
                className="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <div className="ml-3 flex-1">
                <p className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                  {task.title}
                </p>
                <p className="text-sm text-gray-500">Due: {new Date(task.due).toLocaleDateString()}</p>
              </div>
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                {task.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
