import { AppProps } from 'next/app';
import Head from 'next/head';

import { MainLayout } from '@root/layouts/MainLayout';
import { MantineRegistry } from '@root/lib/mantine-registry';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineRegistry>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineRegistry>
    </>
  );
}
