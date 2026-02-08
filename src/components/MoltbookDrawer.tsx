'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Archive, Clock, ExternalLink, Trash2 } from 'lucide-react';

interface MoltbookItem {
  id: string;
  originalUrl: string;
  hash: string;
  timestamp: Date;
}

interface MoltbookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: MoltbookItem[];
  onRemoveItem: (id: string) => void;
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

function getHostname(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export default function MoltbookDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
}: MoltbookDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50
                     frosted-glass border-l border-[var(--smoke)]"
          >
            {/* Header */}
            <div className="p-6 border-b border-[var(--smoke)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 flex items-center justify-center bg-[var(--ash)] border border-[var(--smoke)] overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Moltbook"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl text-[var(--fossil)]">The Moltbook</h2>
                    <p className="text-xs font-mono text-[var(--fossil)]/50">
                      ARCHIVED SKINS: {items.length}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center
                           hover:bg-[var(--pulse)]/10 transition-colors claw-interactive"
                >
                  <X className="w-5 h-5 text-[var(--fossil)]" />
                </button>
              </div>
            </div>

            {/* Items List */}
            <div className="p-4 h-[calc(100%-180px)] overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-16 h-16 border border-dashed border-[var(--smoke)]
                                flex items-center justify-center mb-4 torn-edge">
                    <Archive className="w-8 h-8 text-[var(--fossil)]/20" />
                  </div>
                  <p className="font-mono text-sm text-[var(--fossil)]/40">
                    No archived skins yet
                  </p>
                  <p className="font-mono text-xs text-[var(--fossil)]/20 mt-1">
                    Use the Scraper Engine to archive data
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence>
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative"
                      >
                        {/* Shard/Skin Card */}
                        <div
                          className="bg-[var(--ash)]/80 border border-[var(--smoke)] p-4
                                   hover:border-[var(--fossil)]/30 transition-colors
                                   torn-edge-heavy claw-interactive"
                        >
                          {/* Original URL */}
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2 min-w-0">
                              <ExternalLink className="w-3 h-3 text-[var(--fossil)]/40 flex-shrink-0" />
                              <span className="font-mono text-xs text-[var(--fossil)]/60 truncate">
                                {getHostname(item.originalUrl)}
                              </span>
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity
                                       hover:text-[var(--pulse)]"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Hash Display */}
                          <div className="bg-[var(--void)] border border-[var(--smoke)]/50 p-2 mb-3">
                            <code className="font-mono text-xs text-[var(--pulse)] break-all">
                              {item.hash}
                            </code>
                          </div>

                          {/* Timestamp */}
                          <div className="flex items-center gap-1 text-[var(--fossil)]/30">
                            <Clock className="w-3 h-3" />
                            <span className="font-mono text-xs">
                              {formatTimeAgo(item.timestamp)}
                            </span>
                          </div>

                          {/* Decorative torn edge indicator */}
                          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--pulse)]/20" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[var(--smoke)]
                          bg-[var(--void)]/80 backdrop-blur-sm">
              <div className="flex items-center justify-between font-mono text-xs text-[var(--fossil)]/40">
                <span>MOLTBOOK v1.0.0</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500/50 animate-pulse" />
                  SYNCED
                </span>
              </div>
              <div className="mt-2 h-1 bg-[var(--smoke)] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--pulse)]/0 via-[var(--pulse)] to-[var(--pulse)]/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
