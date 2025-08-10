import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

export const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin', 'cyrillic'],
});

export const museoCyrl = localFont({
  src: './4163-font.otf',
  weight: '500',
  style: 'normal',
});
