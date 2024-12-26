import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile app for tracking workouts and nutrition with AI recommendations.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=2070',
    tags: ['React Native', 'Firebase', 'TensorFlow'],
    category: 'Mobile',
    liveUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing and management system with virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2070',
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
    category: 'Web Development',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'Advanced AI-powered platform for generating marketing content.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    tags: ['Python', 'TensorFlow', 'React'],
    category: 'AI/ML',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
    tags: ['React', 'D3.js', 'Node.js'],
    category: 'Analytics',
    liveUrl: '#',
  },
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2070',
    tags: ['Web3.js', 'React', 'Solidity'],
    category: 'Blockchain',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const categories = [...new Set(projects.map((project) => project.category))];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <ProjectFilters
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;