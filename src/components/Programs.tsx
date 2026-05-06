"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProgramCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  intensity: { label: string; color: string };
  tags: string[];
  icon: string;
  popular?: boolean;
}

function ProgramCard({ title, description, price, image, intensity, tags, icon, popular }: ProgramCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="relative bg-forge-gray overflow-hidden group cursor-pointer border border-white/5 hover:border-forge-orange/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,94,0,0.1)]"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale contrast-[1.2] transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-forge-gray via-forge-gray/50 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-forge-black/80 px-3 py-1.5 backdrop-blur-xs">
          <div className={`w-1.5 h-1.5 rounded-full ${intensity.color}`} />
          <span className="text-[9px] font-bold uppercase tracking-wider text-white">{intensity.label}</span>
        </div>
        {popular && (
          <div className="absolute top-4 right-4 bg-forge-orange px-3 py-1.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-forge-black">Most Popular</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Icon icon={icon} className="text-forge-orange" width="18" />
          <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">{title}</h3>
        </div>
        <p className="text-xs text-forge-silver leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] font-semibold uppercase tracking-wider bg-white/5 text-forge-silver px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <span className="font-heading text-2xl font-bold text-white">{price}</span>
            <span className="text-xs text-forge-silverDark ml-1">/month</span>
          </div>
          <Link href="#book" className="inline-flex items-center gap-1.5 text-forge-orange text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
            <span>Learn More</span>
            <Icon icon="lucide:arrow-right" width="14" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const programs = [
    {
      title: "Muscle Gain",
      description: "Progressive overload methodology. Compound movements + accessory isolation for maximum hypertrophy. 4-5 days/week split programming.",
      price: "$199",
      image: "https://picsum.photos/seed/forge-muscle/600/400.jpg",
      intensity: { label: "High Intensity", color: "bg-red-500" },
      tags: ["Hypertrophy", "Strength", "4-5 Days", "Nutrition Plan"],
      icon: "lucide:dumbbell",
    },
    {
      title: "Fat Loss",
      description: "Metabolic conditioning + strategic cardio protocol. Torch body fat while preserving lean muscle. Calibrated nutrition guidance included.",
      price: "$179",
      image: "https://picsum.photos/seed/forge-fatloss/600/400.jpg",
      intensity: { label: "Medium-High", color: "bg-forge-orange" },
      tags: ["HIIT", "MetCon", "3-5 Days", "Meal Prep"],
      icon: "lucide:flame",
      popular: true,
    },
    {
      title: "Total Fitness",
      description: "Balanced programming for overall health and vitality. Strength, mobility, endurance, and flexibility in one comprehensive package.",
      price: "$149",
      image: "https://picsum.photos/seed/forge-fitness/600/400.jpg",
      intensity: { label: "All Levels", color: "bg-green-500" },
      tags: ["Functional", "Mobility", "3-4 Days", "Lifestyle"],
      icon: "lucide:heart-pulse",
    },
  ];

  return (
    <section id="programs" className="relative py-20 md:py-28 bg-forge-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">Training Programs</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Train With<br />Purpose
            </h2>
          </div>
          <p className="text-sm text-forge-silver max-w-md leading-relaxed">
            Every program is engineered for results. No fluff, no gimmicks—just science-backed training methodologies delivered by world-class coaches.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {programs.map((prog, idx) => (
            <ProgramCard key={idx} {...prog} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "lucide:clock", label: "60-90 Min", sub: "Session Duration" },
            { icon: "lucide:users", label: "Max 8:1", sub: "Coach Ratio" },
            { icon: "lucide:scan-line", label: "InBody Scan", sub: "Monthly Assessment" },
            { icon: "lucide:salad", label: "Nutrition", sub: "Plan Included" },
          ].map((item, idx) => (
            <div key={idx} className="bg-forge-gray p-4 flex items-center gap-3 border border-white/5">
              <Icon icon={item.icon} className="text-forge-orange" width="20" />
              <div>
                <div className="text-xs font-bold text-white">{item.label}</div>
                <div className="text-[10px] text-forge-silverDark">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
