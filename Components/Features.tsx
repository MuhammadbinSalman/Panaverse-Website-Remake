import { StarIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import {RevealWrapper} from "next-reveal"
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {GoVerified} from 'react-icons/go'
import { BiRocket } from "react-icons/bi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { FaPaintBrush } from "react-icons/fa";
import { RxCode } from "react-icons/rx";
import {MdProductionQuantityLimits} from "react-icons/md"

export default function Features() {
  return (
    <Box py="50" as="section" h={{lg:"650"}} mt="6" overflowX={"hidden"}>
      {/* top headers */}
      <Box textAlign={"center"}>
        <Heading fontWeight={"extrabold"} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text'>Benefits Of Joining Us</Heading>
        <Text fontSize={"20"} py="3">
        You will be Getting the opportunity to provide your services at a rate of $50/hour, enabling you to achieve <br/>financial stability while simultaneously contributing to the growth of Pakistan's software exports
        </Text>
      </Box>
      <Container maxW={1200} mt="10">
        {/* 6 features  */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"10"}>
            {/* feature 1 */}
            <RevealWrapper origin="left" delay={150} duration={1000} distance='500px' reset={true}>
              <Box>
                <HStack>
                  <Box color='blue.500'>
                    {/* <GoVerified width={"10"} h={10} /> */}
                    <GoVerified size={40} />
                  </Box>
                  <Box>
                    <Heading fontSize={18}>Product Ownership</Heading>
                    <Text>
                      you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO.
                    </Text>
                  </Box>
                </HStack>
                {/* feature 1 ends */}
              </Box>
            </RevealWrapper>

            {/* feature 2 */}
            <RevealWrapper origin="right" delay={150} duration={1000} distance='500px' reset={true}>
              <Box>
                <HStack>
                  <Box color={"blue.500"}>
                    <GoVerified size={40} />
                  </Box>
                  <Box>
                    <Heading fontSize={18}>Freelancing</Heading>
                    <Text>
                      You would be capable of earning through prominent freelancing platforms such as Upwork, Freelancer, and Fiverr, which enable developers to bid on projects and showcase their abilities
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </RevealWrapper>
            <RevealWrapper origin="left" delay={150} duration={1000} distance='500px' reset={true}>
              <Box mt={{ lg: 2 }}>
                <HStack>
                  <Box color={"blue.500"}>
                    <GoVerified size={40} />
                  </Box>
                  <Box>
                    <Heading fontSize={18}>Global Marketing By Panaverse DAO</Heading>
                    <Text>
                      That Full-Stack App Templates, and web 3.0 templates will be marketed globally by the Panaverse DAO
                    </Text>
                  </Box>
                </HStack>
                {/* feature 3 ends */}
              </Box>
            </RevealWrapper>
            {/* feature 4 */}
            <RevealWrapper origin="right" delay={150} duration={1000} distance='500px' reset={true}>
            <Box>
              <HStack>
                <Box color={"blue.500"}>
                  <GoVerified size="40" />
                </Box>
                <Box>
                  <Heading fontSize={18}>Economy Boost</Heading>
                  <Text>
                    This latest art of technoloy can boost our country's economy by creating new opportunities for businesses and entrepreneurs, enabling cross-border transactions
                  </Text>
                </Box>
              </HStack>
              {/* feature 4 ends */}
            </Box>
            </RevealWrapper>

            {/* feature 5 */}
            <RevealWrapper origin="left" delay={150} duration={1000} distance='500px' reset={true}>
              <Box>
                <HStack>
                  <Box color={"blue.500"}>
                    <GoVerified size={40} />
                  </Box>
                  <Box>
                    <Heading fontSize={18}>Staying Updated</Heading>
                    <Text>
                      Learning the latest technologies helps you stay up-to-date with the latest trends and advancements in your field. This can help you compete and be more competitive in the job market
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </RevealWrapper>
            <RevealWrapper origin="right" delay={150} duration={1000} distance='500px' reset={true}>
              <Box>
                <HStack>
                  <Box color={"blue.500"}>
                    {/* <GoVerified width={"10"} h={10} /> */}
                    <GoVerified size={"40"} />
                  </Box>
                  <Box>
                    <Heading fontSize={18}>Innovation</Heading>
                    <Text>
                      Learning the latest technologies can help you come up with innovative ideas and solutions that can give you
                    </Text>
                  </Box>
                </HStack>
                {/* feature 6 ends */}
              </Box>
            </RevealWrapper>
          </SimpleGrid>
          {/* 6 features ends */}
        </Box>
      </Container>
    </Box>
  );
}