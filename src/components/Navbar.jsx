import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  // Check karein ke user login hai ya nahi
  const user = localStorage.getItem('user');

  // Dynamic Menus
  const pages = user ? ['Home', 'Products', 'Dashboard'] : ['Home', 'Products', 'Signup', 'Login'];
  const settings = user ? ['Profile', 'Account', 'Dashboard', 'Logout'] : [];

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLogout = () => {
    localStorage.removeItem('user');
    handleCloseUserMenu();
    window.location.href = '/login'; // Refresh aur redirect
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
            LOGO
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} color="inherit"><MenuIcon /></IconButton>
            <Menu anchorEl={anchorElNav} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {pages.map((page) => (
                <MenuItem key={page} component={Link} to={`/${page.toLowerCase()}`} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} component={Link} to={`/${page.toLowerCase()}`} sx={{ color: 'white' }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* User Settings (Sirf login hone par dikhega) */}
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Azan" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }} anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {settings.map((setting) => (
                  <MenuItem 
                    key={setting} 
                    onClick={setting === 'Logout' ? handleLogout : handleCloseUserMenu}
                    component={setting !== 'Logout' ? Link : 'div'}
                    to={setting !== 'Logout' ? `/${setting.toLowerCase()}` : undefined}
                  >
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;