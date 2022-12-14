import { Navbarr } from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Flex } from "@mantine/core";
import { Demo } from "../components/Tabs";
import HomeTabs from "../components/HomeTabs";

const Homepage = () => {
  // interface DailySummaryProps {
  //   startDate: string;
  //   endDate: string;
  //   [TI_AREA_GROUP_ID]: number;
  //   [TI_LOCATION_ID]: number;
  //   [TI_GAMETYPE_ID]: number;
  // }

  return (
    <>
      <Flex>
        {/* <Demo></Demo> */}
        <Navbarr />
        {/* <HomeTabs /> */}
        <SearchBar />
      </Flex>
    </>
  );
};

export default Homepage;
