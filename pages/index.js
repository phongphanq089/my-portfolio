import { Box, Button, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Layout from '@components/Layout';
import Image from 'next/image';
import profilePic from '../public/images/portfolio/developer-pic-1.png';
import AnimatedText from '@components/AnimatedText';
import { Color, fontWeight } from '@styles/styles';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import HireMe from 'src/element/HireMe';

export default function Home() {

  return (
    <Layout>
      <Box my={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Image src={profilePic} alt='deverloper-pic-1' priority />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Stack
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              height={'80%'}
            >
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='text-6xl text-left'
              />
              <Typography variant='subtitle1' fontWeight={fontWeight.Regular}>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </Typography>
            </Stack>
            <Stack direction='row' spacing={4}>
              <Link
                href='./cv-phan-tien-phong.pdf'
                target='_blank'
                download={true}
              >
                <Button
                  variant='contained'
                  size='large'
                  sx={{ backgroundColor: Color.dark }}
                  startIcon={<FeatherIcon icon='download' />}
                >
                  Remuse
                </Button>
              </Link>
              <Link href='mailto: phongphanq089@gmail.com' target='_blank'>
                <Button variant='outlined' color='secondary' size='large'>
                  Contact
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <HireMe />
      </Box>
    </Layout>
  );
}
