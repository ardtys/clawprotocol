'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Terminal,
  Archive,
  Layers,
  Key,
  Shield,
  Zap,
  Database,
  Lock,
  ArrowRight,
  CheckCircle,
  Globe,
  FileCode,
  Clock,
  Eye,
  Download,
  Share2,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const features = [
  {
    id: 'scraper-engine',
    icon: Terminal,
    title: 'Scraper Engine',
    tagline: 'Extract & Transform Legacy Data',
    description: 'The Scraper Engine is the core data extraction module that captures, processes, and prepares your Web 2.0 content for permanent archival.',
    longDescription: `The Scraper Engine represents the first critical step in your data archival journey. It's designed to intelligently parse and extract content from a wide variety of web sources while preserving the original context, metadata, and relationships.

Our engine uses advanced DOM parsing techniques combined with platform-specific adapters to ensure accurate extraction regardless of the source. Whether you're archiving a Twitter thread, a Reddit discussion, or a personal blog post, the Scraper Engine handles the complexity so you don't have to.`,
    capabilities: [
      { title: 'Multi-Platform Support', desc: 'Compatible with 500+ platforms including all major social networks, blogs, and forums' },
      { title: 'Intelligent Parsing', desc: 'Advanced DOM analysis for accurate content extraction regardless of page structure' },
      { title: 'Metadata Enrichment', desc: 'Automatic capture of timestamps, authors, engagement metrics, and relationships' },
      { title: 'Media Handling', desc: 'Full support for images, videos, and embedded content with proper attribution' },
      { title: 'Batch Processing', desc: 'Process multiple URLs simultaneously with progress tracking and error handling' },
      { title: 'Rate Limiting', desc: 'Built-in respectful scraping with configurable delays to avoid source server overload' },
    ],
    stats: [
      { label: 'Platforms Supported', value: '500+' },
      { label: 'Avg Processing Time', value: '<2s' },
      { label: 'Success Rate', value: '99.7%' },
    ],
  },
  {
    id: 'moltbook-archive',
    icon: Archive,
    title: 'Moltbook Archive',
    tagline: 'Your Encrypted Data Repository',
    description: 'The Moltbook is your personal encrypted archive where all your shed digital skins are permanently stored and organized.',
    longDescription: `The Moltbook serves as your permanent, personal archive for all captured data. Named after the biological process of molting—where creatures shed their old skin—the Moltbook represents your digital evolution, storing the legacy versions of your online presence.

Every piece of archived data is encrypted with your unique keys and stored across our distributed network. You maintain full ownership and control, with the ability to share verification links, export data, and manage access permissions.`,
    capabilities: [
      { title: 'AES-256 Encryption', desc: 'Military-grade encryption ensures only you can access your archived content' },
      { title: 'Distributed Storage', desc: '3x replication across geographically distributed nodes for permanent availability' },
      { title: 'Instant Search', desc: 'Full-text search across all your archives with advanced filtering options' },
      { title: 'Version History', desc: 'Track changes over time with complete version history for each archive' },
      { title: 'Export Options', desc: 'Download your data in JSON, PDF, or raw format at any time' },
      { title: 'Access Control', desc: 'Fine-grained permissions for sharing specific archives or keeping them private' },
    ],
    stats: [
      { label: 'Encryption Standard', value: 'AES-256' },
      { label: 'Storage Redundancy', value: '3x' },
      { label: 'Uptime SLA', value: '99.99%' },
    ],
  },
  {
    id: 'era-transitions',
    icon: Layers,
    title: 'Era Transitions',
    tagline: 'Navigate Through Web Evolution',
    description: 'Experience how data presentation has evolved from Web 1.0 to Web 4.0 with our unique temporal visualization system.',
    longDescription: `The Era Transition system is a unique feature that allows you to visualize your archived data through different "lenses" representing the evolution of the web. This isn't just a cosmetic feature—it's a fundamental way to understand how digital information has been presented and consumed over time.

From the static, text-heavy Web 1.0 era to the AI-enhanced semantic Web 4.0, each era brings its own visual language and organizational paradigm. This helps contextualize your archived content and understand its place in digital history.`,
    capabilities: [
      { title: 'Web 1.0 Mode', desc: 'Raw HTML-style display with static content and maximum noise artifacts' },
      { title: 'Web 2.0 Mode', desc: 'Social metadata integration with platform styling and engagement metrics' },
      { title: 'Web 3.0 Mode', desc: 'Decentralized verification badges, hash proofs, and blockchain timestamps' },
      { title: 'Web 4.0 Mode', desc: 'Minimal noise, AI-enhanced semantic organization and contextual linking' },
      { title: 'Smooth Transitions', desc: 'Animated transitions between eras with visual morphing effects' },
      { title: 'Customizable Noise', desc: 'Adjust the visual noise level independently of era selection' },
    ],
    stats: [
      { label: 'Era Modes', value: '4' },
      { label: 'Transition Speed', value: '0.3s' },
      { label: 'Visual Presets', value: '12' },
    ],
  },
  {
    id: 'hash-verification',
    icon: Key,
    title: 'Hash Verification',
    tagline: 'Cryptographic Proof of Ownership',
    description: 'Every archived item receives a unique SHA-256 hash that serves as irrefutable proof of content and timestamp.',
    longDescription: `Hash verification is the cryptographic backbone of Claw Protocol's trust model. When you archive content, we generate a unique SHA-256 hash that mathematically represents the exact content at the exact moment of archival.

This hash can be independently verified by anyone, proving: (1) the exact content that was archived, (2) when it was archived, and (3) who archived it. This is crucial for legal verification, dispute resolution, and establishing provenance.`,
    capabilities: [
      { title: 'SHA-256 Algorithm', desc: 'Industry-standard cryptographic hash with 2^128 collision resistance' },
      { title: 'Blockchain Anchoring', desc: 'Timestamps are anchored to public blockchains for independent verification' },
      { title: 'Digital Signatures', desc: 'Your private key signs each archive, proving ownership' },
      { title: 'Public Verification', desc: 'Anyone can verify a hash through our public portal without an account' },
      { title: 'Verification Certificates', desc: 'Generate and share official verification certificates for legal use' },
      { title: 'Merkle Proofs', desc: 'Efficient batch verification using Merkle tree structures' },
    ],
    stats: [
      { label: 'Hash Algorithm', value: 'SHA-256' },
      { label: 'Verification Time', value: '<1s' },
      { label: 'Collision Resistance', value: '2^128' },
    ],
  },
];

export default function FeaturesPageContent() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// CAPABILITIES'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              Protocol
              <span className="text-[var(--pulse)]"> Features</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed">
              A comprehensive suite of tools designed to archive, protect, and transform
              your digital legacy into permanent, verifiable records.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Overview Grid */}
      <section className="py-16 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-6 text-left transition-all claw-interactive ${
                  activeFeature === feature.id
                    ? 'bg-[var(--pulse)]/10 border-2 border-[var(--pulse)]'
                    : 'bg-[var(--ash)]/30 border border-[var(--smoke)] hover:border-[var(--fossil)]/30'
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-4 ${activeFeature === feature.id ? 'text-[var(--pulse)]' : 'text-[var(--fossil)]/50'}`} />
                <h3 className="font-heading text-lg text-[var(--fossil)] mb-2">{feature.title}</h3>
                <p className="font-mono text-xs text-[var(--fossil)]/50">{feature.tagline}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Feature Detail */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Feature Header */}
            <div className="flex items-start gap-6 mb-12">
              <div className="w-20 h-20 bg-[var(--pulse)]/10 border-2 border-[var(--pulse)] flex items-center justify-center">
                <currentFeature.icon className="w-10 h-10 text-[var(--pulse)]" />
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl text-[var(--fossil)] mb-2">
                  {currentFeature.title}
                </h2>
                <p className="font-mono text-sm text-[var(--pulse)]">{currentFeature.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  {currentFeature.description}
                </p>
                <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed whitespace-pre-line">
                  {currentFeature.longDescription}
                </p>
              </div>
              <div className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-8">
                <h3 className="font-mono text-sm text-[var(--fossil)] mb-6">KEY METRICS</h3>
                <div className="space-y-6">
                  {currentFeature.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="font-mono text-sm text-[var(--fossil)]/50">{stat.label}</span>
                      <span className="font-mono text-2xl text-[var(--pulse)]">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capabilities Grid */}
            <div>
              <h3 className="font-mono text-sm text-[var(--fossil)]/50 mb-6">CAPABILITIES</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentFeature.capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-[var(--void)] border border-[var(--smoke)] p-5 hover:border-[var(--fossil)]/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-mono text-sm text-[var(--fossil)] mb-1">{cap.title}</h4>
                        <p className="font-mono text-xs text-[var(--fossil)]/50">{cap.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// MORE FEATURES'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)]">
              Additional Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Security Audit Logs', desc: 'Complete audit trail of all archive operations' },
              { icon: Globe, title: 'API Access', desc: 'RESTful API for programmatic archive management' },
              { icon: Clock, title: 'Scheduled Archival', desc: 'Automatic periodic archival of dynamic content' },
              { icon: Eye, title: 'Preview Mode', desc: 'Preview how content will appear before archiving' },
              { icon: Download, title: 'Bulk Export', desc: 'Export entire archive collections at once' },
              { icon: Share2, title: 'Sharing Links', desc: 'Generate shareable verification links' },
              { icon: FileCode, title: 'Custom Webhooks', desc: 'Trigger external actions on archive events' },
              { icon: Database, title: 'Analytics', desc: 'Insights into your archival patterns and storage' },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[var(--void)] border border-[var(--smoke)] p-6 hover:border-[var(--pulse)]/50 transition-colors claw-interactive"
              >
                <feature.icon className="w-6 h-6 text-[var(--pulse)] mb-4" />
                <h3 className="font-mono text-sm text-[var(--fossil)] mb-2">{feature.title}</h3>
                <p className="font-mono text-xs text-[var(--fossil)]/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-6">
              Experience All Features
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">
              Start archiving your digital legacy with our complete feature set.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--pulse)] text-[var(--void)]
                       font-mono text-sm claw-interactive"
            >
              Launch App <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
