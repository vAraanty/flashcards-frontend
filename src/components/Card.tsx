"use client";

import React from "react";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  hoverColor?: "blue" | "purple";
  className?: string;
};

export default function Card({ 
  children, 
  onClick, 
  hoverColor = "blue",
  className = ""
}: CardProps) {
  return (
    <div 
      className={`aspect-[3/2] w-full cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className={`w-full h-full bg-[#0a0a0a] rounded-xl 
        shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden
        border border-gray-800 hover:border-${hoverColor}-500/50 group`}>
        
        {children}
        
        {/* Decorative elements */}
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
          from-${hoverColor}-500 to-${hoverColor === "blue" ? "purple" : "blue"}-500 transform transition-transform duration-300 
          group-hover:scale-x-100 scale-x-0`} />
        
        <div className={`absolute top-0 right-0 w-24 h-24 bg-${hoverColor}-500/10 rounded-full 
          transform translate-x-12 -translate-y-12 group-hover:translate-x-8 
          group-hover:-translate-y-8 transition-transform duration-700`} />
      </div>
    </div>
  );
} 
