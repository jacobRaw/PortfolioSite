import Navbar from '../components/Navbar';
import { styled } from '@mui/system';
import profilePicture from '../headshot.png';
import React from 'react';
import Container from '@mui/material/Container';
import { grey } from "@mui/material/colors";
import unswIcon from '../unsw.svg';
import macUniIcon from '../macquarieUniIcon.svg';
import ewbIcon from '../ewb_australia.png';
import Footer from '../components/Footer.jsx';

const textColor = grey[900];

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
        <Container>
            <h1>Recent Experience and Projects</h1>
            <div>Sunswift - date, picture, description</div>
            <div>Van build</div>
            <div>4WD pantry</div>
            <div>EWB digital design summit</div>
            <h1>Education</h1>
            <div>UNSW - WAM, date</div>
            <div>Macquarie</div>
        </Container>
        <Footer/>
        </>
    );
}