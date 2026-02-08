'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Database,
  Shield,
  Globe,
  Server,
  Lock,
  Layers,
  Zap,
  GitBranch,
  Box,
} from 'lucide-react';

interface TechItem {
  icon: React.ElementType;
  name: string;
  category: string;
  description: string;
}

const techStack: TechItem[] = [
  {
    icon: Shield,
    name: 'AES-256 Encryption',
    category: 'Security',
    description: 'Military-grade encryption for all stored data',
  },
  {
    icon: Database,
    name: 'Distributed Storage',
    category: 'Infrastructure',
    description: 'IPFS-compatible distributed file system',
  },
  {
    icon: GitBranch,
    name: 'Merkle Trees',
    category: 'Verification',
    description: 'Cryptographic proof structures for data integrity',
  },
  {
    icon: Globe,
    name: 'Edge Network',
    category: 'Performance',
    description: '150+ global edge nodes for low latency',
  },
  {
    icon: Lock,
    name: 'Zero-Knowledge',
    category: 'Privacy',
    description: 'Prove ownership without revealing content',
  },
  {
    icon: Zap,
    name: 'WebAssembly',
    category: 'Performance',
    description: 'Near-native performance in browser',
  },
];

const architectureLayers = [
  {
    name: 'Application Layer',
    description: 'User interfaces, API endpoints, and SDK',
    color: 'var(--pulse)',
    items: ['Web Dashboard', 'CLI Tools', 'REST API', 'SDK Libraries'],
  },
  {
    name: 'Protocol Layer',
    description: 'Core business logic and data processing',
    color: 'var(--fossil)',
    items: ['Scraper Engine', 'Encryption Module', 'Hash Generator', 'Verification Service'],
  },
  {
    name: 'Storage Layer',
    description: 'Distributed data persistence and retrieval',
    color: 'var(--smoke)',
    items: ['Moltbook Archive', 'IPFS Nodes', 'Cache Layer', 'Index Database'],
  },
  {
    name: 'Network Layer',
    description: 'Communication and consensus protocols',
    color: 'var(--ash)',
    items: ['P2P Network', 'Edge CDN', 'Consensus Engine', 'Node Discovery'],
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 md:py-32 border-t border-[var(--smoke)] bg-[var(--ash)]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">
            {'// INFRASTRUCTURE'}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-4">
            Technology Stack
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            Built on battle-tested technologies and cutting-edge cryptographic primitives
            to ensure security, performance, and reliability.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[var(--void)] border border-[var(--smoke)] p-6
                       hover:border-[var(--pulse)]/50 transition-all claw-interactive"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--smoke)]
                              group-hover:border-[var(--pulse)] group-hover:bg-[var(--pulse)]/10 transition-all">
                  <tech.icon className="w-6 h-6 text-[var(--fossil)]/70 group-hover:text-[var(--pulse)] transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-[var(--pulse)] mb-1">{tech.category}</p>
                  <h3 className="font-heading text-lg text-[var(--fossil)] mb-2">{tech.name}</h3>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">{tech.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// ARCHITECTURE'}</p>
            <h3 className="font-heading text-2xl md:text-3xl text-[var(--fossil)]">
              System Architecture
            </h3>
          </div>

          <div className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div
                  className="bg-[var(--void)] border border-[var(--smoke)] p-6 hover:border-[var(--fossil)]/30 transition-colors claw-interactive"
                  style={{ borderLeftWidth: '4px', borderLeftColor: layer.color }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Layer Info */}
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-8 h-8 flex items-center justify-center text-[var(--void)] font-mono text-sm"
                          style={{ backgroundColor: layer.color }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h4 className="font-heading text-lg text-[var(--fossil)]">{layer.name}</h4>
                      </div>
                      <p className="font-mono text-xs text-[var(--fossil)]/50">{layer.description}</p>
                    </div>

                    {/* Layer Components */}
                    <div className="md:w-2/3 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 bg-[var(--ash)] border border-[var(--smoke)]
                                   font-mono text-xs text-[var(--fossil)]/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-4 bg-[var(--smoke)]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--void)] border border-[var(--smoke)] p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-[var(--pulse)]" />
            <h3 className="font-heading text-xl text-[var(--fossil)]">Security Guarantees</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'End-to-End Encrypted',
                description: 'Data is encrypted on your device before transmission',
                icon: Lock,
              },
              {
                title: 'Zero-Knowledge Proofs',
                description: 'Verify ownership without revealing actual content',
                icon: Shield,
              },
              {
                title: 'Immutable Records',
                description: 'Once archived, data cannot be altered or deleted',
                icon: Database,
              },
              {
                title: 'Decentralized Storage',
                description: 'No single point of failure or control',
                icon: Server,
              },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center border border-[var(--smoke)]">
                  <feature.icon className="w-6 h-6 text-[var(--fossil)]/70" />
                </div>
                <h4 className="font-mono text-sm text-[var(--fossil)] mb-1">{feature.title}</h4>
                <p className="font-mono text-xs text-[var(--fossil)]/50">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
