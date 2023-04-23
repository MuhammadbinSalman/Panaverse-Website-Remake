import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Button,
    List,
    ListItem,
    Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React,{useState} from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function CoursesDropdown() {
    const { colorMode } = useColorMode();
    const [isVisible, setIsVisible] = useState(false);
    const handleHover = () => {
        setIsVisible(true);
    };

    const handleClose = () => {
        setIsVisible(false);
    };
    return (
        <ListItem _hover={{ color: "blue.600" }} ml="24">
            <Popover isOpen={isVisible} onClose={handleClose}>
                <PopoverTrigger>
                    <Button pl="0" onMouseEnter={handleHover} onClick={handleHover} bg="transparent" fontWeight={"bold"} mr="20">Courses<IoMdArrowDropdown size="20" /></Button>
                </PopoverTrigger>
                <PopoverContent onMouseLeave={handleClose} color='white' bg='blue.800' borderColor='blue.800'>
                    <PopoverBody>
                        <List>
                            <ListItem _hover={{ color: "blue.600" }}><Link href="/">Metaverse and Web 3.0</Link></ListItem>
                            <br />
                            <ListItem _hover={{ color: "blue.600" }}><Link href="/">Artificial Intelligence</Link></ListItem>
                            <br />
                            <ListItem _hover={{ color: "blue.600" }}><Link href="/">Internet Of Things</Link></ListItem>
                            <br />
                            <ListItem _hover={{ color: "blue.600" }}><Link href="/">Cloud Native Computing</Link></ListItem>
                        </List>
                    </PopoverBody>

                </PopoverContent>
            </Popover>
        </ListItem>
    )
}
