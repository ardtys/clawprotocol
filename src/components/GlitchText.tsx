'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function GlitchText({
  children,
  className = '',
  as: Tag = 'span',
}: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Text */}
      <motion.span
        className="relative z-10"
        animate={isHovered ? {
          x: [0, -2, 2, -1, 1, 0],
          y: [0, 1, -1, 0],
        } : {}}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        {children}
      </motion.span>

      {/* Red Layer */}
      <motion.span
        className="absolute top-0 left-0 text-[#ff0000] select-none pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
        initial={{ opacity: 0, x: 0 }}
        animate={isHovered ? {
          opacity: [0, 0.7, 0.5, 0.7, 0],
          x: [-3, -2, -4, -2, -3],
        } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        {children}
      </motion.span>

      {/* Cyan Layer */}
      <motion.span
        className="absolute top-0 left-0 text-[#00ffff] select-none pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
        initial={{ opacity: 0, x: 0 }}
        animate={isHovered ? {
          opacity: [0, 0.7, 0.5, 0.7, 0],
          x: [3, 2, 4, 2, 3],
        } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
      >
        {children}
      </motion.span>

      {/* Scratch Line */}
      {isHovered && (
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-[var(--pulse)]"
          style={{ top: '50%' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Tag>
  );
}
