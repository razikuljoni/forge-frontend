"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const scheduleData: Record<string, any[]> = {
  mon: [
    { time: '05:30', name: 'Morning Power Lift', coach: 'Marcus C.', level: 'Advanced', spots: 2 },
    { time: '07:00', name: 'HIIT MetCon', coach: 'Sarah K.', level: 'All Levels', spots: 5 },
    { time: '09:00', name: 'Functional Strength', coach: 'James R.', level: 'Intermediate', spots: 4 },
    { time: '12:00', name: 'Express Lunch HIIT', coach: 'Sarah K.', level: 'All Levels', spots: 6 },
    { time: '17:30', name: 'Hypertrophy Upper', coach: 'Marcus C.', level: 'Intermediate', spots: 3 },
    { time: '19:00', name: 'Olympic Lifting', coach: 'James R.', level: 'Advanced', spots: 2 },
    { time: '20:30', name: 'Mobility Flow', coach: 'Mia L.', level: 'All Levels', spots: 8 },
  ],
  tue: [
    { time: '06:00', name: 'Lower Body Blast', coach: 'Marcus C.', level: 'Intermediate', spots: 3 },
    { time: '08:00', name: 'Core & Conditioning', coach: 'Sarah K.', level: 'All Levels', spots: 6 },
    { time: '10:00', name: 'Yoga for Lifters', coach: 'Mia L.', level: 'All Levels', spots: 8 },
    { time: '17:00', name: 'Fat Furnace HIIT', coach: 'Sarah K.', level: 'Intermediate', spots: 4 },
    { time: '18:30', name: 'Power Building', coach: 'James R.', level: 'Advanced', spots: 2 },
    { time: '20:00', name: 'Recovery Stretch', coach: 'Mia L.', level: 'All Levels', spots: 10 },
  ],
  wed: [
    { time: '05:30', name: 'Push/Pull Strength', coach: 'Marcus C.', level: 'Advanced', spots: 2 },
    { time: '07:00', name: 'Total Body MetCon', coach: 'Sarah K.', level: 'All Levels', spots: 5 },
    { time: '09:30', name: 'Beginner Strength', coach: 'James R.', level: 'Beginner', spots: 8 },
    { time: '12:00', name: 'Express Lunch Burn', coach: 'Sarah K.', level: 'All Levels', spots: 6 },
    { time: '17:30', name: 'Hypertrophy Lower', coach: 'Marcus C.', level: 'Intermediate', spots: 3 },
    { time: '19:00', name: 'Athletic Performance', coach: 'James R.', level: 'Advanced', spots: 2 },
    { time: '20:30', name: 'Mobility & Recovery', coach: 'Mia L.', level: 'All Levels', spots: 8 },
  ],
  thu: [
    { time: '06:00', name: 'Upper Body Power', coach: 'Marcus C.', level: 'Intermediate', spots: 3 },
    { time: '08:00', name: 'Cardio Kickbox', coach: 'Sarah K.', level: 'All Levels', spots: 7 },
    { time: '10:00', name: 'Functional Movement', coach: 'Mia L.', level: 'Beginner', spots: 8 },
    { time: '17:00', name: 'HIIT Extreme', coach: 'Sarah K.', level: 'Advanced', spots: 2 },
    { time: '18:30', name: 'Olympic Technique', coach: 'James R.', level: 'Intermediate', spots: 4 },
    { time: '20:00', name: 'Deep Stretch', coach: 'Mia L.', level: 'All Levels', spots: 10 },
  ],
  fri: [
    { time: '05:30', name: 'Full Body Power', coach: 'Marcus C.', level: 'Advanced', spots: 2 },
    { time: '07:00', name: 'MetCon Friday', coach: 'Sarah K.', level: 'All Levels', spots: 6 },
    { time: '09:00', name: 'Strength Foundations', coach: 'James R.', level: 'Beginner', spots: 8 },
    { time: '12:00', name: 'Lunch Express', coach: 'Sarah K.', level: 'All Levels', spots: 5 },
    { time: '16:00', name: 'Team WOD', coach: 'All Coaches', level: 'All Levels', spots: 20 },
    { time: '18:00', name: 'Bodyweight Mastery', coach: 'Mia L.', level: 'Intermediate', spots: 6 },
  ],
  sat: [
    { time: '07:00', name: 'Weekend Warrior WOD', coach: 'Marcus C.', level: 'All Levels', spots: 12 },
    { time: '09:00', name: 'Strength Circuit', coach: 'James R.', level: 'Intermediate', spots: 6 },
    { time: '11:00', name: 'Community Workout', coach: 'All Coaches', level: 'All Levels', spots: 30 },
    { time: '13:00', name: 'Yoga & Recovery', coach: 'Mia L.', level: 'All Levels', spots: 15 },
  ],
  sun: [
    { time: '08:00', name: 'Active Recovery', coach: 'Mia L.', level: 'All Levels', spots: 10 },
    { time: '10:00', name: 'Open Gym', coach: 'On Duty', level: 'All Levels', spots: 20 },
    { time: '16:00', name: 'Sunday Stretch', coach: 'Mia L.', level: 'All Levels', spots: 12 },
  ],
};

const days = [
  { id: 'mon', label: 'Mon' },
  { id: 'tue', label: 'Tue' },
  { id: 'wed', label: 'Wed' },
  { id: 'thu', label: 'Thu' },
  { id: 'fri', label: 'Fri' },
  { id: 'sat', label: 'Sat' },
  { id: 'sun', label: 'Sun' },
];

function getLevelColor(level: string) {
  switch(level) {
    case 'Advanced': return 'bg-red-500/20 text-red-400';
    case 'Intermediate': return 'bg-forge-orange/20 text-forge-orange';
    case 'Beginner': return 'bg-green-500/20 text-green-400';
    default: return 'bg-white/10 text-forge-silver';
  }
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('mon');

  return (
    <section id="schedule" className="relative py-16 md:py-20 bg-forge-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="accent-line" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-forge-orange">Weekly Schedule</span>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {days.map((day) => (
            <button 
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-wider px-4 py-2 transition-all ${
                activeDay === day.id 
                ? 'bg-forge-orange text-forge-black' 
                : 'bg-forge-gray text-forge-silver hover:text-white'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {scheduleData[activeDay]?.map((item, idx) => (
            <div key={idx} className="bg-forge-gray p-4 border border-white/5 hover:border-forge-orange/30 transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading text-lg font-bold text-white">{item.time}</span>
                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 ${getLevelColor(item.level)}`}>
                  {item.level}
                </span>
              </div>
              <div className="text-sm font-semibold text-white mb-1 group-hover:text-forge-orange transition-colors">
                {item.name}
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                <span className="text-[10px] text-forge-silverDark">Coach: {item.coach}</span>
                <span className={`text-[10px] font-semibold ${item.spots <= 3 ? 'text-red-400' : 'text-forge-silver'}`}>
                  {item.spots} spots left
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
