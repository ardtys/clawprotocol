import { Metadata } from 'next';
import FeaturesPageContent from './FeaturesPageContent';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore all features of Protocol Claw - Scraper Engine, Moltbook Archive, Era Transitions, Hash Verification, and more.',
};

export default function FeaturesPage() {
  return <FeaturesPageContent />;
}
