import { useEffect, useState } from "react";
import { Serie } from "../interfaces/serie.interface";
import axios from "axios";

export const useSeries = () => {
  const [series, setSeries] = useState<Serie[]>([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    axios.get("http://localhost:3001/series").then(({ data }) => {
      setSeries(data);
    });
  }, []);

  const handlerSerie = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.currentTarget.className.includes("populares")) {
      axios.get("http://localhost:3001/series").then((res) => {
        setSeries(res.data);
      });
    }

    if (event.currentTarget.className.includes("mejores valoradas")) {
      axios.get("http://localhost:3001/series/rated").then((res) => {
        setSeries(res.data);
      });
    }
  };
  const handlerSearch = async (data: string) => {
    const reportes = await axios.get(
      `https://api.themoviedb.org/3/search/tv?${API_KEY}&language=es&page=1&query=${data}&include_adult=false`
    );
    setSeries(reportes.data.results);
  };
  return { series, handlerSerie, handlerSearch };
};

export default useSeries;
