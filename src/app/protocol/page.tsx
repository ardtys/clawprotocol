import { Metadata } from 'next';
import ProtocolPageContent from './ProtocolPageContent';

export const metadata: Metadata = {
  title: 'Protocol',
  description: 'Learn how Claw Protocol works - the technology, security model, and architecture behind decentralized data archival.',
};

export default function ProtocolPage() {
  return <ProtocolPageContent />;
}
