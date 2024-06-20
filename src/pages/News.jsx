import { Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import plan from '../assets/news.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const News = () => {

    return(
        <>
        <Navbar/>
        <Image src={plan} w={'100%'} m={'auto'}></Image>
        {/* <Image src={plan} w={'72%'} m={'auto'}></Image> */}
        <Footer />
        </>
    )};
export default News;