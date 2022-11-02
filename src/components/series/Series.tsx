import {
  Heading,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import Card from "../../commons/Card";
import { Serie } from "../../interfaces/serie.interface";

export default function Series() {
  const [series, setSeries] = useState<Serie[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/series").then(({ data }) => {
      setSeries(data);
      console.log("🚀 ~ file: Series.tsx ~ line 25 ~ axios.get ~ data", data);
    });
  }, []);

  return (
    <Stack maxWidth="1180px" m="0 auto" p="1rem 1rem" alignItems="center">
      <Heading>Series Online</Heading>

      <Tabs m="0 auto">
        <TabList>
          <Tab name="Estrenos" onClick={(e)=>{
            console.log(e.target.dispatchEvent)
          }}>Estrenos</Tab>
          <Tab>Populares</Tab>
          <Tab>Mejores Valoradas</Tab>
        </TabList>

        <TabPanels>
          <TabPanel
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            flexWrap="wrap"
            alignContent={"center"}
            justifyContent="center"
            m="0 auto"
          >
            {series.length > 0 ? (
              series.map((serie) => <Card serie={serie} />)
            ) : (
              <Spinner size="xl" />
            )}
          </TabPanel>
          <TabPanel>
            <Spinner size="xl" />
          </TabPanel>
          <TabPanel>
            <Spinner size="xl" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
