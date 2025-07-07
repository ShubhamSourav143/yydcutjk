'use client';
import Link from 'next/link';
import { Calendar, User, Eye, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  author: string;
  date: string;
  views: number;
}

export default function BlogCard({ id, title, description, image, tags, author, date, views }: BlogCardProps) {
  return (
    <article className="card hover-lift group h-full flex flex-col animate-fadeInUp">
      <div className="relative overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>
      
      <div className="card-body flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 2).map((tag, idx) => (
            <span 
              key={tag} 
              className={`px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full animate-fadeIn`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
              <User className="w-4 h-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{views}</span>
          </div>
        </div>
        
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg"
        >
          Read Story
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
}