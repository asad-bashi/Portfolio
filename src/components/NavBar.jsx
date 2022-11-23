import { AppBar, Box, Stack, Typography, Link } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import MenuIcon from "@mui/icons-material/Menu";

function NavBar({ isDarkMode, setIsDarkMode }) {
  function handleClick() {
    setIsDarkMode((prev) => !prev);
  }
  return (
    <Box>
      <AppBar sx={{ py: 2, px: 5 }} position="relative">
        <nav className="container">
          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
          >
            {isDarkMode ? (
              <DarkModeIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
            ) : (
              <LightModeIcon sx={{ cursor: "pointer" }} onClick={handleClick} />
            )}

            <Stack
              justifyContent="flex-end"
              sx={{ listStyle: "none", fontSize: 22, userSelect: "none" }}
              component="ul"
              direction="row"
              alignItems="center"
              columnGap={5}
            >
              <Link href="#skills" underline="none" sx={{ color: "inherit" }}>
                Skills
              </Link>

              <Link href="#projects" underline="none" sx={{ color: "inherit" }}>
                Projects
              </Link>

              <Link href="#contact" underline="none" sx={{ color: "inherit" }}>
                Contact
              </Link>
            </Stack>
          </Stack>
        </nav>
      </AppBar>
    </Box>
  );
}

export default NavBar;
