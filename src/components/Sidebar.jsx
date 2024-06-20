import React from 'react';
import { Box, Avatar, VStack, Heading, IconButton, useDisclosure, CloseButton, Button, Text, Collapse } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { SlBasketLoaded } from "react-icons/sl";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineAccountBalance, MdMiscellaneousServices } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiAlignItemRightLine } from "react-icons/ri";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isSupportOpen, onToggle: onSupportToggle } = useDisclosure();

  const user = {
    name: 'Sam Teng',
    avatarUrl: 'https://bit.ly/dan-abramov', // Replace with actual URL
  };

  const menuItems = [
    { name: 'Dashboard', icon: LuLayoutDashboard },
    { name: 'Orders', icon: SlBasketLoaded },
    { name: 'Items', icon: RiAlignItemRightLine },
    { name: 'Reports', icon: HiOutlineDocumentReport },
    { name: 'Payouts & Account', icon: MdOutlineAccountBalance },
    { name: 'Services', icon: MdMiscellaneousServices },
    
  ];

  return (
    <>
      {!isOpen && (
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          position="fixed"
          left={4}
          top={5}
          onClick={onOpen}
        />
      )}
      {isOpen && (
        <Box
          w="250px"
          bg="#383838"
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
            <CloseButton alignSelf="flex-end" color={'white'} onClick={onClose} />
            <Box w="full">
              {menuItems.map((item) => (
                <Button
                  color={'white'}
                  key={item.name}
                  variant="ghost"
                  w="full"
                  justifyContent="flex-start"
                  px={4}
                  py={2}
                  _hover={{ bg: '#B31C1C' }}
                  onClick={() => navigate(`/${item.name}`)}
                >
                  <item.icon size={30} style={{ marginRight: '10px' }} />
                  {item.name}
                </Button>
              ))}
              <Button
                color={'white'}
                variant="ghost"
                w="full"
                justifyContent="flex-start"
                px={4}
                py={2}
                _hover={{ bg: '#B31C1C' }}
                onClick={onSupportToggle}
              >
                <BiSupport size={30} style={{ marginRight: '10px' }} />
                   Support 
                <IoIosArrowDown size={20} style={{ marginLeft: '20px' }} />
              </Button>
              <Collapse in={isSupportOpen} animateOpacity>
                <Box pl={4}>
                  <Button
                    color={'white'}
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    px={4}
                    py={2}
                    _hover={{ bg: '#B31C1C' }}
                    onClick={() => navigate('/Open Cases')}
                  >
                    <PiSuitcaseSimpleDuotone size={30} style={{ marginRight: '10px' }} />
                    Open Cases
                  </Button>
                  <Button
                    color={'white'}
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    px={4}
                    py={2}
                    _hover={{ bg: '#B31C1C' }}
                    onClick={() => navigate('/Help Center')}
                  >
                    <IoMdHelpCircleOutline size={30} style={{ marginRight: '10px' }} />
                    Help Center
                  </Button>
                </Box>
              </Collapse>
            </Box>
          </VStack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
