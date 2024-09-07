'use client'
import { Box, Button, Center, Heading, LightMode, Stack, Text } from "@chakra-ui/react";
import { FaMapPin, FaWhatsapp } from 'react-icons/fa';

export default function Home() {


  const locationDirection = () => {
    window.open("https://www.google.com/maps/dir/33.8786874,72.5559743/altaf+sewing+machine+%26+repairing+centre/@33.8411472,72.290594,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df18157aa1e08d:0x899d79a7a0abf8f6!2m2!1d72.3540338!2d33.7714885?entry=ttu", 
      "_blank",  "noopener"); // Opens in a new tab
    
  };
  const whatsApp = () => {
    window.open("https://wa.me/message/ELMU6JNQKU2YA1", "_blank",   ); // Opens in a new tab
    
  };

  return (

    <Box>
      <Box
      as="section"
      py="12"
      position="relative"
      h='100vh'
      bgImage="url(https://images.unsplash.com/photo-1616441566058-867bfa0a6cda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: 'block',
        w: 'full',
        h: 'full',
        bg: 'blackAlpha.800',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
      <Box
        maxW={{ base: 'xl', md: '5xl' }}
        mx="auto"
        px={{ base: '6', md: '8' }}
        py="12"
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center flexDirection="column" textAlign="center" color="white" h="full">
          <Heading size="3xl" as="h1"  maxW="48rem" fontWeight="extrabold"  lineHeight="1.2"
              letterSpacing="tight">
          Altaf Sewing Machine & Repairing Centre
          </Heading>
          <Text fontSize={{ base: 'md', md: 'xl' }} mt="6" maxW="xl" mx="auto" textAlign="justify">
              Altaf Sewing Machine & Repairing Centre is a trusted and reputable provider of sewing machines repair, maintenance and Buy/Sell services with a primary focus on customer satisfaction.
            </Text> 
            <Stack
            justify="center"
            direction={{ base: 'column', md: 'row' }}
            mt="10"
            mb="18"
            spacing="7"
          >
            <LightMode>
              <Button size="lg" colorScheme="green" px="8" fontWeight="bold" fontSize="md" onClick={whatsApp} leftIcon={<FaWhatsapp/>}>
                WhatsApp
              </Button>
              <Button size="lg" colorScheme="whiteAlpha" px="8" fontWeight="bold" fontSize="md" onClick={locationDirection} leftIcon={<FaMapPin/>}>
               Direction
              </Button>
            </LightMode>
          </Stack>
        </Center>
      </Box>
     
    </Box>
    </Box>
  )


}
