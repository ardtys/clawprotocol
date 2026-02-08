'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Archive,
  Layers,
  Key,
  Shield,
  Zap,
  Database,
  Lock,
  RefreshCw,
  Globe,
  FileCode,
  Cpu,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  metrics?: { label: string; value: string }[];
}

const features: Feature[] = [
  {
    id: 'scraper-engine',
    icon: Terminal,
    title: 'Scraper Engine',
    subtitle: 'EXTRACTION MODULE',
    description:
      'The Scraper Engine is the gateway to your digital transformation. It captures, processes, and encrypts your Web 2.0 data footprint into immutable archive records.',
    details: [
      'Intelligent URL parsing and content extraction',
      'Real-time data transformation pipeline',
      'Automatic metadata enrichment',
      'Cross-platform compatibility (social, blogs, forums)',
      'Rate-limited to respect source servers',
    ],
    metrics: [
      { label: 'Processing Speed', value: '<2s' },
      { label: 'Success Rate', value: '99.7%' },
      { label: 'Supported Sources', value: '500+' },
    ],
  },
  {
    id: 'moltbook',
    icon: Archive,
    title: 'Moltbook Archive',
    subtitle: 'STORAGE LAYER',
    description:
      'Your personal encrypted repository for shed digital skins. The Moltbook stores your archived data with cryptographic verification, ensuring permanent ownership.',
    details: [
      'AES-256 encryption at rest',
      'Distributed storage across nodes',
      'Instant retrieval and search',
      'Version history tracking',
      'Export in multiple formats',
    ],
    metrics: [
      { label: 'Encryption', value: 'AES-256' },
      { label: 'Redundancy', value: '3x' },
      { label: 'Uptime', value: '99.99%' },
    ],
  },
  {
    id: 'era-transition',
    icon: Layers,
    title: 'Era Transitions',
    subtitle: 'TEMPORAL INTERFACE',
    description:
      'Navigate through the evolution of the web. The Era Transition system allows you to visualize how data presentation has evolved from Web 1.0 to Web 4.0.',
    details: [
      'Web 1.0: Static HTML representation',
      'Web 2.0: Social metadata integration',
      'Web 3.0: Decentralized verification',
      'Web 4.0: AI-enhanced semantic layer',
      'Smooth visual transitions between eras',
    ],
    metrics: [
      { label: 'Eras', value: '4' },
      { label: 'Transition Time', value: '0.3s' },
      { label: 'Visual Modes', value: '12' },
    ],
  },
  {
    id: 'verification',
    icon: Key,
    title: 'Hash Verification',
    subtitle: 'CRYPTOGRAPHIC PROOF',
    description:
      'Every archived piece of data receives a unique cryptographic hash. This serves as irrefutable proof of ownership and timestamp verification.',
    details: [
      'SHA-256 hash generation',
      'Blockchain-anchored timestamps',
      'Merkle tree verification',
      'Public verification portal',
      'Legal-grade digital signatures',
    ],
    metrics: [
      { label: 'Algorithm', value: 'SHA-256' },
      { label: 'Collision Resistance', value: '2^128' },
      { label: 'Verification Time', value: '<1s' },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security Model',
    subtitle: 'PROTECTION LAYER',
    description:
      'Enterprise-grade security from input to storage. Your data is protected by multiple layers of encryption, access controls, and threat monitoring.',
    details: [
      'End-to-end encryption (E2EE)',
      'Zero-knowledge architecture',
      'Multi-factor authentication',
      'Intrusion detection systems',
      'Regular security audits',
    ],
    metrics: [
      { label: 'Encryption Layers', value: '3' },
      { label: 'Auth Methods', value: '5+' },
      { label: 'Audit Frequency', value: 'Weekly' },
    ],
  },
  {
    id: 'performance',
    icon: Zap,
    title: 'Performance',
    subtitle: 'SPEED OPTIMIZATION',
    description:
      'Built for speed without compromising security. Our edge network ensures low-latency access to your archived data from anywhere in the world.',
    details: [
      'Global CDN distribution',
      'Edge computing nodes',
      'Lazy loading optimization',
      'Compressed data transfer',
      'Predictive caching',
    ],
    metrics: [
      { label: 'Global Latency', value: '<50ms' },
      { label: 'Edge Nodes', value: '150+' },
      { label: 'Cache Hit Rate', value: '94%' },
    ],
  },
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].id);

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section id="features" className="py-20 md:py-32 border-t border-[var(--smoke)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">
            {'// CAPABILITIES'}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-4">
            Protocol Features
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to archive, protect, and transform
            your digital legacy into permanent, verifiable records.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full flex items-center gap-4 p-4 text-left transition-all claw-interactive
                          ${activeFeature === feature.id
                            ? 'bg-[var(--ash)] border-l-2 border-[var(--pulse)]'
                            : 'hover:bg-[var(--ash)]/50 border-l-2 border-transparent'
                          }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center border transition-colors
                            ${activeFeature === feature.id
                              ? 'border-[var(--pulse)] bg-[var(--pulse)]/10'
                              : 'border-[var(--smoke)]'
                            }`}
                >
                  <feature.icon
                    className={`w-5 h-5 transition-colors
                              ${activeFeature === feature.id ? 'text-[var(--pulse)]' : 'text-[var(--fossil)]/50'}`}
                  />
                </div>
                <div>
                  <p
                    className={`font-mono text-sm transition-colors
                              ${activeFeature === feature.id ? 'text-[var(--fossil)]' : 'text-[var(--fossil)]/70'}`}
                  >
                    {feature.title}
                  </p>
                  <p className="font-mono text-xs text-[var(--fossil)]/40">{feature.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--ash)]/50 border border-[var(--smoke)] p-6 md:p-8"
              >
                {/* Feature Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--void)] border border-[var(--pulse)]">
                    <currentFeature.icon className="w-7 h-7 text-[var(--pulse)]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--fossil)]">{currentFeature.title}</h3>
                    <p className="font-mono text-xs text-[var(--pulse)]">{currentFeature.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  {currentFeature.description}
                </p>

                {/* Details List */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-[var(--fossil)]/40 mb-3">KEY CAPABILITIES</p>
                  <ul className="space-y-2">
                    {currentFeature.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 font-mono text-sm text-[var(--fossil)]/80"
                      >
                        <span className="w-1.5 h-1.5 bg-[var(--pulse)]" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                {currentFeature.metrics && (
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--smoke)]">
                    {currentFeature.metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <p className="font-mono text-2xl text-[var(--pulse)]">{metric.value}</p>
                        <p className="font-mono text-xs text-[var(--fossil)]/40 mt-1">{metric.label}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
