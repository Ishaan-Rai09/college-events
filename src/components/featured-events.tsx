"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { sampleEvents } from '@/data/events';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function FeaturedEvents() {
  // Get featured events (those with special badges)
  const featuredEvents = sampleEvents.filter(
    event => event.isHot || event.isNew || event.registrationClosingSoon
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getBadgeVariant = (event: any) => {
    if (event.isHot) return { text: 'HOT', className: 'bg-red-500 hover:bg-red-600' };
    if (event.isNew) return { text: 'NEW', className: 'bg-green-500 hover:bg-green-600' };
    if (event.registrationClosingSoon) return { text: 'CLOSING SOON', className: 'bg-orange-500 hover:bg-orange-600' };
    return null;
  };

  if (featuredEvents.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't miss these trending and time-sensitive events happening soon
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredEvents.map((event, index) => {
            const badge = getBadgeVariant(event);
            
            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="h-full glass-dark border-white/10 hover:border-white/30 transition-all duration-300 hover:glow overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Badge */}
                    {badge && (
                      <Badge className={`absolute top-4 right-4 ${badge.className} text-white font-semibold`}>
                        {badge.text}
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-white group-hover:neon-text transition-all duration-300 line-clamp-2">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-4">
                    {/* Event Description */}
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-300">
                        <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        {event.time}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                        {event.location}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {event.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {event.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                          +{event.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        asChild
                        className="w-full bg-gradient-to-r from-cyan-400/20 to-violet-600/20 text-white border border-cyan-400/30 hover:from-cyan-400/30 hover:to-violet-600/30 hover:border-cyan-400/50 transition-all duration-300 group"
                        variant="outline"
                      >
                        <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                          Register Now
                          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/events/technical">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-violet-600 text-white hover:from-cyan-500 hover:to-violet-700 transform hover:scale-105 transition-all duration-200"
            >
              View All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
