import { motion } from 'framer-motion';

const SectionWrapper = ({ children, classes }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2, once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`max-w-[480px] px-8 mb-24 transition-all sm:max-w-[540px] smd:max-w-[700px] smd:mb-36 ${classes}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
