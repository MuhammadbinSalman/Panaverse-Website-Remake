import React from 'react'
import { useMediaQuery,theme } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RevealWrapper } from 'next-reveal';
import { Tooltip, Avatar, AvatarBadge, AvatarGroup, Flex, Link,Hide, Show } from '@chakra-ui/react'
import {Box, Heading, Text, HStack, Image, Button} from '@chakra-ui/react'
export default function TopContainer() {

  return (
    <Box
      h={{sm:"md"}}
      as="section"
      backgroundImage={{lg:"/Images/sample_img.jpg", sm:"/Images/sample_imgsm.jpg", base:"/Images/sample_imgxs.jpg"}}
      // backgroundImage={{
      //   lg:"/Images/sample_img.jpg",
      //   md:"/Images/sample_imgsm.jpg",
      //   xs:"/Images/sample_imagexs.jpg"
        
      // }}
      backgroundSize={{lg:"cover", md:"cover", myCust:"cover", sm:"cover", xs:'cover'}}
      // backgroundAttachment={{lg:"fixed",md:"fixed",sm:"fixed",xs:"fixed"}}
      backgroundAttachment={{lg:"fixed"}}
      // bgRepeat={{lg:"no-repeat",md:"no-repeat",sm:"no-repeat",xs:"no-repeat"}}
      bgRepeat={"no-repeat"}
      py="1"
      mt="1"
    >
      <RevealWrapper delay={200} duration={1000} distance='500px' reset={true}>
      <HStack>
        {/* left */}
        <Box
          w={{ base: "95%", lg: "70%", md:"100%"}}
          color={"white"}
          pl={{ base: "10", lg: "44" }}
          pt={{ base: "10"}}
          >
          <Heading fontSize={{lg:"60",md:"40", sm:"50", base:"30"}} color="white" textAlign={{md:"center", lg:"left", base:"left"}}>Web 3.0 and Metaverse <Show below="lg"><br/></Show>developer</Heading>
          <Text lineHeight={"6"} textAlign={{md:"center",lg:"left"}}>
          A One and Quarter Years Panaverse DAO Earn as you Learn Program<Show below="lg"><br/></Show>Getting Ready for the Next Generation of the Internet
          </Text>

          <Box mt={5}>
            <Link href='https://www.piaic.org' target={'_blank'} _hover={{ textDecoration: "none" }}>
              <Button size="lg" colorScheme={"blue"} mr="5" _hover={{ transform: "scale(1.1)" }} _active={{ bg: '#dddfe2', transform: 'scale(0.98)', borderColor: '#bec3c9' }}>Learn more</Button>
            </Link>
          </Box>
          <Flex alignItems={"center"}>
            <Tooltip label="Collaboraters">
            <AvatarGroup size="md" max={3} mt="5">
              <Avatar name='Zia Khan' src='/Images/Sir Zia Khan.png' />
              <Avatar name='Adil Altaf' src='Images/Sir Adil Altaf.png' />
              <Avatar name='Muhammad Bin Salman' src='/Images/Muhammad.png' />
              <Avatar name='Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
              <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </AvatarGroup>
            </Tooltip>
            <Text mt={"5"} ml={"3"}>Made by: <Link target={"_blank"} color={"blue.1000"} href="https://github.com/MuhammadbinSalman">Muhammad Bin Salman</Link></Text>
          </Flex>
        </Box>
        {/* right */}
        <Hide below="lg">
          <Box w="40%" 
          pt={{md:"-40",lg:"2"}}
          >
            <motion.img
            src='Images/panaverse_home.png'
            alt="Moving image"
            animate={{
              y: [-10, 0, -10], // move the image up and down by 10 pixels
            }}
            transition={{
              duration: 2, // set the duration of the animation to 2 seconds
              repeat: Infinity, // repeat the animation indefinitely
              repeatType: "reverse", // reverse the animation on each repeat
            }}
            />
          </Box>
        </Hide>
      </HStack>
          </RevealWrapper>
    </Box>
      // <HStack>
      // <Box w="50%" ml={"44"} color={"white"} backgroundImage="/Images/sample_img.jpg">
      //   <Heading fontSize={"60"}>Web 3.0 and Metaverse developer</Heading>
      //   <Text lineHeight={"7"}>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</Text>
      //     <Box mt={"5"}>
      //       <Button colorScheme={"blue"} variant="outline">View Components</Button>
      //     </Box>
      //     <Flex alignItems={"center"}>
      //       <AvatarGroup size='md' max={3} mt="5">  
              // <Avatar name='Zia Khan' src='/Images/Sir Zia Khan.png' />
              // <Avatar name='Adil Altaf' src='Images/Sir Adil Altaf.png' />
              // <Avatar name='Muhammad Bin Salman' src='/Images/Muhammad.png' />
              // <Avatar name='Owais Ali' src='https://chakrademosite-ows-ali.vercel.app/me.jpg' />
              // <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      //       </AvatarGroup>
      //       <Text mt={"5"} ml={"3"}>Made by: <Link target={"_blank"} color={"blue.1000"} href="https://github.com/MuhammadbinSalman">Muhammad Bin Salman</Link></Text>
      //     </Flex>
      // </Box>
      // <Box w="50%" boxSize={"md"}>
      //   <Image src='/Images/panaverse_home.png'/>
      // </Box>
      // </HStack>

  )
}
