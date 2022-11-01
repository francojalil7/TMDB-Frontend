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
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import navStyles from "./NavBar.module.css";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { getUser, sendLogOutRequest } from "../../state/user";

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
    path: "/series",
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
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const logOutRequest = () => {
    dispatch(sendLogOutRequest());
  };

  return (
    <Box
      m="auto"
      className={navStyles.mobileNav}
      w="100%"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box m="auto" px={4} maxWidth="1180px">
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
                  <Box
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                  >
                    <Link to={"/movies"}>Movies</Link>
                  </Box>
                  <Box
                    px={2}
                    py={1}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                  >
                    <Link to={"/series"}>Series</Link>
                  </Box>
                </MenuList>
              </Menu>
            </Box>
            <Link to="/">
              <Heading
                m="0 auto"
                fontSize={{ base: "0.8rem", lg: "2rem", xl: "3rem" }}
              >
                TMDB
              </Heading>
            </Link>

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
          {user?.email ? (
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
                  <MenuItem onClick={logOutRequest}>Log out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <ButtonGroup variant="outline" spacing="3">
              <Link to="/login">
                <Button
                  colorScheme="pink"
                  as={motion.button}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  m="0"
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  as={motion.button}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  m="0"
                >
                  Register
                </Button>
              </Link>
            </ButtonGroup>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
