import { motion } from 'framer-motion';
import styles from '@styles/style.module.css';

const CustomMotion = ({ children, href = '#' }) => {
  return (
    <motion.a
      href={href}
      className={styles.header_social}
      target='_blank'
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

export default CustomMotion;
