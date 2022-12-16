import { motion } from 'framer-motion';

const SectionWrapper = ({ children, classes }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`px-8 mb-24 ${classes}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
