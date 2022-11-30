import '../styles/globals.css';
import localFont from '@next/font/local';
import Layout from '../components/layout';

const wotfard = localFont({
  src: [
    {
      path: '../public/fonts/wotfard-thin-webfont.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-extralight-webfont.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-light-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-regular-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-medium-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-semibold-webfont.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/wotfard-bold-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-wotfard',
});

const victor = localFont({
  src: [
    {
      path: '../public/fonts/VictorMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/VictorMono-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/VictorMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/VictorMono-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-victor',
});

function MyApp({ Component, pageProps }) {
  return (
    <div
      className={`${wotfard.variable} ${victor.variable} font-sans min-h-screen text-neutral-800 bg-neutral-50`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
