import Image from 'next/image';
import { motion } from 'framer-motion';
import { GitHub, ExternalLink } from 'react-feather';

const ProjectCard = ({
  projectName,
  projectDesc,
  projectImg,
  github,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className='bg-neutral-50 rounded-lg shadow-lg -mx-4 mb-8'
    >
      <div className='relative w-full aspect-video'>
        <Image
          src={projectImg}
          alt='project screenshot'
          fill={true}
          className='object-cover rounded-t-lg'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-3xl font-semibold mb-4'>{projectName}</h3>
        <p className='font-extralight text-lg leading-8 mb-6'>{projectDesc}</p>
        <div className='flex justify-center gap-x-8'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <GitHub
              size={24}
              color='#262626'
              strokeWidth={2}
              className='hover:stroke-purple-600'
            />
          </a>
          {link !== '' && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <ExternalLink
                size={24}
                color='#262626'
                strokeWidth={2}
                className='hover:stroke-purple-600'
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
