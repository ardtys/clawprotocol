'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, MessageCircle, Search, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'technical', label: 'Technical' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'security', label: 'Security' },
  { id: 'usage', label: 'Usage' },
];

const faqs = [
  {
    category: 'general',
    question: 'What is Protocol Claw?',
    answer: `Protocol Claw is a decentralized data archival system designed to preserve your Web 2.0 digital footprint into encrypted, immutable records. It acts as a permanent time capsule for your online presence—including social media posts, blog entries, forum discussions, and any web content you want to preserve.

Unlike traditional screenshot or backup tools, Protocol Claw creates cryptographically verified archives that prove exactly when the content existed and who archived it. These archives are stored across a distributed network, ensuring they remain accessible forever.`,
  },
  {
    category: 'general',
    question: 'What does "shedding digital skin" mean?',
    answer: `The concept draws from biology, where certain creatures shed their skin (molt) as they grow. In the digital context, "shedding" refers to archiving and preserving your legacy digital presence as you evolve.

As we transition from Web 2.0 to Web 3.0 and beyond, your old social media posts, articles, and online interactions become like shed skin—artifacts of your digital past. The Moltbook (our archive storage) keeps these "skins" as permanent records of your digital evolution, allowing you to look back at how your online presence has changed over time.`,
  },
  {
    category: 'general',
    question: 'Who should use Protocol Claw?',
    answer: `Protocol Claw is valuable for anyone who wants to preserve their digital legacy:

• Content Creators: Archive your posts, videos, and articles before platforms change or disappear
• Researchers: Preserve web content for academic citations and studies
• Legal Professionals: Create verifiable records for evidence and compliance
• Journalists: Archive sources and content for verification
• Individuals: Keep a permanent record of important online moments and memories
• Businesses: Document partnerships, announcements, and public communications`,
  },
  {
    category: 'technical',
    question: 'How does the encryption work?',
    answer: `Protocol Claw uses a multi-layer encryption system:

1. Client-Side Encryption: All data is encrypted on your device using AES-256 before any transmission. Your browser or app handles the encryption locally.

2. Key Derivation: Your encryption keys are derived from your wallet signature using PBKDF2. This means only you (with your private key) can decrypt your archives.

3. Zero-Knowledge Architecture: Our servers never see your unencrypted data. We only store encrypted blobs and cannot access your content.

4. Transport Security: All communications use TLS 1.3 with perfect forward secrecy.

This design ensures that even if our servers were compromised, your data would remain secure.`,
  },
  {
    category: 'technical',
    question: 'What is the hash and how is it generated?',
    answer: `Each archived item receives a unique SHA-256 cryptographic hash. This hash is a 64-character hexadecimal string that serves as a digital fingerprint.

The hash is generated from:
• The exact content of what you archived
• The timestamp of when it was archived
• Your digital signature (proving ownership)
• Metadata including source URL and platform

This hash has several important properties:
• Uniqueness: No two different pieces of content will produce the same hash
• Immutability: Any change to the content, even a single character, produces a completely different hash
• Verifiability: Anyone can verify that content matches a hash without seeing the original

The hash is also anchored to public blockchains, providing an independent timestamp that proves when the content existed.`,
  },
  {
    category: 'technical',
    question: 'Where is my data stored?',
    answer: `Your encrypted data is stored in the Moltbook, our distributed storage system built on IPFS-compatible infrastructure:

• Geographic Distribution: Data is replicated across nodes in multiple regions (US, EU, Asia-Pacific)
• Redundancy: Each archive is stored on at least 3 independent nodes
• Content Addressing: Data is retrieved using cryptographic identifiers (CIDs), not server locations
• Decentralization: No single entity controls all storage nodes

We also maintain:
• Hot storage: Frequently accessed archives on high-speed SSD nodes
• Cold storage: Long-term preservation on archival-grade storage
• Index databases: For fast search and retrieval

This architecture ensures your data remains available even if individual nodes go offline.`,
  },
  {
    category: 'usage',
    question: 'What platforms can I archive from?',
    answer: `Protocol Claw currently supports archiving from 500+ platforms, including:

Social Media: Twitter/X, Facebook, Instagram, LinkedIn, TikTok, Mastodon
Forums: Reddit, Hacker News, Discord (public), Stack Overflow
Blogs: Medium, Substack, WordPress, Ghost, personal blogs
News: Most major news websites
Other: YouTube descriptions, GitHub, Notion (public pages), any public webpage

For platforms requiring authentication:
• We offer browser extensions for logged-in archiving
• API integrations for automated archiving
• Manual content entry for offline sources

Note: We only archive publicly accessible content or content you own. We respect robots.txt and platform terms of service.`,
  },
  {
    category: 'usage',
    question: 'Can I delete my archived data?',
    answer: `By design, archived data is immutable and cannot be modified or deleted. This is a core feature, not a limitation—it ensures the integrity and trustworthiness of archives.

However, you have several controls:
• Access Revocation: You can revoke sharing links and make archives private
• Key Destruction: If you delete your encryption keys, the data becomes unreadable forever
• Export & Migration: You can export all your data at any time
• Visibility Control: Choose which archives are public vs. private

The immutability is what makes Protocol Claw valuable for legal verification and historical preservation. If content could be deleted, the verification system would be meaningless.`,
  },
  {
    category: 'security',
    question: 'Is my data safe from hackers?',
    answer: `Yes, Protocol Claw is designed with security-first principles:

Encryption:
• AES-256 encryption (military-grade)
• Keys never leave your device
• Zero-knowledge architecture means we can't access your data

Infrastructure:
• Regular third-party security audits
• Bug bounty program
• SOC 2 Type II compliance (in progress)
• No single point of failure

Access Control:
• Multi-factor authentication options
• Hardware wallet support
• Session management and device tracking

Even in a worst-case scenario where our entire infrastructure was compromised, attackers would only get encrypted data that's computationally infeasible to decrypt without your keys.`,
  },
  {
    category: 'security',
    question: 'What happens if Protocol Claw shuts down?',
    answer: `Your data remains safe and accessible even if Protocol Claw ceases operations:

1. Export Anytime: You can export all your archives at any time in standard formats (JSON, PDF)

2. Decentralized Storage: Data is stored on distributed IPFS-compatible nodes, many operated by third parties

3. Open Standards: We use standard cryptographic algorithms, so you can decrypt your data with any compatible tool

4. Hash Permanence: Verification hashes are anchored to public blockchains, which are permanent and independent of us

5. Open Source: Our verification tools are open source, so the community can continue to verify archives

We're also working on:
• A data escrow program
• Partnership with digital preservation organizations
• Community-operated verification nodes`,
  },
  {
    category: 'pricing',
    question: 'Is Protocol Claw free to use?',
    answer: `We offer both free and premium tiers:

Free Tier:
• Up to 100 archives
• Basic features
• 1GB storage
• Standard processing speed
• Community support

Pro Tier ($9/month):
• Unlimited archives
• Priority processing
• 100GB storage
• API access
• Email support
• Batch imports

Enterprise:
• Custom storage limits
• Dedicated support
• SLA guarantees
• Custom integrations
• On-premise options available

All tiers include the same security and verification features. We also offer special pricing for researchers, journalists, and non-profits.`,
  },
  {
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: `We accept multiple payment methods:

Traditional:
• Credit/Debit Cards (Visa, Mastercard, Amex)
• PayPal
• Bank transfers (Enterprise)

Crypto:
• Ethereum (ETH)
• USDC
• USDT
• Bitcoin (BTC) via payment processor

All subscriptions can be paid monthly or annually (20% discount for annual). Enterprise customers can arrange custom billing terms.`,
  },
];

export default function FAQPageContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// SUPPORT'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              Frequently Asked
              <span className="text-[var(--pulse)]"> Questions</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed mb-8">
              Everything you need to know about Protocol Claw. Can't find the answer
              you're looking for? Reach out to our support team.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fossil)]/40" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[var(--ash)] border border-[var(--smoke)] pl-12 pr-4 py-4
                         font-mono text-sm text-[var(--fossil)] placeholder:text-[var(--fossil)]/30
                         focus:outline-none focus:border-[var(--pulse)] transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 font-mono text-xs transition-all claw-interactive ${
                  activeCategory === cat.id
                    ? 'bg-[var(--pulse)] text-[var(--void)]'
                    : 'bg-[var(--void)] text-[var(--fossil)]/70 border border-[var(--smoke)] hover:border-[var(--fossil)]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-mono text-sm text-[var(--fossil)]/50">No questions match your search.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-[var(--smoke)] hover:border-[var(--fossil)]/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start gap-4 p-6 text-left claw-interactive"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors ${
                        openIndex === index ? 'bg-[var(--pulse)]' : 'bg-[var(--ash)] border border-[var(--smoke)]'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180 text-[var(--void)]' : 'text-[var(--fossil)]/50'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-mono text-xs text-[var(--pulse)] capitalize">{faq.category}</span>
                      <h3 className="font-mono text-sm text-[var(--fossil)] mt-1">{faq.question}</h3>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[4.5rem]">
                          <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--void)] border border-[var(--smoke)] p-12"
          >
            <MessageCircle className="w-12 h-12 text-[var(--pulse)] mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--fossil)] mb-4">
              Still Have Questions?
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">
              Our support team is here to help. Reach out via Discord or email.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-sm claw-interactive"
              >
                Join Discord <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@protocolclaw.io"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
