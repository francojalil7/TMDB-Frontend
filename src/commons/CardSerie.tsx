import { Box, Image, Kbd, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Serie } from "../interfaces/serie.interface";
import notImg from "../assets/notImg.png"
interface Props {
  serie: Serie;
  h?: string;
  hImg?: string;
}

const CardSerie = ({ serie, h, hImg }: Props) => {
  const releaseDate = serie.first_air_date?.slice(0, 4) || "0000";
  const { name } = serie;
  const MotionStack = motion(Stack);

  return (
    <MotionStack
      m="3px"
      backgroundImage={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
      borderRadius="6px"
      p="2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      h={h || "auto"}
    >
      <Text
        fontSize={"1rem"}
        color="black"
        bgGradient="linear(to-r, white, black)"
      >
        {name.slice(0, 27)}
      </Text>
      <span>
        <Kbd>{releaseDate}</Kbd>
      </span>
      <Box>
        <Image
          src={serie.poster_path ?`https://image.tmdb.org/t/p/w500${serie.poster_path}` : notImg}
          alt="Imagen Serie"
          as={motion.img}
          w="250px"
          m="0 auto"
          maxHeight={"100%"}
          overflow="hidden"
          position={"relative"}
          whileHover={{ scale: 1.02 }}
          borderRadius="2px"
          h={hImg || "22rem"}
        />
      </Box>
    </MotionStack>
  );
};

export default CardSerie;