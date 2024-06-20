import React from 'react';
import { Box, Avatar, VStack, Heading, IconButton, useDisclosure, CloseButton, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = {
    name: 'Sam Teng',
    avatarUrl: 'https://bit.ly/dan-abramov', // Replace with actual URL
    
  };

  return (
    <>
      {!isOpen && (
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          position="fixed"
          left={4}
          top={4}
          onClick={onOpen}
        />
      )}
      {isOpen && (
        <Box
          w="250px"
          bg="#716B6B"
          p={4}
          borderRadius="md"
          boxShadow="lg"
          position="fixed"
          left={0}
          top={0}
          h="100vh"
          zIndex={999}
        >
          <VStack spacing={4} align="center">
            <CloseButton alignSelf="flex-end" onClick={onClose} />
            <Avatar size="2xl" src={user.avatarUrl} />
            <Heading size="md"  color={'white'}>{user.name}</Heading>
            <Box w="full">
              {['Dashboard', 'Orders', 'Items', 'Payouts & Account', 'Services'].map((item) => (
                <Button
                    color={'white'}
                  key={item}
                  variant="ghost"
                  w="full"
                  justifyContent="flex-start"
                  px={4}
                  py={2}
                  _hover={{ bg: '#B31C1C' }}
                  onClick={() => navigate(`/${item}`)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
