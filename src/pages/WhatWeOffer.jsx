import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './WhatWeOffer.css'; // We'll create this CSS file next

export const serviceCategories = [
  {
    title: "Lead Generation & Sales Automations",
    color: "cyan-400",
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
    title: "Pipeline & Deal Flow Automation",
    color: "blue-400",
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
    title: "Internal Operations & Team Workflows",
    color: "purple-400",
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
    title: "Client-Facing Experiences",
    color: "yellow-400",
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
    title: "Marketing & Content Automations",
    color: "pink-400",
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

export default function WhatWeOffer({ isEmbedded = false }) {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className={isEmbedded ? "" : "min-h-screen pt-28 pb-24"}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto relative">
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl"></div>
          </div>
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Solutions That Scale
              </span>
            </motion.div>
            <h1 className="heading-lg mb-6 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              What We Can Build for You
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Streamline your business operations with our comprehensive suite of automation tools
            </p>
          </motion.div>

          {/* All Categories Grid Layout */}
          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
                onHoverStart={() => setHoveredCategory(categoryIndex)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="relative"
              >
                {/* Category Header */}
                <motion.h2 
                  className={`text-4xl md:text-5xl font-bold mb-10 text-${category.color} pb-3 border-b border-${category.color}/20`}
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {category.title}
                </motion.h2>

                {/* Category Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={`${categoryIndex}-${serviceIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: serviceIndex * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      onHoverStart={() => setHoveredService(`${categoryIndex}-${serviceIndex}`)}
                      onHoverEnd={() => setHoveredService(null)}
                      className={`relative p-6 rounded-xl transition-all duration-300
                        ${hoveredService === `${categoryIndex}-${serviceIndex}`
                          ? 'bg-white/[0.1] border-white/20'
                          : 'bg-white/[0.05] border-white/10'
                        }
                        hover:shadow-xl
                        border backdrop-blur-sm ${
                          category.color === 'cyan-400' ? 'hover:shadow-cyan-400/5' :
                          category.color === 'blue-400' ? 'hover:shadow-blue-400/5' :
                          category.color === 'purple-400' ? 'hover:shadow-purple-400/5' :
                          category.color === 'yellow-400' ? 'hover:shadow-yellow-400/5' :
                          'hover:shadow-pink-400/5'
                        }`}
                    >
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-3">
                        <span className={`flex items-center justify-center w-6 h-6 rounded-full ${
                          category.color === 'cyan-400' ? 'bg-cyan-400/20 text-cyan-400' :
                          category.color === 'blue-400' ? 'bg-blue-400/20 text-blue-400' :
                          category.color === 'purple-400' ? 'bg-purple-400/20 text-purple-400' :
                          category.color === 'yellow-400' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-pink-400/20 text-pink-400'
                        }`}>✓</span>
                        {service.title}
                      </h3>
                      <p className="text-slate-400">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 text-center px-8 py-10 rounded-2xl glass-card bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-lg border border-indigo-500/20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 backdrop-blur-sm"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Custom Solutions
              </span>
            </motion.div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
              Don't see the workflow you need?
            </h3>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              We build custom systems tailored to your exact process.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px 5px rgba(99, 102, 241, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all duration-300"
            >
              Talk to an Automation Architect
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 