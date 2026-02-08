import { Metadata } from 'next';
import RoadmapPageContent from './RoadmapPageContent';

export const metadata: Metadata = {
  title: 'Roadmap',
  description: 'Claw Protocol development roadmap - past achievements, current progress, and future milestones.',
};

export default function RoadmapPage() {
  return <RoadmapPageContent />;
}
