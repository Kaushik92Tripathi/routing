import '@/styles/globals.css';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Modern App</title>
        <meta name="description" content="A modern Next.js app with a beautiful theme." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${roboto.className} bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-gray-800 flex flex-col`}>
        <Header />
        <main className="flex-grow container mx-auto p-6 bg-white rounded-lg shadow-md">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
