import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../interfaces/movie.interface";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7dd7db54fa86953d0e5fe4c6383cf566&language=es&page=1`
      )
      .then(({ data }) => {
        return setMovies(data.results);
      });
  }, []);

  const handleMovie = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.currentTarget.className.includes("populares")) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=7dd7db54fa86953d0e5fe4c6383cf566&language=es&page=1"
        )
        .then(({ data }) => setMovies(data.results));
    }

    if (event.currentTarget.className.includes("mejores valoradas")) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=7dd7db54fa86953d0e5fe4c6383cf566&language=es&page=1"
        )
        .then((res) => setMovies(res.data.results));
    }
    if (event.currentTarget.className.includes("proximamente")) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=7dd7db54fa86953d0e5fe4c6383cf566&language=es&page=1`
        )
        .then(({ data }) => setMovies(data.results));
    }
  };

  const handlerSearch = async (data: string) => {
    const reportes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7dd7db54fa86953d0e5fe4c6383cf566&language=es&query=${data}=1&include_adult=false`
    );
    setMovies(reportes.data.results);
  };

  return { movies, handleMovie, handlerSearch };
};

export default useMovies;
