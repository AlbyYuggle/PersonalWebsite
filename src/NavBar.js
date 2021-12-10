import { AppBar, Avatar, Typography, Box, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBox: {
    flex: 1,
    height: "10vh",
    maxWidth: "150px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "white",
      "& $navTxt": {
        color: "black",
      },
    },
  },
  navBoxCur: {
    flex: 1,
    height: "10vh",
    maxWidth: "150px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white !important",
    "& $navTxt": {
      color: "black !important",
    },
  },
  navTxt: { fontSize: "30px !important" },
});

const NavBar = ({ currentTab }) => {
  const classes = useStyles();
  return (
    <AppBar color="secondary">
      <Toolbar sx={{ height: "10vh", display: "flex", flexDirection: "row" }}>
        <Avatar
          sx={{
            height: "8vh",
            width: "8vh",
            marginTop: "1vh",
            marginBottom: "1vh",
            marginRight: "1vh",
          }}
          src="/albert.jpeg"
          onClick={(event) => {
            window.location = "/";
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h3" color="primary" sx={{ m: "1vh" }}>
            Albert Xiao
          </Typography>
        </Box>
        <Box
          className={
            currentTab === "about" ? classes.navBoxCur : classes.navBox
          }
          onClick={(event) => {
            window.location = "/about";
          }}
        >
          <Typography
            className={classes.navTxt}
            align="center"
            color="primary"
            variant="h3"
          >
            About
          </Typography>
        </Box>
        <Box
          className={
            currentTab === "projects" ? classes.navBoxCur : classes.navBox
          }
          onClick={(event) => {
            window.location = "/projects";
          }}
        >
          <Typography
            className={classes.navTxt}
            align="center"
            color="primary"
            variant="h3"
          >
            Projects
          </Typography>
        </Box>
        <Box
          className={
            currentTab === "photos" ? classes.navBoxCur : classes.navBox
          }
          onClick={(event) => {
            window.location = "/photos";
          }}
        >
          <Typography
            className={classes.navTxt}
            align="center"
            color="primary"
            variant="h3"
          >
            Photos
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
