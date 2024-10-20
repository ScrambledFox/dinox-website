import { remark } from 'remark';
import html from 'remark-html';

import privacyText from '@/data/privacypolicy.md';

export async function getPrivacyPolicy() {
  const processed = await remark().use(html).process(privacyText);
  return processed.toString();
}