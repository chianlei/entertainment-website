import { Button, Flex, Text, createStyles, Grid, Box } from "@mantine/core";
import { getGenreTV } from "../api/genreApi";
import { getMovieTrending } from "../api/trendingApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { wrap } from "module";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import Image from "next/image";

const useStyles = createStyles(() => ({
  container: {
    width: "40%",
    marginLeft: "200px",
    marginBottom: "50px",
    // height: "180px",
    // background: "#0F766E",
    // borderRadius: 10,
    // flexWrap: "wrap",
  },
  title: {
    fontFamily: `Greycliff CF`,
    fontWeight: 900,
    color: "red",
    lineHeight: 1.2,
    fontSize: 18,
    // marginTop: theme.spacing.xs,
    textShadow: "#FC0 1px 0 10px;",
  },
  trendingMovie: {
    textShadow: "1px 1px 2px #F5634E, 0 0 1em #, 0 0 0.2em  #F1AD26",
    fontSize: 14,
  },
  greenBox: {},
}));

const MovieTrending = () => {
  const { classes } = useStyles();

  const {
    data: mvTrendingData,
    isLoading: mvTrendingIsLoading,
    isSuccess: mvTrendingIsSuccess,
  } = useQuery(["movieTrending"], getMovieTrending);

  console.log("Movie Trending data:", mvTrendingData);

  return (
    <>
      {/* <Flex className={classes.container}> */}
      <>
        <Flex align="center" justify="center">
          <Swiper
            cssMode={true}
            slidesPerView={3}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerGroup={2}
            pagination={false}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            // className="mySwiper"
          >
            {mvTrendingIsLoading && <SwiperSlide>Loading...</SwiperSlide>}
            {mvTrendingIsSuccess &&
              mvTrendingData.results.map((mvt: any) => (
                <div key={mvt.id}>
                  <SwiperSlide>
                    <Box
                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   position: "sticky",
                    // }}
                    >
                      <Image
                        layout="responsive"
                        objectFit="contain"
                        // width={470}
                        // height={230}
                        src={`https://image.tmdb.org/t/p/original/${mvt.poster_path}`}
                        alt="poster img"
                      />
                      <div
                      // className={classes.title}
                      >
                        {mvt.title}
                        <Text
                          // className={classes.trendingMovie}
                          variant="gradient"
                          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                        >
                          {mvt.media_type}
                        </Text>
                      </div>

                      {/* <div className={classes.group}>
                          <Text className={classes.category} size="xs">
                            {mvt.media_type}
                          </Text>
                          <Title order={3} className={classes.title}>
                            {mvt.original_title}
                          </Title>
                        </div> */}
                    </Box>
                  </SwiperSlide>
                </div>
              ))}
          </Swiper>
        </Flex>
        {/* {mvTrendingIsLoading && <Text>Loading ...</Text>}
          {mvTrendingIsSuccess 
            @ts-ignore
            trendingData.genres.map((tv, index) => {
              return (
                <>
                  <Grid grow>
                    <Grid.Col md={6} lg={3} key={index}>
                      <Button className={classes.greyBox}>{tv.name}</Button>
                    </Grid.Col>
                  </Grid>
                </>
              );
            })
        } */}
      </>
      {/* </Flex> */}
    </>
  );
};

export default MovieTrending;
