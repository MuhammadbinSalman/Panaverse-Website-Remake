import { Box, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Quarters() {
  return (
    <Box py="50" as="section" h={{lg:"860"}} mt="6" overflowX={"hidden"}>
      <Box textAlign={"center"}>
        <Heading fontSize={"5xl"} fontWeight={"extrabold"} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text'>Quarters</Heading>
      </Box>
      <Box textAlign={"center"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"-1"}>
        <Stack spacing={"0"}>
          <Heading fontWeight={'bold'} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text' fontSize={"9xl"}>QI</Heading>
          <center>
          <Box h={{lg:"48"}} opacity={"0.9"} width={{lg:"96"}} bgColor="gray.100" shadow="lg" borderRadius={"2xl"}>
            <Heading fontSize={"lg"} pt="4">
            Object-Oriented Programming using TypeScript
            </Heading>
            <Text px={"3"} pt="3">Learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. Understanding latest Web trends i.e. Web 3.0 and Metaverse concepts.</Text>
          </Box>
          </center>
        </Stack>
        <Stack spacing="0">
          <Heading fontWeight={'bold'} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text' fontSize={"9xl"}>QII</Heading>
          <center>
          <Box bgColor={"gray.100"} h={{lg:"48"}} opacity={"0.9"} w={{lg:"96"}} shadow="lg" borderRadius={"2xl"}>
            <Heading fontSize={"lg"} pt="4" px="2">
            Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13
            </Heading>
            <Text px={"3"} pt="3">Develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test and user interfaces. Develop ERC-20 and NFT tokens.</Text>
          </Box>
          </center>
        </Stack>
        <Stack spacing="0">
          <Heading fontWeight={'bold'} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text' fontSize={"9xl"}>QIII</Heading>
          <center>
          <Box bgColor={"gray.100"} h={{lg:"48"}} opacity={"0.9"} w={{lg:"96"}} shadow="lg" borderRadius={"2xl"}>
            <Heading fontSize={"lg"} pt={"4"} px="2">
            Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13
            </Heading>
            <Text px={"3"} pt="3">Develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards and APIs</Text>
          </Box>
          </center>
        </Stack><Stack spacing="0">
          <Heading fontWeight={'bold'} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text' fontSize={"9xl"}>QIV</Heading>
          <center>
          <Box bgColor={"gray.100"} h={{lg:"48"}} opacity={"0.9"} w={{lg:"96"}} borderRadius={"2xl"} shadow="lg">
            <Heading fontSize={"lg"} pt={"4"} px={"2"}>
            Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13
            </Heading>
            <Text px={"3"} pt="3">The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them.</Text>
          </Box>
          </center>
        </Stack>
      </SimpleGrid>
      </Box>
    </Box>
  )
}
