import { useState } from "react";
import { AppBar, Box, Stack, Link, Drawer } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../styles.css";

import MenuIcon from "@mui/icons-material/Menu";

function NavBar({ isDarkMode, setIsDarkMode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const IconStyles = { cursor: "pointer", fontSize: "30px" };
  function handleClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleDrawer() {
    setIsDrawerOpen((prev) => !prev);
  }
  return (
    <Box>
      <AppBar sx={{ py: 2, px: 5 }} position="relative">
        <Drawer
        sx={{width:'100%'}}
          onClose={() => setIsDrawerOpen(false)}
          anchor="right"
          open={isDrawerOpen}
        >
          <div className="Drawer">
            <Link
              onClick={() => setIsDrawerOpen(false)}
              href="#skills"
              underline="none"
              sx={{ color: "inherit" }}
            >
              Skills
            </Link>

            <Link
              onClick={() => setIsDrawerOpen(false)}
              href="#projects"
              underline="none"
              sx={{ color: "inherit" }}
            >
              Projects
            </Link>

            <Link
              onClick={() => setIsDrawerOpen(false)}
              href="#contact"
              underline="none"
              sx={{ color: "inherit" }}
            >
              Contact
            </Link>
          </div>
        </Drawer>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          {isDarkMode ? (
            <DarkModeIcon sx={IconStyles} onClick={handleClick} />
          ) : (
            <LightModeIcon sx={IconStyles} onClick={handleClick} />
          )}

          <span className="menu">
            <MenuIcon onClick={handleDrawer} sx={IconStyles} />
          </span>

          <nav className="Links">
            <Stack
              justifyContent="flex-end"
              sx={{
                listStyle: "none",
                fontSize: 22,
                userSelect: "none",
              }}
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
          </nav>
        </Stack>
      </AppBar>
    </Box>
  );
}

export default NavBar;
