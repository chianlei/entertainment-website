import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "./Homepage";
import { Divider, MantineProvider } from "@mantine/core";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
// import MovieTrending from "../components/movieTrending";
import Swiper from "swiper";
import MovieTrending from "../components/MovieTrending";
import { Button, Flex, Text, createStyles, Grid, Box } from "@mantine/core";
import { useEffect } from "react";
import MoviePopular from "../components/MoviePopular";
import MovieNowPlaying from "../components/MovieNowPlaying";
import MovieUpcoming from "../components/MovieUpcoming";
import MovieTopRated from "../components/MovieTopRated";
import TvTrending from "../components/TvTrending";

//add
const useStyles = createStyles(() => ({
  container: {
    width: "30%",
    marginLeft: "150px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  container2: {
    width: "30%",
    marginLeft: "90px",
    marginTop: "30px",
  },
}));

const queryClient = new QueryClient();
export default function Home() {
  const { classes } = useStyles();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <Head>
            <title>Entertainment website</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MantineProvider
            theme={{
              // Override any other properties from default theme
              fontFamily: "Open Sans, sans serif",
              spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            }}
          >
            <main>
              {/* className={styles.main} */}
              {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
              <Divider
                my="xs"
                label="Movie"
                labelProps={{
                  color: "blue",
                  // fontSize: "30",
                }}
                labelPosition="center"
                size="sm"
                className={classes.container2}
              />
              <Flex className={classes.container}>
                <MovieTrending />
                <MoviePopular />
                <MovieNowPlaying />
                <MovieUpcoming />
                <MovieTopRated />
              </Flex>
              <Divider
                my="xs"
                label="TV Series"
                labelProps={{
                  color: "blue",
                  // fontSize: "30",
                }}
                labelPosition="center"
                size="sm"
                className={classes.container2}
              />
              <Flex className={classes.container}>
                <TvTrending />
              </Flex>
            </main>
          </MantineProvider>

          {/* <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer> */}
        </div>
      </QueryClientProvider>
    </>
  );
}
