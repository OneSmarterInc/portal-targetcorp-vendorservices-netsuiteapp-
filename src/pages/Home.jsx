import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Image } from '@chakra-ui/react';
import group from '../assets/group.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
    const navigate = useNavigate();
  return (
    <>
    <Box h={'100vh'}>
      {/* Header */}
     <Navbar />
   
      {/* Main Section */}
     {/* <Image src={group} w={'72%'} m={'auto'}></Image> */}
     <Box w='100%' h='200px' bg={'white'}>
     <Box py={20} textAlign="center" w={'70%'} m={'auto'}>
        <VStack spacing={8}>
          {/* <Heading as="h2" size="2xl">Welcome to Best Buy
          Partner Portal</Heading>
          <Text fontSize="xl">We at Best Buy work hard every day to enrich the lives of consumers through technology, whether they come to us online, visit our stores or invite us into their homes. We do this by solving technology problems and addressing key human needs across a range of areas.</Text>   */}
        </VStack>
      </Box>
      </Box>
    </Box>
    <Footer />
    </>
  );
};

export default Homepage;
