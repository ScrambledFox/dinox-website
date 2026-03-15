import { promises as fs } from 'fs';

import PrivacyContent from './PrivacyContent';

export default async function PrivacyPolicy() {
  const [en, nl] = await Promise.all([
    fs.readFile('src/data/privacypolicy.md', 'utf-8'),
    fs.readFile('src/data/privacypolicy.nl.md', 'utf-8'),
  ]);

  return <PrivacyContent en={en} nl={nl} />;
}
