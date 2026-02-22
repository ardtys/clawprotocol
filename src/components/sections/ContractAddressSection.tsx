'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, FileCode, ExternalLink, Shield } from 'lucide-react';

const CONTRACT_ADDRESS = '0xf0255E79a98c62bF7114CFF74234f558cd451bA3';

export default function ContractAddressSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
                <code className="font-mono text-sm md:text-base text-[var(--fossil)] break-all">
                  {CONTRACT_ADDRESS}
                </code>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-4 py-3 font-mono text-sm transition-all claw-interactive
                    bg-[var(--pulse)] text-[var(--void)] hover:bg-[var(--pulse)]/90"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://etherscan.io/address/${CONTRACT_ADDRESS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 border font-mono text-sm transition-all claw-interactive
                    border-[var(--smoke)] text-[var(--fossil)] hover:border-[var(--pulse)] hover:text-[var(--pulse)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">View</span>
                </a>
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

          {/* Contract Info Grid */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Token', value: '$PROTOCOLCLAW' },
              { label: 'Audited', value: 'Pending' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[var(--void)] border border-[var(--smoke)] p-3 text-center"
              >
                <p className="font-mono text-xs text-[var(--fossil)]/40 mb-1">{item.label}</p>
                <p className="font-mono text-sm text-[var(--fossil)]">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
