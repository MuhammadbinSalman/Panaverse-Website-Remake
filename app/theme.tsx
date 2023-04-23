import React from 'react'
import { extendTheme } from "@chakra-ui/react"
const customTheme = extendTheme({
  breakpoints: {
    base: "0px",
    xs:"450px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    myCust:"900px",
    xl: "62em",
    "2xl": "80em",
    "3xl": "96em",
    "4xl": "120em",
    "5xl": "140em",
  },
})

export default customTheme


// export default function theme() {
//   return (
//     <div>theme</div>
//   )
// }
