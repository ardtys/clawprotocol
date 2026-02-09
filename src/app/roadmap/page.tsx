import { Metadata } from 'next';
import RoadmapPageContent from './RoadmapPageContent';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Protocol Claw development roadmap - past achievements, current progress, and future milestones.',
};

export default function RoadmapPage() {
  return <RoadmapPageContent />;
}
