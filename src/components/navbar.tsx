import React from 'react';
import {
  Grid,
  Typography,
  Link,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Sidebar from './sidebar';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container>
      <Grid
        item
        md={4}
        xs={12}
      >
        <Typography>Stephanie Opala</Typography>
      </Grid>
      {isMobile ? (
        <Sidebar />
      ) : (
        <Grid
          item
          md={8}
        >
          <Link
            component={RouterLink}
            to="/about"
            underline='none'
          >
            About
          </Link>
          <Link
            component={RouterLink}
            to="/portfolio"
            underline='none'
          >
            Portfolio
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            underline='none'
          >
            Blog
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            underline='none'
          >
            Contact
          </Link>
        </Grid>
      )}
    </Grid>
  )
}

export default Navbar;
