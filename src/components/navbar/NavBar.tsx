import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import navStyles from "./NavBar.module.css";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/movies",
  },
  {
    name: "Series",
    path: "/series/",
  },
];

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Box
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    <Link to={path}>{children}</Link>
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "flex", md: "none" }}>
              <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                variant="outline"
                onClick={isOpen ? onClose : onOpen}
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuDivider />
                <MenuItem>Movies</MenuItem>
                <MenuItem>Series</MenuItem>
              </MenuList>
            </Menu>
            </Box>
            
            <Heading>TMDB</Heading>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path}>
                  {name}
                </NavLink>
              ))}
            </HStack>
            <ColorModeSwitcher />
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNJbc8se31c5elVFS8lDzvZteW3c07LClvNaVzi3OfA&s"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </div>
  );
}
