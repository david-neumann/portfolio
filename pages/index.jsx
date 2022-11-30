import Head from 'next/head';
import Image from 'next/image';
import profileImg from '../public/images/me.jpeg';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import lp from '../public/images/lp.png';
import rtv from '../public/images/rtv.png';

const Home = () => {
  return (
    <>
      <Head>
        <title>David Neumann</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='flex flex-col justify-center items-center mb-24'>
        <h3 className='font-mono italic text-xl'>Hi, my name is</h3>
        <h1 className='font-mono font-bold text-4xl mb-6 text-sky-600'>
          David Neumann
        </h1>
        <div className='relative w-full aspect-[4/3]'>
          <Image
            src={profileImg}
            alt='David Neumann'
            fill={true}
            className='object-cover'
          />
        </div>
      </section>

      <section className='px-8 mb-24'>
        <SectionHeading>About Me</SectionHeading>
        <p className='font-extralight text-lg leading-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis
          tincidunt id aliquet risus feugiat in. Neque ornare aenean euismod
          elementum nisi quis eleifend. Iaculis urna id volutpat lacus laoreet
          non curabitur. Purus ut faucibus pulvinar elementum integer enim.
          Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Eu
          consequat ac felis donec et odio pellentesque diam. Posuere lorem
          ipsum dolor sit amet consectetur. Egestas erat imperdiet sed euismod
          nisi porta lorem mollis aliquam. In iaculis nunc sed augue lacus
          viverra vitae congue eu. Ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Dignissim cras tincidunt lobortis feugiat vivamus at.
        </p>
      </section>

      <section className='px-8 mb-24'>
        <SectionHeading>Projects</SectionHeading>
        <ProjectCard
          projectName='Listening Party'
          projectDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt
        id aliquet risus feugiat in. Neque ornare aenean euismod elementum nisi
        quis eleifend.'
          projectImg={lp}
          github='https://github.com/david-neumann/listening-party'
          link=''
        />
        <ProjectCard
          projectName='Streamer'
          projectDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt
        id aliquet risus feugiat in. Neque ornare aenean euismod elementum nisi
        quis eleifend.'
          projectImg={lp}
          github='https://github.com/david-neumann/streamer'
          link=''
        />
        <ProjectCard
          projectName='Rock the Vote'
          projectDesc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt
        id aliquet risus feugiat in. Neque ornare aenean euismod elementum nisi
        quis eleifend.'
          projectImg={rtv}
          github='https://github.com/david-neumann/assignments/tree/master/_level6/rock-the-vote'
          link=''
        />
      </section>

      <section className='px-8 flex flex-col'>
        <SectionHeading>Contact</SectionHeading>
        <p className='font-extralight text-lg leading-8 mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis
          tincidunt id aliquet risus feugiat in.
        </p>
        <a
          href='mailto:neumann.d.david@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='place-self-center'
        >
          <button className='w-48 py-4 text-lg font-light text-sky-600 border-2 border-sky-600 rounded-lg  hover:bg-sky-50'>
            Get in Touch 👋🏻
          </button>
        </a>
      </section>
    </>
  );
};

export default Home;
