import Head from 'next/head';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import lp from '../public/images/lp.png';
import rtv from '../public/images/rtv.png';

const Home = () => {
  const projects = [
    {
      projectName: 'Listening Party',
      projectDesc:
        'A web app for rating and reviewing songs utilizing the Spotify API. Rate songs by searching or viewing your recently played tracks and share a short tweet-length review with your followers.',
      projectImg: lp,
      github: 'https://github.com/david-neumann/listening-party',
      link: 'https://listening-party.onrender.com/',
    },
    {
      projectName: 'Streamer',
      projectDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in. Neque ornare aenean euismod elementum nisi quis eleifend.',
      projectImg: lp,
      github: 'https://github.com/david-neumann/streamer',
      link: '',
    },
    {
      projectName: 'Rock the Vote',
      projectDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in. Neque ornare aenean euismod elementum nisi quis eleifend.',
      projectImg: rtv,
      github:
        'https://github.com/david-neumann/assignments/tree/master/_level6/rock-the-vote',
      link: '',
    },
  ];

  const renderedProjects = projects.map((project, index) => (
    <ProjectCard {...project} key={index} />
  ));

  return (
    <>
      <Head>
        <title>David Neumann</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='flex flex-col justify-center items-center max-w-[480px] mb-36 px-8 transition-all md:max-w-[540px] smd:max-w-[700px] smd:mb-48'>
        <h1 className='font-bold text-4xl mb-6 md:text-5xl lg:text-6xl'>
          👋
          <span className='text-transparent bg-clip-text bg-gradient-to-tr from-sky-600 to-purple-600'>
            , I'm David.
          </span>
        </h1>
        <h2 className='font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-tr from-neutral-600 to-neutral-900 md:text-4xl lg:text-5xl'>
          I enjoy building cool things for the internet.
        </h2>
      </section>

      <SectionWrapper>
        <SectionHeading>About Me</SectionHeading>
        <p className='font-extralight text-lg leading-8 md:text-xl md:leading-9'>
          I'm a sports analyst turned{' '}
          <strong className='font-semibold'>web developer</strong> with an array
          of diverse past experience: 👨‍👩‍👧 full-time parent, 🎙️ podcast host, ✍️
          freelance writer, 🎒 student, 🇺🇸 veteran, 🖥️ technical support agent.
          The skills I've honed in these past professional experiences have led
          me to be who I am now: a well-rounded developer with excellent written
          and verbal communication skills, an analytical mind, and a passion for
          learning new things.
        </p>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeading>Projects</SectionHeading>
        {renderedProjects}
      </SectionWrapper>

      <SectionWrapper classes='flex flex-col'>
        <SectionHeading>Contact</SectionHeading>
        <p className='font-extralight text-lg leading-8 mb-12 md:text-xl md:leading-9'>
          My inbox is always open! I'm currently looking for new opportunities
          and would love to hear from you.
        </p>
        <a
          href='mailto:neumann.d.david@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='place-self-center'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='w-48 py-4 text-lg font-light text-purple-600 border-2 border-purple-600 rounded-lg  hover:bg-purple-50'
          >
            Get in Touch 👋
          </motion.button>
        </a>
      </SectionWrapper>
    </>
  );
};

export default Home;
