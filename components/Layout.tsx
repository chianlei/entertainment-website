import Head from "next/head";
import Image from "next/image";
import Search from "../components/SearchBar";
import { Navbarr } from "../components/Navbar";

import styles from "../styles/Home.module.css";
import { Flex, Text, createStyles, Container } from "@mantine/core";

import React from "react";

const useStyles = createStyles((theme) => ({
  headerFont: {
    fontSize: 32,
    fontWeight: 900,
    fontFamily: "Verdana",
    marginLeft: 20,
    textShadow: "#FC0 1px 0 10px;",
  },

  border: {
    border: 10,
    borderWidth: 30,
  },
  header: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 999,
    // boxShadow:
    //   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    // width: "100%",
  },
}));

// @ts-ignore
export default function Outlet({ children }) {
  const { classes } = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        {/* <title>Movie</title> */}
        <link rel="icon" href="/vercel.svg" />
      </Head>

      <main>
        <Flex p={28} justify="space-between" className={classes.header}>
          <Flex className={classes.border}>
            {/* <Logo /> */}
            <Flex align="center">
              {/* <Text className={classes.headerFont}>Movie</Text>/ */}
            </Flex>
          </Flex>

          <Search />
        </Flex>
        <Flex dir="row">
          <Navbarr />
          {/* @ts-ignore */}
          {children}
        </Flex>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
