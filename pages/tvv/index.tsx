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
  greenBox: {
    width: "50px",
    height: "180px",
    background: "#0F766E",
    borderRadius: 10,

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

const tvv = () => {
  const { classes } = useStyles();

  // const genreTVQuery = useQuery(["genreTV"], () => getGenreTV);
  const {
    data: genreTVData,
    isLoading: genreTVIsLoading,
    isSuccess: genreTVIsSuccess,
  } = useQuery(["genreTV"], getGenreTV);

  // useEffect(() => {
  //   genreTVQuery.refetch();
  // }, []);

  console.log("TV data:", genreTVData);

  return (
    <>
      <Flex className={classes.container}>
        <>
          {genreTVIsLoading && <Text>Loading ...</Text>}
          {genreTVIsSuccess &&
            // @ts-ignore
            genreTVData.genres.map((tv, index) => {
              return (
                <>
                  <Grid grow>
                    <Grid.Col md={6} lg={3} key={index}>
                      <Button className={classes.greyBox}>{tv.name}</Button>
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

export default tvv;
