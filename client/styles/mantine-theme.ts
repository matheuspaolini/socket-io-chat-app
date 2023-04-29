import { MantineThemeOverride } from '@mantine/core';

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
});

export const mantineTheme = {
  colorScheme: 'light',

  fontFamily: spaceGrotesk.style.fontFamily,

  globalStyles: (theme) => ({
    '*': {
      margin: 0,
      padding: 0,

      boxSizing: 'border-box',

      fontFamily: spaceGrotesk.style.fontFamily,
    },

    a: {
      textDecoration: 'none',
    },

    transitionTimingFunction: 'ease',

    html: {
      height: '100%',
    },

    body: {
      position: 'relative',
      height: '100%',
    },

    '#__next': {
      height: '100%',
    }
  }),
} satisfies MantineThemeOverride;
