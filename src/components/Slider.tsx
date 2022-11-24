import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CardSlider from "../commons/CardSlider";
import { Movie } from "../interfaces/movie.interface";
interface Props {
  movies: Movie[];
}
const Slider = ({ movies }: Props) => {
  const MotionBox = motion(Box);
  return (
    <Box m="0 auto" overflowX="hidden" maxWidth={"1050px"} >
      <MotionBox
        display="flex"
        curson="grab"
        drag="x"
        dragConstraints={{ right: 0, left: -1600 }}
      >
        {movies.map((movie) => (
          <CardSlider key={movie.title} movie={movie}/>
        ))}
      </MotionBox>
    </Box>  
  );
};

export default Slider;