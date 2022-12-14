import { Button, Flex, Text, createStyles, Grid, Box } from "@mantine/core";
import { getGenreTV } from "../../api/genreApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { wrap } from "module";

const useStyles = createStyles(() => ({
  container: {
    width: "88%",
    marginLeft: "200px",
    marginTop: "30px",
    // height: "180px",
    // background: "#0F766E",
    // borderRadius: 10,
    flexWrap: "wrap",
  },
}));

const account = () => {
  const { classes } = useStyles();

  return (
    <>
      <Flex className={classes.container}>
       account
      </Flex>
    </>
  );
};

export default account;
