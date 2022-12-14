import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  Box,
} from "@mantine/core";
import {
  TablerIcon,
  IconMovie,
  IconCategory,
  IconDeviceTvOld,
  IconGhost2,
  IconUser,
} from "@tabler/icons";
// import movieIcon from '../assets/movieIcon.svg'
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconGhost2, label: "Homepage", path: "home" },
  { icon: IconCategory, label: "Category", path: "home" },
  { icon: IconMovie, label: "Movie", path: "movie" },
  { icon: IconDeviceTvOld, label: "TV", path: "tvv" },
  { icon: IconUser, label: "Account", path: "account" },
];

export function Navbarr() {
  const [active, setActive] = useState(0);
  const router = useRouter();

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        router.push(link.path);
      }}
    />
  ));

  return (
    <Box pos="fixed">
      <Navbar width={{ base: 80 }} p="md">
        <Navbar.Section grow mt={50}>
          <Stack>{links}</Stack>
        </Navbar.Section>
        {/* <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={} label="Change account" />
          <NavbarLink icon={} label="Logout" />
        </Stack>
      </Navbar.Section> */}
      </Navbar>
    </Box>
  );
}
