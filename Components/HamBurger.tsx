// import { Button, Drawer, useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons";
import React,{useState} from "react";
import Link from "next/link";
import {
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import { IoMdArrowDropdown } from "react-icons/io";
import CoursesDropdown from "./CoursesDropdown";

export default function HamBurger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();
  return (
    <>
      {/* <Button
        //  ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Open
      </Button> */}
      <Box onClick={onOpen}>
        <GiHamburgerMenu size={25} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        //   finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Panaverse</DrawerHeader>

                  <DrawerBody>
                      {/* <Input placeholder="Type here..." /> */}
                      <List
                          fontWeight={"bold"}
                          color={colorMode == "light" ? "#4A5568" : "white"}
                      >
                          <Stack direction={{ base: "column", md: "row" }}align={{ base: "left", md: "center" }}>
                              <ListItem _hover={{ color: "blue.600" }}><Link href="/">Home</Link></ListItem>
                              <ListItem/>
                              <ListItem _hover={{ color: "blue.600" }}><Link href="/about">About</Link></ListItem>
                              <ListItem/>
                              <ListItem _hover={{ color: "blue.600" }}><Link href="/">Contact</Link></ListItem>
                              <CoursesDropdown/>
                          </Stack>
                      </List>
                  </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}