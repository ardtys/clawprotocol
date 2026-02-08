'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScratchTrail {
  id: number;
  x: number;
  y: number;
  angle: number;
}

export default function ClawCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClawing, setIsClawing] = useState(false);
  const [trails, setTrails] = useState<ScratchTrail[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newPos = { x: e.clientX, y: e.clientY };
    setPosition(newPos);
    setIsVisible(true);

    // Create scratch trail when dragging
    if (isClawing) {
      const dx = newPos.x - lastPos.current.x;
      const dy = newPos.y - lastPos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 15) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const newTrail: ScratchTrail = {
          id: trailIdRef.current++,
          x: newPos.x,
          y: newPos.y,
          angle,
        };
        setTrails((prev) => [...prev.slice(-20), newTrail]);
        lastPos.current = newPos;
      }
    } else {
      lastPos.current = newPos;
    }
  }, [isClawing]);

  const handleMouseDown = useCallback(() => {
    setIsClawing(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClawing(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave]);

  // Clean up old trails
  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(-15));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Custom Claw Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isClawing ? 0.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        {/* Tri-line Claw Design */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-100 ${isClawing ? 'rotate-12' : ''}`}
        >
          {/* Three scratch lines */}
          <line
            x1="4"
            y1="2"
            x2="12"
            y2="22"
            stroke={isClawing ? '#FF0000' : '#E0E0E0'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            stroke={isClawing ? '#FF0000' : '#E0E0E0'}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="2"
            x2="12"
            y2="22"
            stroke={isClawing ? '#FF0000' : '#E0E0E0'}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Glow effect when clawing */}
          {isClawing && (
            <>
              <line
                x1="4"
                y1="2"
                x2="12"
                y2="22"
                stroke="#FF0000"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.3"
              />
              <line
                x1="12"
                y1="2"
                x2="12"
                y2="22"
                stroke="#FF0000"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.3"
              />
              <line
                x1="20"
                y1="2"
                x2="12"
                y2="22"
                stroke="#FF0000"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.3"
              />
            </>
          )}
        </svg>
      </motion.div>

      {/* Scratch Trail */}
      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className="fixed pointer-events-none z-[9999]"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              left: trail.x - 30,
              top: trail.y - 2,
              transform: `rotate(${trail.angle}deg)`,
            }}
          >
            <svg width="60" height="4" viewBox="0 0 60 4">
              <defs>
                <linearGradient id={`scratch-${trail.id}`} x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="30%" stopColor="#FF0000" />
                  <stop offset="70%" stopColor="#FF0000" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <rect
                x="0"
                y="1"
                width="60"
                height="2"
                fill={`url(#scratch-${trail.id})`}
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}
