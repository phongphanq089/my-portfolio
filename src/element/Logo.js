import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';
import { Color, fontSize, fontWeight } from '@styles/styles';
import { Box, Stack } from '@mui/material';

const MotionLink = motion(Stack);

const Logo = () => {
  return (
    <Box
      fontSize={fontSize.fontSize_4}
      fontWeight={fontWeight.Bold}
      color={Color.light}
    >
      <Link href='/'>
        <MotionLink
          alignItems={'center'}
          justifyContent={'center'}
          backgroundColor={Color.dark}
          width={80}
          height={80}
          borderRadius={'50%'}
          whileHover={{
            backgroundColor: [
              '#121212',
              'rgba(131,58,180,1)',
              'rgba(253,29,29,1)',
              'rgba(252,176,69,1)',
              'rgba(131,58,180,1)',
              '#121212',
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          PP
        </MotionLink>
      </Link>
    </Box>
  );
};

export default Logo;
