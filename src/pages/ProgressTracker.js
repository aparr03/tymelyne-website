import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

const ProgressTracker = () => {
  // Sample milestones data
  const milestones = [
    { id: 1, title: 'Project Kickoff', completed: true, date: '2025-01-15' },
    { id: 2, title: 'Design Approval', completed: true, date: '2025-01-30' },
    { id: 3, title: 'MVP Development', completed: true, date: '2025-02-20' },
    { id: 4, title: 'User Testing', completed: false, date: '2025-03-05' },
    { id: 5, title: 'Official Launch', completed: false, date: '2025-03-20' }
  ];

  // Calculate overall progress
  const completedCount = milestones.filter(m => m.completed).length;
  const progressPercentage = (completedCount / milestones.length) * 100;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Progress Tracker</h1>

      {/* Overall Progress */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="text-indigo-600 mr-2" size={20} />
          <h2 className="text-lg font-medium">Overall Progress</h2>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-indigo-600 h-4 rounded-full transition-all duration-700 ease-in-out" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="text-center font-medium text-indigo-600">
          {Math.round(progressPercentage)}% Complete
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-6">Milestone Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="relative flex items-start">
                <div className={`absolute left-8 w-3 h-3 rounded-full mt-1.5 -ml-1.5 border-2 ${
                  milestone.completed 
                    ? 'bg-indigo-500 border-indigo-500' 
                    : 'bg-white border-gray-300'
                }`}></div>
                
                <div className="ml-12">
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm text-gray-500">
                      {new Date(milestone.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h3 className={`font-medium mt-1 ${
                    milestone.completed ? 'text-indigo-600' : 'text-gray-700'
                  }`}>
                    {milestone.title}
                  </h3>
                  
                  <div className="mt-1 text-sm">
                    {milestone.completed ? (
                      <span className="text-green-600">Completed</span>
                    ) : (
                      <span className="text-gray-500">Upcoming</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;