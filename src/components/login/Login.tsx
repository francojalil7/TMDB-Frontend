import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Login() {
  const [{ email, password }, setUser] = useState({ email: "", password: "" });

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setUser((prev) => {
      (prev as any)[name] = value;
      const newValue = { ...prev };
      return newValue;
    });
  function errorMessageExample() {
    const isError = email === "";

    return (
      <FormControl isInvalid={isError} w={"30vh"} m="0 auto">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email."
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText>Enter your email your mail.</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    );
  }
  return (
    <>
      <Box mt={"10vh"}>
        <Heading ml={{ base: "5vh", lg: "58vh", xl: "62vh" }} my="5">
          Login to your account
        </Heading>
        {errorMessageExample()}
        <FormControl w={"30vh"} m="0 auto">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password."
            onChange={handleInputChange}
          />
        </FormControl>
        <Box m="5" display={"flex"}>
          <Button m="0 auto">Login</Button>
        </Box>
      </Box>
    </>
  );
}
