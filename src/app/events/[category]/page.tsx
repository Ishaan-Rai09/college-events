"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useParams } from 'next/navigation';
import { categories, clubs } from '@/data/events';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryEventsPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const [searchTerm, setSearchTerm] = useState('');

  const category = categories.find(cat => cat.id === categoryId);
  const categoryClubs = clubs.filter(club => club.category === categoryId);

  if (!category) {
    return (
      <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-300 mb-8">The requested category does not exist.</p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-cyan-400 to-violet-600 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Filter clubs and events based on search
  const filteredClubs = categoryClubs.filter(club => 
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.events.some(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
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

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold neon-text mb-4">
            {category.name} Events
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12 max-w-md mx-auto"
        >
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search events, clubs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
          />
        </motion.div>

        {/* Clubs and Events */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {filteredClubs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No clubs or events found matching your search.</p>
            </div>
          ) : (
            filteredClubs.map((club) => (
              <motion.div
                key={club.id}
                variants={cardVariants}
                className="space-y-6"
              >
                {/* Club Header */}
                <Card className="glass-dark border-white/20 hover:border-white/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={club.image}
                          alt={club.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          {club.name}
                        </CardTitle>
                        <CardDescription className="text-gray-300 text-base">
                          {club.description}
                        </CardDescription>
                        <div className="flex items-center mt-2 text-sm text-gray-400">
                          <Users className="w-4 h-4 mr-1" />
                          {club.events.length} event{club.events.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Club Events */}
                {club.events.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-4 border-l-2 border-white/10 pl-8">
                    {club.events.map((event) => (
                      <motion.div
                        key={event.id}
                        whileHover={{ scale: 1.02 }}
                        className="group"
                      >
                        <Card className="h-full glass-dark border-white/10 hover:border-white/30 transition-all duration-300 hover:glow overflow-hidden">
                          {/* Event Image */}
                          <div className="relative h-40 overflow-hidden">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            
                            {/* Badges */}
                            <div className="absolute top-3 right-3 flex flex-wrap gap-1">
                              {event.isHot && (
                                <Badge className="bg-red-500 text-white font-semibold">HOT</Badge>
                              )}
                              {event.isNew && (
                                <Badge className="bg-green-500 text-white font-semibold">NEW</Badge>
                              )}
                              {event.registrationClosingSoon && (
                                <Badge className="bg-orange-500 text-white font-semibold">CLOSING SOON</Badge>
                              )}
                            </div>
                          </div>

                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-bold text-white line-clamp-2">
                              {event.title}
                            </CardTitle>
                          </CardHeader>
                          
                          <CardContent className="pt-0 space-y-3">
                            <p className="text-gray-400 text-sm line-clamp-2">
                              {event.description}
                            </p>

                            {/* Event Details */}
                            <div className="space-y-2">
                              <div className="flex items-center text-sm text-gray-300">
                                <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                                {new Date(event.date).toLocaleDateString()}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-300">
                                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                                {event.time}
                              </div>
                              
                              <div className="flex items-center text-sm text-gray-300">
                                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                                <span className="line-clamp-1">{event.location}</span>
                              </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1">
                              {event.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                                >
                                  {tag}
                                </span>
                              ))}
                              {event.tags.length > 2 && (
                                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                                  +{event.tags.length - 2}
                                </span>
                              )}
                            </div>

                            {/* Register Button */}
                            <Button 
                              asChild
                              className="w-full bg-gradient-to-r from-cyan-400/20 to-violet-600/20 text-white border border-cyan-400/30 hover:from-cyan-400/30 hover:to-violet-600/30 hover:border-cyan-400/50 transition-all duration-300"
                              variant="outline"
                              size="sm"
                            >
                              <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                                Register Now
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}

                {club.events.length === 0 && (
                  <div className="ml-4 border-l-2 border-white/10 pl-8">
                    <p className="text-gray-400 text-center py-8">
                      No events scheduled for this club yet.
                    </p>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}
