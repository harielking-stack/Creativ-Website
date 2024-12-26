import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TeamMember from './TeamMember';

const team = [
  {
    name: 'Hari Prasanna.R',
    role: 'CEO & Founder',
    image: 'https://i.ibb.co/jrwCrs9/rb-78599.png',
    bio: 'With over 15 years of experience in digital transformation and software development.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'hari@creativtechie.com',
    },
  },
  {
    name: 'Vasantha Radhakrishnan',
    role: 'Creative Director',
    image: 'https://i.ibb.co/x3t8H8Q/rb-15044.png',
    bio: 'Award-winning designer with a passion for creating memorable brand experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'lisa@creativtechie.com',
    },
  },
  {
    name: 'James',
    role: 'Technical Lead',
    image: 'https://i.ibb.co/KXj6XjW/rb-7822.png',
    bio: 'Full-stack developer specializing in scalable cloud solutions and AI integration.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'james@creativtechie.com',
    },
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* About Us Header with Image */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center mb-16"
        >
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/0Kg2JpY/ryan-spaulding-L7-Vd4-Yitmw0-unsplash.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600">
            At CreativTechie, we are passionate about blending creativity and technology to deliver innovative digital solutions. As a premier digital marketing and SEO agency, we specialize in helping businesses establish a strong online presence, drive organic growth, and achieve measurable results. Our team of experts combines cutting-edge strategies, technical expertise, and a customer-first approach to provide tailored solutions that meet your unique goals. Whether it’s crafting a captivating website, optimizing for search engines, or designing impactful digital campaigns, CreativTechie is your trusted partner for success in the digital world.
            </p>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center mb-16"
        >
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/XtxC5D7/pexels-pixabay-355952.jpg"
              alt="Our Vision"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
            To become a global leader in digital innovation, empowering businesses of all sizes to thrive in the digital era. At CreativTechie, we envision a future where every business can harness the power of technology and creativity to achieve sustainable growth, enhanced brand visibility, and long-term success.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center mb-16"
        >
               <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/7t3zJ48/pexels-diva-plavalaguna-6147381.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full"
            />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
            Our mission is to deliver exceptional digital marketing and SEO services that help businesses connect with their target audience, grow their brand, and achieve outstanding results. 
            </p>
          </div>
     
        </motion.div>

        {/* Team Section */}
       
      </div>
    </section>
  );
};

export default About;
