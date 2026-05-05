"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative py-8 bg-forge-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-forge-orange flex items-center justify-center">
              <span className="font-heading font-bold text-forge-black text-xs leading-none">F</span>
            </div>
            <span className="font-heading font-bold text-sm tracking-wider text-white uppercase">Forge</span>
            <span className="text-[10px] text-forge-silverDark ml-2">© 2025 All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] uppercase tracking-wider text-forge-silverDark hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] uppercase tracking-wider text-forge-silverDark hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[10px] uppercase tracking-wider text-forge-silverDark hover:text-white transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
