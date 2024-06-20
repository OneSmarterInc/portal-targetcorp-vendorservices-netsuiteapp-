import { Text, Image, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import service1 from '../assets/services.png';
import service2 from '../assets/servive 2.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Service = () => {

    return(
        <>
        <Navbar/>

        <Image src={service1} w={'91%'} m={'auto'}></Image>
        <Image src={service2} w={'91%'} m={'auto'}></Image>
        {/* <Image src={plan} w={'72%'} m={'auto'}></Image> */}
        <Footer />
        </>
    )};
export default Service;