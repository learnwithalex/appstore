import React from 'react'
export default function  RatingStars ({ rating = 0, percentage = 0 }) {
    return (
      <div className="flex items-center mt-4">
        <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
          {rating} star
        </a>
        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
          <div className="h-5 bg-yellow-300 rounded" style={{ width: percentage }}>
            {/* Percentage width is dynamic */}
          </div>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{percentage}%</span>
      </div>
    );
  };
  