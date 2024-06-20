
import React, { useState } from 'react';
import plan from '../assets/buy 3.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Heading, Button, VStack, HStack, Image, Input,Text } from '@chakra-ui/react';
import { MdPerson, MdLogout } from 'react-icons/md';
import { MdHelp } from 'react-icons/md';

const Dashboard = () => {

    return(
        <>
        <Navbar/>
        <Box  color="Black" py={4} px={8}>
            <HStack justifyContent="space-between" alignItems="center">
                <HStack alignItems="center">
                    <Text w={"170px"} fontWeight={'bold'} fontSize={'20px'}>Dashboard</Text>
     
                   
                </HStack>
                <HStack spacing={4} alignItems="center">
                <Button bg={'SKYBLUE'} color={'white'}> LEARNING ON DOCEBO</Button>
                <Button  color={'green'} bg={'white'} borderRadius={'20px'} borderColor={'green'}>ESTABLISHED</Button>
                <Button  color={'green'} bg={'white'} borderRadius={'20px'} borderColor={'green'}>ESTABLISHED</Button>
                    
                </HStack>
            </HStack>
        </Box>
        </>
    )};
export default Dashboard;