'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Protocol Claw?',
    answer:
      'Protocol Claw is a decentralized data archival system that allows you to preserve your Web 2.0 digital footprint into encrypted, immutable records. Think of it as a time capsule for your online presence—social media posts, blog entries, forum discussions, and more—all cryptographically secured and verifiable.',
  },
  {
    category: 'General',
    question: 'What does "shedding digital skin" mean?',
    answer:
      'The concept draws from how certain animals shed their skin during growth. Similarly, as we transition from Web 2.0 to Web 3.0/4.0, we "shed" our legacy digital presence by archiving it securely. The Moltbook stores these "skins" as permanent records of your digital evolution.',
  },
  {
    category: 'Technical',
    question: 'How is my data encrypted?',
    answer:
      'All data is encrypted using AES-256 encryption on your device before transmission. Your encryption keys are derived from your wallet signature, meaning only you can decrypt your archives. We use zero-knowledge architecture—we never have access to your unencrypted data.',
  },
  {
    category: 'Technical',
    question: 'What is the hash used for?',
    answer:
      'Each archived item receives a unique SHA-256 hash that serves as a cryptographic fingerprint. This hash proves: (1) the exact content that was archived, (2) when it was archived (timestamp), and (3) who archived it (your signature). It\'s irrefutable proof of ownership.',
  },
  {
    category: 'Technical',
    question: 'Where is my data stored?',
    answer:
      'Your encrypted data is stored across a distributed network of nodes using IPFS-compatible storage. Each archive is replicated across at least 3 geographically distributed nodes, ensuring redundancy and availability even if some nodes go offline.',
  },
  {
    category: 'Usage',
    question: 'What platforms can I archive from?',
    answer:
      'Currently, Protocol Claw supports archiving from Twitter/X, Facebook, Instagram, Reddit, Medium, personal blogs, and any publicly accessible webpage. We\'re continuously adding support for more platforms. Private content requires authentication.',
  },
  {
    category: 'Usage',
    question: 'Can I delete my archived data?',
    answer:
      'By design, archived data is immutable—it cannot be modified or deleted. This ensures the integrity and trustworthiness of archives. However, you control access: you can revoke sharing permissions and make archives private at any time.',
  },
  {
    category: 'Usage',
    question: 'How do I verify an archive?',
    answer:
      'Anyone with a hash can verify an archive through our public verification portal. The verification confirms: the content\'s integrity (hasn\'t been tampered), the timestamp (when it was archived), and optionally the owner (if public). No account needed to verify.',
  },
  {
    category: 'Pricing',
    question: 'Is Protocol Claw free to use?',
    answer:
      'Basic archiving is free for up to 100 items. Premium tiers offer unlimited archiving, advanced features like batch imports, API access, and priority processing. Storage costs are minimal due to our efficient compression and distributed architecture.',
  },
  {
    category: 'Pricing',
    question: 'What are the Era Transitions?',
    answer:
      'Era Transitions are a visual feature that simulates how web content has evolved. Web 1.0 shows static, raw HTML-style rendering. Web 2.0 adds social metadata. Web 3.0 shows decentralized verification badges. Web 4.0 presents AI-enhanced semantic organization.',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFaqs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 md:py-32 border-t border-[var(--smoke)]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">
            {'// SUPPORT'}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            Everything you need to know about Protocol Claw and the archival process.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 font-mono text-xs transition-all claw-interactive
                        ${activeCategory === category
                          ? 'bg-[var(--pulse)] text-[var(--void)]'
                          : 'bg-[var(--ash)] text-[var(--fossil)]/70 hover:text-[var(--fossil)] border border-[var(--smoke)]'
                        }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[var(--smoke)] hover:border-[var(--fossil)]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-5 text-left claw-interactive"
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-colors
                            ${openIndex === index ? 'bg-[var(--pulse)]' : 'bg-[var(--ash)] border border-[var(--smoke)]'}`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200
                              ${openIndex === index ? 'rotate-180 text-[var(--void)]' : 'text-[var(--fossil)]/50'}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[var(--pulse)]">{faq.category}</span>
                  </div>
                  <h3
                    className={`font-mono text-sm transition-colors
                              ${openIndex === index ? 'text-[var(--fossil)]' : 'text-[var(--fossil)]/80'}`}
                  >
                    {faq.question}
                  </h3>
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
                    <div className="px-5 pb-5 pl-[4.25rem]">
                      <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-[var(--ash)]/50 border border-[var(--smoke)]">
            <MessageCircle className="w-8 h-8 text-[var(--pulse)]" />
            <div className="text-left">
              <p className="font-mono text-sm text-[var(--fossil)]">Still have questions?</p>
              <p className="font-mono text-xs text-[var(--fossil)]/50">
                Join our Discord community or reach out via Twitter
              </p>
            </div>
            <a
              href="#discord"
              className="px-4 py-2 bg-[var(--pulse)] text-[var(--void)] font-mono text-xs
                       hover:bg-[var(--pulse)]/90 transition-colors claw-interactive"
            >
              Get Help
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
