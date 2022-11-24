import { useEffect, useState } from "react";
import { Serie } from "../interfaces/serie.interface";
import axios from "axios";

export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {}, [results]);

  const handlerSearch = (data?: string) => {
    console.log(
      "🚀 ~ file: useSearch.ts ~ line 12 ~ handlerSearch ~ data",
      data
    );
    if (data) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/multi?${API_KEY}&language=es&query=${data}&page=1&include_adult=false`
        )
        .then(({ data }) => {
          setResults(data.results);
          setIsLoading(false)
        });
    }
  };

  return {
    results,
    handlerSearch,
    isLoading
  };
};

export default useSearch;
