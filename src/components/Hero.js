import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/jupiter.svg'
import PlanetTwo from '../images/neptune.svg'
import PlanetThree from '../images/planet.svg'
import PlanetFour from '../images/uranus.svg'


const Section = styled.section`
height: 100vh;
display:flex;
justify-content:center;
align-items:center;
background:#131313;
`;

const Container = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
height:100vh;
padding:3rem clac((100vw - 1300px)/2);

@media screen and (max-width:650px){
    padding:1rem clac((100vw - 1300px)/2);
    grid-template-columns:1fr;
    grid-template-rows:1fr 2fr;
}
`;

const ColumnLeft = styled.div`
display:flex;
color:#fff;
flex-direction:column;
align-items:flex-start;
padding:5rem 2rem;

h1 {
    margin-bottom:0.5rem;
    font-size:2rem;
}

p{
    margin:2rem 0;
    font-size:4rem;
    line-height: 1.1;
}
@media screen and (max-width:650px){
    padding:2rem 1rem;
    h1 {
    margin-bottom:0.5rem;
    font-size:1.25rem;
    }

    p{
        margin:1.25rem 0;
        font-size:2rem;
        line-height: 1;
    }
}
`;

const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size:1rem;
border: 2px solid #fff;
border-radius:4px;
outline:none;
cursor:pointer;
background:transparent;
color:#fff;
`;

const Image = styled(motion.img)`
position:absolute;
width:100%;
height:100%;
max-width:250px;
max-height:250px;

@media screen and (max-width:800px){
    max-width:200px;
    max-height:200px;
}

@media screen and (max-width:650px){
    max-width:140px;
    max-height:140px;
}
`;
const ColumnRight = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:2rem;
position:relative;

${Image}:nth-child(1){
    top:10px;
    left:10px;
}
${Image}:nth-child(2){
    top:170px;
    right:50px;
}
${Image}:nth-child(3){
    top:350px;
    left:-180px;
}
${Image}:nth-child(4){
    bottom:10px;
    right:75px;
}
@media screen and (max-width:650px){
    ${Image}:nth-child(1){
        top:0px;
        left:10px;
    }
    ${Image}:nth-child(2){
        top:100px;
        right:-8px;
    }
    ${Image}:nth-child(3){
        top:200px;
        left:20px;
    }
    ${Image}:nth-child(4){
        bottom:8px;
        right:15px;
    }
}
`;

export default function Hero() {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Welcome to Space</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >Start new Journey</motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, backgroundColor: '#FF9838', color: '#000' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={PlanetOne} alt="planet" 
                        whileTap={{scale:0.9}}
                        drag={true}
                        dragConstraints={{left:0,right:100,top:0,bottom:100}}
                        initial={{opacity:0,y:-100}}
                        animate={{opacity:1,y:0,transition:{duration:1}}}
                    />
                    <Image src={PlanetTwo} alt="planet" 
                        whileTap={{scale:0.6}}
                        drag={true}
                        dragConstraints={{left:50,right:0,top:0,bottom:50}}
                        initial={{opacity:0,x:100}}
                        animate={{opacity:1,x:0,transition:{duration:1}}}
                    />
                    <Image src={PlanetThree} alt="planet" 
                        whileTap={{scale:0.8}}
                        drag={true}
                        dragConstraints={{left:0,right:250,top:0,bottom:50}}
                        initial={{opacity:0,x:-100}}
                        animate={{opacity:1,x:0,transition:{duration:1}}}
                    />
                    <Image src={PlanetFour} alt="planet" 
                        whileTap={{scale:0.9}}
                        drag={true}
                        dragConstraints={{left:0,right:0,top:0,bottom:0}}
                        initial={{opacity:0,y:100}}
                        animate={{opacity:1,y:0,transition:{duration:1}}}
                    />
                </ColumnRight>
            </Container>
        </Section>
    )
}
