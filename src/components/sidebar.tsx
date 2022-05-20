import { useState } from 'react';
import {
  Drawer,
  ListItem,
  ListItemText,
  Link,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpenSidebar(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
      >
        <ListItem>
          <ListItemText>
            <Link to="/about">About</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/portfolio">Portfolio</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/blog">Blog</Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link to="/contact">Contact</Link>
          </ListItemText>
        </ListItem>
      </Drawer>
    </>
  )
};

export default Sidebar;