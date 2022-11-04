import { useEffect, useState } from "react";
import { Serie } from "../interfaces/serie.interface";
import axios from "axios";
import { Movie } from "../interfaces/movie.interface";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=es&page=1`
      )
      .then(({ data }) => setMovies(data.results));
  }, []);

  const handleMovie = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.currentTarget.className.includes("populares")) {
      axios.get("http://localhost:3001/series").then((res) => {
        setMovies(res.data);
      });
    }

    if (event.currentTarget.className.includes("mejores valoradas")) {
      axios.get("http://localhost:3001/series/rated").then((res) => {
        setMovies(res.data);
      });
    }
    if (event.currentTarget.className.includes("proximamente")) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?${API_KEY}&language=es&page=1`
        )
        .then(({data}) => {
          setMovies(data.results)
        });
    }
  };

  return { movies, handleMovie };
};

export default useMovies;
