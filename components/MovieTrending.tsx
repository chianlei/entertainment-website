import { Carousel } from "@mantine/carousel";
import {
  Button,
  Flex,
  Text,
  createStyles,
  Grid,
  Box,
  Paper,
  Title,
} from "@mantine/core";
import { getMovieTrending } from "../api/trendingApi";
import { useQuery } from "@tanstack/react-query";

const useStyles = createStyles(() => ({
  div: {
    width: "88%",
    marginLeft: "-12px",
    // justify: "center",
    marginBottom: "50px",
    // height: "100%",
  },

  div2: {
    // width: "100%",
    // marginLeft: "auto",
    // marginRight: "auto",
    // display: "flex",
    // flexDirection: "row",
    // justify: "center",
    // height: "100%",
  },
  card: {
    height: 180,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title: {
    fontFamily: `Greycliff CF`,
    fontWeight: 900,
    color: "pink",
    lineHeight: 1.2,
    fontSize: 26,
    // marginTop: theme.spacing.xs,
    width: "100%",
    // background: "grey",
  },
  title2: {
    fontFamily: `Greycliff CF`,
    fontWeight: 900,
    color: "black",
    lineHeight: 1.2,
    fontSize: 26,
    // marginTop: theme.spacing.xs,
    width: "100%",
    // background: "grey",
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
    // opacity: 0.7,
    fontWeight: 900,
    textTransform: "uppercase",
    // background: "grey",
    textAlign: "end",
    width: "100%",
  },
  container: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    // height: "180px",
    // background: "#0F766E",
    // borderRadius: 10,
    // flexWrap: "wrap",
  },
}));

export default function MovieTrending() {
  const { classes } = useStyles();
  const {
    data: mvTrendingData,
    isLoading: mvTrendingIsLoading,
    isSuccess: mvTrendingIsSuccess,
  } = useQuery(["movieTrending"], getMovieTrending);

  return (
    <div className={classes.div}>
      <div className={classes.div2}>
        <Text className={classes.title2}>Trending</Text>
      </div>
      <Carousel
        // withIndicators

        height={200}
        slideSize="33.33333%"
        slideGap="md"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        // loop
        align="start"
      >
        {mvTrendingIsSuccess &&
          //@ts-ignore
          mvTrendingData.results.map((item) => {
            return (
              <Carousel.Slide key={item.id}>
                <Paper
                  shadow="md"
                  p="xl"
                  radius="md"
                  sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                  }}
                  className={classes.card}
                >
                  <div>
                    <Flex>
                      <Text className={classes.category} size="xs">
                        {item.release_date.slice(0, 4)}
                      </Text>
                      <Text className={classes.category2} size="xs">
                        {item.media_type}
                      </Text>
                    </Flex>
                    <Title order={3} className={classes.title}>
                      {item.title}
                    </Title>
                  </div>
                </Paper>
              </Carousel.Slide>
            );
          })}
      </Carousel>
    </div>
  );
}
