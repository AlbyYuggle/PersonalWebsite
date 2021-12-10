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
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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
