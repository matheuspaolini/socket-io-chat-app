import { ReactNode } from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { mantineTheme } from '@root/styles/mantine-theme';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider } from '@mantine/core';

type Props = {
  children?: ReactNode;
}

export function MantineRegistry({ children }: Props) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
