'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Zap, Shield, Layers, Database, Lock, Globe } from 'lucide-react';
import ClawCursor from './ClawCursor';
import Navigation from './Navigation';
import ScraperEngine from './ScraperEngine';
import MoltbookDrawer from './MoltbookDrawer';
import EraToggleSlider from './EraToggleSlider';
import LegacyDataCard from './LegacyDataCard';
import {
  FeaturesSection,
  HowItWorksSection,
  TechnologySection,
  FAQSection,
  RoadmapSection,
  ContractAddressSection,
} from './sections';

interface MoltbookItem {
  id: string;
  originalUrl: string;
  hash: string;
  timestamp: Date;
}

export default function ClawInterface() {
  const [era, setEra] = useState(2);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [moltbookItems, setMoltbookItems] = useState<MoltbookItem[]>([]);
  const [showPeelSuccess, setShowPeelSuccess] = useState(false);

  const handleScrape = useCallback((item: MoltbookItem) => {
    setMoltbookItems((prev) => [item, ...prev]);
  }, []);

  const handleRemoveItem = useCallback((id: string) => {
    setMoltbookItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handlePeel = useCallback(() => {
    setShowPeelSuccess(true);
    setTimeout(() => setShowPeelSuccess(false), 3000);
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--void)] claw-cursor relative overflow-hidden"
      data-era={`${era}.0`}
    >
      {/* Custom Cursor */}
      <ClawCursor />

      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Scan Line Effect */}
      <div className="scan-line" />

      {/* Background Grid Pattern */}
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

      {/* Navigation */}
      <Navigation
        era={era}
        moltbookCount={moltbookItems.length}
        onOpenMoltbook={() => setIsDrawerOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10 pt-20 md:pt-24">
        {/* ========== HERO SECTION ========== */}
        <section id="hero" className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--ash)] border border-[var(--smoke)] mb-6">
                  <span className="w-2 h-2 bg-[var(--pulse)] animate-pulse" />
                  <span className="font-mono text-xs text-[var(--fossil)]/70">
                    PROTOCOL v2.4.1 — NOW LIVE
                  </span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--fossil)] leading-[1.1] mb-6">
                  Shed Your
                  <span className="block text-[var(--pulse)]">Digital Skin</span>
                </h1>

                <p className="font-mono text-sm md:text-base text-[var(--fossil)]/60 max-w-xl leading-relaxed mb-8">
                  The Protocol Claw archives your Web 2.0 footprint into encrypted,
                  immutable records. Rip through the noise. Archive what matters.
                  <span className="text-[var(--pulse)]"> Molt into the future.</span>
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: Shield, label: 'Encrypted', desc: 'AES-256' },
                    { icon: Zap, label: 'Instant', desc: '<2s' },
                    { icon: Layers, label: 'Immutable', desc: 'Forever' },
                    { icon: Database, label: 'Distributed', desc: '3x Redundancy' },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-3 py-2 bg-[var(--ash)]/50
                               border border-[var(--smoke)] hover:border-[var(--fossil)]/30
                               transition-colors claw-interactive"
                    >
                      <Icon className="w-4 h-4 text-[var(--pulse)]" />
                      <div>
                        <span className="font-mono text-xs text-[var(--fossil)]">{label}</span>
                        <span className="font-mono text-xs text-[var(--fossil)]/40 ml-2">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                             font-mono text-sm hover:bg-[var(--pulse)]/90 transition-colors claw-interactive"
                  >
                    <span>Learn How It Works</span>
                    <span>→</span>
                  </a>
                  <a
                    href="#scraper-engine"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-[var(--fossil)]
                             border border-[var(--smoke)] hover:border-[var(--pulse)]
                             font-mono text-sm transition-colors claw-interactive"
                  >
                    <span>Try the Scraper</span>
                  </a>
                </div>

                {/* Stats Row */}
                <div className="flex gap-8 mt-12 pt-8 border-t border-[var(--smoke)]">
                  {[
                    { value: '2.4M+', label: 'Archives' },
                    { value: '847K', label: 'Users' },
                    { value: '99.9%', label: 'Uptime' },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <p className="font-mono text-2xl md:text-3xl text-[var(--fossil)]">{value}</p>
                      <p className="font-mono text-xs text-[var(--fossil)]/40">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hero Visual - Legacy Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <LegacyDataCard onPeel={handlePeel} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== SCRAPER ENGINE SECTION ========== */}
        <section id="scraper-engine" className="py-16 md:py-24 px-4 md:px-6 border-t border-[var(--smoke)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Scraper */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ScraperEngine onScrape={handleScrape} />
              </motion.div>

              {/* Scraper Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// TRY IT NOW'}</p>
                <h2 className="font-heading text-2xl md:text-3xl text-[var(--fossil)] mb-4">
                  Archive Any URL Instantly
                </h2>
                <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed mb-6">
                  The Scraper Engine is your gateway to digital preservation. Simply paste any URL
                  from supported platforms, and watch as your data is transformed into an encrypted,
                  verifiable archive entry in your Moltbook.
                </p>

                <div className="space-y-4">
                  <h3 className="font-mono text-xs text-[var(--fossil)]/40">SUPPORTED PLATFORMS</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {['Twitter/X', 'Reddit', 'Medium', 'Facebook', 'Instagram', 'Any URL'].map((platform) => (
                      <div
                        key={platform}
                        className="px-3 py-2 bg-[var(--ash)]/50 border border-[var(--smoke)]
                                 font-mono text-xs text-[var(--fossil)]/70 text-center"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[var(--ash)]/30 border-l-2 border-[var(--pulse)]">
                  <p className="font-mono text-xs text-[var(--fossil)]/70">
                    <span className="text-[var(--pulse)]">TIP:</span> Your archived data will appear in
                    the Moltbook drawer. Click the MOLTBOOK button in the navigation to view your archives.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== ERA TOGGLE SECTION ========== */}
        <section id="era-transition" className="py-16 md:py-24 px-4 md:px-6 border-t border-[var(--smoke)] bg-[var(--ash)]/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Era Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// TEMPORAL INTERFACE'}</p>
                <h2 className="font-heading text-2xl md:text-3xl text-[var(--fossil)] mb-4">
                  Navigate Through Web Eras
                </h2>
                <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed mb-6">
                  Experience how data presentation has evolved across different web generations.
                  The Era Transition slider adjusts the visual noise level and UI complexity,
                  simulating the journey from chaotic Web 1.0 to the pristine Web 4.0.
                </p>

                <div className="space-y-4">
                  {[
                    { era: '1.0', name: 'Static Chaos', desc: 'Raw HTML, maximum noise, digital artifacts' },
                    { era: '2.0', name: 'Social Noise', desc: 'Platform metadata, social connections visible' },
                    { era: '3.0', name: 'Decentralized', desc: 'Verification badges, hash proofs displayed' },
                    { era: '4.0', name: 'Pure Archive', desc: 'Minimal noise, semantic organization' },
                  ].map((item) => (
                    <div
                      key={item.era}
                      className={`flex items-start gap-3 p-3 transition-colors ${
                        Number(item.era) === era
                          ? 'bg-[var(--pulse)]/10 border-l-2 border-[var(--pulse)]'
                          : 'bg-[var(--ash)]/30'
                      }`}
                    >
                      <span className="font-mono text-sm text-[var(--pulse)] w-8">{item.era}</span>
                      <div>
                        <p className="font-mono text-sm text-[var(--fossil)]">{item.name}</p>
                        <p className="font-mono text-xs text-[var(--fossil)]/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Era Slider */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <EraToggleSlider era={era} onEraChange={setEra} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========== HOW IT WORKS SECTION ========== */}
        <HowItWorksSection />

        {/* ========== FEATURES SECTION ========== */}
        <FeaturesSection />

        {/* ========== TECHNOLOGY SECTION ========== */}
        <TechnologySection />

        {/* ========== CONTRACT ADDRESS SECTION ========== */}
        <ContractAddressSection />

        {/* ========== FAQ SECTION ========== */}
        <FAQSection />

        {/* ========== ROADMAP SECTION ========== */}
        <RoadmapSection />

        {/* ========== CTA SECTION ========== */}
        <section className="py-20 md:py-32 px-4 md:px-6 border-t border-[var(--smoke)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// GET STARTED'}</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-6">
                Ready to Archive Your
                <span className="text-[var(--pulse)]"> Digital Legacy?</span>
              </h2>
              <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto mb-8">
                Join thousands of users who have already preserved their Web 2.0 footprint.
                Start archiving for free—no wallet or signup required.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#scraper-engine"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--pulse)] text-[var(--void)]
                           font-mono text-sm hover:bg-[var(--pulse)]/90 transition-colors claw-interactive"
                >
                  <span>Start Archiving Now</span>
                  <span>→</span>
                </a>
                <a
                  href="#docs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[var(--fossil)]
                           border border-[var(--smoke)] hover:border-[var(--pulse)]
                           font-mono text-sm transition-colors claw-interactive"
                >
                  <span>Read Documentation</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {[
                  { icon: Lock, text: 'End-to-End Encrypted' },
                  { icon: Globe, text: 'Global Network' },
                  { icon: Shield, text: 'Audited Security' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-[var(--fossil)]/40" />
                    <span className="font-mono text-xs text-[var(--fossil)]/40">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="relative z-10 border-t border-[var(--smoke)] py-12 px-4 md:px-6 bg-[var(--ash)]/20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Top */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Protocol Claw"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-heading text-lg text-[var(--fossil)]">PROTOCOL CLAW</span>
              </div>
              <p className="font-mono text-xs text-[var(--fossil)]/50 leading-relaxed mb-4">
                Decentralized data archival protocol for preserving your Web 2.0 legacy.
                Encrypted, immutable, and verifiable.
              </p>
              <div className="flex gap-3">
                {['Twitter', 'Discord', 'GitHub'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center border border-[var(--smoke)]
                             hover:border-[var(--pulse)] transition-colors claw-interactive"
                  >
                    <span className="font-mono text-xs text-[var(--fossil)]/50">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: 'Protocol',
                links: ['How It Works', 'Technology', 'Security', 'Roadmap'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'API Reference', 'FAQ', 'Blog'],
              },
              {
                title: 'Community',
                links: ['Discord', 'Twitter', 'GitHub', 'Contributors'],
              },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="font-mono text-sm text-[var(--fossil)] mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-mono text-xs text-[var(--fossil)]/50 hover:text-[var(--pulse)]
                                 transition-colors claw-interactive"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-[var(--smoke)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Protocol Claw"
                width={20}
                height={20}
                className="object-contain opacity-50"
              />
              <span className="font-mono text-xs text-[var(--fossil)]/30">
                PROTOCOL CLAW {new Date().getFullYear()} :: ALL RIGHTS ARCHIVED
              </span>
            </div>
            <div className="flex items-center gap-6">
              {['Terms', 'Privacy', 'Security'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-mono text-xs text-[var(--fossil)]/40 hover:text-[var(--pulse)]
                           transition-colors claw-interactive"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ========== MOLTBOOK DRAWER ========== */}
      <MoltbookDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={moltbookItems}
        onRemoveItem={handleRemoveItem}
      />

      {/* ========== NOTIFICATIONS ========== */}
      <AnimatePresence>
        {showPeelSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                     bg-[var(--ash)] border border-[var(--pulse)] px-6 py-3
                     flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-[var(--pulse)] animate-pulse" />
            <span className="font-mono text-sm text-[var(--fossil)]">
              LEGACY SKIN SHED SUCCESSFULLY
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== DECORATIVE ELEMENTS ========== */}
      <div className="fixed bottom-0 left-0 w-64 h-64 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at bottom left, var(--pulse) 0%, transparent 70%)',
          }}
        />
      </div>
      <div className="fixed top-0 right-0 w-96 h-96 pointer-events-none opacity-10">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at top right, var(--fossil) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
