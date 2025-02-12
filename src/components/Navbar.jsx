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
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { grey } from "@mui/material/colors";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const textColor = grey[900];
const textHover = grey[300];

const theme = createTheme({
  palette: {
    primary: {
      main: `${textColor}`,
    },
  },
});

const pages = ['home', 'projects', 'about'];

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return children
      ? React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        })
      : null;
}

ElevationScroll.propTypes = {
    children: PropTypes.element,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar () {
  const [NavMenuState, setNavMenuStatus] = React.useState(null);
  const [emailMenu, setEmailMenu]= React.useState(null);

  const handleEmailOpen = (event) => {
    setEmailMenu(event.currentTarget);
  }

  const handleEmailClose = (event) => {
    setEmailMenu(null);
  }

  const handleOpenNavMenu = (event) => {
    setNavMenuStatus(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenuStatus(null);
  };

  return (
    <React.Fragment>
        <ThemeProvider theme={theme}>
        <ElevationScroll>
            <AppBar position="sticky" sx={{backgroundImage: 'linear-gradient(to left, grey 25%, white)'}}>
            <Container>
                <Toolbar disableGutters>
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
                        anchorEl={NavMenuState}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(NavMenuState)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {pages.map((page) => {
                            let link = `/${page}`;
                            if (page === 'home') {
                                link = '/';
                            }
                            return (
                                <Link to={link} style={{ textDecoration: 'none' }}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ color:'black', textAlign: 'center' }}>{page}</Typography>
                                    </MenuItem>
                                </Link>
                            )
                        })}
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '20px' }}>
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
                                    color='primary'
                                    sx={{ my: 2, 
                                        display: 'block',
                                        fontSize: '1.25rem',
                                        '&:hover': {
                                            backgroundColor:'transparent', 
                                            color:`${textHover}`,
                                            transform: 'scale(1.1)'
                                        },
                                    }}
                                >
                                    {page}  
                                </Button>
                            </Link>
                        );
                    })}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Contact Info">
                        <IconButton
                         id="basic-button"
                         aria-controls={Boolean(emailMenu) ? 'basic-menu' : undefined}
                         aria-haspopup="true"
                         aria-expanded={Boolean(emailMenu) ? 'true' : undefined}
                         onClick={handleEmailOpen}
                        sx={{color: textColor, '&:hover': {color:`${textHover}`, transition: 'transform 0.15s', transform: 'scale(1.1)', backgroundColor: 'transparent'}}}>
                            <MailOutlineIcon/>
                        </IconButton>
                        <Menu
                        anchorEl={emailMenu}
                        open={Boolean(emailMenu)}
                        onClose={handleEmailClose}
                        sx={{}}
                        >
                            <MenuItem>Email: jacobrawung1@hotmail.com</MenuItem>
                        </Menu>
                    </Tooltip>
                    <Tooltip title="Github Profile">
                        <IconButton component="a" target="_blank" href="https://github.com/jacobRaw"  sx={{color: textColor, '&:hover': {color:`${textHover}`,transition: 'transform 0.15s', transform: 'scale(1.1)',  backgroundColor: 'transparent'}}}>
                            <GitHubIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn Profile">
                        <IconButton  component="a" target="_blank" href="https://www.linkedin.com/in/jacob-rawung/" sx={{color: textColor, '&:hover': {color:`${textHover}`, transition: 'transform 0.15s', transform: 'scale(1.1)', backgroundColor: 'transparent'}}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </IconButton>
                    </Tooltip>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </ElevationScroll>
        </ThemeProvider>
    </React.Fragment>
  );
}