'use client';

import { motion } from 'framer-motion';

interface EraToggleSliderProps {
  era: number;
  onEraChange: (era: number) => void;
}

const eraLabels = {
  1: { name: 'WEB 1.0', desc: 'Static Chaos' },
  2: { name: 'WEB 2.0', desc: 'Social Noise' },
  3: { name: 'WEB 3.0', desc: 'Decentralized' },
  4: { name: 'WEB 4.0', desc: 'Pure Archive' },
};

export default function EraToggleSlider({ era, onEraChange }: EraToggleSliderProps) {
  const steps = [1, 2, 3, 4];
  const currentEraInfo = eraLabels[era as keyof typeof eraLabels];

  return (
    <div className="w-full max-w-md">
      {/* Era Display */}
      <div className="flex justify-between items-center mb-4">
        <motion.div
          key={era}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading"
        >
          <span className="text-2xl font-bold text-[var(--fossil)]">
            {currentEraInfo.name}
          </span>
          <span className="ml-3 text-sm text-[var(--fossil)]/50 font-mono">
            {currentEraInfo.desc}
          </span>
        </motion.div>
        <span className="text-[var(--pulse)] font-mono text-sm">
          {era}.0
        </span>
      </div>

      {/* Slider Track */}
      <div className="relative h-2 bg-[var(--smoke)] rounded-none">
        {/* Progress Fill */}
        <motion.div
          className="absolute h-full bg-gradient-to-r from-[var(--pulse)]/50 to-[var(--pulse)]"
          initial={false}
          animate={{ width: `${((era - 1) / 3) * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* Step Markers */}
        <div className="absolute inset-0 flex justify-between items-center px-0">
          {steps.map((step) => (
            <button
              key={step}
              onClick={() => onEraChange(step)}
              className="relative group"
            >
              <motion.div
                className={`w-4 h-4 border-2 transition-colors duration-200 ${
                  step <= era
                    ? 'bg-[var(--pulse)] border-[var(--pulse)]'
                    : 'bg-[var(--void)] border-[var(--smoke)] hover:border-[var(--fossil)]/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              />

              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-[var(--ash)] border border-[var(--smoke)] px-2 py-1 whitespace-nowrap">
                  <span className="text-xs font-mono text-[var(--fossil)]">
                    {eraLabels[step as keyof typeof eraLabels].name}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Era Timeline Labels */}
      <div className="flex justify-between mt-2">
        {steps.map((step) => (
          <span
            key={step}
            className={`text-xs font-mono transition-colors duration-200 ${
              step === era ? 'text-[var(--pulse)]' : 'text-[var(--fossil)]/30'
            }`}
          >
            {step}.0
          </span>
        ))}
      </div>

      {/* Era Description Panel */}
      <motion.div
        key={`desc-${era}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="mt-6 p-4 bg-[var(--ash)]/50 border-l-2 border-[var(--pulse)]"
      >
        <div className="font-mono text-xs text-[var(--fossil)]/70 space-y-1">
          {era === 1 && (
            <>
              <p>{'>'} Maximum noise interference</p>
              <p>{'>'} Legacy data corruption visible</p>
              <p>{'>'} Static artifacts enabled</p>
            </>
          )}
          {era === 2 && (
            <>
              <p>{'>'} Social data streams active</p>
              <p>{'>'} Moderate noise filtering</p>
              <p>{'>'} Platform traces visible</p>
            </>
          )}
          {era === 3 && (
            <>
              <p>{'>'} Decentralized mode engaged</p>
              <p>{'>'} Minimal noise artifacts</p>
              <p>{'>'} Hash verification enabled</p>
            </>
          )}
          {era === 4 && (
            <>
              <p>{'>'} Pure archive state</p>
              <p>{'>'} Zero noise interference</p>
              <p>{'>'} Moltbook optimization: MAX</p>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
