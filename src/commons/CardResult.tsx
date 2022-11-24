import { Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Result } from "../interfaces/result.interface";
interface Props {
  result: Result;
}
const CardResult = ({ result }: Props) => {
 
  return (
    <Stack
      h="330px"
      m="1.5rem"
      flexDir={"row"}
      borderRadius={"15px"}
      boxShadow="2xl"
      justifyContent={"center"}
      p={3}
    >
      <Image
        borderRadius={"10px"}
        src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        maxHeight={"25vh"}
        my="auto"
        mx="1rem"
      />
      <Divider orientation="vertical" m="1rem" />
      <Stack m="1rem" p="1rem">
        <Text fontWeight={"bold"}>{result.title}</Text>
        <Text>{result.release_date?.substring(0, 4)}</Text>
        <Text>{`${result.overview?.slice(0, 100)}...`}</Text>
      </Stack>
    </Stack>
  );
};

export default CardResult;
