'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Layers, Database, FileText, Globe, ChevronRight } from 'lucide-react';

interface LegacyDataCardProps {
  onPeel: () => void;
}

export default function LegacyDataCard({ onPeel }: LegacyDataCardProps) {
  const [isPeeled, setIsPeeled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const scratchPoints = useRef<{ x: number; y: number }[]>([]);

  const peelProgress = useMotionValue(0);
  const rotateY = useTransform(peelProgress, [0, 1], [0, -90]);
  const scale = useTransform(peelProgress, [0, 0.5, 1], [1, 1.05, 0.8]);
  const opacity = useTransform(peelProgress, [0.7, 1], [1, 0]);

  const handleScratch = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (isPeeled) return;

    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    scratchPoints.current.push({ x, y });

    // Calculate coverage
    const gridSize = 20;
    const cols = Math.ceil(rect.width / gridSize);
    const rows = Math.ceil(rect.height / gridSize);
    const totalCells = cols * rows;

    const coveredCells = new Set<string>();
    scratchPoints.current.forEach((point) => {
      const col = Math.floor(point.x / gridSize);
      const row = Math.floor(point.y / gridSize);
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          coveredCells.add(`${col + dx},${row + dy}`);
        }
      }
    });

    const progress = Math.min(coveredCells.size / totalCells, 1);
    setScratchProgress(progress);

    // Trigger peel at 30% coverage
    if (progress >= 0.3 && !isPeeled) {
      setIsPeeled(true);
      animate(peelProgress, 1, {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
        onComplete: () => {
          onPeel();
        },
      });
    }
  }, [isPeeled, onPeel, peelProgress]);

  useEffect(() => {
    if (isPeeled) {
      const timer = setTimeout(() => {
        scratchPoints.current = [];
        setScratchProgress(0);
        setIsPeeled(false);
        peelProgress.set(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPeeled, peelProgress]);

  return (
    <div className="relative w-full max-w-lg perspective-1000">
      {/* Moltbook Archive UI (Underneath) */}
      <div className="absolute inset-0 bg-[var(--void)] border border-[var(--pulse)]/30 p-6">
        <div className="h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isPeeled ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 border border-[var(--pulse)] flex items-center justify-center
                          relative overflow-hidden">
              <Database className="w-8 h-8 text-[var(--pulse)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pulse)]/20 to-transparent" />
            </div>
            <h3 className="font-heading text-2xl text-[var(--fossil)] mb-2">
              Moltbook Archive
            </h3>
            <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">
              LEGACY DATA SUCCESSFULLY SHED
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--pulse)]/10 border border-[var(--pulse)]/30">
              <span className="font-mono text-xs text-[var(--pulse)]">
                ARCHIVE READY
              </span>
              <ChevronRight className="w-3 h-3 text-[var(--pulse)]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Legacy Data Card (Top Layer - Peelable) */}
      <motion.div
        ref={cardRef}
        className="relative bg-[var(--ash)] border border-[var(--smoke)] p-6
                 cursor-grab active:cursor-grabbing select-none torn-edge"
        style={{
          rotateY,
          scale,
          opacity,
          transformStyle: 'preserve-3d',
          transformOrigin: 'left center',
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => isDragging && handleScratch(e)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={(e) => isDragging && handleScratch(e)}
      >
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[var(--smoke)] flex items-center justify-center">
            <Layers className="w-5 h-5 text-[var(--fossil)]/50" />
          </div>
          <div>
            <h3 className="font-heading text-lg text-[var(--fossil)]">Legacy Data</h3>
            <p className="font-mono text-xs text-[var(--fossil)]/40">WEB 2.0 ARTIFACT</p>
          </div>
        </div>

        {/* Fake Legacy Content */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[var(--fossil)]/30" />
            <div className="flex-1 h-3 bg-[var(--smoke)] rounded-none" />
          </div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--fossil)]/30" />
            <div className="flex-1 h-3 bg-[var(--smoke)] rounded-none" style={{ width: '80%' }} />
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[var(--fossil)]/30" />
            <div className="flex-1 h-3 bg-[var(--smoke)] rounded-none" style={{ width: '60%' }} />
          </div>
        </div>

        {/* Instruction */}
        <div className="text-center py-4 border-t border-[var(--smoke)]">
          <p className="font-mono text-xs text-[var(--pulse)] animate-pulse">
            [ SCRATCH TO PEEL LEGACY SKIN ]
          </p>
          <div className="mt-2 h-1 bg-[var(--smoke)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--pulse)]"
              style={{ width: `${scratchProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Scratch Marks Overlay */}
        {scratchProgress > 0 && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {scratchPoints.current.slice(-50).map((point, i) => (
              <div
                key={i}
                className="absolute w-8 h-1 bg-[var(--pulse)]/30"
                style={{
                  left: point.x - 16,
                  top: point.y,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`,
                }}
              />
            ))}
          </div>
        )}

        {/* Corner Peel Indicator */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <div
            className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px]
                      border-t-[var(--pulse)]/20 border-r-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
