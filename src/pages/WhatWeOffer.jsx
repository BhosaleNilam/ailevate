import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceCategories = [
  {
    icon: "🟢",
    title: "Lead Generation & Sales Automations",
    color: "from-teal-500/30 to-cyan-600/30",
    borderColor: "border-teal-500/20",
    iconBg: "bg-teal-500/20",
    services: [
      {
        title: "Multi-Source Lead Capture & Routing",
        description: "Auto-capture from website, Facebook, Google, or forms and route to the right CRM or rep in real time."
      },
      {
        title: "Instant Follow-Up Sequences",
        description: "Personalized SMS, email, or voicemail drops triggered the moment a lead comes in."
      },
      {
        title: "Missed Call Recovery Flows",
        description: "Text-back automation plus calendar link. Lead lost becomes lead booked."
      },
      {
        title: "Cold Lead Reactivation Campaigns",
        description: "Smart, AI-sequenced messages that bring dead leads back to life — without lifting a finger."
      },
      {
        title: "Lead Scoring & Qualification",
        description: "Auto-score leads based on engagement, source, and behavior to prioritize follow-up."
      },
      {
        title: "Smart Lead Assignment",
        description: "Automatically assign leads based on region, product interest, or availability."
      }
    ]
  },
  {
    icon: "🔵",
    title: "Pipeline & Deal Flow Automation",
    color: "from-cyan-500/30 to-blue-600/30",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
    services: [
      {
        title: "Sales Stage Progression Automation",
        description: "Automatically update deal stages, tasks, and tags based on lead actions or team input."
      },
      {
        title: "CRM Field Enrichment",
        description: "Pull extra data from emails, forms, or external tools and enrich lead profiles on the fly."
      },
      {
        title: "Deal Forecasting Alerts",
        description: "Trigger alerts when high-value deals are idle, stuck, or ready to close."
      },
      {
        title: "Lost Deal Feedback Loop",
        description: "Auto-tag lost deals, trigger survey/follow-up, and collect insights for your team."
      }
    ]
  },
  {
    icon: "🟣",
    title: "Internal Operations & Team Workflows",
    color: "from-blue-500/30 to-indigo-600/30",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/20",
    services: [
      {
        title: "Task Creation & Assignment",
        description: "Auto-generate tasks in project tools like ClickUp, Notion, Trello when a deal hits key stages."
      },
      {
        title: "Slack/Email Ops Alerts",
        description: "Notify sales, ops, or fulfillment teams when something critical happens — no delays."
      },
      {
        title: "Daily Ops Digest & Team Summary",
        description: "Automated daily briefing showing what's done, what's pending, and what needs attention."
      },
      {
        title: "Internal Escalation Triggers",
        description: "Automatically loop in a manager if SLAs or lead times are breached."
      },
      {
        title: "Client Milestone Tracking",
        description: "Track onboarding milestones and send internal nudges when things fall behind."
      }
    ]
  },
  {
    icon: "🟡",
    title: "Client-Facing Experiences",
    color: "from-teal-400/30 to-cyan-500/30",
    borderColor: "border-teal-400/20",
    iconBg: "bg-teal-400/20",
    services: [
      {
        title: "Appointment Booking + Reminders",
        description: "Auto-booking, prep content, rescheduling flows, reminders — fully handled."
      },
      {
        title: "Form Intake → CRM Mapping",
        description: "Form entries update CRM fields, trigger sequences, and assign reps."
      },
      {
        title: "Client Onboarding Sequences",
        description: "Send docs, contracts, onboarding content, access credentials — without the back-and-forth."
      },
      {
        title: "Client Renewal & Upsell Sequences",
        description: "Trigger smart reminders and offers based on contract date, usage, or feedback."
      },
      {
        title: "Post-Service Review Requests",
        description: "Request Google reviews or feedback based on timing and behavior — not just guesswork."
      }
    ]
  },
  {
    icon: "🔴",
    title: "Marketing & Content Automations",
    color: "from-cyan-400/30 to-blue-500/30",
    borderColor: "border-cyan-400/20",
    iconBg: "bg-cyan-400/20",
    services: [
      {
        title: "AI Content Publishing Triggers",
        description: "Auto-generate blog/social/email copy via OpenAI and schedule via Zapier or webhook."
      },
      {
        title: "Newsletter List Segmentation",
        description: "Automatically tag users by behavior and drop them into the right list or campaign."
      },
      {
        title: "Lead Magnet Delivery + Follow-Up",
        description: "Send gated content, track opens, and trigger nurture sequences — zero manual input."
      },
      {
        title: "UTM Tracking Injection",
        description: "Track source and campaign data automatically across lead journey."
      }
    ]
  }
];

export default function WhatWeOffer() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const servicesPerView = 2; // Number of services to show at once

  // Auto-advance slides every 5 seconds if autoplay is enabled
  React.useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentCategory((prev) => (prev + 1) % serviceCategories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  // Auto-scroll services every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      const currentServices = serviceCategories[currentCategory].services;
      setCurrentServiceIndex((prev) => 
        (prev + servicesPerView >= currentServices.length) ? 0 : prev + servicesPerView
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [currentCategory]);

  // Reset service index when category changes
  React.useEffect(() => {
    setCurrentServiceIndex(0);
  }, [currentCategory]);

  const nextCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % serviceCategories.length);
    setIsAutoPlay(false);
  };

  const prevCategory = () => {
    setCurrentCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        {/* Slideshow Section */}
        <div className="max-w-6xl mx-auto relative">
          {/* Description text */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
          >
            Comprehensive automation solutions to streamline your business operations
          </motion.p>

          {/* Navigation Buttons */}
          <button
            onClick={prevCategory}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all z-10 backdrop-blur-sm border border-slate-700/50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextCategory}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-all z-10 backdrop-blur-sm border border-slate-700/50"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Category Indicators */}
          <div className="flex justify-center gap-3 mb-12">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCategory(index);
                  setIsAutoPlay(false);
                  setCurrentServiceIndex(0);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentCategory
                    ? 'bg-teal-500 w-8'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Content Slideshow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${serviceCategories[currentCategory].color} p-8 md:p-12 rounded-2xl backdrop-blur-sm border ${serviceCategories[currentCategory].borderColor}`}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className={`text-4xl p-3 rounded-full ${serviceCategories[currentCategory].iconBg}`}>
                  {serviceCategories[currentCategory].icon}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {serviceCategories[currentCategory].title}
                </h2>
              </div>

              <div className="relative overflow-hidden">
                <motion.div
                  animate={{ y: -currentServiceIndex * 220 }} // Adjust this value based on your card height
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {serviceCategories[currentCategory].services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className={`bg-slate-900/50 p-6 rounded-xl border ${serviceCategories[currentCategory].borderColor} backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10`}
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">✓</span>
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Service Navigation Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: Math.ceil(serviceCategories[currentCategory].services.length / servicesPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentServiceIndex(index * servicesPerView)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentServiceIndex / servicesPerView) === index
                        ? 'bg-teal-500 w-6'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't see the workflow you need?
            </h3>
            <p className="text-gray-400 mb-8">
              We build custom systems tailored to your exact process.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(45, 212, 191, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold text-lg hover:from-teal-400 hover:to-blue-500 transition-all shadow-lg hover:shadow-teal-500/25"
            >
              Talk to an Automation Architect
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 