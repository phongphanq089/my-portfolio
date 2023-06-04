import CustomLink from '@components/Customlink';
import { Box, Container, Stack } from '@mui/material';
import styles from '@styles/style.module.css';
import React from 'react';
import {
  DribbleIcon,
  GithubIcon,
  LinkedinIcon,
  PinteresIcon,
  TwitterIcon,
} from './SvgIcon';
import Logo from './Logo';
import { Color, fontSize, fontWeight } from '@styles/styles';
import CustomMotion from '@components/CustomMotion';

const Header = () => {
  return (
    <header className={styles.header_navbar}>
      <Container>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={3}
            fontSize={fontSize.fontSize_3}
            fontWeight={fontWeight.SemiBold}
          >
            <CustomLink href='/' title='Home' className='mr-4' />
            <CustomLink href='#' title='About' className='mx-4' />
            <CustomLink href='#' title='Project' className='mx-4' />
            <CustomLink href='#' title='Article' className='ml-4' />
          </Stack>

          <Box className={styles.logo}>
            <Logo />
          </Box>

          <Stack direction={'row'} alignItems={'center'} spacing={3}>
            <CustomMotion>
              <TwitterIcon />
            </CustomMotion>
            <CustomMotion>
              <PinteresIcon />
            </CustomMotion>
            <CustomMotion>
              <GithubIcon />
            </CustomMotion>
            <CustomMotion>
              <DribbleIcon />
            </CustomMotion>
            <CustomMotion>
              <LinkedinIcon />
            </CustomMotion>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
