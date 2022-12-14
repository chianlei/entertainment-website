import { useState } from "react";
import { useInputState } from "@mantine/hooks";
import { TextInput, createStyles, Button, Flex, Tabs } from "@mantine/core";
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

const HomeTabs = () => {
  const { classes } = useStyles();
  // const SearchBar = ({searchInput, setSearchInput}: SearchBarProps) => {
  const [searchInput, setSearchInput] = useInputState<string>("");

  return (
    <>
      <Tabs defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
          <Tabs.Tab value="messages">Messages</Tabs.Tab>
          <Tabs.Tab value="settings">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </>
  );
};

export default HomeTabs;
