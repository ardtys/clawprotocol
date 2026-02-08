'use client';

import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlitchButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
}

export default function GlitchButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: GlitchButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles = 'relative overflow-hidden font-mono text-sm transition-all claw-interactive';

  const variants = {
    primary: 'bg-[var(--pulse)] text-[var(--void)] border border-[var(--pulse)]',
    secondary: 'bg-transparent text-[var(--fossil)] border border-[var(--smoke)] hover:border-[var(--pulse)]',
    ghost: 'bg-transparent text-[var(--fossil)] border-none hover:text-[var(--pulse)]',
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{
        scale: isPressed ? 0.98 : 1,
        x: isHovered ? [0, -1, 1, -1, 0] : 0,
      }}
      transition={{
        scale: { duration: 0.1 },
        x: { duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 2 },
      }}
    >
      {/* Background Glitch Effect */}
      {isHovered && variant !== 'ghost' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Scan Lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-[1px] bg-[var(--void)]/20"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.05,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Content with potential glitch */}
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2 px-6 py-3"
        animate={isHovered ? {
          textShadow: [
            '0 0 0 transparent',
            '-2px 0 #00ffff, 2px 0 #ff0000',
            '0 0 0 transparent',
          ],
        } : {}}
        transition={{ duration: 0.15, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
      >
        {children}
      </motion.span>

      {/* Scratch Line on Hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--fossil)] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current opacity-50" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
    </motion.button>
  );
}
