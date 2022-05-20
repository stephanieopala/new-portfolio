import React from 'react';
import { Grid } from '@mui/material';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Blog from '../components/blog';
import Contact from '../components/contact';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Grid>
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </Grid>
  );
}

export default Home;