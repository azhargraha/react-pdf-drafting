import type { AppProps } from 'next/app';
import Head from 'next/head';

import MainLayout from '@/components/layouts/Main';
import SuratBiasaProvider from '@/contexts/surat/Provider';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React PDF Exploration - SIDEBAR</title>
        <link rel="icon" type="image/png" href="/logo-jds.png" />
      </Head>
      <SuratBiasaProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </SuratBiasaProvider>
    </>
  );
}
