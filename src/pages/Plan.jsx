import { Text, Image, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import plan from '../assets/buy 3.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Plan = () => {

    return(
        <>
        <Navbar/>
        <Heading mb="20px">Plan</Heading>

        <Image src={plan} w={'91%'} m={'auto'}></Image>
        {/* <Image src={plan} w={'72%'} m={'auto'}></Image> */}
        <Footer />
        </>
    )};
export default Plan;