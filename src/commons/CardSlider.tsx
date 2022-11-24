import { motion } from "framer-motion";
import { Movie } from "../interfaces/movie.interface";
import "../App.css";

interface Props {
  movie?: Movie;
}

const CardSlider = ({ movie }: Props) => {

  return (
    <motion.div className="slider">
      <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}/>
      <h2>{movie?.title.slice(0, 13)}</h2>
      <p>{movie?.release_date.substring(0,4)}</p>
    </motion.div>
  );
};

export default CardSlider;
