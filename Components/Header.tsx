"use client"
import React,{useState} from 'react'
import HamBurger from './HamBurger';
import { motion, Variants } from "framer-motion";
import {IoMdArrowDropdown} from "react-icons/io"
import {BiSearchAlt} from "react-icons/bi"
import {Hide,Show,ModalCloseButton, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,FormControl,FormLabel,Input, Tooltip, Box, Container, SimpleGrid, Flex, HStack, List, ListItem, Button, color, Select, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, Switch, useColorMode} from '@chakra-ui/react'
import {ArrowForwardIcon, MoonIcon, SearchIcon,CloseIcon} from "@chakra-ui/icons"
import Image from 'next/image'
import logo from '../public/red-p-logo-text_dao_croped.png'
import Link from 'next/link'
import ColorModeSwitch from './ColorModeSwitch'
import CoursesDropdown from './CoursesDropdown';
export default function Header() {
    const {colorMode} = useColorMode() //for header theme
    const { isOpen, onOpen, onClose } = useDisclosure() //Search 
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <Box position="sticky" top={"0"} zIndex={3} as="header">
            <Flex py={2} justifyContent="space-around" alignItems={"center"} bg={colorMode == "dark"?"grey.800":"white"}>
            <Box>
                <HStack>
                    <Link href={"/"}><Image height={"70"} src={logo} alt="PANAVERSE"/></Link>
                    <Hide below="md">
                    <List>
                        <HStack fontWeight={"bold"} align={"center"} spacing={{lg:"10",md:"5"}} ml="45px">
                            <ListItem></ListItem>
                            <ListItem _hover={{color:"blue.600"}}><Link href="/">Home</Link></ListItem>
                            <ListItem _hover={{color:"blue.600"}}><Link href='/About'>About us</Link></ListItem>
                            <ListItem _hover={{color:"blue.600"}}><Link href="/">Contact us</Link></ListItem>
                            <CoursesDropdown/>
                        </HStack>
                    </List>
                    </Hide>
                </HStack>
            </Box>
                <Box>
                    <HStack>
                        <Box pl="15" as="span">
                            <Tooltip label="Search">
                                <SearchIcon height={25} width={25} onClick={onOpen} />
                            </Tooltip>
                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                            >
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Search</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                        <FormControl>
                                            <Input ref={initialRef} placeholder='Text goes here' />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button onClick={onClose}>Cancel</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                        <Tooltip label="Light/Dark mode">
                            <Box px="15" as="span">
                                <ColorModeSwitch />
                            </Box>
                        </Tooltip>
                        <Show below="md">
                            <HamBurger/>
                        </Show>
                        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 5 }}>
                            <Button ml="3" colorScheme={"blue"} variant={"outline"} rightIcon={<ArrowForwardIcon />}><Link target={'_blank'} href="https://www.piaic.org">Go To PIAIC</Link></Button>
                        </motion.div>
                        {/* _hover={{transform:"scale(1.1)"}} _active={{bg: '#dddfe2',transform: 'scale(0.98)',borderColor: '#bec3c9'}} */}
                    </HStack>
                </Box>
        </Flex>
        </Box>
    )
}
