import { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Protocol Claw - our mission, team, values, and the story behind decentralized data archival. Meet the people building the future of digital preservation.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
