import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from 'src/element/Footer';
import Header from 'src/element/Header';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Box>
  );
};

export default Layout;
