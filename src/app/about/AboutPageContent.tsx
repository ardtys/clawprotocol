'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Globe,
  Users,
  Heart,
  Target,
  Zap,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Award,
  BookOpen,
  Lock,
  Eye,
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former security researcher at Trail of Bits. 10+ years in cryptography and distributed systems.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Maya Rodriguez',
    role: 'CTO',
    bio: 'Ex-Google engineer. Led development of large-scale archival systems at Internet Archive.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'James Wilson',
    role: 'Head of Protocol',
    bio: 'Ethereum core contributor. Expert in smart contracts and decentralized storage protocols.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Security',
    bio: 'Former NSA analyst. Specializes in cryptographic implementations and security auditing.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'David Okonkwo',
    role: 'Lead Engineer',
    bio: 'Full-stack developer with expertise in React, Node.js, and blockchain integration.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Community',
    bio: 'Community builder with experience at Discord and Notion. Passionate about digital preservation.',
    image: null,
    social: {
      twitter: '#',
      github: '#',
      linkedin: '#',
    },
  },
];

const values = [
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data belongs to you. We use zero-knowledge architecture ensuring only you can access your archives.',
  },
  {
    icon: Globe,
    title: 'Decentralization',
    description: 'No single point of failure. Your archives are distributed across a global network of nodes.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open-source verification tools. Anyone can audit our code and verify our claims.',
  },
  {
    icon: Shield,
    title: 'Permanence',
    description: 'Once archived, always archived. We build for centuries, not quarters.',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'The Idea',
    description: 'Protocol Claw was conceived after witnessing countless important digital content disappear from the web.',
  },
  {
    year: '2024 Q1',
    title: 'Founding',
    description: 'Core team assembled. Initial funding secured from leading crypto-native VCs.',
  },
  {
    year: '2024 Q3',
    title: 'Alpha Launch',
    description: 'First version released to select testers. Core encryption and archival systems proven.',
  },
  {
    year: '2024 Q4',
    title: 'Security Audit',
    description: 'Passed comprehensive security audit by Trail of Bits with zero critical findings.',
  },
  {
    year: '2025 Q1',
    title: 'Public Beta',
    description: 'Opened to the public. Reached 5,000+ users and 125K archives in first month.',
  },
  {
    year: '2025+',
    title: 'The Future',
    description: 'Building toward full decentralization with DAO governance and global node network.',
  },
];

const partners = [
  { name: 'Trail of Bits', type: 'Security Auditor' },
  { name: 'Arweave', type: 'Storage Partner' },
  { name: 'Chainlink', type: 'Oracle Partner' },
  { name: 'The Graph', type: 'Indexing Partner' },
];

export default function AboutPageContent() {
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
            <p className="font-mono text-xs text-[var(--pulse)] mb-4">{'// ABOUT US'}</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--fossil)] mb-6">
              Preserving the
              <span className="text-[var(--pulse)]"> Digital Past</span>
            </h1>
            <p className="font-mono text-base md:text-lg text-[var(--fossil)]/60 leading-relaxed">
              We're building the infrastructure to ensure humanity's digital history
              is never lost. Our mission is to make permanent, verifiable archival
              accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 text-[var(--pulse)] mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-6">
                Our Mission
              </h2>
              <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                The internet has a memory problem. Links rot, platforms die, and content
                disappears. An estimated 38% of web pages that existed in 2013 are no
                longer accessible today.
              </p>
              <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                Protocol Claw exists to solve this. We're building decentralized infrastructure
                that allows anyone to create permanent, cryptographically verified archives
                of digital content. Whether it's a viral tweet, an important news article,
                or your personal blog posts—we ensure it survives.
              </p>
              <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed">
                We believe that preserving digital history is not just a technical challenge,
                but a moral imperative. Future generations deserve access to the full record
                of human digital expression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--void)] border border-[var(--smoke)] p-8 md:p-12"
            >
              <p className="font-mono text-xs text-[var(--fossil)]/50 mb-6">THE PROBLEM</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl text-[var(--pulse)]">38%</span>
                  <p className="font-mono text-sm text-[var(--fossil)]/60 mt-2">
                    of web pages from 2013 are now inaccessible
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl text-[var(--pulse)]">21%</span>
                  <p className="font-mono text-sm text-[var(--fossil)]/60 mt-2">
                    of tweets are deleted within 48 hours
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-3xl text-[var(--pulse)]">500+</span>
                  <p className="font-mono text-sm text-[var(--fossil)]/60 mt-2">
                    major websites have shut down since 2020
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// PRINCIPLES'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)]">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-6 hover:border-[var(--pulse)]/50 transition-colors"
              >
                <value.icon className="w-8 h-8 text-[var(--pulse)] mb-4" />
                <h3 className="font-heading text-lg text-[var(--fossil)] mb-2">{value.title}</h3>
                <p className="font-mono text-xs text-[var(--fossil)]/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// JOURNEY'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)]">
              Our Story
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--smoke)] transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <span className="font-mono text-sm text-[var(--pulse)]">{milestone.year}</span>
                    <h3 className="font-heading text-xl text-[var(--fossil)] mt-1 mb-2">{milestone.title}</h3>
                    <p className="font-mono text-sm text-[var(--fossil)]/50">{milestone.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[var(--pulse)] border-4 border-[var(--void)] transform -translate-x-1/2 mt-1" />

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// TEAM'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-4">
              The People Behind Claw
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 max-w-2xl mx-auto">
              A team of security researchers, distributed systems engineers, and digital
              preservation advocates united by a common mission.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-6 hover:border-[var(--fossil)]/30 transition-colors"
              >
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-[var(--smoke)] mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[var(--fossil)]/30" />
                </div>

                <h3 className="font-heading text-lg text-[var(--fossil)]">{member.name}</h3>
                <p className="font-mono text-xs text-[var(--pulse)] mb-3">{member.role}</p>
                <p className="font-mono text-xs text-[var(--fossil)]/50 mb-4">{member.bio}</p>

                <div className="flex gap-3">
                  <a href={member.social.twitter} className="text-[var(--fossil)]/30 hover:text-[var(--pulse)] transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={member.social.github} className="text-[var(--fossil)]/30 hover:text-[var(--pulse)] transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={member.social.linkedin} className="text-[var(--fossil)]/30 hover:text-[var(--pulse)] transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)] bg-[var(--ash)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-[var(--pulse)] mb-2">{'// ECOSYSTEM'}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)]">
              Partners & Integrations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--void)] border border-[var(--smoke)] p-6 text-center hover:border-[var(--pulse)]/50 transition-colors"
              >
                <Award className="w-8 h-8 text-[var(--fossil)]/30 mx-auto mb-4" />
                <h3 className="font-mono text-sm text-[var(--fossil)]">{partner.name}</h3>
                <p className="font-mono text-xs text-[var(--fossil)]/50">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-b border-[var(--smoke)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BookOpen className="w-12 h-12 text-[var(--pulse)] mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--fossil)] mb-6">
                Open Source Commitment
              </h2>
              <p className="font-mono text-sm text-[var(--fossil)]/70 leading-relaxed mb-6">
                We believe that trust in archival systems must be earned through transparency.
                That's why our core verification tools are completely open source.
              </p>
              <p className="font-mono text-sm text-[var(--fossil)]/60 leading-relaxed mb-8">
                Anyone can audit our code, verify our cryptographic implementations, and
                even run their own verification nodes. This ensures that Protocol Claw
                remains trustworthy even without trusting us.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--void)] border border-[var(--smoke)] p-8"
            >
              <p className="font-mono text-xs text-[var(--fossil)]/50 mb-6">OPEN SOURCE STATS</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-mono text-3xl text-[var(--pulse)]">45K+</p>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">Lines of Code</p>
                </div>
                <div>
                  <p className="font-mono text-3xl text-[var(--pulse)]">500+</p>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">GitHub Stars</p>
                </div>
                <div>
                  <p className="font-mono text-3xl text-[var(--pulse)]">50+</p>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">Contributors</p>
                </div>
                <div>
                  <p className="font-mono text-3xl text-[var(--pulse)]">MIT</p>
                  <p className="font-mono text-xs text-[var(--fossil)]/50">License</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--ash)]/30 border border-[var(--smoke)] p-12"
          >
            <Mail className="w-12 h-12 text-[var(--pulse)] mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--fossil)] mb-4">
              Get in Touch
            </h2>
            <p className="font-mono text-sm text-[var(--fossil)]/60 mb-8">
              Interested in partnering, investing, or joining our team? We'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@protocolclaw.io"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pulse)] text-[var(--void)]
                         font-mono text-sm claw-interactive"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--smoke)]
                         text-[var(--fossil)] font-mono text-sm hover:border-[var(--pulse)] transition-colors claw-interactive"
              >
                View Careers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
