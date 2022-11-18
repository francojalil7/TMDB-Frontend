import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Card from "../../commons/CardSerie";
import useSeries from "../../hooks/useSeries";

export default function Series() {
  const { series, handlerSerie, handlerSearch } = useSeries();
  useEffect(() => {}, [series, handlerSerie]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();

  const search = handleSubmit((data) => {
    console.log("🚀 ~ file: Series.tsx ~ line 30 ~ search ~ data", data)
    
  });

  return (
    <Stack maxWidth="1180px" m="0 auto" p="1rem 1rem" alignItems="center">
      <Heading>Series Online</Heading>
      <InputGroup size="md" maxWidth={"300px"}>
        <Input pr="4.5rem" placeholder="Search..." {...register("search")} />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={search}>
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      <Tabs m="0 auto">
        <TabList>
          <Tab className="populares" onClick={handlerSerie}>
            Populares
          </Tab>
          <Tab className="mejores valoradas" onClick={handlerSerie}>
            Mejores Valoradas
          </Tab>
        </TabList>
      </Tabs>
      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        flexWrap="wrap"
        alignContent={"center"}
        justifyContent="center"
        m="0 auto"
      >
        {series.length > 0 ? (
          series.map((serie) => <Card key={serie.id} serie={serie} />)
        ) : (
          <Spinner size="xl" />
        )}
      </Box>
    </Stack>
  );
}
