'use client';

import { useState } from 'react';
import { Heart, Shield, Stethoscope, Home, DollarSign, CreditCard, Smartphone, Users, Clock, MapPin, ShoppingCart } from 'lucide-react';

const impactAreas = [
  {
    icon: Stethoscope,
    title: 'Emergency Medical Care',
    description: 'Surgeries, chemotherapy, specialist treatments, and 24/7 veterinary care for animals in critical condition.',
    amount: 5000,
    impact: 'Covers emergency surgery for one animal',
    realExample: 'Like Chedi\'s cancer treatment or train accident rescues',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Home,
    title: 'Daily Feeding Program',
    description: 'Feeding 320+ dogs daily during campus breaks for 100 days/year when students are away.',
    amount: 3000,
    impact: 'Feeds all campus animals for one day',
    realExample: 'Ensures no animal starves when students are away',
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Shield,
    title: 'Permanent Disability Care',
    description: '24/7 care for paraplegic and quadriplegic animals like Romi, Bunti, and Shanti who need lifelong support.',
    amount: 10000,
    impact: 'One month of specialized care for disabled animal',
    realExample: 'Physiotherapy, wheelchairs, and round-the-clock attention',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Users,
    title: 'Vaccination Drives',
    description: 'Mass vaccination campaigns protecting 3,000+ dogs annually from rabies and other diseases.',
    amount: 2000,
    impact: 'Vaccinates 50 dogs against rabies and diseases',
    realExample: 'Preventing disease outbreaks across campus and community',
    image: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Home,
    title: 'Shelter Building Fund',
    description: 'Building permanent homes for elderly and disabled animals who cannot be adopted.',
    amount: 25000,
    impact: 'Contributes to permanent sanctuary construction',
    realExample: 'Safe haven for animals like Romi, Bunti, and Shanti',
    image: 'https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    icon: Heart,
    title: 'Rescue Operations',
    description: '24/7 emergency response team for animal accidents, injuries, and rescue situations.',
    amount: 7500,
    impact: 'Funds one complete rescue operation',
    realExample: 'Immediate response to traffic accidents and emergencies',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const donationAmounts = [1000, 3000, 5000, 10000];

const urgentNeeds = [
  {
    title: 'Permanent Shelter Fund',
    description: 'We urgently need land and funds for a dedicated sanctuary for elderly and disabled animals who require lifelong care.',
    target: 5000000,
    raised: 1200000,
    percentage: 24,
    image: 'https://images.pexels.com/photos/6816861/pexels-photo-6816861.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Winter Feeding Program',
    description: 'Support our 100-day feeding program during campus breaks when 320+ animals depend on us completely.',
    target: 300000,
    raised: 180000,
    percentage: 60,
    image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Emergency Medical Fund',
    description: 'Critical fund for unexpected surgeries, treatments, and medical emergencies that can\'t wait.',
    target: 500000,
    raised: 320000,
    percentage: 64,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    title: 'Vaccination Campaign 2025',
    description: 'Annual vaccination drive to protect 3,000+ animals from rabies and preventable diseases.',
    target: 200000,
    raised: 145000,
    percentage: 73,
    image: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(3000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isMonthly, setIsMonthly] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const handleDonate = (amount?: number) => {
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const handleAddToCart = (amount: number) => {
    // Add to cart functionality
    console.log('Added to cart:', amount);
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Support Our Mission</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We receive no government funding. Every rupee comes from donors like you and directly impacts animal lives. Your support makes our 24/7 emergency response possible.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-red-800 font-medium">
            🚨 Urgent: We need a permanent shelter for our growing number of elderly and disabled animals
          </p>
        </div>
      </div>

      {/* Urgent Needs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Urgent Funding Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {urgentNeeds.map((need, idx) => (
            <div key={idx} className="card hover-lift">
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img 
                  src={need.image} 
                  alt={need.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                    Urgent
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{need.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{need.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Raised: ₹{(need.raised / 100000).toFixed(1)}L</span>
                    <span>Target: ₹{(need.target / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${need.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">{need.percentage}% funded</p>
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => handleDonate()}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-sm"
                  >
                    Donate Now
                  </button>
                  <button 
                    onClick={() => handleAddToCart(need.target)}
                    className="w-full border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Areas */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Your Donation Helps</h2>
          <p className="text-lg text-gray-600">
            Choose the area where you'd like to make the biggest impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div key={idx} className="card hover-lift">
                <div className="relative overflow-hidden rounded-t-xl h-48">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                  <p className="text-xs text-blue-600 mb-3">{area.realExample}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-green-600">₹{area.amount.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">{area.impact}</span>
                  </div>
                  <div className="space-y-2">
                    <button 
                      onClick={() => handleDonate(area.amount)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-sm"
                    >
                      Donate Now
                    </button>
                    <button 
                      onClick={() => handleAddToCart(area.amount)}
                      className="w-full border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Donation Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
              <p className="text-gray-600">Every contribution directly saves lives</p>
            </div>
            <div className="card-body space-y-6">
              {/* Monthly/One-time Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    !isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                    isMonthly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount (₹)
                </label>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        selectedAmount === amount
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'upi', label: 'UPI (Recommended)', icon: Smartphone },
                    { id: 'bank', label: 'Bank Transfer', icon: DollarSign },
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <label key={method.id} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mr-3"
                        />
                        <Icon className="w-5 h-5 mr-3 text-gray-500" />
                        <span className="font-medium">{method.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Donation Summary */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">
                    {isMonthly ? 'Monthly' : 'One-time'} Donation:
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{finalAmount?.toLocaleString() || '0'}
                  </span>
                </div>
                {isMonthly && (
                  <p className="text-sm text-gray-600">
                    Annual impact: ₹{(finalAmount * 12)?.toLocaleString() || '0'}
                  </p>
                )}
              </div>

              <button 
                onClick={() => handleDonate(finalAmount)}
                className="w-full btn-primary text-lg py-4"
              >
                Donate ₹{finalAmount?.toLocaleString() || '0'} {isMonthly ? 'Monthly' : 'Now'}
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>🔒 Secure payment • Tax-deductible receipt</p>
                <p>📧 You'll receive updates on how your donation helps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Information */}
        <div className="space-y-8">
          {/* Current Stats */}
          <div className="card">
            <div className="card-header">
              <h3 className="text-xl font-semibold text-gray-900">Our Impact Since 2019</h3>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">460+</div>
                  <div className="text-sm text-gray-600">Dogs Sterilized</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3,000+</div>
                  <div className="text-sm text-gray-600">Vaccinations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">320</div>
                  <div className="text-sm text-gray-600">Daily Feeding</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="card">
            <div className="card-body">
              <h3 className="font-semibold text-gray-900 mb-4">Why Support IIT KGP Animal Welfare?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-3 text-green-500" />
                  Registered NGO under West Bengal Government (2025)
                </li>
                <li className="flex items-center">
                  <Heart className="w-4 h-4 mr-3 text-red-500" />
                  100% volunteer-driven, no administrative overhead
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-blue-500" />
                  24/7 emergency response since 2019
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-purple-500" />
                  Transparent updates on Instagram @animal__welfare_iitkgp
                </li>
              </ul>
            </div>
          </div>

          {/* Real Stories */}
          <div className="card">
            <div className="card-body">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Impact Stories</h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-medium">Train Accident Rescue</p>
                  <p className="text-gray-600">6-month-old pup survived train accident, received multiple surgeries</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <p className="font-medium">Chedi's Cancer Treatment</p>
                  <p className="text-gray-600">Elderly dog received chemotherapy, lived final years with dignity</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-medium">Hippo's Recovery</p>
                  <p className="text-gray-600">From hairless and sick to healthy with shiny coat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Every Rupee Saves Lives</h2>
        <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
          Since 2019, we've shown that dedicated people can change countless lives. With no government funding, we depend entirely on supporters like you.
        </p>
        <div className="text-sm opacity-75 mb-6">
          <p>📱 Follow our work: @animal__welfare_iitkgp</p>
          <p>📞 24/7 Emergency Hotline • IIT Kharagpur, West Bengal</p>
        </div>
      </div>

      {/* Thank You Message */}
      {showThankYou && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slideInRight z-50">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Thank you for your donation! 🙏</span>
          </div>
        </div>
      )}
    </div>
  );
}