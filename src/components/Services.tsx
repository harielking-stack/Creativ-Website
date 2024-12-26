import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Palette, 
  Megaphone, 
  Database, 
  Smartphone, 
  Cloud, 
  ShoppingCart, 
  Search, 
  Settings, 
  Repeat, 
  Globe, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance digital experiences.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence.',
  },
  {
    icon: Database,
    title: 'Software Development',
    description: 'Scalable software solutions tailored to your business needs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure and deployment services.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Robust online stores with seamless shopping experiences.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and organic visibility.',
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Expert advice to streamline your IT strategies and operations.',
  },
  {
    icon: Repeat,
    title: 'DevOps Solutions',
    description: 'Automation and continuous integration for agile development.',
  },
  {
    icon: Globe,
    title: 'Global Expansion Strategy',
    description: 'Tailored solutions to expand your business into international markets.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Services',
    description: 'Comprehensive protection for your digital assets and sensitive information.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business
            thrive in the modern world.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
