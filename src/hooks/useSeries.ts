import { useEffect, useState } from "react";
import { Serie } from "../interfaces/serie.interface";
import axios from "axios";

export const useSeries = () => {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/series").then(({ data }) => {
      setSeries(data);
    });
  }, []);

  const handlerSerie = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
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
    console.log("🚀 ~ file: useSeries.ts ~ line 30 ~ handlerSearch ~ data", data)
    const reportes = await axios.get(
      `http://localhost:3001/series/search/${data}`
    );
    console.log(
      "🚀 ~ file: useSeries.ts ~ line 34 ~ handlerSearch ~ o",
      reportes
    );
    setSeries(reportes.data);
  };
  return { series, handlerSerie, handlerSearch };
};

export default useSeries;