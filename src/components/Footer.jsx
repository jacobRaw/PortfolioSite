import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import { grey } from "@mui/material/colors";

const textHover = grey[300];

const textColor = grey[900];

export default function Footer () {
    const [emailMenu, setEmailMenu]= React.useState(null);

    const handleEmailOpen = (event) => {
    setEmailMenu(event.currentTarget);
    }

    const handleEmailClose = (event) => {
    setEmailMenu(null);
    }
    return (
        <React.Fragment>
                <AppBar position='static' sx={{bottom: '0', top: 'auto', backgroundColor: 'grey'}}>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <Box sx={{
                        borderRightStyle: 'solid',
                        borderRightColor: 'black',
                        borderWidth: '1px',
                        paddingTop: '2vw',
                        paddingBottom: '2vw',
                        width: '20vw',
                        minWidth: '300px'
                    }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/PortfolioSite"
                            color={textColor}
                            sx={{
                                fontFamily: 'sans-serif',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                            }}
                        >
                            JACOB RAWUNG
                        </Typography>

                        <Typography
                            color={textColor}
                            sx={{
                                paddingTop: '1vw'
                            }}
                        >
                            CONNECT ON:
                        </Typography>
                    
                        <Box sx={{ flexGrow: 0 }}>
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
                        </Box>
                        <Box
                            sx={{
                                paddingTop: '2vw',
                                paddingBottom: '2vw',
                                paddingLeft: '10px',
                            }}
                        >
                            <Typography
                                color={textColor}
                            >
                            <ul style={{listStyleType: 'none', lineHeight: '40px'}}>
                                <li>This website is written in ReactJS by Jacob Rawung.</li>
                                <li>Have a look at my source code <a href="https://github.com/jacobRaw/PortfolioSite">here.</a></li>
                            </ul>
                            </Typography>
                        </Box>
                </Container>
                </AppBar>
        </React.Fragment>
  );
}