import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, CheckSquare, Award } from 'lucide-react';

const DashboardOverview = () => {
  const [quote, setQuote] = useState('');
  
  // Simulating fetching a motivational quote
  useEffect(() => {
    const quotes = [
      "The best way to predict the future is to create it.",
      "Small progress is still progress.",
      "Focus on the journey, not the destination.",
      "Success is the sum of small efforts repeated day in and day out."
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const quickStats = [
    { 
      title: 'Goals in Progress', 
      value: '3', 
      icon: <Target size={20} />, 
      color: 'bg-blue-100 text-blue-600' 
    },
    { 
      title: 'Tasks Completed', 
      value: '27/42', 
      icon: <CheckSquare size={20} />, 
      color: 'bg-green-100 text-green-600' 
    },
    { 
      title: 'Progress', 
      value: '64%', 
      icon: <TrendingUp size={20} />, 
      color: 'bg-purple-100 text-purple-600' 
    },
    { 
      title: 'Achievements', 
      value: '12', 
      icon: <Award size={20} />, 
      color: 'bg-amber-100 text-amber-600' 
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-md p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
        <p className="opacity-90">You're making great progress toward your goals.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-5 transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Card */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center mb-4">
          <Sparkles className="text-amber-500 mr-2" size={20} />
          <h2 className="text-lg font-medium">Today's Motivation</h2>
        </div>
        <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-700">
          "{quote}"
        </blockquote>
      </div>

      {/* Upcoming Tasks Preview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-4">Today's Focus</h2>
        <div className="space-y-3">
          {['Complete project proposal', 'Exercise for 30 minutes', 'Review weekly goals'].map((task, i) => (
            <div key={i} className="flex items-center p-3 border rounded-md hover:bg-gray-50">
              <input 
                type="checkbox" 
                className="h-5 w-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-3 text-gray-700">{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Import the Target component which was missing
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

export default DashboardOverview;