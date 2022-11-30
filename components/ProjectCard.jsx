import Image from 'next/image';
import { GitHub, ExternalLink } from 'react-feather';

const ProjectCard = ({
  projectName,
  projectDesc,
  projectImg,
  github,
  link,
}) => {
  return (
    <div className='bg-neutral-50 p-4 rounded-lg shadow-xl -mx-4 mb-8'>
      <h3 className='text-3xl font-semibold mb-4'>{projectName}</h3>
      <p className='font-extralight text-lg leading-8 mb-6'>{projectDesc}</p>
      <div className='relative w-full aspect-video mb-6'>
        <Image
          src={projectImg}
          alt='Listening Party screenshot'
          fill={true}
          className='object-cover rounded-lg'
        />
      </div>
      <div className='flex justify-center gap-x-8'>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <GitHub />
        </a>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <ExternalLink />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
