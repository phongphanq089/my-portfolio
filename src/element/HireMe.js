import React from 'react';
import { CircularIcon } from './SvgIcon';
import styles from '@styles/style.module.css';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Color, fontWeight } from '@styles/styles';

const HireMe = () => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '300px',
        position: 'fixed',
        top: '3rem',
        left: '1rem',
      }}
    >
      <Box position='relative'>
        <CircularIcon className={styles.circularIcon_around} />
        <Box
          sx={{
            transform: 'translate(-50%,-50%)',
            backgroundColor: Color.dark,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            top: '50%',
            left: '50%',
            width: '50%',
            height: '50%',
            position: 'absolute',
          }}
        >
          <Link href='mailto: phongphanq089@gmail.com' target='_blank'>
            <Typography
              variant='h6'
              fontWeight={fontWeight.Bold}
              color={'#fff'}
            >
              Hire Me
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HireMe;
