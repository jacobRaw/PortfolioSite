import Navbar from '../components/Navbar';
import { styled } from '@mui/system';
import profilePicture from '../resources/headshot.png';
import React from 'react';
import Container from '@mui/material/Container';
import { grey } from "@mui/material/colors";
import unswIcon from '../resources/unsw.svg';
import macUniIcon from '../resources/macquarieUniIcon.svg';
import ewbIcon from '../resources/ewb_australia.png';
import Footer from '../components/Footer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SR7 from '../resources/SR7.png';
import Divider from '@mui/material/Divider';
import jsLogo from '../resources/JavaScript-logo.png';
import tsLogo from '../resources/Typescript_logo.png';
import reactLogo from '../resources/reactjs-logo.png';
import muiLogo from '../resources/material-ui-1.svg';
import htmlLogo from '../resources/html-logo.png';
import cssLogo from '../resources/CSS-Logo-2011.png';


const textColor = grey[900];
const eduColor = grey[100];

const ProfilePicture = styled('img')({
    height: "100%",
    width: "40%",
    objectFit: 'cover',
    display:'block',
})

const ProfileOverlay = styled('div')({
    width:'100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to left, grey 25%, transparent)',
    position: 'absolute',
    top: 0,
    left: 0,
})

const ProfileContainer = styled('div')({
    width: '100%',
    position: 'relative',
})

const BlurredEdge = styled('div')({
    width: '40%',
    height: '100%',
    boxShadow: '-10px 0px 5px -2px white inset',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: '0',
    left: '0',
})

const WelcomeMessage = styled('div')({
    textAlign: 'right',
    zIndex: '10',
    flex: '2',
    color: `${textColor}`,
    display:'flex',
    flexDirection: 'column',
})

const TitleMessage = styled('div')({
    fontFamily: 'Times New Roman',
    fontSize: '3vw',
    fontWeight: 'bold',
})

const MissionStatement = styled('div')({
    fontWeight: 'normal',
    fontSize: '1.75vw',
})

const WelcomeMessageContainer = styled(Container) ({
    display: 'flex',
    flexDirection:'row',
    gap: '20px',
    height: '100%',
})

const PictureFiller = styled('div') ({
    flex: '2',
    width: '100%',
})

const IconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3vw',
    gap: '2vw',
})

const IconDiv = styled('div')({
    width: '70%',
    height: '70%',
})

export default function Home () {

    return (
        <>
        <Navbar/>
        <ProfileContainer>
            <BlurredEdge/>
            <ProfileOverlay>
            <WelcomeMessageContainer>
                <PictureFiller/>
                <WelcomeMessage>
                    <TitleMessage>
                        <ul style={{listStyleType: 'none', lineHeight: '4vw'}}>
                            <li>Mechatronics Engineer</li> 
                            <li>Computer Scientist</li> 
                            <li>Undergraduate</li> 
                        </ul>
                    </TitleMessage>
                    <MissionStatement>
                        <b>Jacob Rawung</b> has experience with over <b>5 different</b> programming languages and built this website in React.  
                    </MissionStatement>
                    <IconContainer>
                        <IconDiv>
                            <img src={unswIcon} alt="UNSW logo" style={{objectFit: 'contain', width: '100%', height: '100%'}}/> 
                        </IconDiv>
                        <IconDiv>
                            <img src={macUniIcon} alt="Macquarie University logo" style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                        </IconDiv>
                        <IconDiv>  
                            <img src={ewbIcon} alt="EWB logo" style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                        </IconDiv>
                    </IconContainer>
                </WelcomeMessage>
            </WelcomeMessageContainer>
            </ProfileOverlay>
            <ProfilePicture src={profilePicture} alt="Profile picture"/>
        </ProfileContainer>
        <div style={{backgroundColor: eduColor, paddingTop: '2vw', paddingBottom: '2vw'}}>
        <Container>
            <h1 style={{textAlign: 'center', marginBottom: '0.7vw', marginTop: '0'}}>Recent Experience and Projects</h1>
            <div style={{textAlign: 'center'}}>My most recent professional achievements or you can access all of my projects here.</div>
            <div style={{marginTop: '3vw', display:'flex', justifyContent:'space-between', flexWrap: 'wrap', gap:'1vw'}}>
                <ProjectCard 
                    project={{
                        name: 'Van Bed Frame', 
                        img: 'van picture', 
                        role:'Personal Project', 
                        description: 'hello',
                        time: 'Dec 2024',
                }}/>
                <ProjectCard 
                    project={{
                        name: 'Sunswift', 
                        img: `${SR7}`, 
                        role:'Embedded Systems Software Engineer', 
                        description: 'hello',
                        time: 'Sep 2023 - Dec 2024',
                }}/>
                <ProjectCard 
                    project={{
                        name: '4WD Pantry', 
                        img: `${SR7}`, 
                        role:'Personal Project', 
                        description: 'hello',
                        time: 'Jan 2023 - Dec 2023',
                }}/>
                <ProjectCard 
                    project={{
                        name: 'EWB Digital Design Summit', 
                        img: 'EWB logo', 
                        role:'Humanitarian Engineering Consultant', 
                        description: 'hello',
                        time: 'Jan 2022 - Feb 2022',
                }}/>
                
            </div>
            <div style={{textDecoration: 'underline', textAlign: 'center', marginTop:'2vw'}}>View all projects</div>
        </Container>
        </div>
        <div style={{backgroundColor: 'white'}}>
            <Container>
                <h1>Education</h1>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex'}}>
                        <img src={unswIcon} style={{width: '15%', height: '15%'}}/>
                            <ul style={{listStyleType:'none', textAlign: 'center', width:'100%', lineHeight: '3vh', marginTop:'0px'}}>
                                <li>
                                    <b>Bachelor of Engineering (Mechatronics) and Computer Science</b>
                                </li>
                                <li>
                                    University of New South Wales Sydney, Kensington Campus
                                </li>
                                <li>
                                    February 2022 - December 2026
                                </li>
                                <li>
                                    WAM: 79.934
                                </li>
                            </ul>
                    </div>
                    <div style={{display: 'flex'}}>
                        <img src={macUniIcon} style={{width: '15%', height: '20%'}}/>
                            <ul style={{listStyleType:'none', textAlign: 'center', width:'100%', lineHeight: '3vh', marginTop:'0px'}}>
                                <li>
                                    <b>Bachelor of Engineering (Mechatronics) and Astrophysics</b>
                                </li>
                                <li>
                                    Macquarie University Sydney, Wallumattagal Campus
                                </li>
                                <li>
                                    February 2020 - December 2021
                                </li>
                                <li>
                                    WAM: 86.267
                                </li>
                            </ul>
                    </div>
                </div>
            </Container>
            <Container>
                <Divider/>
                <h1>Skills</h1>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{display:'flex', gap:'1vw', width:'35%'}}>
                            <img src={jsLogo} style={{width: '20%', objectFit: 'contain'}}/>
                            <img src={tsLogo} style={{width: '20%', objectFit: 'contain'}}/>
                            <img src={reactLogo} style={{width: '35%', objectFit: 'contain'}}/>
                            <img src={muiLogo} style={{width: '30%', objectFit: 'contain'}}/>
                            <img src={htmlLogo} style={{width:'30%', objectFit: 'contain'}}/>
                            <img src={cssLogo} style={{width: '55%', objectFit: 'contain'}}/>
                        </div>
                        <ul style={{listStyleType:'none', textAlign: 'center', width:'100%', lineHeight: '3vh', marginTop:'0px'}}>
                            <li>
                                <b>Web Development</b>
                            </li>
                            <li>
                                University of New South Wales Sydney, Kensington Campus
                            </li>
                            <li>
                                February 2022 - December 2026
                            </li>
                            <li>
                                WAM: 79.934
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
        <Footer/>
        </>
    );
}