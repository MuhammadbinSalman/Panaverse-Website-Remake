"use client"
import customTheme from "./theme"
import Header from "../Components/Header"
import { ChakraProvider, Box, Highlight } from "@chakra-ui/react"
import TopContainer from "../Components/TopContainer"
import Features from 'Components/Features'
import Highlights from "Components/Highlights"
import Quarters from "Components/Quarters"
import Footer from "Components/Footer"
export default function Home() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box as="main">
        {/* <Header /> */}
        <TopContainer />
        <Features />
        <Highlights/>
        <Quarters/>
        {/* <Footer/> */}
      </Box>
    </ChakraProvider>
  )
}
