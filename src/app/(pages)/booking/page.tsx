import { Metadata } from 'next';

import BookingContent from './BookingContent';

export const metadata: Metadata = {
  title: 'Booking',
  description:
    'Book DJ Dinox for your next festival, club night, or private event.',
};

export default function BookingPage() {
  return <BookingContent />;
}
