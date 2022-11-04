import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Card from "../commons/CardSerie";

const Slider = () => {
  const MotionBox = motion(Box);
  return (
    <Box m="0 auto" overflowX="hidden" maxWidth={"1050px"} h="auto">
      <MotionBox
        display="flex"
        curson="grab"
        drag="x"
        dragConstraints={{ right: 0, left: -10 }}
      >
        {/* <Card h="20rem" hImg="15rem"/> */}
      </MotionBox>
    </Box>
  );
};

export default Slider;
