import { Button, Flex, Text, createStyles, Grid, Box } from "@mantine/core";
import { getGenreTV } from "../../api/genreApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { wrap } from "module";
import MovieTrending from "../../components/Movie/MovieTrending";
import MoviePopular from "../../components/Movie/MoviePopular";
import MovieNowPlaying from "../../components/Movie/MovieNowPlaying";
import MovieUpcoming from "../../components/Movie/MovieUpcoming";
import MovieTopRated from "../../components/Movie/MovieTopRated";

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

const home = () => {
  const { classes } = useStyles();

  return (
    <>
      <Flex className={classes.container}>
        <MovieTrending />
        <MoviePopular />
        <MovieNowPlaying />
        <MovieUpcoming />
        <MovieTopRated />
      </Flex>
    </>
  );
};

export default home;
