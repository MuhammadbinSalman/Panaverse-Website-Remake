'use client'
import './globals.css'
import Header from "@/Components/Header"
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react"
import ColorModeSwitch from '@/Components/ColorModeSwitch'
import Footer from '@/Components/Footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider><Header/>{children}<Footer/></ChakraProvider>
      </body>
    </html>
  )
}
