import { useState } from "react";
import { useInputState } from "@mantine/hooks";
import { TextInput, createStyles, Button, Flex } from "@mantine/core";
import { BsSearch } from "react-icons/bs";

// interface SearchBarProps {
//     searchInput: string;
//     setSearchInput: any;
// }

const useStyles = createStyles(() => ({
  searchBar: {
    width: "100%",
    marginTop: "70px",
  },
  searchIcon: {
    marginTop: "10px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  searchInput: {
    width: "80%",
    marginRight: "auto",
    // color: "white",
  },
  searchBtn: {
    width: "15%",
    color: "white",
    background: "#5A6A90",
    "&:hover": {
      color: "black",
      background: "white",
    },
  },
}));

const SearchBar = () => {
  const { classes } = useStyles();
  // const SearchBar = ({searchInput, setSearchInput}: SearchBarProps) => {
  const [searchInput, setSearchInput] = useInputState<string>("");

  return (
    <>
      {/* {console.log(searchInput)} */}
      <Flex className={classes.searchBar}>
        <BsSearch className={classes.searchIcon}></BsSearch>
        <TextInput
          //   variant="unstyled"
          value={searchInput}
          onChange={setSearchInput}
          placeholder="Search for movies or TV series"
          className={classes.searchInput}
        />
        <Button className={classes.searchBtn}>Search</Button>
      </Flex>
    </>
  );
};

export default SearchBar;
