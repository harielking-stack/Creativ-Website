import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, role, company, testimonial, image }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-lg relative"
    >
      <Quote className="w-8 h-8 text-blue-100 absolute top-6 left-6" />
      <div className="relative z-10">
        <p className="text-gray-600 mb-6 italic">{testimonial}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;