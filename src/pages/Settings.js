import React, { useState } from 'react';
import { Bell, User, Lock, Moon, Sun, ToggleLeft, ToggleRight } from 'lucide-react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <nav className="flex border-b">
          <button className="px-5 py-3 text-indigo-600 border-b-2 border-indigo-600 font-medium">Account</button>
          <button className="px-5 py-3 text-gray-600 hover:text-gray-900">Notifications</button>
          <button className="px-5 py-3 text-gray-600 hover:text-gray-900">Privacy</button>
          <button className="px-5 py-3 text-gray-600 hover:text-gray-900">Integrations</button>
        </nav>
        
        <div className="p-6 space-y-6">
          {/* Account Settings */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <User size={18} className="mr-2" />
              Personal Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue="User Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  defaultValue="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Pacific Time (UTC-8)</option>
                  <option>Mountain Time (UTC-7)</option>
                  <option>Central Time (UTC-6)</option>
                  <option>Eastern Time (UTC-5)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>
          
          <hr />
          
          {/* Appearance */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              {darkMode ? <Moon size={18} className="mr-2" /> : <Sun size={18} className="mr-2" />}
              Appearance
            </h2>
            
            <div className="flex items-center justify-between p-3 border rounded-md">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-600">Switch between light and dark themes</p>
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-1 rounded-full ${darkMode ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
              </button>
            </div>
          </div>
          
          <hr />
          
          {/* Notifications */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Bell size={18} className="mr-2" />
              Notification Preferences
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <button 
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`p-1 rounded-full ${emailNotifications ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {emailNotifications ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-gray-600">Receive push notifications on your device</p>
                </div>
                <button 
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`p-1 rounded-full ${pushNotifications ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {pushNotifications ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-md">
                <div>
                  <p className="font-medium">Weekly Progress Report</p>
                  <p className="text-sm text-gray-600">Receive a weekly summary of your progress</p>
                </div>
                <button 
                  onClick={() => setWeeklyReport(!weeklyReport)}
                  className={`p-1 rounded-full ${weeklyReport ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  {weeklyReport ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                </button>
              </div>
            </div>
          </div>
          
          <hr />
          
          {/* Security */}
          <div>
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Lock size={18} className="mr-2" />
              Security
            </h2>
            
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;