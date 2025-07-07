'use client'

import { useState, useEffect } from 'react'
import { X, Heart } from 'lucide-react'
import { APP_CONFIG } from '@/lib/constants'
import Navigation from './Navigation'
import DonationButton from '../DonationButton'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isOpen) return null

  return (
    <aside className="fixed left-0 top-0 w-80 h-full bg-white border-r border-gray-200 z-40 shadow-sm animate-slideInLeft overflow-y-auto">
      <div className="p-6">
        {/* Enhanced Header with Better Logo Visibility */}
        <div className="flex items-center justify-between mb-8 animate-fadeInUp">
          <div className="flex items-center space-x-3 flex-1">
            {/* Improved Logo Container */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center animate-float shadow-lg border-2 border-white">
              {/* High-quality dog silhouette as logo */}
              <div className="w-10 h-10 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-8 h-8 text-white drop-shadow-sm"
                >
                  <path d="M4.151 12.114c0 .456.371.827.827.827s.827-.371.827-.827-.371-.827-.827-.827-.827.371-.827.827zm14.844 0c0 .456.371.827.827.827s.827-.371.827-.827-.371-.827-.827-.827-.827.371-.827.827zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.714-3.272C6.034 8.404 7.515 8 9.143 8c.714 0 1.429.143 2.143.286.357.071.714.143 1.071.143s.714-.071 1.071-.143C14.143 8.143 14.857 8 15.571 8c1.628 0 3.109.404 4.429.728C20.456 9.725 20.714 10.832 20.714 12c0 4.411-3.589 8-8 8z"/>
                  <path d="M8.5 14.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm4 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5z"/>
                </svg>
              </div>
              {/* Animated paw prints around logo */}
              <div className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse">
                🐾
              </div>
            </div>
            
            {/* Enhanced Text with Better Spacing */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl font-bold text-gray-900 leading-tight truncate">
                {APP_CONFIG.name}
              </h1>
              <p className="text-xs text-gray-500 leading-tight mt-1">
                {APP_CONFIG.tagline}
              </p>
            </div>
          </div>
          
          {/* Close Button with Better Positioning */}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-110 ml-2 flex-shrink-0"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <Navigation onItemClick={isMobile ? onClose : undefined} />
        </div>

        {/* Quick Stats with Real Photo Background */}
        <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover-lift animate-fadeInUp delay-700 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 right-2 text-4xl animate-float">🐕</div>
            <div className="absolute bottom-2 left-2 text-3xl animate-float delay-1000">🐱</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Our Impact</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between animate-fadeIn delay-1000">
                <span className="text-gray-600">Dogs Sterilized:</span>
                <span className="font-semibold text-blue-600 animate-pulse">{APP_CONFIG.stats.dogsSterilized}</span>
              </div>
              <div className="flex justify-between animate-fadeIn delay-1000">
                <span className="text-gray-600">Vaccinations:</span>
                <span className="font-semibold text-green-600 animate-pulse">{APP_CONFIG.stats.vaccinations}</span>
              </div>
              <div className="flex justify-between animate-fadeIn delay-1000">
                <span className="text-gray-600">Daily Feeding:</span>
                <span className="font-semibold text-orange-600 animate-pulse">{APP_CONFIG.stats.dailyFeeding}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action with Enhanced Design */}
        <div className="mb-6 p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-green-200 hover-lift animate-fadeInUp delay-1000 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
          
          <div className="relative z-10">
            <h3 className="font-semibold text-gray-900 mb-2">Support Our Mission</h3>
            <p className="text-sm text-gray-600 mb-4">No government funding - we depend on supporters like you</p>
            <DonationButton 
              variant="primary" 
              size="sm" 
              purpose="Donate Now"
              className="w-full"
            />
          </div>
        </div>

        {/* Contact Info with Better Styling */}
        <div className="pt-4 border-t border-gray-200 animate-fadeInUp delay-1000">
          <p className="text-xs text-gray-500 mb-2">Follow our work:</p>
          <a 
            href={`https://instagram.com/${APP_CONFIG.contact.instagram.replace('@', '')}`}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300 hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">📱</span>
            {APP_CONFIG.contact.instagram}
          </a>
          <p className="text-xs text-gray-500 mt-2 flex items-center">
            <span className="mr-1">📍</span>
            {APP_CONFIG.contact.location}
          </p>
        </div>
      </div>
    </aside>
  )
}