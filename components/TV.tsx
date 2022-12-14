import { Button, Flex, Text, createStyles } from "@mantine/core";
import { getGenreTV } from "../api/genreApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useStyles = createStyles(() => ({
  greenBox: {
    width: "13%",
    height: "180px",
    background: "#0F766E",
    borderRadius: 10,
  },
  greyBox: {
    width: "13%",
    height: "180px",
    background: "#171E31",
    borderRadius: 10,
  },
}));

const TV = () => {
  const { classes } = useStyles();

  const genreTVQuery = useQuery(["genreTV"], () => getGenreTV);

  // useEffect(() => {
  //   genreTVQuery.refetch();
  // }, []);

  return (
    <>
      <Flex>
        <>
          {genreTVQuery.isSuccess && genreTVQuery.data !== undefined && (
            <Text>successs</Text>
          )}
          {console.log("data:", genreTVQuery.data)}

          <Button className={classes.greenBox}>Action</Button>
          <Button className={classes.greyBox}>Animation</Button>
        </>
      </Flex>
    </>
  );
};

export default TV;
