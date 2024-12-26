import React from 'react';

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({ categories, activeFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-6 py-2 rounded-full transition-colors ${
          activeFilter === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeFilter === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;