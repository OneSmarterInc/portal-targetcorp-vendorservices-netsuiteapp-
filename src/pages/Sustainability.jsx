import { Text, Image, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import plan from '../assets/image005.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Sustainability = () => {

    return(
        <>
        <Navbar/>
        <Heading mb="20px">Sustainability</Heading>
        <Image src={plan} w={'95%'} m={'auto'}></Image>
        {/* <Image src={plan} w={'72%'} m={'auto'}></Image> */}
        <Footer />
        </>
    )};
export default Sustainability;