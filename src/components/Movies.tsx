import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import Card from "../commons/CardSerie";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { movies, handleMovie } = useMovies();
  return (
    <Stack maxWidth="1180px" m="0 auto" p="1rem 1rem" alignItems="center">
      <Heading>Películas Online</Heading>
      <InputGroup size="md" maxWidth={"300px"}>
        <Input pr="4.5rem" placeholder="Search..." />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Tabs m="0 auto">
        <TabList>
          <Tab className="populares">Populares</Tab>
          <Tab className="mejores valoradas">Mejores Valoradas</Tab>
          <Tab className="proximamente" onClick={handleMovie}>
            Próximamente
          </Tab>
        </TabList>
      </Tabs>
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        alignContent={"center"}
        justifyContent="center"
        m="0 auto"
      >
        
      </Box>
    </Stack>
  );
};

export default Movies;
