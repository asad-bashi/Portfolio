import { useState } from "react";
import { Box, Stack, Button, Typography, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Avatar from "./Icons/avatar.png";
import ArkMovies from "./ProjectShowCases/Ark-Movies.png";
import BlogCity from "./ProjectShowCases/Blog-City.png";
import QuickNote from "./ProjectShowCases/Quick-Note.png";
import ProjectShowCase from "./components/ProjectShowCase";
import CssBaseline from "@mui/material/CssBaseline";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import styled from "styled-components";

const ArkMoviesLink = `https://arkmovies.netlify.app`;
const ArkMoviesGitLink = `https://github.com/asad-bashi/Ark-Movies`;

const BlogCityLink = `https://blogcity.netlify.app`;
const BlogCityGitLink = `https://github.com/asad-bashi/BlogCity-Client`;

const QuickNoteLink = "https://notequick.netlify.app";
const QuickNoteGitLink = "https://github.com/asad-bashi/QuickNote";

const Image = styled.img`
  height: 350px;
  @media (max-width: 920px) {
    display: none;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#0B3954",
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans - serif"],
    },
  });
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Stack py={4} component="main" rowGap={5} className="container">
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              component="section"
              sx={{ height: "500px" }}
            >
              <Stack
                alignItems="center"
                justifyContent="space-around"
                height="350px"
              >
                <Typography color="primary.main" variant="h3">
                  Asad Bashir
                </Typography>

                <Typography
                  sx={{ fontSize: 30, fontWeight: 300, maxWidth: "40ch" }}
                  className="container"
                >
                  Inspiring front end web developer with a passion for building
                  modern
                  <span style={{ color: "#0B3954" }}> web apps</span> with
                  simple and elegant UI.
                </Typography>
                <Button variant="contained">Resume</Button>
              </Stack>
              <Image height="300px" src={Avatar} alt="" />
            </Stack>
            <Box id="skills" component="section">
              <Typography variant="h2">Skills</Typography>
              <Skills />
            </Box>
            <Box id="projects" component="section">
              <Typography mb={3} variant="h2">Projects</Typography>
              <Stack rowGap={5}>
                <ProjectShowCase
                  img={ArkMovies}
                  link={ArkMoviesLink}
                  git={ArkMoviesGitLink}
                />
                <Divider />
                <ProjectShowCase
                  img={BlogCity}
                  link={BlogCityLink}
                  git={BlogCityGitLink}
                />
                <Divider />
                <ProjectShowCase
                  img={QuickNote}
                  link={QuickNoteLink}
                  git={QuickNoteGitLink}
                />
              </Stack>
            </Box>
            <Stack id="contact" rowGap={2} alignItems="center">
              <Typography sx={{ fontWeight: 300 }} variant="h3">
                Get in touch
              </Typography>

              <Stack direction="row">
                <Link
                  color="inherit"
                  id="email"
                  name="email"
                  href="mailto:asad.bashir2580@gmail.com"
                >
                  <EmailIcon fontSize="large" />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </CssBaseline>
      </ThemeProvider>
    </Box>
  );
}
export default App;
