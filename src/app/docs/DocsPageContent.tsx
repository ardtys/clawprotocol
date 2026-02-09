'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Book,
  Code,
  Terminal,
  Rocket,
  Key,
  Shield,
  Database,
  Globe,
  FileCode,
  ChevronRight,
  Search,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const docSections = [
  {
    id: 'getting-started',
    icon: Rocket,
    title: 'Getting Started',
    description: 'Quick start guide to begin archiving your data',
    articles: [
      { title: 'Introduction to Protocol Claw', time: '5 min read' },
      { title: 'Creating Your First Archive', time: '10 min read' },
      { title: 'Understanding the Moltbook', time: '8 min read' },
      { title: 'Verification Basics', time: '6 min read' },
    ],
  },
  {
    id: 'api-reference',
    icon: Code,
    title: 'API Reference',
    description: 'Complete REST API documentation',
    articles: [
      { title: 'Authentication', time: '4 min read' },
      { title: 'Archive Endpoints', time: '12 min read' },
      { title: 'Verification Endpoints', time: '8 min read' },
      { title: 'Webhooks & Events', time: '10 min read' },
    ],
  },
  {
    id: 'sdk',
    icon: Terminal,
    title: 'SDK & Libraries',
    description: 'Official SDKs for popular languages',
    articles: [
      { title: 'JavaScript SDK', time: '15 min read' },
      { title: 'Python SDK', time: '15 min read' },
      { title: 'Go SDK', time: '12 min read' },
      { title: 'CLI Reference', time: '10 min read' },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    description: 'Security model and best practices',
    articles: [
      { title: 'Encryption Overview', time: '8 min read' },
      { title: 'Key Management', time: '10 min read' },
      { title: 'Access Control', time: '6 min read' },
      { title: 'Audit Logs', time: '5 min read' },
    ],
  },
];

const codeExamples = [
  {
    title: 'Archive a URL',
    language: 'javascript',
    code: `import { ProtocolClaw } from '@claw/sdk';

const claw = new ProtocolClaw({
  apiKey: process.env.CLAW_API_KEY
});

// Archive a single URL
const archive = await claw.archive({
  url: 'https://twitter.com/user/status/123',
  options: {
    includeMedia: true,
    depth: 1
  }
});

console.log('Hash:', archive.hash);
console.log('Moltbook ID:', archive.moltbookId);`,
  },
  {
    title: 'Verify an Archive',
    language: 'javascript',
    code: `// Verify by hash
const verification = await claw.verify({
  hash: '0x7f83b1657ff1fc53b92dc18148a1d65d...'
});

console.log('Valid:', verification.isValid);
console.log('Timestamp:', verification.timestamp);
console.log('Owner:', verification.owner);`,
  },
  {
    title: 'Batch Archive',
    language: 'javascript',
    code: `// Archive multiple URLs
const urls = [
  'https://twitter.com/user/status/123',
  'https://reddit.com/r/topic/post/456',
  'https://medium.com/@user/article-789'
];

const results = await claw.archiveBatch(urls, {
  onProgress: (completed, total) => {
    console.log(\`Progress: \${completed}/\${total}\`);
  }
});

console.log('Archived:', results.length);`,
  },
];

export default function DocsPageContent() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// DOCUMENTATION'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              Developer
              <span className="text-[var(--pulse)]"> Docs</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed mb-8">
              Everything you need to integrate Protocol Claw into your applications.
              Complete API reference, SDK documentation, and integration guides.
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fossil)]/40" />
              <input
                type="text"
                placeholder="Search documentation..."
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

      {/* Doc Sections */}
      <section className="py-16 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {docSections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-6 hover:border-[var(--pulse)]/50 transition-colors claw-interactive"
              >
                <section.icon className="w-8 h-8 text-[var(--pulse)] mb-4" />
                <h3 className="font-heading text-lg text-[var(--fossil)] mb-2">{section.title}</h3>
                <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.articles.map((article) => (
                    <li key={article.title}>
                      <a href="#" className="flex items-center justify-between group">
                        <span className="font-mono text-xs text-[var(--fossil)]/70 group-hover:text-[var(--pulse)] transition-colors">
                          {article.title}
                        </span>
                        <ChevronRight className="w-3 h-3 text-[var(--fossil)]/30 group-hover:text-[var(--pulse)] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// QUICK START'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              Get Started in Minutes
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
              Follow these steps to integrate Protocol Claw into your application.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Install SDK', code: 'npm install @claw/sdk', desc: 'Add the Claw SDK to your project' },
              { step: '02', title: 'Configure API Key', code: 'CLAW_API_KEY=your_key_here', desc: 'Set your API key as an environment variable' },
              { step: '03', title: 'Start Archiving', code: 'await claw.archive({ url })', desc: 'Archive your first piece of content' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--void)] border border-[var(--smoke)] p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--pulse)] flex items-center justify-center">
                    <span className="font-mono text-lg text-[var(--void)]">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-[var(--fossil)]">{item.title}</h3>
                </div>
                <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">{item.desc}</p>
                <div className="bg-[var(--ash)] border border-[var(--smoke)] p-3">
                  <code className="font-mono text-sm text-[var(--pulse)]">{item.code}</code>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// CODE EXAMPLES'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              Common Use Cases
            </h2>
          </motion.div>

          <div className="space-y-8">
            {codeExamples.map((example, i) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[var(--ash)]/30 border border-[var(--smoke)] overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--smoke)]">
                  <div className="flex items-center gap-3">
                    <FileCode className="w-5 h-5 text-[var(--pulse)]" />
                    <span className="font-mono text-sm text-[var(--fossil)]">{example.title}</span>
                  </div>
                  <button
                    onClick={() => copyCode(example.code, i)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[var(--void)] border border-[var(--smoke)]
                             hover:border-[var(--pulse)] transition-colors font-mono text-xs text-[var(--fossil)] claw-interactive"
                  >
                    {copiedIndex === i ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="font-mono text-sm text-[var(--fossil)]/80">{example.code}</code>
                </pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Preview */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// API REFERENCE'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              REST API Endpoints
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { method: 'POST', endpoint: '/v1/archive', desc: 'Create a new archive entry' },
              { method: 'GET', endpoint: '/v1/archive/:id', desc: 'Retrieve archive details' },
              { method: 'POST', endpoint: '/v1/verify', desc: 'Verify an archive hash' },
              { method: 'GET', endpoint: '/v1/moltbook', desc: 'List all archives in your Moltbook' },
              { method: 'DELETE', endpoint: '/v1/archive/:id', desc: 'Revoke access to an archive' },
              { method: 'POST', endpoint: '/v1/export', desc: 'Export archives in bulk' },
            ].map((endpoint, i) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-[var(--void)] border border-[var(--smoke)] hover:border-[var(--fossil)]/30 transition-colors claw-interactive"
              >
                <span className={`px-3 py-1 font-mono text-xs ${
                  endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' :
                  endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {endpoint.method}
                </span>
                <code className="font-mono text-sm text-[var(--fossil)] flex-1">{endpoint.endpoint}</code>
                <span className="font-mono text-xs text-[var(--fossil)]/50 hidden md:block">{endpoint.desc}</span>
                <ChevronRight className="w-4 h-4 text-[var(--fossil)]/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'API Playground', desc: 'Test API endpoints in your browser', link: '#' },
              { icon: Book, title: 'Tutorials', desc: 'Step-by-step integration guides', link: '#' },
              { icon: Code, title: 'GitHub Examples', desc: 'Sample projects and boilerplates', link: '#' },
            ].map((resource, i) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[var(--ash)]/30 border border-[var(--smoke)]
                         hover:border-[var(--pulse)] transition-colors claw-interactive group"
              >
                <resource.icon className="w-8 h-8 text-[var(--pulse)]" />
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-[var(--fossil)] mb-1 group-hover:text-[var(--pulse)] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">{resource.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[var(--fossil)]/30 group-hover:text-[var(--pulse)] transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
