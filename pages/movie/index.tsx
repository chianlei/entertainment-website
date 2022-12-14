import { Button, Flex, Text, createStyles, Grid, Box } from "@mantine/core";
import { getGenreMovie } from "../../api/genreApi";
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
  greenBox: {
    width: "200px",
    height: "180px",
    background: "#0F766E",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    // color: 'white',
  },
  greyBox: {
    width: "200px",
    height: "180px",
    background: "#171E31",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
}));

const movie = () => {
  const { classes } = useStyles();

  // const genreTVQuery = useQuery(["genreTV"], () => getGenreTV);
  const {
    data: genreMovieData,
    isLoading: genreMovieIsLoading,
    isSuccess: genreMovieIsSuccess,
  } = useQuery(["genreMovie"], getGenreMovie);

  // useEffect(() => {
  //   genreTVQuery.refetch();
  // }, []);

  console.log("Movie data:", genreMovieData);

  return (
    <>
      <Flex className={classes.container}>
        <>
          {genreMovieIsLoading && <Text>Loading ...</Text>}
          {/* {genreTVIsSuccess && genreTVData !== undefined && (
            <Text>successs</Text>
          )}
          {console.log("data:", genreTVData)}
          <Button className={classes.greenBox}>Action</Button>
          <Button className={classes.greyBox}>Animation</Button>
          <Button className={classes.greyBox}>Animation</Button>
          <Button className={classes.greyBox}>Animation</Button>
          <Button className={classes.greyBox}>Animation</Button> */}
          {genreMovieIsSuccess &&
            // @ts-ignore
            genreMovieData.genres.map((mv, index) => {
              // const numbers = [8, 19, 5, 6, 14, 9, 13];
              // const odds = numbers.filter((num) => num % 2 === 1);
              // console.log(odds);
              return (
                <>
                  {/* <div key={index}>
              <Button className={classes.greyBox}>{tv.name}</Button>
                  </div> */}
                  <Grid grow>
                    <Grid.Col md={6} lg={3} key={index}>
                      <Button className={classes.greenBox}>{mv.name}</Button>
                    </Grid.Col>
                  </Grid>
                </>
              );
            })}
        </>
      </Flex>
    </>
  );
};

export default movie;
