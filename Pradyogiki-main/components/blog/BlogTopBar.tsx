'use client';
import { Search } from "lucide-react";
import BlogFilterDropdown from './BlogFilterDropdown';

interface BlogTopBarProps {
  search: string;
  setSearch: (search: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

export default function BlogTopBar({ search, setSearch, sortBy, setSortBy }: BlogTopBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Search stories, rescue tales, adoption journeys..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <BlogFilterDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
}