import { Box, Container, Typography, Tooltip } from "@mui/material";
import { NavBar } from "./NavBar";
import FeedIcon from "@mui/icons-material/Feed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  icon: {
    width: "60px !important",
    height: "60px !important",
    flex: 1,
    marginLeft: "40%",
    marginRight: "40%",
    "&:hover": {
      width: "70px !important",
      height: "70px !important",
      marginLeft: "35% !important",
      marginRight: "35% !important",
    },
  },
  iconBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  ptext: {
    marginTop: "20px !important",
    textAlign: "center !important",
  },
});

const AboutPage = () => {
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
      <NavBar currentTab="about" />
      <Box
        sx={{
          minHeight: "90vh",
          minWidth: "100vw",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ mt: "25vh", mb: "20px", textAlign: "center" }}
          variant="h3"
        >
          Hello and welcome to my website!
        </Typography>
        <Typography className={classes.ptext} variant="h6">
          I'm Albert Xiao, a computer science major at the University of
          Illinois Urbana-Champaign.
        </Typography>
        <Typography className={classes.ptext} variant="h6">
          My interests are Software Engineering, Machine Learning, and Finance,
          and my hobbies include biking, cooking, and music.
        </Typography>
        <Typography className={classes.ptext} variant="h6">
          I have previously worked at: Accurant Biotech (SWE Intern), University
          of Illinois (Undergraduate Researcher)
        </Typography>
        <Typography className={classes.ptext} variant="h6">
          I'm currently working for: University of Illinois (Course Staff),
          Hack4Impact (Software Developer)
        </Typography>
        <Container
          sx={{
            mt: "40px",
            alignContent: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box className={classes.iconBox}>
            <Tooltip title="Resume">
              <FeedIcon
                className={classes.icon}
                onClick={(event) =>
                  (window.location = "./AlbertXiaoResumeUpdated.pdf")
                }
              />
            </Tooltip>
          </Box>
          <Box className={classes.iconBox}>
            <Tooltip title="Github">
              <GitHubIcon
                className={classes.icon}
                onClick={(event) =>
                  (window.location = "https://github.com/AlbyYuggle")
                }
              />
            </Tooltip>
          </Box>
          <Box className={classes.iconBox}>
            <Tooltip title="LinkedIn">
              <LinkedInIcon
                className={classes.icon}
                onClick={(event) =>
                  (window.location = "https://linkedin.com/in/anxiao")
                }
              />
            </Tooltip>
          </Box>

          <Box className={classes.iconBox}>
            <Tooltip title="Email">
              <EmailIcon
                className={classes.icon}
                onClick={(event) =>
                  (window.location = "mailto:anxiao2@illinois.edu")
                }
              />
            </Tooltip>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export { AboutPage };
