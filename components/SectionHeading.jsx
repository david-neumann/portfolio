const SectionHeading = ({ children }) => {
  return (
    <h2 className='flex relative whitespace-nowrap w-full font-mono font-bold text-sky-600 mb-6 md:text-lg md:mb-10 after:relative after:block after:w-full after:h-px after:top-3 after:ml-3 after:bg-sky-600 md:after:top-4'>
      {children}
    </h2>
  );
};

export default SectionHeading;
