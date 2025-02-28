import React from 'react';
import { Users, MessageCircle, Heart, Share2 } from 'lucide-react';

const Community = () => {
  const challenges = [
    { id: 1, title: '30-Day Coding Challenge', participants: 247, daysLeft: 12 },
    { id: 2, title: 'Fitness February', participants: 189, daysLeft: 0 },
    { id: 3, title: 'Reading Marathon', participants: 134, daysLeft: 21 }
  ];
  
  const posts = [
    { 
      id: 1, 
      user: 'Alex Chen', 
      avatar: 'AC', 
      content: 'Just completed my first web development project goal! Check out my portfolio link in bio.',
      likes: 24,
      comments: 7,
      time: '2h ago'
    },
    { 
      id: 2, 
      user: 'Jordan Lee', 
      avatar: 'JL', 
      content: 'Has anyone tried the new time-blocking feature? It\'s helped me increase my productivity by 30%!',
      likes: 18,
      comments: 12,
      time: '5h ago'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Community & Challenges</h1>
      
      {/* Challenges */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Active Challenges</h2>
          <button className="text-indigo-600 text-sm font-medium">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map(challenge => (
            <div key={challenge.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium">{challenge.title}</h3>
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-gray-600">
                  <Users size={14} className="inline mr-1" />
                  {challenge.participants} participants
                </span>
                <span className={challenge.daysLeft > 0 ? 'text-green-600' : 'text-gray-500'}>
                  {challenge.daysLeft > 0 
                    ? `${challenge.daysLeft} days left` 
                    : 'Completed'}
                </span>
              </div>
              <button className="mt-3 w-full py-2 text-sm text-center border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50">
                {challenge.daysLeft > 0 ? 'Join Challenge' : 'View Results'}
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Community Posts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Community Posts</h2>
          <button className="text-indigo-600 text-sm font-medium">New Post</button>
        </div>
        
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.id} className="border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                  {post.avatar}
                </div>
                <div className="ml-3">
                  <p className="font-medium">{post.user}</p>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>
              
              <p className="text-gray-700">{post.content}</p>
              
              <div className="mt-4 flex gap-4 text-sm text-gray-600">
                <button className="flex items-center gap-1">
                  <Heart size={16} /> {post.likes}
                </button>
                <button className="flex items-center gap-1">
                  <MessageCircle size={16} /> {post.comments}
                </button>
                <button className="flex items-center gap-1 ml-auto">
                  <Share2 size={16} /> Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;