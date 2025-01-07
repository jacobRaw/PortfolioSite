import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { grey } from "@mui/material/colors";

const pages = ['home', 'projects', 'about'];

const textColor = grey[900];


export default function Navbar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
        <AppBar position="fixed" sx={{backgroundImage: 'linear-gradient(to left, grey 25%, white)'}}>
        <Container sx={{margin:'0 5%', width:'100%', paddingLeft: '0px', paddingRight: '0px'}}>
            <Toolbar disableGutters sx={{margin: '0 5%', padding: '0px'}}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/PortfolioSite"
                color={textColor}
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Sans-serif',
                fontWeight: 700,
                letterSpacing: '.25rem',
                textDecoration: 'none',
                fontSize:'1.5rem',
                }}
            >
                JACOB RAWUNG
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={textColor}
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
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/PortfolioSite"
                color={textColor}
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                }}
            >
                JACOB RAWUNG
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {pages.map((page) => {
                    let link = `/${page}`;
                    if (page === 'home') {
                        link = '/';
                    }
                    return (
                        <Link to={link} style={{ textDecoration: 'none' }}>
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block'}}
                            >
                                <Typography color={textColor}>
                                {page}
                                </Typography>
                                
                            </Button>
                        </Link>
                    );
                })}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Email">
                    <IconButton>
                        <MailOutlineIcon sx={{color: textColor}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Mobile Number">
                    <IconButton>
                        <PhoneIphoneIcon sx={{color: textColor}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Github Profile">
                    <IconButton>
                        <GitHubIcon sx={{color: textColor}}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="LinkedIn Profile">
                    <IconButton sx={{color: textColor}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </IconButton>
                </Tooltip>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
        <Toolbar />
    </React.Fragment>
  );
}