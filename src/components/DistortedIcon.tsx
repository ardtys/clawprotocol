'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
import { motion } from 'framer-motion';

interface DistortedIconProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function DistortedIcon({
  icon: Icon,
  className = '',
  size = 24,
  strokeWidth = 1.5,
}: DistortedIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Icon */}
      <motion.div
        className="relative z-10"
        animate={isHovered ? {
          filter: [
            'none',
            'url(#distortion)',
            'none',
          ],
        } : {}}
        transition={{ duration: 0.3 }}
      >
        <Icon width={size} height={size} strokeWidth={strokeWidth} />
      </motion.div>

      {/* Glitch Layers */}
      {isHovered && (
        <>
          {/* Red Layer */}
          <motion.div
            className="absolute inset-0 text-[#ff0000]"
            style={{ mixBlendMode: 'screen' }}
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0.5, 0],
              x: [-2, -1, -3, -1, -2],
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon width={size} height={size} strokeWidth={strokeWidth} />
          </motion.div>

          {/* Cyan Layer */}
          <motion.div
            className="absolute inset-0 text-[#00ffff]"
            style={{ mixBlendMode: 'screen' }}
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3, 0.5, 0],
              x: [2, 1, 3, 1, 2],
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon width={size} height={size} strokeWidth={strokeWidth} />
          </motion.div>
        </>
      )}

      {/* SVG Filter for distortion */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="distortion">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
