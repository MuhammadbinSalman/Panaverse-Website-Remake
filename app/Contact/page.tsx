'use client'
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
// import HeaderCont from './HeaderCont'
export default function page() {
  return (
    <>
    <Box>
    <Heading fontWeight={"extrabold"} bgGradient='linear(to-l, #8027d7,#73adff)' bgClip='text'>Contact Us</Heading>
        <Text fontSize={"20"} py="3">
        Can contact us through info@piaic.org
        </Text>
    </Box>
    </>
  )
}
