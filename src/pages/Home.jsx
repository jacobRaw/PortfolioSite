import Navbar from '../components/Navbar';
import { styled } from '@mui/system';
import profilePicture from '../headshot.png';
import React from 'react';
import Container from '@mui/material/Container';
import { grey } from "@mui/material/colors";
import unswIcon from '../unsw.svg';
import macUniIcon from '../macquarieUniIcon.png';

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
    flex: '7',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: `${textColor}`,
    display:'flex',
    flexDirection: 'column',
})

const TitleMessage = styled('div')({
    fontFamily: 'Times New Roman',
})

const MissionStatement = styled('div')({
    fontWeight: 'normal',
    fontSize: '1.5rem',

})

const WelcomeMessageContainer = styled(Container) ({
    display: 'flex',
})

const PictureFiller = styled('div') ({
    flex: '4',
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
                        <ul style={{listStyleType: 'none', lineHeight: '75px'}}>
                            <li>Mechatronics Engineer</li> 
                            <li>Computer Scientist</li> 
                            <li>Undergraduate</li> 
                        </ul>
                    </TitleMessage>
                    <MissionStatement>
                        <b>Jacob Rawung</b> has experience with over <b>5 different</b> programming languages and built this website in React.  
                    </MissionStatement>
                </WelcomeMessage>
                <img src={unswIcon} alt="UNSW logo" style={{height: '500', width:'500px'}}/> 
                {/* <img src={macUniIcon} alt="Macquarie University logo"/> */}
            </WelcomeMessageContainer>
            </ProfileOverlay>
            <ProfilePicture src={profilePicture} alt="Profile picture"/>
        </ProfileContainer>
        </>
    );
}