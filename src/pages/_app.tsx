import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import MainLayout from '@/components/layouts/Main';
import SuratBiasaProvider from '@/contexts/surat/Provider';
import '@/styles/globals.css';

export type NextPageWithTitle<P = {}, IP = P> = NextPage<P, IP> & {
  title?: string;
};

type AppPropsWithTitle = AppProps & {
  Component: NextPageWithTitle;
};

export default function App({ Component, pageProps }: AppPropsWithTitle) {
  return (
    <>
      <Head>
        <title>React PDF Exploration - SIDEBAR</title>
        <link rel="icon" type="image/png" href="/logo-jds.png" />
      </Head>
      <SuratBiasaProvider>
        <MainLayout title={Component.title}>
          <Component {...pageProps} />
        </MainLayout>
      </SuratBiasaProvider>
    </>
  );
}
