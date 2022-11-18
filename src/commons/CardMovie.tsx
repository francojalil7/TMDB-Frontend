import { Box, Image, Kbd, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Movie } from "../interfaces/movie.interface";

interface Props {
  movie: Movie;
  h?: string;
  hImg?: string;
}

const MovieSerie = ({ movie, h, hImg }: Props) => {
  const releaseDate = movie.release_date?.slice(0, 4) || "0000";
  const { original_title } = movie;
  const MotionStack = motion(Stack);

  return (
    <MotionStack
      m="3px"
      backgroundImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
      borderRadius="6px"
      p="2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      h={h || "auto"}
    >
      <Text
        fontSize={"1rem"}
        color="black"
        bgGradient="linear(to-r, white, black)"
      >
        {original_title.slice(0, 26)}
      </Text>
      <span>
        <Kbd>{releaseDate}</Kbd>
      </span>
      <Box w="264px">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` || "../assets/notImg.png"}
          alt="Dan Abramov"
          as={motion.img}
          w="260px"
          m="5px"
          maxHeight={"100%"}
          overflow="hidden"
          position={"relative"}
          whileHover={{ scale: 1.02 }}
          borderRadius="2px"
          h={hImg || "22rem"}
        />
      </Box>
    </MotionStack>
  );
};

export default MovieSerie;