import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const TopNav = () => {

  return (

    <AppBar position="static">
      <Toolbar>
        <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  
          Feeds
        </Typography>
        <Button color="inherit" component={Link} to={'/login'}>Login</Button>
        <Button color="inherit" component={Link} to={'/register'}>Sign Up</Button>
      </Toolbar>
    </AppBar>
  )

}

export default TopNav;
