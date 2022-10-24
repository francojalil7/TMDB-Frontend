import {
    Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

export default function Login() {
  const [{ email, password }, setUser] = useState({ email: "", password: "" });

  //   const handlerChange = ({
  //     target: { email, password },
  //   }: React.ChangeEvent<HTMLInputElement>) => {};
  function errorMessageExample() {
    const isError = email === "";

    const handleInputChange = ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) =>
      setUser((prev) => {
        (prev as any)[name] = value;
        const newValue = { ...prev };
        return newValue;
      });

    return (
      <Box mt={"10vh"}>
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
      </Box>
    );
  }
  return (
    <>
      <Heading m="0 auto">Login to your account</Heading>
      {errorMessageExample()}
    </>
  );
}
