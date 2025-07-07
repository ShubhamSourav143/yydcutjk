'use client';
import BlogCard from './BlogCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogGrid({ blogs }) {
  if (!blogs.length) {
    return (
      <div className="text-center text-gray-500 p-16 animate-fadeIn">
        <div className="animate-pulse">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
          <p>No stories yet—be the first to submit one!</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      <AnimatePresence mode="wait">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              delay: idx * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
          >
            <BlogCard {...blog} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}