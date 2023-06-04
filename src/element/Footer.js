import { Container, Grid, Stack, Typography } from '@mui/material';
import styles from '@styles/style.module.css';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant='h6'>
              Authentic and innovative.
              <br /> Built to the smallest detail with
              <br /> a focus on usability and performance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant='h4'>Get in Touch</Typography>
            <Stack direction='row' alignItems='center' spacing={3}>
              <FeatherIcon icon='phone-forwarded' />
              <Typography variant='h6'>+ 0706113210</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant='h4'>Get in Touch</Typography>
            <Stack direction='row' alignItems='center' spacing={3}>
              <FeatherIcon icon='phone-forwarded' />
              <Typography variant='h6'>+ 0706113210</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Typography variant='h4'>Get in Touch</Typography>
            <Stack direction='row' alignItems='center' spacing={3}>
              <FeatherIcon icon='phone-forwarded' />
              <Typography variant='h6'>+ 0706113210</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
