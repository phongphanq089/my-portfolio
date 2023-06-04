import '@styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' });

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>
          {pageProps.titlePage ? pageProps.titlePage : 'Portfolio-app'}
        </title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
      <main  className={montserrat.variable}>
      <Component {...pageProps} />
      </main>
    </>
  );
}
