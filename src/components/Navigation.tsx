'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Archive,
  Menu,
  X,
  ChevronDown,
  Layers,
  Shield,
  Zap,
  Database,
  FileCode,
  BookOpen,
  Users,
  MessageCircle,
  Github,
  Twitter,
  ExternalLink,
  Terminal,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Key,
  RefreshCw,
} from 'lucide-react';

interface NavigationProps {
  era: number;
  moltbookCount: number;
  onOpenMoltbook: () => void;
}

interface SubMenuItem {
  label: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface MenuItem {
  label: string;
  href?: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Protocol',
    submenu: [
      {
        label: 'How It Works',
        description: 'Learn the core mechanics of data archival',
        icon: RefreshCw,
        href: '/protocol',
      },
      {
        label: 'Technology Stack',
        description: 'Explore our decentralized infrastructure',
        icon: Cpu,
        href: '/protocol#technology',
      },
      {
        label: 'Security Model',
        description: 'End-to-end encryption & verification',
        icon: Shield,
        href: '/protocol#security',
      },
      {
        label: 'Data Architecture',
        description: 'Immutable storage layer design',
        icon: Database,
        href: '/docs',
      },
    ],
  },
  {
    label: 'Features',
    submenu: [
      {
        label: 'Scraper Engine',
        description: 'Extract & transform legacy data',
        icon: Terminal,
        href: '/features#scraper-engine',
      },
      {
        label: 'Moltbook Archive',
        description: 'Your encrypted data repository',
        icon: Archive,
        href: '/features#moltbook-archive',
      },
      {
        label: 'Era Transitions',
        description: 'Navigate through web evolution',
        icon: Layers,
        href: '/features#era-transitions',
      },
      {
        label: 'Hash Verification',
        description: 'Cryptographic proof of ownership',
        icon: Key,
        href: '/features#hash-verification',
      },
    ],
  },
  {
    label: 'Resources',
    submenu: [
      {
        label: 'Documentation',
        description: 'Complete technical guides',
        icon: BookOpen,
        href: '/docs',
      },
      {
        label: 'API Reference',
        description: 'Integration & developer tools',
        icon: FileCode,
        href: '/docs#api',
      },
      {
        label: 'FAQ',
        description: 'Common questions answered',
        icon: MessageCircle,
        href: '/faq',
      },
      {
        label: 'Roadmap',
        description: 'Future development plans',
        icon: Globe,
        href: '/roadmap',
      },
    ],
  },
  {
    label: 'Community',
    submenu: [
      {
        label: 'Discord',
        description: 'Join our community server',
        icon: MessageCircle,
        href: '#',
      },
      {
        label: 'Twitter',
        description: 'Follow for updates',
        icon: Twitter,
        href: '#',
      },
      {
        label: 'GitHub',
        description: 'Open source contributions',
        icon: Github,
        href: '#',
      },
      {
        label: 'About Us',
        description: 'Meet the team',
        icon: Users,
        href: '/about',
      },
    ],
  },
];

export default function Navigation({ era, moltbookCount, onOpenMoltbook }: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--void)]/80 backdrop-blur-md border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 claw-interactive"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative group">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Protocol Claw Logo"
                    width={48}
                    height={48}
                    className="object-contain transition-all duration-300 group-hover:scale-110"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'radial-gradient(circle, var(--pulse) 0%, transparent 70%)',
                      filter: 'blur(8px)',
                    }}
                  />
                </div>
                <motion.div
                  className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[var(--pulse)]"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[var(--pulse)]"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-lg md:text-xl font-bold text-[var(--fossil)] tracking-tight">
                  PROTOCOL CLAW
                </h1>
                <p className="font-mono text-[10px] md:text-xs text-[var(--fossil)]/40">
                  ARCHIVE::SYSTEM v2.4.1
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 font-mono text-sm transition-colors claw-interactive
                              ${activeMenu === item.label ? 'text-[var(--pulse)]' : 'text-[var(--fossil)]/70 hover:text-[var(--fossil)]'}`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeMenu === item.label && item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-72 bg-[var(--ash)] border border-[var(--smoke)]
                                 shadow-xl shadow-black/50 overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="flex items-start gap-3 p-3 rounded-none hover:bg-[var(--smoke)]
                                       transition-colors group claw-interactive"
                            >
                              <div className="w-8 h-8 flex items-center justify-center bg-[var(--void)] border border-[var(--smoke)]
                                            group-hover:border-[var(--pulse)] transition-colors flex-shrink-0">
                                <subItem.icon className="w-4 h-4 text-[var(--fossil)]/70 group-hover:text-[var(--pulse)] transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-mono text-sm text-[var(--fossil)] group-hover:text-[var(--pulse)] transition-colors">
                                  {subItem.label}
                                </p>
                                <p className="font-mono text-xs text-[var(--fossil)]/50 mt-0.5">
                                  {subItem.description}
                                </p>
                              </div>
                              <ExternalLink className="w-3 h-3 text-[var(--fossil)]/30 group-hover:text-[var(--pulse)] transition-colors opacity-0 group-hover:opacity-100" />
                            </a>
                          ))}
                        </div>
                        {/* Decorative bottom bar */}
                        <div className="h-1 bg-gradient-to-r from-[var(--pulse)]/0 via-[var(--pulse)] to-[var(--pulse)]/0" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Era Display */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[var(--ash)] border border-[var(--smoke)]">
                <span className="font-mono text-xs text-[var(--fossil)]/50">ERA</span>
                <span className="font-mono text-sm text-[var(--pulse)]">{era}.0</span>
              </div>

              {/* Moltbook Button */}
              <motion.button
                onClick={onOpenMoltbook}
                className="relative flex items-center gap-2 px-3 md:px-4 py-2
                         bg-[var(--ash)] border border-[var(--smoke)]
                         hover:border-[var(--pulse)] transition-colors
                         claw-interactive group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Archive className="w-4 h-4 text-[var(--fossil)] group-hover:text-[var(--pulse)] transition-colors" />
                <span className="font-mono text-xs text-[var(--fossil)] hidden sm:inline">MOLTBOOK</span>
                {moltbookCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--pulse)]
                                 flex items-center justify-center font-mono text-xs text-[var(--void)]">
                    {moltbookCount}
                  </span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center
                         border border-[var(--smoke)] hover:border-[var(--fossil)]/30
                         transition-colors claw-interactive"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-[var(--fossil)]" />
                ) : (
                  <Menu className="w-5 h-5 text-[var(--fossil)]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileSubmenu(null);
              }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-16 right-0 bottom-0 w-full max-w-sm bg-[var(--void)] border-l border-[var(--smoke)]
                       overflow-y-auto"
            >
              <div className="p-4">
                {/* Era Display Mobile */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--smoke)]">
                  <span className="font-mono text-sm text-[var(--fossil)]/50">Current Era</span>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--ash)] border border-[var(--pulse)]">
                    <span className="font-mono text-sm text-[var(--pulse)]">WEB {era}.0</span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      <button
                        onClick={() => setMobileSubmenu(mobileSubmenu === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between p-3 font-mono text-sm text-[var(--fossil)]
                                 hover:bg-[var(--ash)] transition-colors claw-interactive"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenu === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {mobileSubmenu === item.label && item.submenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 space-y-1 border-l border-[var(--smoke)] ml-3">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileSubmenu(null);
                                  }}
                                  className="flex items-center gap-3 p-2 hover:bg-[var(--ash)] transition-colors claw-interactive"
                                >
                                  <subItem.icon className="w-4 h-4 text-[var(--pulse)]" />
                                  <div>
                                    <p className="font-mono text-sm text-[var(--fossil)]">{subItem.label}</p>
                                    <p className="font-mono text-xs text-[var(--fossil)]/40">{subItem.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-4 border-t border-[var(--smoke)]">
                  <p className="font-mono text-xs text-[var(--fossil)]/40 mb-3">QUICK LINKS</p>
                  <div className="flex gap-3">
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 py-2 bg-[var(--ash)] border border-[var(--smoke)]
                                         hover:border-[var(--pulse)] transition-colors claw-interactive">
                      <Github className="w-4 h-4" />
                      <span className="font-mono text-xs">GitHub</span>
                    </a>
                    <a href="#" className="flex-1 flex items-center justify-center gap-2 py-2 bg-[var(--ash)] border border-[var(--smoke)]
                                         hover:border-[var(--pulse)] transition-colors claw-interactive">
                      <Twitter className="w-4 h-4" />
                      <span className="font-mono text-xs">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
