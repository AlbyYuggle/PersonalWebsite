import { NavBar } from "./NavBar";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Container,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    width: "30px !important",
    height: "30px !important",
    flex: 1,
    marginLeft: "45%",
    marginRight: "45%",
    "&:hover": {
      width: "45px !important",
      height: "45px !important",
      marginLeft: "40% !important",
      marginRight: "40% !important",
    },
  },
  iconBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
});

const ProjectPage = () => {
  /*const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);*/
  const projects = [
    {
      src: "./projectphotos/passportPhoto.png",
      title: "Passport Photo Generator",
      description:
        "A website that generates valid passport photos given any reasonable base image. Rotates and centers image, then crops background using deep learning.",
      used: "Python (OpenCV), Javascript (Node, Express), HTML/CSS",
      link: "https://github.com/AlbyYuggle/passport-photo-generator",
      id: 0,
    },
    {
      src: "./projectphotos/pure.png",
      title: "Leveraged ETFs",
      description:
        "My research at PURE @ UIUC involved testing a hedging strategy by backsimulating stocks, backtesting the trading algorithm, and incorporating into a trading portfolio.",
      used: "Python (Numpy, Pandas, Pytorch, Matplotlib)",
      link: "https://github.com/AlbyYuggle/PURE-ETF",
      id: 1,
    },
    {
      src: "./projectphotos/fallingFruit.jpeg",
      title: "Falling Fruit",
      description:
        "A non-profit public database for foragers and gatherers. I worked on a team to rebuild the front-end for optimization/scalability.",
      used: "Javascript (React, Redux)",
      link: "https://github.com/hack4impact-uiuc/falling-fruit",
      id: 2,
    },
    {
      src: "./projectphotos/escapeMaze.png",
      title: "Escape the Maze Game",
      description:
        "Run away! A maze game where players spawn in a randomly regenerating maze with enemy AI chasing the player down.",
      used: "C++ (OpenGL)",
      link: "https://github.com/AlbyYuggle/EscapeMaze",
      id: 3,
    },
    {
      src: "./projectphotos/BattlecodeLogo.jpg",
      title: "MIT Battlecode",
      description:
        "Real time strategy game tournament where teams compete to build the best AI to play the game. Our team placed 22nd/550 and 4th/52.",
      used: "Java",
      link: "https://github.com/AlbyYuggle/Fandead",
      id: 4,
    },
    {
      src: "./projectphotos/discord.png",
      title: "Discord Registration Bot",
      description:
        "Club member registration bot for the Absolute Coding Club discord. This bot has registered hundreds of users.",
      used: "Python (Discord.py)",
      link: "https://github.com/AlbyYuggle/RegistrationBot",
      id: 5,
    },
  ];

  console.log(projects);
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
      <NavBar currentTab="projects" />
      <Box
        sx={{
          minHeight: "90vh",
          minWidth: "100vw",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "stretch",
          }}
        >
          {projects.map((project) => (
            <Grid
              item
              key={project.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ mt: "10px", mb: "10px" }}
            >
              <Card
                sx={{
                  boxShadow: 4,
                  height: "100%",
                  mr: "5px",
                  ml: "5px",
                  mt: "5px",
                }}
              >
                <CardHeader title={project.title} />
                <CardMedia
                  component="img"
                  height="500"
                  width="500"
                  image={project.src}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "350px",
                    height: "35vh",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, flex: 3 }}>
                    <Typography variant="h6">{project.description}</Typography>
                  </CardContent>
                  <CardContent
                    sx={{ pb: "5px !important", pt: "0px !important", flex: 1 }}
                  >
                    <Typography
                      sx={{
                        fontStyle: "italic",
                        fontSize: "16px !important",
                      }}
                      variant="h6"
                    >
                      {project.used}
                    </Typography>
                  </CardContent>
                  <CardContent
                    sx={{ p: "5px !important", pl: "20px !important", flex: 1 }}
                  >
                    <a href={project.link}>
                      <Box className={classes.iconBox}>
                        <Tooltip title="Github">
                          <GitHubIcon className={classes.icon} />
                        </Tooltip>
                      </Box>
                    </a>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
export { ProjectPage };
