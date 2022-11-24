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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CardMovie from "../commons/CardMovie";
import useMovies from "../hooks/useMovies";

const Movies = () => {
  const { movies, handleMovie,handlerSearchMovie } = useMovies();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();
  const search = handleSubmit((data) => {
    handlerSearchMovie(data.search);
    navigate(`/result/${data.search}`)
  });

  return (
    <Stack maxWidth="1180px" m="0 auto" p="1rem 1rem" alignItems="center">
      <Heading>Películas Online</Heading>
      <InputGroup size="md" maxWidth={"300px"}>
        <Input pr="4.5rem" placeholder="Search..." {...register("search")} />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={search}>
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Tabs m="0 auto">
        <TabList>
          <Tab className="populares" onClick={handleMovie}>
            Populares
          </Tab>
          <Tab className="mejores valoradas" onClick={handleMovie}>
            Mejores Valoradas
          </Tab>
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
        {movies.length < 1 && <Spinner size="xl" />}
        {movies.map((movie) => (
          <CardMovie key={movie.title} movie={movie} />
        ))}
      </Box>
    </Stack>
  );
};

export default Movies;