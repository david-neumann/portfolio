import { GitHub, Linkedin, Mail } from 'react-feather';

const Footer = () => {
  return (
    <footer className='mt-auto px-6 pb-8'>
      <section className='flex justify-evenly items-center mb-4'>
        <a
          href='https://github.com/david-neumann'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHub
            size={40}
            strokeWidth={2}
            color='#262626'
            className='p-2 cursor-pointer hover:stroke-purple-600'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/david-neumann/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Linkedin
            size={40}
            strokeWidth={2}
            color='#262626'
            className='p-2 cursor-pointer hover:stroke-purple-600'
          />
        </a>
        <a
          href='mailto:neumann.d.david@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Mail
            size={40}
            strokeWidth={2}
            color='#262626'
            className='p-2 cursor-pointer hover:stroke-purple-600'
          />
        </a>
      </section>
      <p className='font-mono text-xs text-center'>
        Designed & Built by David Neumann
      </p>
    </footer>
  );
};

export default Footer;
