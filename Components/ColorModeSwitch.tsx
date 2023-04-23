import { useState } from "react"
import React from 'react'
import { useColorMode,Switch } from "@chakra-ui/react"
export default function ColorModeSwitch() {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Switch color={"blue.500"} onChange={toggleColorMode}/>
  )
}
