import { useEffect, useState } from "react";
import { Serie } from "../interfaces/serie.interface";
import axios from "axios";
import { Movie } from "../interfaces/movie.interface";

export const useSeries = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/series").then(({ data }) => {
        setMovies(data);
    });
  }, []);

 
  return { movies};
};

export default useSeries;
