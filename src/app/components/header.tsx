import React from "react";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Logo from "./logo";
import MenuIcon from "@mui/icons-material/Menu";



function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };
  return (
    <>
   <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          <Logo  imageSrc={"images/sanjith.jpeg"} />
           <Box  sx={{ flexGrow: 1, cursor: "pointer" }}>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button onClick={() => handleNavClick("home")}>Home</Button>
            <Button onClick={() => handleNavClick("about")}>About</Button>
            <Button onClick={() => handleNavClick("projects")}>Projects</Button>
            <Button onClick={() => handleNavClick("contact")}>Contact</Button>
          </Box>
          <IconButton
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
        {mobileMenuOpen && (
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column",
                  p: 2,
                  gap: 1,
                  bgcolor: "grey.100",
                }}
              >
                <Button onClick={() => handleNavClick("home")}>Home</Button>
                <Button onClick={() => handleNavClick("about")}>About</Button>
                <Button onClick={() => handleNavClick("projects")}>Projects</Button>
                <Button onClick={() => handleNavClick("contact")}>Contact</Button>
              </Box>
            )}
</>
      
  );
}

export default Header;
