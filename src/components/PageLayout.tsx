'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Archive,
  Menu,
  X,
  ChevronDown,
  ArrowLeft,
  Github,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import ClawCursor from './ClawCursor';

interface PageLayoutProps {
  children: React.ReactNode;
  showBackButton?: boolean;
}

const navItems = [
  { label: 'Protocol', href: '/protocol' },
  { label: 'Features', href: '/features' },
  { label: 'Docs', href: '/docs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'About', href: '/about' },
];

export default function PageLayout({ children, showBackButton = true }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--void)] claw-cursor relative overflow-hidden">
      {/* Custom Cursor */}
      <ClawCursor />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Scan Line Effect */}
      <div className="scan-line" />

      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--fossil) 1px, transparent 1px),
            linear-gradient(90deg, var(--fossil) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[var(--void)]/80 backdrop-blur-md border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              {showBackButton && (
                <Link
                  href="/"
                  className="w-10 h-10 flex items-center justify-center border border-[var(--smoke)]
                           hover:border-[var(--pulse)] transition-colors claw-interactive"
                >
                  <ArrowLeft className="w-5 h-5 text-[var(--fossil)]" />
                </Link>
              )}
              <Link href="/" className="flex items-center gap-3 claw-interactive">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image
                    src="/logo.png"
                    alt="Protocol Claw"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-heading text-lg md:text-xl font-bold text-[var(--fossil)]">
                    PROTOCOL CLAW
                  </h1>
                  <p className="font-mono text-[10px] text-[var(--fossil)]/40">
                    ARCHIVE::SYSTEM v2.4.1
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 font-mono text-sm text-[var(--fossil)]/70 hover:text-[var(--fossil)]
                           transition-colors claw-interactive"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-xs hover:bg-[var(--pulse)]/90 transition-colors claw-interactive"
              >
                Launch App
              </Link>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center border border-[var(--smoke)]
                         hover:border-[var(--fossil)]/30 transition-colors claw-interactive"
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

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[var(--void)] border-t border-[var(--smoke)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 font-mono text-sm text-[var(--fossil)] hover:bg-[var(--ash)]
                           transition-colors claw-interactive"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 font-mono text-sm text-[var(--pulse)] hover:bg-[var(--ash)]
                         transition-colors claw-interactive"
              >
                Launch App
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-20 md:pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--smoke)] py-12 px-4 md:px-6 bg-[var(--ash)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Protocol Claw" width={32} height={32} className="object-contain" />
                <span className="font-heading text-lg text-[var(--fossil)]">PROTOCOL CLAW</span>
              </div>
              <p className="font-mono text-xs text-[var(--fossil)]/50 leading-relaxed mb-4">
                Decentralized data archival protocol for preserving your Web 2.0 legacy.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-[var(--smoke)] hover:border-[var(--pulse)] transition-colors claw-interactive">
                  <Twitter className="w-4 h-4 text-[var(--fossil)]/50" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-[var(--smoke)] hover:border-[var(--pulse)] transition-colors claw-interactive">
                  <MessageCircle className="w-4 h-4 text-[var(--fossil)]/50" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center border border-[var(--smoke)] hover:border-[var(--pulse)] transition-colors claw-interactive">
                  <Github className="w-4 h-4 text-[var(--fossil)]/50" />
                </a>
              </div>
            </div>

            {/* Links */}
            {[
              { title: 'Protocol', links: [{ label: 'How It Works', href: '/protocol' }, { label: 'Technology', href: '/protocol#technology' }, { label: 'Security', href: '/protocol#security' }] },
              { title: 'Resources', links: [{ label: 'Documentation', href: '/docs' }, { label: 'FAQ', href: '/faq' }, { label: 'Roadmap', href: '/roadmap' }] },
              { title: 'Company', links: [{ label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }] },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="font-mono text-sm text-[var(--fossil)] mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-mono text-xs text-[var(--fossil)]/50 hover:text-[var(--pulse)] transition-colors claw-interactive">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[var(--smoke)] flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-[var(--fossil)]/30">
              PROTOCOL CLAW {new Date().getFullYear()} :: ALL RIGHTS ARCHIVED
            </span>
            <div className="flex items-center gap-6">
              {['Terms', 'Privacy', 'Security'].map((link) => (
                <Link key={link} href="#" className="font-mono text-xs text-[var(--fossil)]/40 hover:text-[var(--pulse)] transition-colors claw-interactive">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-64 h-64 pointer-events-none opacity-30">
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle at bottom left, var(--pulse) 0%, transparent 70%)' }} />
      </div>
    </div>
  );
}
