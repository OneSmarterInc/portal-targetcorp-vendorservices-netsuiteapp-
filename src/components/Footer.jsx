import { Box, Text, Image, HStack } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/copyright.png';

const Footer = () => {
  return (
    <Box as="footer"  color="white" py={4} px={8}>
     
        <hr/>
        <Image src={logo} alt="Best Buy Logo" h="150px" w="380px" style={{margin:'auto'}}/>
    
    </Box>
  );
};

export default Footer;
