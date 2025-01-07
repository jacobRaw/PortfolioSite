import Navbar from '../components/Navbar';
import { styled } from '@mui/system';
import profilePicture from '../headshot.png';
import React from 'react';

// const MainContent = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '20px',
//     fontFamily: 'sans-serif',
//     marginLeft: '100px',
//     marginRight: '100px',
// });

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
    height:'50%',
    display: 'block',
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
    zIndex: '10',
    textAlign: 'right',
    margin: '0 5%',
    position:'absolute',
    top: '0',
    left: '0',
})

const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    
    //paddingRight: '24px',
})

export default function Home () {
    return (
        <>
        <Navbar/>
        <ProfileContainer>
            <BlurredEdge/>
            <ProfileOverlay/>
            <ProfilePicture src={profilePicture} alt="Profile picture"/>
            <WelcomeMessage>
                Mechatronics and Computer Science Undergraduate
                Best Engineer
            </WelcomeMessage>
        </ProfileContainer>
        </>
    );
}