
import Head from 'next/head'
import SocialIcons from '../components/ui/SocialIcons';

import Navigation from '../components/ui/Navigation'
import '../styles/globals.scss'
import Footer from '../components/ui/Footer';

export default function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>Ashley Oyewole</title>
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Navigation />
        <Component {...pageProps}/>
      <SocialIcons/>
    </>
  );
}
console.log('🚀 Copyright Ashley Oyewole 2022')