import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Rajiv Sunder.R',
    role: 'CEO',
    company: 'TechStart Inc.',
    testimonial: "CreativTechie transformed our digital presence completely. Their team's expertise in both design and development is exceptional.",
    image: 'https://img.icons8.com/pulsar-gradient/48/user.png',
  },
  {
    name: 'Dumas Selsiya',
    role: 'Designing Director',
    company: 'GlobalTech',
    testimonial: "The ROI we've seen from their digital marketing strategies has been remarkable. They truly understand modern marketing.",
    image: 'https://img.icons8.com/pulsar-gradient/48/user.png',
  },
  {
    name: 'Vasantha Rathakrishnan',
    role: 'Product Manager',
    company: 'InnovateCo',
    testimonial: 'Their software development team delivered our project ahead of schedule and exceeded all expectations.',
    image: 'https://img.icons8.com/pulsar-gradient/48/user.png',
  },
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;