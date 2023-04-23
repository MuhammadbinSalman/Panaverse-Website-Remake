import {
    Image,
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    Divider,
    useColorMode
  } from "@chakra-ui/react";
  import { motion,Variants } from "framer-motion";
  import React from "react"; 
  import { Card, CardHeader, CardBody, CardFooter,Link} from "@chakra-ui/react";
  import { IoIosSpeedometer } from "react-icons/io";
  import { FaCommentDollar } from "react-icons/fa";
  import { BsFillGearFill } from "react-icons/bs";
  import { MdSupportAgent } from "react-icons/md";
  export default function Highlights() {
    const {colorMode} = useColorMode() //for header theme
    return (
      <Box py="50" as="section" bg="blackAlpha.50" pt={{lg:"70",md:"50",sm:"50",xs:"50"}}>
        {/* top headers */}
        <Box textAlign={"center"}>
          <Heading fontWeight={"extrabold"} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text'>Specialised Tracks</Heading> 
          <Text fontSize={"20"} py="3">
          After completing the first two quarters the participants will select one or more specializations consisting of two courses each
          </Text>
        </Box>
        <Container maxW={1200} mt="5">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5}>
            <motion.div whileHover={{ scale: [null, 1.2, 1.15] }}transition={{ duration: 0.6 }}>
            <Card shadow="lg" align="center" height={"lg"} borderRadius="xl" overflow={"hidden"}>
              <CardHeader>
                <Center>
                <Image h="185" maxW={"260"} mt="-2" src="Images/Metaverse Card.jpg" alt="Metaverse and Web 3.0" borderRadius="lg"/>
                </Center>
                <Heading size="md" mt="5" textAlign={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                  Web 3.0 and Metaverse Specialization
                </Heading>
              </CardHeader>
              <CardBody pt="0">
                <Text align={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet
                </Text>
              </CardBody>
              <CardFooter mt="-9">
                <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link target="_blank" href="https://portal.piaic.org/" _hover={{ textDecoration: "none" }}>
                    <Button boxShadow={"lg"} borderRadius={"full"} color='white' fontWeight='semibold' bgGradient='linear(to-r, #408bd4,#4946db)' _hover={{ bgGradient: 'linear(to-r, #4946db,#408bd4)', }}>Apply Now</Button>
                  </Link>
                </motion.div>
              </CardFooter>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.2, 1.15] }}transition={{ duration: 0.6 }}>
            <Card shadow="lg" align="center" height={"lg"} borderRadius="xl" overflow={"hidden"}>
             <CardHeader>
                <Center>
                <Image maxW={"260"} mt="-2" src="Images/AI1.jpg" alt="AI image" borderRadius="lg"/>
                </Center>
                <Heading size="md" mt="5" textAlign={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                  Artificial Intelligence (AI) Specialization
                </Heading>
              </CardHeader>
              <CardBody pt="0">
                <Text align={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models
                </Text>
              </CardBody>
              <CardFooter>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="https://portal.piaic.org/" _hover={{ textDecoration: "none" }} target="_blank">
                    <Button boxShadow={"lg"} borderRadius={"full"} color='white' fontWeight='semibold' bgGradient='linear(to-r, #408bd4,#4946db)' _hover={{ bgGradient: 'linear(to-r, #4946db,#408bd4)', }}>Apply Now</Button>
                  </Link>
                </motion.div>
              </CardFooter>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.2, 1.15] }}transition={{ duration: 0.6 }}>
            <Card shadow="lg" align="center" height={"lg"} borderRadius="xl" overflow={"hidden"}>
            <CardHeader>
                <Center>
                <Image h="185" maxW={"260"} mt="-2" src="Images/CNC.png" alt="Metaverse and Web 3.0" borderRadius="lg"/>
                </Center>
                <Heading size="md" mt="5" textAlign={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                Cloud-Native Computing Specialization
                </Heading>
              </CardHeader>
              <CardBody pt="0">
                <Text align={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
                </Text>
              </CardBody>
              <CardFooter>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="https://portal.piaic.org/" _hover={{ textDecoration: "none" }} target="_blank">
                    <Button boxShadow={"lg"} borderRadius={"full"} color='white' fontWeight='semibold' bgGradient='linear(to-r, #408bd4,#4946db)' _hover={{ bgGradient: 'linear(to-r, #4946db,#408bd4)', }}>Apply Now</Button>
                  </Link>
                </motion.div>
              </CardFooter>
            </Card>
            </motion.div>
            <motion.div whileHover={{ scale: [null, 1.2, 1.15] }}transition={{ duration: 0.6 }}>
            <Card align="center" shadow="lg" borderRadius={"xl"} overflow="hidden" height={"lg"}>
            <CardHeader>
                <Center>
                <Image maxW={"260"} mt="-2" h={"185px"} src="Images/IOT.jpeg" alt="IOT image" borderRadius="lg"/>
                </Center>
                <Heading size="md" mt="5" textAlign={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                  Ambient Computing and IoT Specialization
                </Heading>
              </CardHeader>
              <CardBody pt="0">
                <Text align={"center"} color={colorMode == "dark"?"grey.600":"blackAlpha.700"}>
                The Ambient Computing and IoT Specialization focuses on building Smart Homes, and Cities using Voice computing and Embedded Devices.
                </Text>
              </CardBody>
              <CardFooter>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Link href="https://portal.piaic.org/" _hover={{ textDecoration: "none" }} target="_blank">
                    <Button boxShadow={"lg"} borderRadius={"full"} color='white' fontWeight='semibold' bgGradient='linear(to-r, #408bd4,#4946db)' _hover={{ bgGradient: 'linear(to-r, #4946db,#408bd4)', }}>Apply Now</Button>
                  </Link>
                </motion.div>
              </CardFooter>
            </Card>
            </motion.div>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }