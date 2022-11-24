import { Heading, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardResult from "../commons/CardResult";
import useSearch from "../hooks/useSearch";
const Result = () => {
  const { search } = useParams();
  const { results, isLoading, handlerSearch } = useSearch();

  useEffect(() => {
    handlerSearch(search);
  }, []);

  if (isLoading) {
    return <Spinner size="xl" color="white" ml="50%" my="10%" />;
  }
  return (
    <>
      <Heading m="1rem">Resultados</Heading>

      <Text fontSize={{ base: "1rem", md: "2rem", lg: "2rem" }} m="1rem">
        {results.length > 1
          ? `Resultados para: ${search}`
          : `No hay resultados para: ${search}`}
      </Text>
      {results.length > 0
        ? results.map((result,i) => <CardResult key={i} result={result} />)
        : ""}
    </>
  );
};

export default Result;
