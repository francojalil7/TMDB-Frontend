import footerStyles from "./Footer.module.css";
import {
  Box,
  Text,
  Flex,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

export default function LargeWithLogoCentered() {
  return (
    <Box 
      className={footerStyles.footer}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      w="100%"
    >
      <Box py={5}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Heading> TMDB </Heading>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Franco Jalil. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
