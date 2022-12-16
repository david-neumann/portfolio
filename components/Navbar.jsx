import { Moon, Sun } from 'react-feather';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-24 px-8 pt-8 transition-all xs:px-16 xs:pt-12 md:pt-16 md:px-20 lg:mb-36'>
      <h2 className='font-mono font-bold text-3xl'>D</h2>
      <Moon
        size={40}
        strokeWidth={2}
        color='#f9fafb'
        fill='#f9fafb'
        className='p-2 bg-neutral-800 rounded-full'
      />
    </nav>
  );
};

export default Navbar;
