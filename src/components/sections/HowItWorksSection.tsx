'use client';

import { motion } from 'framer-motion';
import {
  Link2,
  Scan,
  Lock,
  Database,
  CheckCircle,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';

interface Step {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  code?: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Link2,
    title: 'Input Legacy Data',
    description:
      'Provide the URL or data source from your Web 2.0 platforms. The protocol supports social media, blogs, forums, and any publicly accessible web content.',
    details: [
      'Paste any valid URL from supported platforms',
      'Batch import multiple URLs at once',
      'Direct API integration for connected accounts',
      'Manual data entry for offline content',
    ],
    code: 'claw.input("https://twitter.com/user/status/123")',
  },
  {
    number: '02',
    icon: Scan,
    title: 'Scrape & Extract',
    description:
      'Our Scraper Engine analyzes the source, extracts relevant content, metadata, and contextual information while preserving the original structure.',
    details: [
      'Intelligent content detection algorithms',
      'Metadata extraction (timestamps, authors, links)',
      'Media asset identification and archival',
      'Relationship mapping between data points',
    ],
    code: 'const data = await claw.scrape(url, { depth: 2 })',
  },
  {
    number: '03',
    icon: Lock,
    title: 'Encrypt & Hash',
    description:
      'The extracted data is encrypted using AES-256 and assigned a unique SHA-256 cryptographic hash that serves as your proof of ownership.',
    details: [
      'Client-side encryption before transmission',
      'Unique hash generation per archive item',
      'Timestamp anchoring for verification',
      'Digital signature with your private key',
    ],
    code: 'const hash = claw.encrypt(data, { algo: "AES-256" })',
  },
  {
    number: '04',
    icon: Database,
    title: 'Archive to Moltbook',
    description:
      'Your encrypted data is stored in the Moltbook, a distributed archive system with redundancy across multiple nodes for permanent preservation.',
    details: [
      'Distributed storage across 3+ nodes',
      'Automatic redundancy and backup',
      'Indexed for instant retrieval',
      'Version control for updates',
    ],
    code: 'await moltbook.store(hash, { replicas: 3 })',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Verify & Access',
    description:
      'Access your archived data anytime with cryptographic verification. Share verification links or export your archive in multiple formats.',
    details: [
      'Instant verification via hash lookup',
      'Shareable verification certificates',
      'Export to JSON, PDF, or raw format',
      'Public or private access controls',
    ],
    code: 'const verified = claw.verify(hash) // true',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 border-t border-[var(--smoke)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">
            {'// PROCESS'}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-4">
            How It Works
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            A five-step process to transform your legacy digital footprint
            into permanent, verifiable archives.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--pulse)]/50 via-[var(--smoke)] to-[var(--pulse)]/50" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Step Number Indicator (Center) */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-[var(--void)] border-2 border-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-lg text-[var(--pulse)]">{step.number}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:pr-16 ${index % 2 === 0 ? '' : 'lg:col-start-2 lg:pl-16 lg:pr-0'}`}
                >
                  <div className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-6 md:p-8 hover:border-[var(--fossil)]/30 transition-colors claw-interactive">
                    {/* Mobile Step Number */}
                    <div className="flex items-center gap-4 mb-4 lg:hidden">
                      <div className="w-10 h-10 bg-[var(--void)] border border-[var(--pulse)] flex items-center justify-center">
                        <span className="font-mono text-sm text-[var(--pulse)]">{step.number}</span>
                      </div>
                      <div className="flex-1 h-px bg-[var(--smoke)]" />
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-[var(--void)] border border-[var(--smoke)]">
                        <step.icon className="w-6 h-6 text-[var(--pulse)]" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl text-[var(--fossil)]">
                          {step.title}
                        </h3>
                        <p className="font-mono text-xs text-[var(--fossil)]/40">
                          STEP {step.number} OF 05
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 mb-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 font-mono text-xs text-[var(--fossil)]/60">
                          <ArrowRight className="w-3 h-3 text-[var(--pulse)] mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Code Example */}
                    {step.code && (
                      <div className="bg-[var(--void)] border border-[var(--smoke)] p-3 overflow-x-auto">
                        <code className="font-mono text-xs text-[var(--pulse)]">
                          {step.code}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Arrow to next step (mobile) */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-6 lg:hidden">
                      <ArrowDown className="w-6 h-6 text-[var(--pulse)]/50" />
                    </div>
                  )}
                </div>

                {/* Empty Side (for alignment) */}
                <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-sm text-[var(--fossil)]/50 mb-4">
            Ready to archive your digital legacy?
          </p>
          <a
            href="#scraper-engine"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                     font-mono text-sm hover:bg-[var(--pulse)]/90 transition-colors claw-interactive"
          >
            Start Archiving
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
