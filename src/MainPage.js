import { NavBar } from "./NavBar";
import { Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TypeAnimation from "react-type-animation";

const useStyles = makeStyles({
  wpp: {
    backgroundImage: `url(${"./wallpaper2.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    minWidth: "100vw",
    marginTop: "10vh",
    opacity: 0.85,
  },
  typeName: {
    fontFamily: "Comfortaa",
    fontSize: "55px",
  },
  typeDes: {
    fontFamily: "Comfortaa",
    fontSize: "35px",
  },
});

const MainPage = () => {
  const classes = useStyles();
  return (
    <Container
      sx={{
        pl: "0px !important",
        pr: "0px !important",
        ml: "0px !important",
        mr: "0px !important",
      }}
    >
      <NavBar currentTab="main" />
      <Box sx={{}} className={classes.wpp}>
        <Box
          sx={{
            position: "relative",
            left: "25vh",
            top: "10vh",
            opacity: 0.85,
            maxWidth: "30vw",
            float: "left",
          }}
        >
          <TypeAnimation
            className={classes.typeName}
            sequence={["Albert Xiao", 1500]}
            wrapper="p"
            cursor={false}
            repeat={2}
            style={{ fontFamily: "Comfortaa !important" }}
          />
          <TypeAnimation
            className={classes.typeDes}
            sequence={[
              "",
              1505,
              "Software Engineer. Cooking Enthusiast. Pianist.",
              2500,
            ]}
            wrapper="p"
          />
        </Box>
      </Box>
    </Container>
  );
};
export { MainPage };
