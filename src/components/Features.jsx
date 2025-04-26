import React from 'react';
import { FaRocket, FaShieldAlt, FaChartLine, FaCode, FaUsers, FaLock } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <FaRocket className="text-white text-xl" />,
      title: "Fast Performance",
      description: "Our platform is built for speed, ensuring your AI applications run smoothly and efficiently."
    },
    {
      icon: <FaShieldAlt className="text-white text-xl" />,
      title: "Enterprise Security",
      description: "Advanced security measures to protect your data and AI models at every level."
    },
    {
      icon: <FaChartLine className="text-white text-xl" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our comprehensive analytics and reporting tools."
    },
    {
      icon: <FaCode className="text-white text-xl" />,
      title: "Developer Friendly",
      description: "Built with developers in mind, featuring intuitive APIs and comprehensive documentation."
    },
    {
      icon: <FaUsers className="text-white text-xl" />,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that help your team work efficiently on AI projects."
    },
    {
      icon: <FaLock className="text-white text-xl" />,
      title: "Data Privacy",
      description: "Your data privacy is our priority with built-in compliance and protection features."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-sky-400">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI platform provides everything you need to build, deploy, and scale your AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 