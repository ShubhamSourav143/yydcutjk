'use client';

import { useState, useEffect } from 'react';
import { Heart, Users, Trophy, Star, Play, Pause, Share2, MessageCircle, ThumbsUp, Gift, Camera, BookOpen, Gamepad2, Award, Bell, Settings, LogOut, PawPrint, Crown, Zap, Target } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Mock user data
const mockUser = {
  name: 'Priya Sharma',
  memberSince: '2024',
  level: 'Rescue Warrior',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  adoptedPet: {
    name: 'Moti',
    breed: 'Indian Pariah',
    image: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=300',
    accessories: ['Red Gamcha', 'Marigold Garland']
  },
  stats: {
    animalsHelped: 47,
    donationsThisMonth: 8500,
    storiesShared: 12,
    gamesWon: 23,
    pawPoints: 2840
  },
  badges: [
    { name: 'First Rescue', icon: '🏆', earned: true },
    { name: 'Diwali Helper', icon: '🪔', earned: true },
    { name: 'Story Teller', icon: '📖', earned: true },
    { name: 'Game Master', icon: '🎮', earned: false },
    { name: 'Campus Legend', icon: '👑', earned: false }
  ]
};

const recentActivities = [
  {
    id: 1,
    user: 'Shubham Kumar',
    action: 'sponsored chemotherapy for Romi',
    time: '2 hours ago',
    type: 'donation',
    amount: 15000,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 2,
    user: 'Anita Devi',
    action: 'adopted Simba from campus',
    time: '5 hours ago',
    type: 'adoption',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: 3,
    user: 'Rajesh Gupta',
    action: 'won Street Smart game and fed 10 dogs',
    time: '1 day ago',
    type: 'game',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

const pawCircles = [
  { name: 'Puppy Lovers', members: 234, image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Campus Alumni Paws', members: 156, image: 'https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Rescue Warriors', members: 89, image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=200' }
];

const gameStats = {
  currentLevel: 12,
  nextLevelProgress: 68,
  todaysMission: 'Help 3 street dogs reach safety',
  karmaCoins: 450,
  weeklyRank: 7
};

export default function ClubhouseDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showWelcome, setShowWelcome] = useState(true);
  const [petAnimation, setPetAnimation] = useState('idle');
  const [notifications, setNotifications] = useState(3);

  // Welcome animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Pet animation cycle
  useEffect(() => {
    const animations = ['idle', 'happy', 'playful', 'sleeping'];
    const interval = setInterval(() => {
      setPetAnimation(animations[Math.floor(Math.random() * animations.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const getPetAnimationClass = () => {
    switch (petAnimation) {
      case 'happy': return 'animate-bounce';
      case 'playful': return 'animate-pulse';
      case 'sleeping': return 'opacity-75';
      default: return 'animate-float';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Welcome Animation */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gradient-to-br from-blue-600 to-green-600 z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="text-center text-white"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🐕
              </motion.div>
              <h1 className="text-4xl font-bold mb-2">Welcome to KGP Paws Clubhouse!</h1>
              <p className="text-xl opacity-90">Namaste, {mockUser.name}! Ready to make paws-itive impact?</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center animate-pulse">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">The KGP Paws Clubhouse</h1>
                <p className="text-sm text-gray-600">Where Every Dog Has a Story, and So Do You</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 sticky top-24">
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Heart },
                  { id: 'social', label: 'Paw Feed', icon: Users },
                  { id: 'blog', label: 'My Stories', icon: BookOpen },
                  { id: 'game', label: 'Street Smart', icon: Gamepad2 },
                  { id: 'adoption', label: 'My Pets', icon: PawPrint }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-orange-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Welcome Section with Digital Pet */}
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 border border-orange-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Namaste, {mockUser.name}! 🙏
                      </h2>
                      <p className="text-lg text-gray-700 mb-4">
                        Your rescue companion <strong>{mockUser.adoptedPet.name}</strong> is excited to see you!
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
                          {mockUser.level}
                        </span>
                        <span className="text-sm text-gray-600">
                          Member since {mockUser.memberSince}
                        </span>
                      </div>
                    </div>
                    
                    {/* Digital Pet */}
                    <div className="relative">
                      <div className={`w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300 ${getPetAnimationClass()}`}>
                        <img 
                          src={mockUser.adoptedPet.image}
                          alt={mockUser.adoptedPet.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 border-2 border-orange-300">
                        <span className="text-2xl">🧡</span>
                      </div>
                      {/* Accessories */}
                      <div className="absolute top-0 left-0 text-2xl animate-bounce">🌼</div>
                      <div className="absolute top-2 right-2 text-lg animate-pulse">🧣</div>
                    </div>
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Animals Helped', value: mockUser.stats.animalsHelped, icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
                    { label: 'Donated This Month', value: `₹${mockUser.stats.donationsThisMonth.toLocaleString()}`, icon: Gift, color: 'text-green-500', bg: 'bg-green-50' },
                    { label: 'Stories Shared', value: mockUser.stats.storiesShared, icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { label: 'Paw Points', value: mockUser.stats.pawPoints, icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`${stat.bg} rounded-2xl p-6 border border-gray-200 hover-lift`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <Icon className={`w-8 h-8 ${stat.color}`} />
                          <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Progress Meter */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <PawPrint className="w-6 h-6 mr-2 text-orange-500" />
                    Your Pawprint Progress
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Volunteering', progress: 75, color: 'bg-blue-500' },
                      { label: 'Donations', progress: 90, color: 'bg-green-500' },
                      { label: 'Community', progress: 60, color: 'bg-purple-500' }
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                          <svg className="w-20 h-20 transform -rotate-90">
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="transparent"
                              className="text-gray-200"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="30"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="transparent"
                              strokeDasharray={`${2 * Math.PI * 30}`}
                              strokeDashoffset={`${2 * Math.PI * 30 * (1 - item.progress / 100)}`}
                              className={item.color.replace('bg-', 'text-')}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-gray-900">{item.progress}%</span>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-gray-700">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-yellow-500" />
                    Achievement Badges
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {mockUser.badges.map((badge, idx) => (
                      <div
                        key={idx}
                        className={`text-center p-4 rounded-xl border-2 transition-all duration-300 ${
                          badge.earned
                            ? 'border-yellow-300 bg-yellow-50 hover:scale-105'
                            : 'border-gray-200 bg-gray-50 opacity-50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <p className="text-xs font-medium text-gray-700">{badge.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className="space-y-6">
                {/* Paw Circles */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Paw Circles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pawCircles.map((circle, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200 hover-lift">
                        <img src={circle.image} alt={circle.name} className="w-full h-24 object-cover rounded-lg mb-3" />
                        <h4 className="font-semibold text-gray-900">{circle.name}</h4>
                        <p className="text-sm text-gray-600">{circle.members} members</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Paw-sitive Actions</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                        <img src={activity.avatar} alt={activity.user} className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex-1">
                          <p className="text-gray-900">
                            <span className="font-semibold">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-sm text-gray-600">{activity.time}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-green-500 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'game' && (
              <div className="space-y-6">
                {/* Game Dashboard */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
                  <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Street Smart - Paws of KGP</h2>
                    <p className="text-lg text-gray-700">Help street dogs navigate campus life and reach safety!</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">Level {gameStats.currentLevel}</div>
                      <p className="text-sm text-gray-600">Current Level</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-1">{gameStats.karmaCoins}</div>
                      <p className="text-sm text-gray-600">Karma Coins</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">#{gameStats.weeklyRank}</div>
                      <p className="text-sm text-gray-600">Weekly Rank</p>
                    </div>
                  </div>

                  <div className="bg-white/80 rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Today's Mission</h4>
                    <p className="text-gray-700 mb-3">{gameStats.todaysMission}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${gameStats.nextLevelProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{gameStats.nextLevelProgress}% complete</p>
                  </div>

                  <div className="text-center">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                      <Gamepad2 className="w-6 h-6 inline mr-2" />
                      Start Playing
                    </button>
                  </div>
                </div>

                {/* Game Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-3">🎯 Game Features</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Real-time multiplayer with other members</li>
                      <li>• Indian street vibes with cultural elements</li>
                      <li>• Earn karma coins for helping other players</li>
                      <li>• Unlock real-life impact rewards</li>
                      <li>• Daily leaderboards and challenges</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                    <h4 className="font-semibold text-gray-900 mb-3">🏆 Recent Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Rescued 5 dogs in co-op mission</span>
                        <span className="text-yellow-600">+50 coins</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Helped player reach safety</span>
                        <span className="text-green-600">+25 coins</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Daily mission completed</span>
                        <span className="text-blue-600">+30 coins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">My Stories & Blog</h3>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all">
                    <BookOpen className="w-4 h-4 inline mr-2" />
                    Write New Story
                  </button>
                </div>
                
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Share Your Paw-some Stories</h4>
                  <p className="text-gray-600 mb-6">Write about your rescue experiences, adoption journeys, or creative content about animals.</p>
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    Start Writing
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'adoption' && (
              <div className="space-y-6">
                {/* Virtual Pet */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 border border-green-200">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Virtual Rescue: {mockUser.adoptedPet.name}</h3>
                    <div className="relative inline-block">
                      <img 
                        src={mockUser.adoptedPet.image}
                        alt={mockUser.adoptedPet.name}
                        className="w-48 h-48 rounded-full object-cover border-4 border-green-300 animate-float"
                      />
                      <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 border-2 border-green-300">
                        <Heart className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-lg text-gray-700 mb-2">Breed: {mockUser.adoptedPet.breed}</p>
                      <p className="text-sm text-gray-600 mb-4">Accessories: {mockUser.adoptedPet.accessories.join(', ')}</p>
                      <div className="flex justify-center space-x-4">
                        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                          Send Treats
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                          Take Photo
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                          Share Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Real Adoption Options */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ready for Real Adoption?</h4>
                  <p className="text-gray-700 mb-6">Take the next step and adopt a real rescue animal from our campus.</p>
                  <Link
                    href="/adopt"
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
                  >
                    <PawPrint className="w-5 h-5 mr-2" />
                    Browse Real Animals
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}