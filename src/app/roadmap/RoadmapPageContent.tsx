'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle,
  Circle,
  Loader2,
  Rocket,
  Code,
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Calendar,
  Target,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const milestones = [
  {
    quarter: 'Q4 2024',
    title: 'Foundation',
    status: 'completed',
    icon: Code,
    description: 'Core protocol development and initial infrastructure setup.',
    achievements: [
      { text: 'Core encryption module (AES-256)', completed: true },
      { text: 'SHA-256 hash generation system', completed: true },
      { text: 'Basic Scraper Engine MVP', completed: true },
      { text: 'Internal alpha testing with 50 users', completed: true },
      { text: 'Security audit by Trail of Bits', completed: true },
    ],
    metrics: [
      { label: 'Lines of Code', value: '45K+' },
      { label: 'Test Coverage', value: '94%' },
      { label: 'Alpha Users', value: '50' },
    ],
  },
  {
    quarter: 'Q1 2025',
    title: 'Public Launch',
    status: 'completed',
    icon: Rocket,
    description: 'Public beta release and initial platform support.',
    achievements: [
      { text: 'Public beta launch', completed: true },
      { text: 'Moltbook archive system', completed: true },
      { text: 'Web dashboard interface', completed: true },
      { text: 'Twitter/X integration', completed: true },
      { text: 'Reddit integration', completed: true },
      { text: 'Basic API endpoints', completed: true },
    ],
    metrics: [
      { label: 'Beta Users', value: '5,000+' },
      { label: 'Archives Created', value: '125K' },
      { label: 'Platforms', value: '2' },
    ],
  },
  {
    quarter: 'Q2 2025',
    title: 'Platform Expansion',
    status: 'in-progress',
    icon: Globe,
    description: 'Multi-platform support and enhanced features.',
    achievements: [
      { text: 'Medium & Substack support', completed: true },
      { text: 'Facebook integration', completed: true },
      { text: 'Batch import functionality', completed: true },
      { text: 'Public verification portal', completed: false },
      { text: 'Mobile-responsive redesign', completed: false },
      { text: 'Browser extension (Chrome/Firefox)', completed: false },
    ],
    metrics: [
      { label: 'Platforms', value: '10+' },
      { label: 'Daily Archives', value: '15K' },
      { label: 'Active Users', value: '25K' },
    ],
  },
  {
    quarter: 'Q3 2025',
    title: 'Developer Tools',
    status: 'upcoming',
    icon: Code,
    description: 'Complete SDK release and developer ecosystem.',
    achievements: [
      { text: 'JavaScript/TypeScript SDK', completed: false },
      { text: 'Python SDK', completed: false },
      { text: 'Go SDK', completed: false },
      { text: 'REST API v2 with GraphQL', completed: false },
      { text: 'Webhook system', completed: false },
      { text: 'Developer documentation portal', completed: false },
    ],
    metrics: [
      { label: 'SDK Languages', value: '4' },
      { label: 'API Endpoints', value: '30+' },
      { label: 'Developer Docs', value: '100+' },
    ],
  },
  {
    quarter: 'Q4 2025',
    title: 'Decentralization',
    status: 'upcoming',
    icon: Shield,
    description: 'Transition to decentralized governance and operations.',
    achievements: [
      { text: 'Node operator program launch', completed: false },
      { text: 'CLAW governance token', completed: false },
      { text: 'DAO formation', completed: false },
      { text: 'Cross-chain verification', completed: false },
      { text: 'Staking mechanism', completed: false },
      { text: 'Community grants program', completed: false },
    ],
    metrics: [
      { label: 'Node Operators', value: '100+' },
      { label: 'DAO Members', value: '10K+' },
      { label: 'Chains Supported', value: '5' },
    ],
  },
  {
    quarter: '2026+',
    title: 'Future Vision',
    status: 'upcoming',
    icon: Zap,
    description: 'AI integration and global archive network.',
    achievements: [
      { text: 'AI-powered content analysis', completed: false },
      { text: 'Semantic search and organization', completed: false },
      { text: 'Enterprise self-hosted solution', completed: false },
      { text: 'Global archive network (100+ nodes)', completed: false },
      { text: 'Partnership with Internet Archive', completed: false },
      { text: 'Mobile native apps (iOS/Android)', completed: false },
    ],
    metrics: [
      { label: 'Global Nodes', value: '100+' },
      { label: 'Enterprise Clients', value: '500+' },
      { label: 'Total Archives', value: '100M+' },
    ],
  },
];

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'completed':
      return { bg: 'bg-green-500/10', border: 'border-green-500/50', text: 'text-green-500' };
    case 'in-progress':
      return { bg: 'bg-[var(--pulse)]/10', border: 'border-[var(--pulse)]', text: 'text-[var(--pulse)]' };
    default:
      return { bg: 'bg-[var(--ash)]', border: 'border-[var(--smoke)]', text: 'text-[var(--fossil)]/50' };
  }
};

export default function RoadmapPageContent() {
  const completedItems = milestones.flatMap(m => m.achievements).filter(a => a.completed).length;
  const totalItems = milestones.flatMap(m => m.achievements).length;
  const progressPercent = Math.round((completedItems / totalItems) * 100);

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
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// DEVELOPMENT'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              Protocol
              <span className="text-[var(--pulse)]"> Roadmap</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed">
              Our journey from concept to a fully decentralized archival protocol.
              Track our progress, milestones, and future vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <p className="font-mono text-xs text-[var(--fossil)]/50 mb-2">OVERALL PROGRESS</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-4xl text-[var(--pulse)]">{progressPercent}%</span>
                <span className="font-mono text-sm text-[var(--fossil)]/50">Complete</span>
              </div>
              <div className="h-3 bg-[var(--smoke)] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 via-[var(--pulse)] to-[var(--pulse)]/50"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 font-mono text-xs text-[var(--fossil)]/30">
                <span>Q4 2024</span>
                <span>2026+</span>
              </div>
            </div>
            <div className="bg-[var(--void)] border border-[var(--smoke)] p-6">
              <p className="font-mono text-xs text-[var(--fossil)]/50 mb-2">COMPLETED</p>
              <p className="font-mono text-3xl text-green-500">{completedItems}</p>
              <p className="font-mono text-xs text-[var(--fossil)]/50">Features</p>
            </div>
            <div className="bg-[var(--void)] border border-[var(--smoke)] p-6">
              <p className="font-mono text-xs text-[var(--fossil)]/50 mb-2">REMAINING</p>
              <p className="font-mono text-3xl text-[var(--fossil)]">{totalItems - completedItems}</p>
              <p className="font-mono text-xs text-[var(--fossil)]/50">Features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const styles = getStatusStyles(milestone.status);
              return (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border ${styles.border} ${styles.bg} p-8 md:p-12`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 ${styles.bg} border ${styles.border} flex items-center justify-center`}>
                        <milestone.icon className={`w-8 h-8 ${styles.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className={`font-mono text-sm ${styles.text}`}>{milestone.quarter}</span>
                          <span className={`px-2 py-0.5 font-mono text-xs capitalize ${styles.bg} ${styles.text} border ${styles.border}`}>
                            {milestone.status.replace('-', ' ')}
                          </span>
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl text-[var(--fossil)]">{milestone.title}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {milestone.status === 'completed' && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {milestone.status === 'in-progress' && <Loader2 className="w-6 h-6 text-[var(--pulse)] animate-spin" />}
                      {milestone.status === 'upcoming' && <Circle className="w-6 h-6 text-[var(--fossil)]/30" />}
                    </div>
                  </div>

                  <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">{milestone.description}</p>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Achievements */}
                    <div className="lg:col-span-2">
                      <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">DELIVERABLES</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {milestone.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-3 p-3 ${
                              achievement.completed ? 'bg-green-500/5' : 'bg-[var(--void)]'
                            } border border-[var(--smoke)]`}
                          >
                            {achievement.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-[var(--fossil)]/30 flex-shrink-0" />
                            )}
                            <span className={`font-mono text-xs ${
                              achievement.completed ? 'text-[var(--fossil)]/70' : 'text-[var(--fossil)]/50'
                            }`}>
                              {achievement.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">TARGET METRICS</p>
                      <div className="space-y-4">
                        {milestone.metrics.map((metric) => (
                          <div key={metric.label} className="bg-[var(--void)] border border-[var(--smoke)] p-4">
                            <p className="font-mono text-2xl text-[var(--pulse)]">{metric.value}</p>
                            <p className="font-mono text-xs text-[var(--fossil)]/50">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Target className="w-12 h-12 text-[var(--pulse)] mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              Help Shape the Future
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">
              Join our community to vote on features, provide feedback, and contribute to development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-sm claw-interactive"
              >
                Join Discord <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                View GitHub
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
