import * as React from 'react';

//material components
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
import Fade from '@mui/material/Fade';

//material icons
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

//styles & images
import DivyanshuLogo from '../assets/divyanshu_tripathi.jpg'
import { grey } from '@mui/material/colors';

const pages = [['Home', <HomeIcon />], ['Skills', <LightbulbIcon />], ['Projects', <WorkIcon />], ['Contact', <AlternateEmailIcon />]];

function ResponsiveAppBar({prefersDarkMode}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="transparent" sx={{backdropFilter: 'blur(96px) contrast(96%)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', flexGrow: 1}}>
          <Tooltip  title="Divyanshu Tripathi">
              <IconButton sx={{ display: { xs: 'none', md: 'flex' }, p: 0, mr: 2 }}>
                <Avatar alt="?" src={DivyanshuLogo} />
              </IconButton>
          </Tooltip>
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              fontSize: 16,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color: `${prefersDarkMode ? 'whitesmoke' : 'black'}`,
              textShadow: `${prefersDarkMode ? '0 0 1px white': '0 0 1px #333'}`
            }}
          >
            DIVYANSHU TRIPATHI
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page[0]}
                href={`#${page[0]}`}
                onClick={handleCloseNavMenu}
                sx={{ 
                  mx: 0.5, 
                  py: 1, 
                  px: 0, 
                  bgcolor: `${prefersDarkMode ? grey[800] : grey[200]}`, 
                  boxShadow: 1, 
                  color: `${prefersDarkMode ? grey[200] : grey[800]}`, 
                  minWidth: '48px', 
                  '&:hover': { background: prefersDarkMode ? grey[700] : grey[300] } 
                }}
              >
                <Tooltip 
                title={<Typography fontSize={14}>{page[0]}</Typography>}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                >
                  {page[1]}
                </Tooltip>
              </Button>
            ))}
          </Box>

          <Tooltip  title="Divyanshu Tripathi">
              <IconButton sx={{ display: { xs: 'flex', md: 'none' }, p: 0, mr: 2 }}>
                <Avatar alt="?" src={DivyanshuLogo} />
              </IconButton>
          </Tooltip>
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              fontSize: 16,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color: `${prefersDarkMode ? 'whitesmoke' : 'black'}`,
              textShadow: `${prefersDarkMode ? '0 0 1px white': '0 0 1px #333'}`
            }}
          >
            DIVYANSHU TRIPATHI
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} component="a" href={`#${page[0]}`} onClick={handleCloseNavMenu} sx={{px: 8, py: 2}}>
                  <Typography textAlign="center" >{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;