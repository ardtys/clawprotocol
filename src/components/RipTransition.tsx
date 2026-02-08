'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RipTransitionProps {
  isActive: boolean;
  onComplete?: () => void;
  children?: React.ReactNode;
}

export default function RipTransition({
  isActive,
  onComplete,
  children,
}: RipTransitionProps) {
  const [showContent, setShowContent] = useState(!isActive);

  useEffect(() => {
    if (!isActive) {
      setShowContent(true);
    }
  }, [isActive]);

  const handleAnimationComplete = () => {
    if (isActive) {
      setShowContent(false);
      onComplete?.();
    }
  };

  // Generate random tear points for more organic look
  const generateTearPath = (direction: 'left' | 'right') => {
    const points: string[] = [];
    const steps = 20;

    for (let i = 0; i <= steps; i++) {
      const y = (i / steps) * 100;
      const variance = Math.random() * 8 - 4; // -4 to 4
      const baseX = direction === 'left' ? 50 + variance : 50 - variance;
      points.push(`${baseX}% ${y}%`);
    }

    if (direction === 'left') {
      return `polygon(0% 0%, ${points.join(', ')}, 0% 100%)`;
    } else {
      return `polygon(100% 0%, ${points.join(', ')}, 100% 100%)`;
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rip Transition Overlay */}
      <AnimatePresence>
        {isActive && (
          <>
            {/* Left Tear */}
            <motion.div
              className="fixed inset-0 z-[9990] bg-[var(--void)]"
              initial={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
              animate={{ clipPath: 'polygon(0% 0%, -10% 0%, -10% 100%, 0% 100%)' }}
              exit={{ clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{
                clipPath: generateTearPath('left'),
              }}
              onAnimationComplete={handleAnimationComplete}
            >
              {/* Torn Edge Effect */}
              <div
                className="absolute right-0 top-0 bottom-0 w-4 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, var(--ash))',
                  filter: 'blur(2px)',
                }}
              />
            </motion.div>

            {/* Right Tear */}
            <motion.div
              className="fixed inset-0 z-[9990] bg-[var(--void)]"
              initial={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
              animate={{ clipPath: 'polygon(110% 0%, 100% 0%, 100% 100%, 110% 100%)' }}
              exit={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              style={{
                clipPath: generateTearPath('right'),
              }}
            >
              {/* Torn Edge Effect */}
              <div
                className="absolute left-0 top-0 bottom-0 w-4 pointer-events-none"
                style={{
                  background: 'linear-gradient(-90deg, transparent, var(--ash))',
                  filter: 'blur(2px)',
                }}
              />
            </motion.div>

            {/* Center Scratch Lines */}
            <motion.div
              className="fixed inset-0 z-[9995] pointer-events-none flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-[2px] bg-[var(--pulse)]"
                  style={{
                    top: `${30 + i * 10}%`,
                    transform: `rotate(${Math.random() * 4 - 2}deg)`,
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
