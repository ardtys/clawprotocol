'use client';

import { motion } from 'framer-motion';
import { FileCode, Copy, ExternalLink, Shield, Clock } from 'lucide-react';

export default function ContractAddressSection() {
  return (
    <section id="contract" className="py-16 md:py-24 px-4 md:px-6 border-t border-[var(--smoke)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// SMART CONTRACT'}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
            Contract Address
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            The official Protocol Claw smart contract. Always verify the contract address before interacting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--ash)]/50 border border-[var(--smoke)] p-6 md:p-8"
        >
          {/* Contract Address Display */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[var(--fossil)]/40">
              <FileCode className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider">Official Contract</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 bg-[var(--void)] border border-[var(--smoke)] px-4 py-3 overflow-hidden">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[var(--fossil)]/30" />
                  <span className="font-mono text-sm md:text-base text-[var(--fossil)]/40 italic">
                    Coming Soon - To Be Announced
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-sm transition-all
                    bg-[var(--smoke)]/50 text-[var(--fossil)]/30 cursor-not-allowed"
                >
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </button>

                <button
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-3 border font-mono text-sm transition-all
                    border-[var(--smoke)]/50 text-[var(--fossil)]/30 cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">View</span>
                </button>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 pt-6 border-t border-[var(--smoke)]">
            <div className="flex items-start gap-3 p-4 bg-[var(--pulse)]/5 border-l-2 border-[var(--pulse)]">
              <Shield className="w-5 h-5 text-[var(--pulse)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-sm text-[var(--fossil)] mb-1">Security Notice</p>
                <p className="font-mono text-xs text-[var(--fossil)]/60 leading-relaxed">
                  Always verify you are interacting with the official contract address.
                  Protocol Claw will never ask for your private keys or seed phrase.
                  Be cautious of phishing attempts and fake contracts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
