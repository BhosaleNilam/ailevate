import React from 'react';
import { motion } from 'framer-motion';

// Import logo images 
import slackLogo from '../assets/logos/slack.svg';
import googleDriveLogo from '../assets/logos/google-drive.svg';
import microsoftTeamsLogo from '../assets/logos/microsoft-teams.svg';
import discordLogo from '../assets/logos/discord.svg';
import notionLogo from '../assets/logos/notion.svg';
import airtableLogo from '../assets/logos/airtable.svg';
import twilioLogo from '../assets/logos/twilio.svg';
import asanaLogo from '../assets/logos/asana.svg';
import jiraLogo from '../assets/logos/jira-software.svg';
import zendeskLogo from '../assets/logos/zendesk.svg';
import stripeLogo from '../assets/logos/stripe.svg';
import shopifyLogo from '../assets/logos/shopify.svg';
import trelloLogo from '../assets/logos/trello.svg';
import githubLogo from '../assets/logos/github.svg';
import salesforceLogo from '../assets/logos/salesforce.svg';
import dropboxLogo from '../assets/logos/dropbox.svg';
import hubspotLogo from '../assets/logos/hubspot.svg';
import mailchimpLogo from '../assets/logos/mailchimp.svg';
import twitterLogo from '../assets/logos/twitter.svg';
import awsS3Logo from '../assets/logos/aws-s3.svg';
import mysqlLogo from '../assets/logos/mysql.svg';
import postgresLogo from '../assets/logos/postgres.svg';
import mongodbLogo from '../assets/logos/mongodb.svg';
import googleSheetsLogo from '../assets/logos/google-sheets.svg';
import telegramLogo from '../assets/logos/telegram.svg';
import googleCalendarLogo from '../assets/logos/google-calendar.svg';
import httpRequestLogo from '../assets/logos/http-request.svg';
import clickupLogo from '../assets/logos/clickup.svg';
import todoistLogo from '../assets/logos/todoist.svg';
import pipedriveLogo from '../assets/logos/pipedrive.svg';
import nextcloudLogo from '../assets/logos/nextcloud.svg';
import outlookLogo from '../assets/logos/microsoft-outlook.svg';
import mattermostLogo from '../assets/logos/mattermost.svg';
import facebookLogo from '../assets/logos/facebook-graph-api.svg';
import woocommerceLogo from '../assets/logos/woocommerce.svg';
import nocodbLogo from '../assets/logos/nocodb.svg';
import googleDocsLogo from '../assets/logos/google-docs.svg';
import activecampaignLogo from '../assets/logos/activecampaign.svg';
import mqttLogo from '../assets/logos/mqtt.svg';
import homeAssistantLogo from '../assets/logos/home-assistant.svg';
import whatsappLogo from '../assets/logos/whatsapp-business-cloud.svg';
import rabbitmqLogo from '../assets/logos/rabbitmq.svg';
import supabaseLogo from '../assets/logos/supabase.svg';
import rocketchatLogo from '../assets/logos/rocketchat.svg';
import thehiveLogo from '../assets/logos/thehive.svg';
import mailgunLogo from '../assets/logos/mailgun.svg';
import redditLogo from '../assets/logos/reddit.svg';
import wordpressLogo from '../assets/logos/wordpress.svg';
import mailjetLogo from '../assets/logos/mailjet.svg';
import elasticsearchLogo from '../assets/logos/elasticsearch.svg';
import googleBigqueryLogo from '../assets/logos/google-bigquery.svg';
import microsoftExcelLogo from '../assets/logos/microsoft-excel.svg';
import mondayLogo from '../assets/logos/mondaycom.svg';
import awsLambdaLogo from '../assets/logos/aws-lambda.svg';
import kafkaLogo from '../assets/logos/kafka.svg';
import onedriveLogo from '../assets/logos/microsoft-onedrive.svg';
import microsoftSqlLogo from '../assets/logos/microsoft-sql.svg';
import redisLogo from '../assets/logos/redis.svg';

const IntegrationLogos = () => {
  // First row of logos
  const logos1 = [
    { id: 1, src: slackLogo, name: 'Slack' },
    { id: 2, src: googleDriveLogo, name: 'Google Drive' },
    { id: 3, src: microsoftTeamsLogo, name: 'Microsoft Teams' },
    { id: 4, src: stripeLogo, name: 'Stripe' },
    { id: 5, src: notionLogo, name: 'Notion' },
    { id: 6, src: discordLogo, name: 'Discord' },
    { id: 7, src: airtableLogo, name: 'Airtable' },
    { id: 8, src: salesforceLogo, name: 'Salesforce' },
    { id: 9, src: twilioLogo, name: 'Twilio' },
    { id: 10, src: asanaLogo, name: 'Asana' },
    { id: 11, src: jiraLogo, name: 'Jira' },
    { id: 12, src: zendeskLogo, name: 'Zendesk' },
    { id: 13, src: shopifyLogo, name: 'Shopify' },
    { id: 14, src: trelloLogo, name: 'Trello' },
    { id: 15, src: githubLogo, name: 'GitHub' },
    { id: 16, src: dropboxLogo, name: 'Dropbox' },
    { id: 17, src: hubspotLogo, name: 'HubSpot' },
    { id: 18, src: mailchimpLogo, name: 'Mailchimp' },
    { id: 19, src: twitterLogo, name: 'Twitter' },
    { id: 20, src: awsS3Logo, name: 'AWS S3' },
    { id: 21, src: mysqlLogo, name: 'MySQL' },
    { id: 22, src: postgresLogo, name: 'PostgreSQL' },
    { id: 23, src: mongodbLogo, name: 'MongoDB' },
    { id: 24, src: googleSheetsLogo, name: 'Google Sheets' },
    { id: 25, src: telegramLogo, name: 'Telegram' },
    { id: 26, src: googleCalendarLogo, name: 'Google Calendar' },
    { id: 27, src: httpRequestLogo, name: 'HTTP Request' },
    { id: 28, src: clickupLogo, name: 'ClickUp' },
    { id: 29, src: todoistLogo, name: 'Todoist' },
    { id: 30, src: pipedriveLogo, name: 'Pipedrive' },
  ];

  // Second row of logos (different order for visual variety)
  const logos2 = [
    { id: 31, src: nextcloudLogo, name: 'Nextcloud' },
    { id: 32, src: outlookLogo, name: 'Microsoft Outlook' },
    { id: 33, src: mattermostLogo, name: 'Mattermost' },
    { id: 34, src: facebookLogo, name: 'Facebook' },
    { id: 35, src: woocommerceLogo, name: 'WooCommerce' },
    { id: 36, src: nocodbLogo, name: 'NocoDB' },
    { id: 37, src: googleDocsLogo, name: 'Google Docs' },
    { id: 38, src: activecampaignLogo, name: 'ActiveCampaign' },
    { id: 39, src: mqttLogo, name: 'MQTT' },
    { id: 40, src: homeAssistantLogo, name: 'Home Assistant' },
    { id: 41, src: whatsappLogo, name: 'WhatsApp Business' },
    { id: 42, src: rabbitmqLogo, name: 'RabbitMQ' },
    { id: 43, src: supabaseLogo, name: 'Supabase' },
    { id: 44, src: rocketchatLogo, name: 'Rocket.Chat' },
    { id: 45, src: thehiveLogo, name: 'TheHive' },
    { id: 46, src: mailgunLogo, name: 'Mailgun' },
    { id: 47, src: redditLogo, name: 'Reddit' },
    { id: 48, src: wordpressLogo, name: 'WordPress' },
    { id: 49, src: mailjetLogo, name: 'Mailjet' },
    { id: 50, src: elasticsearchLogo, name: 'Elasticsearch' },
    { id: 51, src: googleBigqueryLogo, name: 'Google BigQuery' },
    { id: 52, src: microsoftExcelLogo, name: 'Microsoft Excel' },
    { id: 53, src: mondayLogo, name: 'Monday.com' },
    { id: 54, src: awsLambdaLogo, name: 'AWS Lambda' },
    { id: 55, src: kafkaLogo, name: 'Kafka' },
    { id: 56, src: onedriveLogo, name: 'Microsoft OneDrive' },
    { id: 57, src: mysqlLogo, name: 'MySQL' },
    { id: 58, src: microsoftSqlLogo, name: 'Microsoft SQL' },
    { id: 59, src: redisLogo, name: 'Redis' },
    { id: 60, src: discordLogo, name: 'Discord' },
  ];

  const renderLogo = (logo) => (
    <div 
      key={logo.id} 
      className="flex-shrink-0 mx-3 my-3 bg-slate-800/60 rounded-xl p-4 backdrop-blur-sm border border-slate-700/50 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-slate-700/70 hover:border-slate-600/70 hover:shadow-lg hover:shadow-slate-900/30"
      title={logo.name}
    >
      <img 
        src={logo.src} 
        alt={logo.name} 
        className="w-9 h-9 object-contain transition-transform duration-300 hover:scale-110" 
      />
    </div>
  );

  return (
    <div className="overflow-hidden py-20 relative bg-slate-900/60 backdrop-blur-lg border-t border-b border-slate-800/50">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-teal-500/15 to-cyan-500/15 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/15 to-indigo-500/15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-teal-500/5 via-blue-500/5 to-purple-500/5 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div 
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Powerful Integrations
            </span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Plug AI into your own data & over 400 integrations
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connect to all your favorite tools and platforms with our seamless integration ecosystem
          </motion.p>
        </div>
        
        {/* First row - marquee animation */}
        <div className="relative overflow-hidden my-6">
          <motion.div 
            className="flex whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity,
              duration: 80,
              ease: "linear"
            }}
          >
            {/* Duplicate logos to create the infinite effect */}
            {[...logos1, ...logos1].map(renderLogo)}
          </motion.div>
        </div>
        
        {/* Second row - marquee animation going the opposite direction */}
        <div className="relative overflow-hidden my-6">
          <motion.div 
            className="flex whitespace-nowrap"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ 
              repeat: Infinity,
              duration: 70, // Slightly different speed for visual variety
              ease: "linear"
            }}
          >
            {/* Duplicate logos to create the infinite effect */}
            {[...logos2, ...logos2].map(renderLogo)}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationLogos;