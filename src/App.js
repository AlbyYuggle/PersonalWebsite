import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./MainPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./GlobalStyle";
import { ProjectPage } from "./ProjectPage";
import { AboutPage } from "./AboutPage";
import { PhotoPage } from "./PhotoPage";
const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        <Route exact path="/photos" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
