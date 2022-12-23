import {
  Button,
  Flex,
  Text,
  createStyles,
  Grid,
  Box,
  Paper,
  Title,
  Stack,
} from "@mantine/core";
import { getPopularMv } from "../../../api/movieApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Link from "next/link";

const useStyles = createStyles(() => ({
  container: {
    width: "88%",
    marginLeft: "200px",
    marginTop: "30px",
    // height: "180px",
    // borderRadius: 10,
    flexWrap: "wrap",
  },
  card2: {
    width: "350px",
    height: 210,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: `Greycliff CF`,
    fontWeight: 900,
    color: "pink",
    lineHeight: 1.2,
    fontSize: 26,
    // marginTop: theme.spacing.xs,
    width: "100%",
    // background: "white",
  },
  category: {
    color: "white",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    background: "grey",
  },
  category2: {
    color: "red",
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
    // background: "grey",
    textAlign: "end",
    width: "100%",
  },
  button: {
    width: "7%",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "30px",
  },
}));

const PopularMovies = () => {
  const { classes } = useStyles();

  const {
    data: mvPopularData,
    isLoading: mvPopularIsLoading,
    isSuccess: mvPopularIsSuccess,
    refetch: mvPopularRefetch,
  } = useQuery(["moviePopular"], getPopularMv);

  const [number, setNumber] = useState(1);
  useEffect(() => {}, []);

  return (
    <>
      <Stack>
        <Flex className={classes.container}>
          {mvPopularIsLoading && <Text>Loading ...</Text>}
          {mvPopularIsSuccess &&
            // @ts-ignore
            mvPopularData.results.map((mvp, index) => {
              return (
                <>
                  <Grid grow key={index}>
                    <Grid.Col md={6} lg={3}>
                      {/* <Button className={classes.card}> */}
                      <Paper
                        shadow="md"
                        p="xl"
                        radius="md"
                        sx={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${mvp.backdrop_path})`,
                        }}
                        className={classes.card2}
                      >
                        <div>
                          <Flex>
                            <Text className={classes.category} size="xs">
                              {mvp.release_date.slice(0, 4)}
                            </Text>
                            <Text className={classes.category2} size="xs">
                              {mvp.media_type}
                            </Text>
                          </Flex>
                          <Title order={3} className={classes.title}>
                            {mvp.title}
                          </Title>
                        </div>
                      </Paper>
                      {/* </Button> */}
                    </Grid.Col>
                  </Grid>
                </>
              );
            })}
        </Flex>
        <Flex>
          <Button variant="outline" className={classes.button}>
            PREV
          </Button>
          {mvPopularIsSuccess && (
            <Box>{mvPopularData.page + "/" + mvPopularData.total_pages}</Box>
          )}
          <Link href={`/movie/popular/${number}`}>
            <Button
              variant="outline"
              className={classes.button}
              onClick={() => {
                // mvPopularData.refetch();
                setNumber(number + 1);
                mvPopularRefetch();
              }}
            >
              NEXT
            </Button>
          </Link>
        </Flex>
      </Stack>
    </>
  );
};

export default PopularMovies;
