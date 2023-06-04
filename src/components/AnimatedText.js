import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
import { fontWeight } from '@styles/styles';

const MotionText = motion(Typography);

const quote = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};
const signgleWord = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div>
      <MotionText
        variants={quote}
        variant='h3'
        fontWeight={fontWeight.Bold}
        initial='hidden'
        animate='show'
      >
        {text.split('').map((word, index) => (
          <motion.span key={word + '-' + index} variants={signgleWord}>
            {word}
          </motion.span>
        ))}
      </MotionText>
    </div>
  );
};

export default AnimatedText;
