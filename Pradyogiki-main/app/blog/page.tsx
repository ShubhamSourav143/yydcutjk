'use client';
import { useState, useEffect } from "react";
import BlogTopBar from "@/components/blog/BlogTopBar";
import TrendingChips from "@/components/blog/TrendingChips";
import BlogGrid from "@/components/blog/BlogGrid";
import { BLOGS } from "./blogs-data";
import { PlusCircle, Heart, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [sortBy, setSortBy] = useState('Latest');
  const [page, setPage] = useState(1);
  const blogsPerPage = 9;

  // Filtering and sorting
  let filteredBlogs = BLOGS.filter(b =>
    (search === '' || b.title.toLowerCase().includes(search.toLowerCase())) &&
    (activeTag === '' || b.tags.includes(activeTag))
  );
  
  if (sortBy === 'Latest') filteredBlogs = filteredBlogs.sort((a, b) => b.date.localeCompare(a.date));
  if (sortBy === 'Oldest') filteredBlogs = filteredBlogs.sort((a, b) => a.date.localeCompare(b.date));
  if (sortBy === 'Most Viewed') filteredBlogs = filteredBlogs.sort((a, b) => b.views - a.views);

  // Pagination
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const pagedBlogs = filteredBlogs.slice((page - 1) * blogsPerPage, page * blogsPerPage);

  // Reset to page 1 on search/filter change
  useEffect(() => { setPage(1); }, [search, activeTag, sortBy]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Stories of Hope & Healing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Every rescue, every recovery, every life saved has a story. Read about our animals, volunteers, and the impact we make together at IIT Kharagpur.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-blue-800 font-medium">
            📱 Follow our daily updates: @animal__welfare_iitkgp
          </p>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">460+</div>
          <div className="text-sm text-gray-600">Dogs Sterilized</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">3,000+</div>
          <div className="text-sm text-gray-600">Vaccinations Given</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Calendar className="w-6 h-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">6+</div>
          <div className="text-sm text-gray-600">Years of Service</div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">24/7</div>
          <div className="text-sm text-gray-600">Emergency Response</div>
        </div>
      </div>

      {/* Top Bar with Search and Filters */}
      <BlogTopBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Trending Tags */}
      <TrendingChips activeTag={activeTag} setActiveTag={setActiveTag} />

      {/* Featured Story */}
      {!search && !activeTag && (
        <div className="card bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
          <div className="card-body">
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mr-3">
                Featured Story
              </span>
              <span className="text-sm text-gray-600">Most Recent</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {BLOGS[0].title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {BLOGS[0].description}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{BLOGS[0].author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(BLOGS[0].date).toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{BLOGS[0].views} views</span>
                </div>
                <Link
                  href={`/blog/${BLOGS[0].id}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Story
                </Link>
              </div>
              <div>
                <img 
                  src={BLOGS[0].image} 
                  alt={BLOGS[0].title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Blog Button */}
      <div className="flex justify-end">
        <Link
          href="/blog/new"
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm"
        >
          <PlusCircle className="w-4 h-4 mr-2" />
          Share Your Story
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <BlogGrid blogs={pagedBlogs} />
        
        {/* Pagination */}
        {pageCount > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: pageCount }).map((_, idx) => (
              <button
                key={idx}
                className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                  page === idx + 1 
                    ? "bg-blue-600 text-white" 
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(pageCount, page + 1))}
              disabled={page === pageCount}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Be Part of Our Story</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Every volunteer, donor, and supporter becomes part of our mission. Your story of compassion could inspire others to join our cause.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog/new"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Share Your Experience
          </Link>
          <Link
            href="/help"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Join Our Mission
          </Link>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>📱 Follow our daily updates: @animal__welfare_iitkgp</p>
          <p>📞 24/7 Emergency Response • Registered NGO (2025)</p>
        </div>
      </div>
    </div>
  );
}