'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Star, Filter, Grid, List, TrendingUp, Package, Users, DollarSign, AlertTriangle, BarChart3, Eye, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

// Mock product data
const products = [
  {
    id: 1,
    name: 'KGP Paws Classic T-Shirt',
    category: 'clothing',
    subcategory: 't-shirts',
    type: 'casual',
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 45,
    isNew: false,
    isBestSeller: true,
    description: 'Comfortable cotton t-shirt featuring our iconic paw logo'
  },
  {
    id: 2,
    name: 'Rescue Hero Athletic Tee',
    category: 'clothing',
    subcategory: 't-shirts',
    type: 'athletic',
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 32,
    isNew: true,
    isBestSeller: true,
    description: 'Moisture-wicking athletic tee for active animal lovers'
  },
  {
    id: 3,
    name: 'Paws & Love Graphic Tee',
    category: 'clothing',
    subcategory: 't-shirts',
    type: 'graphic',
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.6,
    reviews: 89,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 67,
    isNew: false,
    isBestSeller: false,
    description: 'Artistic graphic design celebrating animal welfare'
  },
  {
    id: 4,
    name: 'Campus Comfort Jeans',
    category: 'clothing',
    subcategory: 'pants',
    type: 'jeans',
    price: 2499,
    originalPrice: 3299,
    discount: 24,
    rating: 4.7,
    reviews: 124,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 28,
    isNew: false,
    isBestSeller: true,
    description: 'Premium denim jeans with comfort stretch'
  },
  {
    id: 5,
    name: 'Volunteer Shorts',
    category: 'clothing',
    subcategory: 'pants',
    type: 'shorts',
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    rating: 4.5,
    reviews: 78,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 41,
    isNew: true,
    isBestSeller: false,
    description: 'Lightweight shorts perfect for volunteer work'
  },
  {
    id: 6,
    name: 'Rescue Squad Activewear',
    category: 'clothing',
    subcategory: 'pants',
    type: 'activewear',
    price: 1899,
    originalPrice: 2499,
    discount: 24,
    rating: 4.8,
    reviews: 167,
    image: 'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 35,
    isNew: false,
    isBestSeller: true,
    description: 'High-performance activewear for rescue operations'
  },
  {
    id: 7,
    name: 'Winter Rescue Jacket',
    category: 'clothing',
    subcategory: 'jackets',
    type: 'winter',
    price: 3999,
    originalPrice: 5299,
    discount: 25,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.pexels.com/photos/1598510/pexels-photo-1598510.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598510/pexels-photo-1598510.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 18,
    isNew: false,
    isBestSeller: true,
    description: 'Insulated winter jacket for cold weather rescues'
  },
  {
    id: 8,
    name: 'Lightweight Volunteer Jacket',
    category: 'clothing',
    subcategory: 'jackets',
    type: 'lightweight',
    price: 2299,
    originalPrice: 2899,
    discount: 21,
    rating: 4.6,
    reviews: 145,
    image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 52,
    isNew: true,
    isBestSeller: false,
    description: 'Breathable lightweight jacket for everyday wear'
  },
  {
    id: 9,
    name: 'Rain Rescue Jacket',
    category: 'clothing',
    subcategory: 'jackets',
    type: 'rain',
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.pexels.com/photos/1598512/pexels-photo-1598512.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598512/pexels-photo-1598512.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 29,
    isNew: false,
    isBestSeller: false,
    description: 'Waterproof jacket for rainy day rescues'
  },
  {
    id: 10,
    name: 'Insulated Water Bottle',
    category: 'accessories',
    subcategory: 'water-bottles',
    type: 'insulated',
    price: 1499,
    originalPrice: 1899,
    discount: 21,
    rating: 4.8,
    reviews: 312,
    image: 'https://images.pexels.com/photos/1598513/pexels-photo-1598513.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598513/pexels-photo-1598513.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 76,
    isNew: false,
    isBestSeller: true,
    description: 'Double-wall insulated bottle keeps drinks cold/hot'
  },
  {
    id: 11,
    name: 'Sports Water Bottle',
    category: 'accessories',
    subcategory: 'water-bottles',
    type: 'sports',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.5,
    reviews: 198,
    image: 'https://images.pexels.com/photos/1598514/pexels-photo-1598514.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598514/pexels-photo-1598514.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 94,
    isNew: true,
    isBestSeller: false,
    description: 'Lightweight sports bottle with easy-grip design'
  },
  {
    id: 12,
    name: 'Classic KGP Bottle',
    category: 'accessories',
    subcategory: 'water-bottles',
    type: 'classic',
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1598515/pexels-photo-1598515.jpeg?auto=compress&cs=tinysrgb&w=400',
    images: [
      'https://images.pexels.com/photos/1598515/pexels-photo-1598515.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    stock: 123,
    isNew: false,
    isBestSeller: false,
    description: 'Classic design bottle with KGP Paws logo'
  }
];

// Mock analytics data
const analyticsData = {
  weeklySales: [
    { day: 'Mon', sales: 12500 },
    { day: 'Tue', sales: 15200 },
    { day: 'Wed', sales: 18900 },
    { day: 'Thu', sales: 22100 },
    { day: 'Fri', sales: 28500 },
    { day: 'Sat', sales: 35200 },
    { day: 'Sun', sales: 31800 }
  ],
  topSellingItems: [
    { name: 'KGP Paws Classic T-Shirt', sales: 156 },
    { name: 'Insulated Water Bottle', sales: 134 },
    { name: 'Winter Rescue Jacket', sales: 98 },
    { name: 'Campus Comfort Jeans', sales: 87 },
    { name: 'Rescue Hero Athletic Tee', sales: 76 }
  ],
  metrics: {
    totalRevenue: 164200,
    previousWeekRevenue: 142800,
    avgSessionDuration: '4m 32s',
    cartAbandonmentRate: 23.5,
    conversionRate: 3.8,
    totalOrders: 342,
    newCustomers: 89
  },
  lowStockItems: products.filter(p => p.stock < 30),
  outOfStockItems: products.filter(p => p.stock === 0)
};

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState({});

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      case 'bestseller':
        return b.isBestSeller - a.isBestSeller;
      default:
        return 0;
    }
  });

  // Get category counts
  const getCategoryCount = (category, subcategory = null) => {
    return products.filter(p => {
      if (subcategory) {
        return p.category === category && p.subcategory === subcategory;
      }
      return category === 'all' ? true : p.category === category;
    }).length;
  };

  // Add to cart
  const addToCart = async (productId) => {
    setLoading(prev => ({ ...prev, [productId]: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, quantity: 1 }];
    });
    
    setLoading(prev => ({ ...prev, [productId]: false }));
  };

  // Toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Get cart total
  const cartTotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center animate-fadeIn">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KGP Paws Store</h1>
                <p className="text-xs text-gray-500">Official Merchandise</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="Analytics Dashboard"
              >
                <BarChart3 className="w-5 h-5" />
              </button>
              
              <button className="relative p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Store Categories</h2>
              
              {/* Categories */}
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubcategory('all');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'all' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>All Products</span>
                      <span className="text-sm text-gray-500">({getCategoryCount('all')})</span>
                    </div>
                  </button>
                </div>

                {/* Clothing */}
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('clothing');
                      setSelectedSubcategory('all');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'clothing' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>👕 Clothing</span>
                      <span className="text-sm text-gray-500">({getCategoryCount('clothing')})</span>
                    </div>
                  </button>
                  
                  {selectedCategory === 'clothing' && (
                    <div className="ml-4 mt-2 space-y-1">
                      <button
                        onClick={() => setSelectedSubcategory('t-shirts')}
                        className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${
                          selectedSubcategory === 't-shirts' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        T-shirts ({getCategoryCount('clothing', 't-shirts')})
                      </button>
                      <button
                        onClick={() => setSelectedSubcategory('pants')}
                        className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${
                          selectedSubcategory === 'pants' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Pants ({getCategoryCount('clothing', 'pants')})
                      </button>
                      <button
                        onClick={() => setSelectedSubcategory('jackets')}
                        className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${
                          selectedSubcategory === 'jackets' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Jackets ({getCategoryCount('clothing', 'jackets')})
                      </button>
                    </div>
                  )}
                </div>

                {/* Accessories */}
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('accessories');
                      setSelectedSubcategory('all');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'accessories' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>🎒 Accessories</span>
                      <span className="text-sm text-gray-500">({getCategoryCount('accessories')})</span>
                    </div>
                  </button>
                  
                  {selectedCategory === 'accessories' && (
                    <div className="ml-4 mt-2 space-y-1">
                      <button
                        onClick={() => setSelectedSubcategory('water-bottles')}
                        className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${
                          selectedSubcategory === 'water-bottles' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Water Bottles ({getCategoryCount('accessories', 'water-bottles')})
                      </button>
                      <button
                        onClick={() => setSelectedSubcategory('bags')}
                        className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${
                          selectedSubcategory === 'bags' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        Bags (0)
                      </button>
                    </div>
                  )}
                </div>

                {/* Best Sellers */}
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('bestsellers');
                      setSelectedSubcategory('all');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'bestsellers' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>🏆 Best Sellers</span>
                      <span className="text-sm text-gray-500">({products.filter(p => p.isBestSeller).length})</span>
                    </div>
                  </button>
                </div>

                {/* New Arrivals */}
                <div>
                  <button
                    onClick={() => {
                      setSelectedCategory('new');
                      setSelectedSubcategory('all');
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'new' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>✨ New Arrivals</span>
                      <span className="text-sm text-gray-500">({products.filter(p => p.isNew).length})</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Analytics Dashboard */}
            {showAnalytics && (
              <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Analytics Dashboard</h2>
                  <button
                    onClick={() => setShowAnalytics(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-600 font-medium">Total Revenue</p>
                        <p className="text-2xl font-bold text-blue-900">₹{analyticsData.metrics.totalRevenue.toLocaleString()}</p>
                        <p className="text-xs text-green-600">+15.2% vs last week</p>
                      </div>
                      <DollarSign className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Total Orders</p>
                        <p className="text-2xl font-bold text-green-900">{analyticsData.metrics.totalOrders}</p>
                        <p className="text-xs text-green-600">+8.3% vs last week</p>
                      </div>
                      <Package className="w-8 h-8 text-green-600" />
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">Conversion Rate</p>
                        <p className="text-2xl font-bold text-orange-900">{analyticsData.metrics.conversionRate}%</p>
                        <p className="text-xs text-green-600">+0.5% vs last week</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-orange-600" />
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-purple-600 font-medium">New Customers</p>
                        <p className="text-2xl font-bold text-purple-900">{analyticsData.metrics.newCustomers}</p>
                        <p className="text-xs text-green-600">+12.1% vs last week</p>
                      </div>
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                </div>

                {/* Charts and Tables */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Top Selling Items */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Top 5 Selling Items</h3>
                    <div className="space-y-3">
                      {analyticsData.topSellingItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-900">{item.name}</span>
                          <span className="text-sm text-gray-600">{item.sales} sold</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stock Alerts */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Stock Level Alerts</h3>
                    <div className="space-y-3">
                      {analyticsData.lowStockItems.slice(0, 5).map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                          <span className="text-sm font-medium text-gray-900">{item.name}</span>
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm text-yellow-700">{item.stock} left</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Filters and Sort */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">
                    {sortedProducts.length} products found
                  </span>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest First</option>
                    <option value="bestseller">Best Sellers</option>
                  </select>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 space-y-1">
                      {product.isNew && (
                        <span className="px-2 py-1 bg-green-600 text-white text-xs font-medium rounded">
                          NEW
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="px-2 py-1 bg-orange-600 text-white text-xs font-medium rounded">
                          BESTSELLER
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="px-2 py-1 bg-red-600 text-white text-xs font-medium rounded">
                          -{product.discount}%
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className={`p-2 rounded-full transition-colors ${
                          wishlist.includes(product.id)
                            ? 'bg-red-100 text-red-600'
                            : 'bg-white/90 text-gray-600 hover:text-red-600'
                        }`}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        <Eye className="w-4 h-4 inline mr-2" />
                        Quick View
                      </button>
                    </div>

                    {/* Stock indicator */}
                    {product.stock < 10 && (
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2 py-1 bg-yellow-600 text-white text-xs font-medium rounded">
                          Only {product.stock} left
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={loading[product.id] || product.stock === 0}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {loading[product.id] ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : product.stock === 0 ? (
                        'Out of Stock'
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Package className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cart Summary (if items in cart) */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-900">Cart ({cartItemCount})</span>
            <span className="font-bold text-blue-600">₹{cartTotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
}