'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Circle,
  Loader2,
  Rocket,
  Code,
  Users,
  Globe,
  Zap,
  Shield,
  Layers,
} from 'lucide-react';

interface Milestone {
  quarter: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: {
    text: string;
    completed?: boolean;
  }[];
  icon: React.ElementType;
}

const roadmap: Milestone[] = [
  {
    quarter: 'Q4 2024',
    title: 'Foundation',
    status: 'completed',
    icon: Code,
    items: [
      { text: 'Core protocol architecture design', completed: true },
      { text: 'Encryption module implementation', completed: true },
      { text: 'Basic Scraper Engine MVP', completed: true },
      { text: 'Internal alpha testing', completed: true },
    ],
  },
  {
    quarter: 'Q1 2025',
    title: 'Launch',
    status: 'completed',
    icon: Rocket,
    items: [
      { text: 'Public beta release', completed: true },
      { text: 'Moltbook archive system', completed: true },
      { text: 'Web dashboard interface', completed: true },
      { text: 'Twitter/X platform support', completed: true },
    ],
  },
  {
    quarter: 'Q2 2025',
    title: 'Expansion',
    status: 'in-progress',
    icon: Globe,
    items: [
      { text: 'Multi-platform support (Reddit, Medium)', completed: true },
      { text: 'Batch import functionality', completed: true },
      { text: 'Public verification portal', completed: false },
      { text: 'Mobile-responsive interface', completed: false },
    ],
  },
  {
    quarter: 'Q3 2025',
    title: 'Integration',
    status: 'upcoming',
    icon: Layers,
    items: [
      { text: 'Developer API & SDK release', completed: false },
      { text: 'Third-party integrations', completed: false },
      { text: 'Browser extension', completed: false },
      { text: 'Automated archival schedules', completed: false },
    ],
  },
  {
    quarter: 'Q4 2025',
    title: 'Decentralization',
    status: 'upcoming',
    icon: Shield,
    items: [
      { text: 'Node operator program', completed: false },
      { text: 'Governance token launch', completed: false },
      { text: 'DAO transition', completed: false },
      { text: 'Cross-chain verification', completed: false },
    ],
  },
  {
    quarter: '2026+',
    title: 'Future Vision',
    status: 'upcoming',
    icon: Zap,
    items: [
      { text: 'AI-powered content analysis', completed: false },
      { text: 'Web 4.0 semantic integration', completed: false },
      { text: 'Enterprise solutions', completed: false },
      { text: 'Global archive network', completed: false },
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'in-progress':
      return <Loader2 className="w-5 h-5 text-[var(--pulse)] animate-spin" />;
    default:
      return <Circle className="w-5 h-5 text-[var(--fossil)]/30" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'border-green-500/50 bg-green-500/5';
    case 'in-progress':
      return 'border-[var(--pulse)] bg-[var(--pulse)]/5';
    default:
      return 'border-[var(--smoke)]';
  }
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-32 border-t border-[var(--smoke)] bg-[var(--ash)]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-[var(--pulse)] mb-2">
            {'// DEVELOPMENT'}
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--fossil)] mb-4">
            Roadmap
          </h2>
          <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
            Our journey from concept to a fully decentralized archival protocol.
            Track our progress and upcoming milestones.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-[var(--fossil)]/50">OVERALL PROGRESS</span>
            <span className="font-mono text-sm text-[var(--pulse)]">42%</span>
          </div>
          <div className="h-2 bg-[var(--smoke)] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--pulse)] to-[var(--pulse)]/50"
              initial={{ width: 0 }}
              whileInView={{ width: '42%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-xs text-[var(--fossil)]/30">Q4 2024</span>
            <span className="font-mono text-xs text-[var(--fossil)]/30">2026+</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-[var(--pulse)] to-[var(--smoke)]" />

          <div className="space-y-8">
            {roadmap.map((milestone, index) => (
              <motion.div
                key={milestone.quarter}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-0 top-6 w-16 items-center justify-center">
                  <div
                    className={`w-16 h-16 flex items-center justify-center border ${getStatusColor(milestone.status)}`}
                  >
                    <milestone.icon
                      className={`w-7 h-7 ${
                        milestone.status === 'completed'
                          ? 'text-green-500'
                          : milestone.status === 'in-progress'
                          ? 'text-[var(--pulse)]'
                          : 'text-[var(--fossil)]/30'
                      }`}
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`bg-[var(--void)] border p-6 transition-colors hover:border-[var(--fossil)]/30 claw-interactive ${getStatusColor(milestone.status)}`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Mobile Icon */}
                      <div
                        className={`md:hidden w-10 h-10 flex items-center justify-center border ${getStatusColor(milestone.status)}`}
                      >
                        <milestone.icon
                          className={`w-5 h-5 ${
                            milestone.status === 'completed'
                              ? 'text-green-500'
                              : milestone.status === 'in-progress'
                              ? 'text-[var(--pulse)]'
                              : 'text-[var(--fossil)]/30'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-[var(--pulse)]">{milestone.quarter}</p>
                        <h3 className="font-heading text-xl text-[var(--fossil)]">{milestone.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(milestone.status)}
                      <span
                        className={`font-mono text-xs capitalize ${
                          milestone.status === 'completed'
                            ? 'text-green-500'
                            : milestone.status === 'in-progress'
                            ? 'text-[var(--pulse)]'
                            : 'text-[var(--fossil)]/30'
                        }`}
                      >
                        {milestone.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {milestone.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 p-2 ${
                          item.completed ? 'bg-green-500/5' : 'bg-[var(--ash)]/30'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 flex items-center justify-center ${
                            item.completed ? 'text-green-500' : 'text-[var(--fossil)]/30'
                          }`}
                        >
                          {item.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Circle className="w-4 h-4" />
                          )}
                        </div>
                        <span
                          className={`font-mono text-xs ${
                            item.completed ? 'text-[var(--fossil)]/70' : 'text-[var(--fossil)]/50'
                          }`}
                        >
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Milestones', value: '6', sub: 'Phases' },
            { label: 'Completed', value: '10', sub: 'Features' },
            { label: 'In Progress', value: '4', sub: 'Features' },
            { label: 'Upcoming', value: '10', sub: 'Features' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 bg-[var(--void)] border border-[var(--smoke)] text-center claw-interactive"
            >
              <p className="font-mono text-3xl text-[var(--fossil)]">{stat.value}</p>
              <p className="font-mono text-xs text-[var(--fossil)]/50 mt-1">{stat.label}</p>
              <p className="font-mono text-xs text-[var(--pulse)]">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
