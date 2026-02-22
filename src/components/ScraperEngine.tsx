'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link2, ArrowRight, Check, Loader2 } from 'lucide-react';

interface ScrapedItem {
  id: string;
  originalUrl: string;
  hash: string;
  timestamp: Date;
}

interface ScraperEngineProps {
  onScrape: (item: ScrapedItem) => void;
}

// Generate a fake encrypted hash
function generateHash(url: string): string {
  const chars = 'abcdef0123456789';
  let hash = '0x';
  for (let i = 0; i < 40; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

export default function ScraperEngine({ onScrape }: ScraperEngineProps) {
  const [url, setUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || isProcessing) return;

    setIsProcessing(true);
    setShowTransition(true);

    // Simulate processing with scratch animation
    await new Promise((resolve) => setTimeout(resolve, 800));

    const hash = generateHash(url);
    setCurrentHash(hash);

    // Wait for scratch reveal
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsComplete(true);

    // Create scraped item
    const item: ScrapedItem = {
      id: crypto.randomUUID(),
      originalUrl: url,
      hash,
      timestamp: new Date(),
    };

    onScrape(item);

    // Reset after completion
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setUrl('');
    setIsProcessing(false);
    setShowTransition(false);
    setCurrentHash('');
    setIsComplete(false);
  }, [url, isProcessing, onScrape]);

  return (
    <div className="w-full max-w-2xl">
      {/* Main Container */}
      <div className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-[var(--pulse)] relative flex-shrink-0">
            <Link2 className="w-5 h-5 text-[var(--pulse)]" strokeWidth={1.5} />
            <div className="absolute inset-0 bg-[var(--pulse)]/10" />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--pulse)]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-heading text-2xl text-[var(--fossil)] mb-1">Scraper Engine</h2>
            <p className="font-mono text-xs text-[var(--fossil)]/50 flex items-center gap-2">
              <span className="text-[var(--pulse)]">INPUT</span>
              <span>WEB 2.0 DATA</span>
              <ArrowRight className="w-3 h-3" />
              <span className="text-[var(--pulse)]">OUTPUT</span>
              <span>ENCRYPTED ARCHIVE</span>
            </p>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative overflow-hidden">
            {/* URL Input */}
            <AnimatePresence mode="wait">
              {!showTransition ? (
                <motion.div
                  key="input"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://legacy.web2.url/data"
                    className="w-full bg-[var(--void)] border border-[var(--smoke)] px-4 py-4
                             font-mono text-sm text-[var(--fossil)] placeholder:text-[var(--fossil)]/30
                             focus:outline-none focus:border-[var(--pulse)] transition-colors
                             claw-interactive"
                    disabled={isProcessing}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="transition"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full bg-[var(--void)] border border-[var(--pulse)] px-4 py-4"
                >
                  {/* Scratch Animation Container */}
                  <div className="relative h-6 overflow-hidden">
                    {/* Original URL being scratched away */}
                    <motion.div
                      className="absolute inset-0 font-mono text-sm text-[var(--fossil)]/50"
                      animate={{
                        clipPath: isComplete
                          ? 'inset(0 0 0 100%)'
                          : 'inset(0 0 0 0)',
                      }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <span className="line-through decoration-[var(--pulse)]">
                        {url}
                      </span>
                    </motion.div>

                    {/* Scratch lines effect */}
                    {!isComplete && (
                      <motion.div
                        className="absolute inset-0 flex items-center"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.5, ease: 'linear' }}
                      >
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--pulse)] to-transparent" />
                      </motion.div>
                    )}

                    {/* Hash reveal */}
                    <motion.div
                      className="absolute inset-0 font-mono text-sm text-[var(--pulse)] flex items-center"
                      initial={{ clipPath: 'inset(0 100% 0 0)' }}
                      animate={{
                        clipPath: isComplete
                          ? 'inset(0 0 0 0)'
                          : 'inset(0 100% 0 0)',
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
                    >
                      {currentHash}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Decorative scratch marks */}
            <div className="absolute -bottom-1 left-0 right-0 h-px">
              <div className="absolute left-[10%] w-16 h-px bg-[var(--pulse)]/20" />
              <div className="absolute left-[40%] w-8 h-px bg-[var(--pulse)]/30" />
              <div className="absolute right-[20%] w-12 h-px bg-[var(--pulse)]/15" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!url.trim() || isProcessing}
            className="w-full mt-4 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                     hover:bg-[var(--pulse)]/90 disabled:bg-[var(--smoke)] disabled:text-[var(--fossil)]/30
                     transition-all claw-interactive"
          >
            <span className="flex items-center justify-center gap-3 font-mono text-sm font-medium">
              {isProcessing ? (
                <>
                  {isComplete ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  )}
                  <span>{isComplete ? 'ARCHIVED SUCCESSFULLY' : 'SCRAPING...'}</span>
                </>
              ) : (
                <>
                  <span>SCRAPE</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </span>
          </button>
        </form>

        {/* Status Bar */}
        <div className="mt-6 pt-4 border-t border-[var(--smoke)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left Status */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--void)] border border-[var(--smoke)]">
                <span className={`w-2 h-2 ${isProcessing ? 'bg-[var(--pulse)] animate-pulse' : 'bg-green-500'}`} />
                <span className="font-mono text-xs text-[var(--fossil)]">
                  {isProcessing ? 'PROCESSING' : 'READY'}
                </span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-[var(--smoke)]" />
              <span className="hidden sm:block font-mono text-xs text-[var(--fossil)]/50">
                PROTOCOL v2.4.1
              </span>
            </div>

            {/* Right Status */}
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--fossil)]/40">
              <span className="w-1.5 h-1.5 bg-[var(--pulse)]/50" />
              <span>MOLTBOOK_ARCHIVE::READY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
