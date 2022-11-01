import {
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import { DotSpinner } from "@uiball/loaders";
import useCheckLoader from "../../hooks/useCheckLoader";

export default function Series() {
  const { louding, checkLouding } = useCheckLoader();
  return (
    <Stack maxWidth="1180px" m="0 auto" p="2rem 3rem" alignItems="center">
      <Heading>Series Online</Heading>

      <Tabs m="0 auto">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <DotSpinner size={65} color={useColorModeValue("black", "white")} />
          </TabPanel>
          <TabPanel>
              <DotSpinner
                size={65}
                color={useColorModeValue("black", "white")}
              />
          </TabPanel>
          <TabPanel>
            <DotSpinner size={65} color={useColorModeValue("black", "white")} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
