'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Lock,
  Database,
  Cpu,
  Globe,
  Key,
  Server,
  GitBranch,
  Zap,
  CheckCircle,
  FileCode,
  Layers,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

export default function ProtocolPageContent() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// PROTOCOL OVERVIEW'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              How Claw Protocol
              <span className="text-[var(--pulse)]"> Works</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed mb-8">
              Claw Protocol is a decentralized data archival system that transforms your Web 2.0
              digital footprint into encrypted, immutable records. Built on cutting-edge cryptographic
              primitives and distributed storage technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-sm claw-interactive"
              >
                Explore Process <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Detailed Steps */}
      <section id="how-it-works" className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// STEP BY STEP'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              The Archival Process
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
              From input to permanent storage, every step is designed for security,
              transparency, and immutability.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-2xl text-[var(--void)]">01</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--fossil)]">Data Input</h3>
                    <p className="font-mono text-xs text-[var(--fossil)]/50">SOURCE COLLECTION</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  The process begins when you provide a URL or data source. Our protocol supports
                  multiple input methods including direct URL submission, API integration, browser
                  extension capture, and manual data entry.
                </p>
                <ul className="space-y-3">
                  {[
                    'Supports 500+ platforms including Twitter, Reddit, Medium',
                    'Intelligent content detection for various data types',
                    'Batch import for bulk archival operations',
                    'Real-time validation and format checking',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-[var(--fossil)]/60">
                      <CheckCircle className="w-4 h-4 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--ash)] border border-[var(--smoke)] p-6">
                <div className="font-mono text-xs text-[var(--fossil)]/40 mb-4">// Example Input</div>
                <pre className="font-mono text-sm text-[var(--pulse)] overflow-x-auto">
{`claw.input({
  url: "https://twitter.com/user/status/123",
  type: "social_post",
  options: {
    includeMedia: true,
    includeReplies: false,
    depth: 1
  }
});`}
                </pre>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-2xl text-[var(--void)]">02</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--fossil)]">Content Extraction</h3>
                    <p className="font-mono text-xs text-[var(--fossil)]/50">SCRAPER ENGINE</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  The Scraper Engine analyzes the source and extracts all relevant content including
                  text, metadata, timestamps, author information, and associated media. The extraction
                  process preserves the original structure and context.
                </p>
                <ul className="space-y-3">
                  {[
                    'DOM parsing for accurate content extraction',
                    'Metadata enrichment (author, date, platform)',
                    'Media asset identification and archival',
                    'Relationship mapping between linked content',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-[var(--fossil)]/60">
                      <CheckCircle className="w-4 h-4 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 bg-[var(--ash)] border border-[var(--smoke)] p-6">
                <div className="font-mono text-xs text-[var(--fossil)]/40 mb-4">// Extraction Result</div>
                <pre className="font-mono text-sm text-[var(--pulse)] overflow-x-auto">
{`{
  content: "Original post content...",
  author: "@username",
  timestamp: "2024-01-15T10:30:00Z",
  platform: "twitter",
  media: ["image1.jpg", "image2.png"],
  engagement: {
    likes: 1542,
    retweets: 89
  }
}`}
                </pre>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-2xl text-[var(--void)]">03</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--fossil)]">Encryption & Hashing</h3>
                    <p className="font-mono text-xs text-[var(--fossil)]/50">CRYPTOGRAPHIC LAYER</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  All extracted data is encrypted using AES-256 encryption on your device before
                  transmission. A unique SHA-256 hash is generated that serves as an immutable
                  fingerprint and proof of ownership.
                </p>
                <ul className="space-y-3">
                  {[
                    'Client-side AES-256 encryption',
                    'SHA-256 hash generation for data integrity',
                    'Timestamp anchoring via blockchain',
                    'Digital signature with your private key',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-[var(--fossil)]/60">
                      <CheckCircle className="w-4 h-4 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--ash)] border border-[var(--smoke)] p-6">
                <div className="font-mono text-xs text-[var(--fossil)]/40 mb-4">// Hash Output</div>
                <pre className="font-mono text-sm text-[var(--pulse)] overflow-x-auto break-all">
{`0x7f83b1657ff1fc53b92dc18148a1d65d
fc2d4b1fa3d677284addd200126d9069

Algorithm: SHA-256
Timestamp: 1705312200
Signature: 0x3a4f...c8d2`}
                </pre>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-2xl text-[var(--void)]">04</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-[var(--fossil)]">Distributed Storage</h3>
                    <p className="font-mono text-xs text-[var(--fossil)]/50">MOLTBOOK ARCHIVE</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                  Your encrypted data is stored in the Moltbook, our distributed archive system.
                  Data is replicated across multiple geographically distributed nodes ensuring
                  redundancy and permanent availability.
                </p>
                <ul className="space-y-3">
                  {[
                    'IPFS-compatible distributed storage',
                    '3x replication across global nodes',
                    'Automatic failover and recovery',
                    'Content-addressed retrieval system',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-[var(--fossil)]/60">
                      <CheckCircle className="w-4 h-4 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1 bg-[var(--ash)] border border-[var(--smoke)] p-6">
                <div className="font-mono text-xs text-[var(--fossil)]/40 mb-4">// Storage Receipt</div>
                <pre className="font-mono text-sm text-[var(--pulse)] overflow-x-auto">
{`{
  status: "ARCHIVED",
  moltbookId: "molt_7x8k2n...",
  nodes: ["us-east", "eu-west", "ap-south"],
  replicas: 3,
  size: "2.4 KB",
  retrievalCID: "Qm7x8k2n..."
}`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// INFRASTRUCTURE'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              Technology Stack
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
              Built on proven technologies and cutting-edge cryptographic primitives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, name: 'AES-256 Encryption', desc: 'Military-grade symmetric encryption for all stored data', category: 'Security' },
              { icon: Key, name: 'SHA-256 Hashing', desc: 'Cryptographic hash function for data integrity verification', category: 'Cryptography' },
              { icon: Database, name: 'IPFS Storage', desc: 'Content-addressed distributed file system for permanent storage', category: 'Storage' },
              { icon: GitBranch, name: 'Merkle Trees', desc: 'Cryptographic proof structures for efficient verification', category: 'Verification' },
              { icon: Globe, name: 'Edge Network', desc: '150+ global edge nodes for low-latency access worldwide', category: 'Performance' },
              { icon: Cpu, name: 'WebAssembly', desc: 'Near-native performance for client-side cryptography', category: 'Runtime' },
              { icon: Server, name: 'Node Cluster', desc: 'Distributed compute nodes for parallel processing', category: 'Compute' },
              { icon: Lock, name: 'Zero-Knowledge', desc: 'Prove ownership without revealing content', category: 'Privacy' },
              { icon: Zap, name: 'Real-time Sync', desc: 'Instant propagation across the network', category: 'Sync' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[var(--void)] border border-[var(--smoke)] p-6 hover:border-[var(--pulse)]/50 transition-colors claw-interactive"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-[var(--smoke)]">
                    <tech.icon className="w-6 h-6 text-[var(--pulse)]" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-[var(--pulse)] mb-1">{tech.category}</p>
                    <h3 className="font-heading text-lg text-[var(--fossil)] mb-2">{tech.name}</h3>
                    <p className="font-mono text-xs text-[var(--fossil)]/50">{tech.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Model */}
      <section id="security" className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// SECURITY'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              Security Model
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
              Multiple layers of protection from input to permanent storage.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: 'End-to-End Encryption',
                description: 'All data is encrypted on your device before transmission. Your encryption keys are derived from your wallet signature, meaning only you can decrypt your archives. We operate on a zero-knowledge architecture.',
                features: ['Client-side encryption', 'Key derivation from wallet', 'Zero server-side decryption', 'Perfect forward secrecy'],
              },
              {
                title: 'Immutable Storage',
                description: 'Once archived, data cannot be modified or deleted. This ensures the integrity and trustworthiness of all records. Each modification creates a new version with its own hash.',
                features: ['Content-addressed storage', 'Append-only log', 'Version history tracking', 'Tamper-evident design'],
              },
              {
                title: 'Distributed Architecture',
                description: 'No single point of failure or control. Data is replicated across geographically distributed nodes operated by independent parties.',
                features: ['3x minimum replication', 'Geographic distribution', 'Independent node operators', 'Automatic failover'],
              },
              {
                title: 'Verification System',
                description: 'Cryptographic proofs allow anyone to verify the authenticity and timestamp of archived data without needing to trust a central authority.',
                features: ['SHA-256 hash verification', 'Blockchain timestamps', 'Digital signatures', 'Public verification portal'],
              },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-8"
              >
                <h3 className="font-heading text-xl text-[var(--fossil)] mb-4">{section.title}</h3>
                <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed mb-6">
                  {section.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-mono text-xs text-[var(--fossil)]/50">
                      <div className="w-1.5 h-1.5 bg-[var(--pulse)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Start Archiving?
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">
              Experience the power of decentralized data preservation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-sm claw-interactive"
              >
                Launch App <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
