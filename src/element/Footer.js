import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import styles from "@styles/style.module.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Box textAlign="center">
          <Typography variant="h2">Developer</Typography>
          <Typography variant="subtitle1">
            Raj Template is a blog website where you will find great tutorials
            on web design and development. Here each tutorial is beautifully
            described step by step with the required source code.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" py={3}>
            <Chip
              icon={<FeatherIcon icon="smile" />}
              label="App"
              variant="outlined"
              color="primary"
            />
            <Chip
              icon={<FeatherIcon icon="smile" />}
              label="Design"
              variant="outlined"
              color="primary"
            />
            <Chip
              icon={<FeatherIcon icon="smile" />}
              label="Education"
              variant="outlined"
              color="primary"
            />
            <Chip
              icon={<FeatherIcon icon="smile" />}
              label="Development"
              variant="outlined"
              color="primary"
            />
          </Stack>
        </Box>
      </Container>
      <Box bgcolor="#0c0a09" py={3} px={6}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">2023 © All Rights Reserved.</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <span>Built with</span>
            <FeatherIcon icon="heart" />
            <Link href="https://devdreaming.com/" target="_blank">
              CodeBucks
            </Link>
          </Stack>
          <Link href="https://devdreaming.com/about" target="_blank">
            <Typography variant="h5">sayHello</Typography>
          </Link>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
