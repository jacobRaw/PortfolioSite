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
import githubLogo from '../resources/GitHub-logo.png';
import gitlabLogo from '../resources/gitlab-logo.jpg';
import vscodeLogo from '../resources/vscode-logo.png';
import visualStudioLogo from '../resources/visualStudio-logo.png';
import wslLogo from '../resources/wsl-logo.webp';
import dockerLogo from '../resources/docker-logo.png';
import creoLogo from '../resources/creo-logo.webp';
import solidworksLogo from '../resources/solidworksLogo.png';
import fusion360Logo from '../resources/fusion360-logo.png';
import altiumLogo from '../resources/Altium_Designer_Logo.png';
import verilogLogo from '../resources/verilog-logo.svg';
import matlabLogo from '../resources/matlab_logo.png';
import webotsLogo from '../resources/webots_logo.png';
import URlogo from '../resources/UR_logo.png';
import cppLogo from '../resources/c++logo.png';
import arduinoLogo from '../resources/arduino-logo.png';
import javaLogo from '../resources/java-logo.png';
import cLogo from '../resources/c-logo.png';
import pythonLogo from '../resources/python-logo.jpg';
import latexLogo from '../resources/latex-logo.png';
import FWDpantry from '../resources/4wdPantry.jpg';
import vanuatuGardening from '../resources/vanuatuGardening.png';

const textColor = grey[900];
const eduColor = grey[100];

const skills = [
    {
        title: 'JavaScript',
        description: 'Implemented both frontend and backend of websites using JS.',
        img: jsLogo,
        width: '30%',
    },
    {
        title:'TypeScript',
        description: 'Implemented backend of a website for a mock of Microsoft teams. This project was built in a team of four as a university semester major work.',
        img: tsLogo,
        width: '30%',
    },
    {
        title: 'ReactJS',
        description: 'Built multiple frontends websites as single page applications and using routers to obtain a fast and professional user experience.',
        img: reactLogo,
        width:'45%',

    },
    {
        title: 'Material UI',
        description: 'Used to enhance frontends by improving accessibility and modernising the website. This also improves development time.',
        img: muiLogo,
        width: '30%',
    },
    {
        title: 'HTML',
        description: 'Strong use of HTML in frontend development to structure the page.',
        img: htmlLogo,
        width: '30%',
    },
    {
        title: 'CSS',
        description: 'Used to enrich the user experience by decorating functions and typography.',
        img: cssLogo,
        width: '60%',
    },
    {
        title: 'GitHub',
        description: 'Heavily used throughout my degree to store work and for team projects. On a grander scale GitHub was utilised best in Sunswift such as CI/CD and to push code to AWS.',
        img: githubLogo,
        width: '60%'
    },
    {
        title:'GitLab',
        description: 'Primarily used for assignments and weekly tasks for course work. The "issue" task system was also utilised for team projects to keep track of tasks.',
        img: gitlabLogo,
        width: '70%',
    },
    {
        title: 'Visual Studio',
        description: 'This IDE was used to program in C++ for Robotics courses. This included multithreaded applications.',
        img: visualStudioLogo,
        width: '60%',
    },
    {
        title: 'Visual Studio Code',
        description: 'Primary development environment, allows ease of access to WSL terminal and has more customization by adding extensions.',
        img: vscodeLogo,
        width: '60%',
    },
    {
        title: 'WSL',
        description: 'All programming development and software is stored in WSL. This allows me to seggregate my computer science course from engineering courses. The linux environment also enhances my programming experience.',
        img: wslLogo,
        width:'70%',
    },
    {
        title:'Docker',
        description: 'Used in Sunswift to quickly push new software to the onhoard computer. I interacted with the software by SSHing onto the onboard computer and performing manual reboots and pulling correct branches from the GitHub.',
        img: dockerLogo,
        width: '40%',
    },
    {
        title: 'Creo',
        description: 'This CAD software is used at Macquarie University. I built my first assignments and designed my 4WD pantry in this software.',
        img: creoLogo,
        width: '30%',
    },
    {
        title: 'SolidWorks',
        description: 'Made small dimension constrained parts for a group project during the conceptual design phase.',
        img: solidworksLogo,
        width:'70%',
    },
    {
        title:'Fusion 360',
        description: 'My currently preferred CAD software. I used this software to design my Van bed frame.',
        img: fusion360Logo,
        width: '100%',
    },
    {
        title: 'Altium',
        description: 'Used Altium to design my first PCB. I built a buck converter for Sunswift and identified problems and inefficiencies in colleagues designs.',
        img: altiumLogo,
        width:'45%'
    },
    {
        title: 'Verilog',
        description: 'Programmed FPGA for a digital design course. This involved creating binary calculators and learning how to store memory using logic gates.',
        img: verilogLogo,
        width: '60%',
    },
    {
        title: 'C++',
        description: 'Vast experience with C++ in robotics course. This involved multithreaded programing and was exposed to C++ CLI. C++ was also used to program the central computer on the Sunswift vehicle. This meant my cruise control system was built in C++.',
        img: cppLogo,
        width: '30%',
    },
    {
        title: 'Universal Robots',
        description: 'Unverisal Robots is the company that manufacture the 6 axis robot arms used in a robotics course. We programmed this machine to perform intricate tasks such as navigating a maze and pairing this with computer vision to identify different blocks to play a game.',
        img: URlogo,
        width: '70%',
    },
    {
        title: 'Webots',
        description: 'Robotic simulation software that was used in a Robotics course. The assignment involved programmign a car move to autonomously travel to different targets using LIDAR and radar avoiding obtacales in its path.',
        img: webotsLogo,
        width: '40%',
    },
    {
        title: 'Arduino',
        description: 'Vast experience using Arduinos for assignments and personal projects. Some projects include, line following robot, remote control car, strain gauge digital scales, LED matrix bop it game, motor controller and using instrumental amplifiers to interface with sensitive sensors.',
        img: arduinoLogo,
        width: '45%',
    },
    {
        title: 'Java',
        description: 'First exposure to object oriented programming. It was taught in a course about design practices and patterns. This exposed me to decorator, code smells, subscriber/publisher, abstraction, composite, facade, adapter and factory patterns.',
        img: javaLogo,
        width: '20%'
    },
    {
        title: 'C',
        description: 'First programming language taught at UNSW and is used to program the low level microcontrollers on the Sunswift vehicle. This programming lanugage introduced me to pointers, stack and the heap.',
        img: cLogo,
        width: '30%'
    },
    {
        title: 'Python',
        description: 'Primarily used numpy in data analysis as part of a physics course at Macqurie University. At UNSW used as a scripting lanugage to interact with other files for intricate data filtering/scraping.',
        img: pythonLogo,
        width: '27.5%',
    },
    {
        title:'Latex',
        description: 'Used to write all assignments and professional reports.',
        img: latexLogo,
        width: '50%'
    },
    {
        title: 'Matlab',
        description: 'Primarily used in Engineering courses to interact with robots or in control system courses to create simulations.',
        img: matlabLogo,
        width: '70%',
    }
]

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

const SkillContent = styled('span')({
    position:'relative',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%',
   backgroundColor:'white',
    transition:'all .3s ease-in-out',
    borderRadius: '10px 0px 10px 0px',
    zIndex: '1',
    'button:hover > &': {
        zIndex:'2',
        transform: 'translateY(83%)',
        height:'120%',
        boxShadow: '0px 0px 15px 5px grey',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius:'0px',
        //backgroundColor: 'white',
    }
})

const SkillLogo = styled('span')({
    position: 'relative',
    left:'0',
    top: '0',
    zIndex:'10',
    transition:'all .3s ease-in-out',
    backgroundColor: 'white',
    display:'block',
    width:'100%',
    height: '100%',
    borderTopLeftRadius: '10px',
})

const SkillBox = styled('button')({
    '&:hover':{
        cursor:'pointer',
        zIndex:'9',
        transform:'translateY(-4px)',
        borderBottomRightRadius: '0px',
        boxShadow: '0px 0px 15px 5px grey',
        overflow:'visible',
    },
    boxShadow: '0px 0px 5px 0px grey',
    width: '20%',
    padding: '0',
    borderRadius: '10px 0px 10px 0px',
    backgroundColor: 'white',
    border: 'none',
    transition:'all .3s ease-in-out',
    position: 'static',
    height:'100px',
    zIndex:'2',
    display:'block',
    overflow:'hidden',
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
                        <b>Jacob Rawung</b> has experience with over <b>5 different</b> programming languages and built this website in ReactJS.  
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
                        img: `${FWDpantry}`, 
                        role:'Personal Project', 
                        description: 'hello',
                        time: 'Jan 2023 - Dec 2023',
                }}/>
                <ProjectCard 
                    project={{
                        name: 'EWB Digital Design Summit', 
                        img: `${vanuatuGardening}`, 
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
                        <img src={unswIcon} alt={'unsw logo'} style={{width: '15%', height: '15%'}}/>
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
                        <img src={macUniIcon} alt={'macquarie uni logo'} style={{width: '15%', height: '20%'}}/>
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
                <div>List of all technical skills such as CAD softwares, programming languages and dev tools. Please click on a skill to learn more about my experience.</div>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '2vw'}}>
                {skills.map((skill) => {
                    let altTag = `${skill.title} logo`;
                    return (
                        <SkillBox>
                            <SkillLogo>
                                <img src={skill.img} alt={altTag} style={{width: `${skill.width}`, objectFit: 'contain'}}/>
                            </SkillLogo>
                            
                            <SkillContent>
                                <h4 style={{marginBottom:'1vw'}}>{skill.title}</h4>
                                <p>
                                    {skill.description}
                                </p>
                            </SkillContent>
                        </SkillBox>
                    )
                })}
                </div>
            </Container>
        </div>
        <Footer/>
        </>
    );
}
