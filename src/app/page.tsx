"use client";

import React from "react";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { FeaturedEvents } from "@/components/featured-events";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <CategoriesSection />
      <FeaturedEvents />
      <FloatingActionButton />
    </div>
  );
}
