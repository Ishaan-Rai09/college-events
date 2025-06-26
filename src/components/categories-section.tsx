"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/events';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  Code: Code,
  Palette: Palette,
  Trophy: Trophy,
};

export function CategoriesSection() {
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
            Event Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore diverse events tailored to your interests and skills
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="h-full glass-dark border-white/10 hover:border-white/30 transition-all duration-300 hover:glow">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-cyan-400/20 to-violet-600/20 rounded-full w-fit">
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-cyan-400 group-hover:text-violet-400 transition-colors duration-300" />
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:neon-text transition-all duration-300">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Club count */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Active Clubs</span>
                        <span className="text-white font-semibold">{category.clubs.length}</span>
                      </div>
                      
                      {/* Total events count */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Total Events</span>
                        <span className="text-white font-semibold">
                          {category.clubs.reduce((acc, club) => acc + club.events.length, 0)}
                        </span>
                      </div>

                      {/* Popular clubs preview */}
                      <div className="space-y-2">
                        <span className="text-gray-400 text-sm">Featured Clubs:</span>
                        <div className="flex flex-wrap gap-2">
                          {category.clubs.slice(0, 2).map((club) => (
                            <span
                              key={club.id}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                            >
                              {club.name}
                            </span>
                          ))}
                          {category.clubs.length > 2 && (
                            <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                              +{category.clubs.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link href={`/events/${category.id}`} className="block pt-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-cyan-400/20 to-violet-600/20 text-white border border-cyan-400/30 hover:from-cyan-400/30 hover:to-violet-600/30 hover:border-cyan-400/50 transition-all duration-300 group"
                          variant="outline"
                        >
                          Explore {category.name}
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
