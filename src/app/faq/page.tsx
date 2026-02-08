import { Metadata } from 'next';
import FAQPageContent from './FAQPageContent';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Claw Protocol - pricing, security, usage, and technical details.',
};

export default function FAQPage() {
  return <FAQPageContent />;
}
