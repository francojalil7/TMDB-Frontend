import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardMovie from "../commons/CardMovie";
import { Movie } from "../interfaces/movie.interface";
interface Props {
  movies: Movie[];
}
const Slider = ({ movies }: Props) => {
  const MotionBox = motion(Box);
  return (
    <Box m="0 auto" overflowX="hidden" maxWidth={"1050px"} h="auto">
      <MotionBox
        display="flex"
        curson="grab"
        drag="x"
        dragConstraints={{ right: 0, left: -3000 }}
      >
        {movies.map((movie) => (
          <img src={movie.poster_path} />
        ))}
      </MotionBox>
    </Box>  
  );
};

export default Slider;
