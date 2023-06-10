import { NavBar } from "./NavBar";
import { Container, Box } from "@mui/material";
import Gallery from "react-photo-gallery";

const PhotoPage = () => {
  // const imgList = [
  //   "otherphotos/IMG_3284.webp",
  //   "otherphotos/IMG_3295.webp",
  //   "otherphotos/IMG_3308.webp",
  //   "otherphotos/IMG_3347.webp",
  //   "otherphotos/IMG_3316.webp",
  //   "otherphotos/IMG_3373.webp",
  //   "otherphotos/IMG_3400.webp",
  //   "otherphotos/IMG_3432.webp",
  //   "otherphotos/IMG_3586.webp",
  // ];
  const imgList = [];

  return (
    <Container
      sx={{
        pl: "0px !important",
        pr: "0px !important",
        ml: "0px !important",
        mr: "0px !important",
      }}
    >
      <NavBar currentTab="photos" />
      <Box
        sx={{
          minHeight: "90vh",
          minWidth: "100vw",
          marginTop: "10vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* {imgList.map((img, index) => (
          <img
            key={index}
            src={img}
            style={{
              maxWidth: "400px",
              height: "auto",
              margin: "5px",
            }}
          />
        ))} */}
        <Gallery
          photos={imgList.map((img) => {
            let obj = {};
            obj.src = img;
            obj.width = 3;
            obj.height = 4;
            return obj;
          })}
          direction="column"
        />
      </Box>
    </Container>
  );
};

export { PhotoPage };
