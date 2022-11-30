import { Moon, Sun } from 'react-feather';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mb-10 px-6 pt-8'>
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
