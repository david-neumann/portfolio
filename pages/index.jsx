import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>David Neumann</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='font-mono font-bold italic text-4xl'>
          Hi, my name is David
        </h1>
      </main>
    </div>
  );
};

export default Home;
