import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Login = ()=>{
    return <Button as={motion.button} bg="red" w="10" whileHover={{ scale: 1.1 }}>Hola </Button>
}

export default Login;