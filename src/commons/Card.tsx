import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Serie } from "../interfaces/serie.interface";
interface Props {
  serie: Serie;
}

const Card = ({ serie }: Props) => {
  const { name } = serie;
  const MotionStack = motion(Stack);

  return (
    <MotionStack
      w="260px"
      m="3px"
      backgroundImage={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
      borderRadius="6px"
      p="2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <Text fontSize={"1rem"}>{name.slice(0, 27)}</Text>
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          alt="Dan Abramov"
          as={motion.img}
          w="auto"
          maxHeight={"100%"}
          overflow="hidden"
          position={"relative"}
          whileHover={{ scale: 1.02 }}
        />
      </Box>
    </MotionStack>
  );
};

export default Card;
