import { Metadata } from 'next';
import DocsPageContent from './DocsPageContent';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Complete documentation for Claw Protocol - API reference, SDK guides, integration tutorials, and more.',
};

export default function DocsPage() {
  return <DocsPageContent />;
}
