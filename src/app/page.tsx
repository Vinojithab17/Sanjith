"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Link,
  CardActions,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/navigation";
import { projectsData } from "./data/projectsData";
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter();
  const recentProjects = projectsData.slice(-3);
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const handleViewDetails = (projectId: string | number) => {
    window.scrollTo(0, 0);
    router.push(`/project/${projectId}`);
  };

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Navbar */}
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => handleNavClick("home")}
          >
            Vinojith
          </Typography>
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

      {/* Mobile Menu */}
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

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          p: 4,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ maxWidth: 600 }}>
          I am a Software Engineer passionate about building modern
          applications.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => handleNavClick("projects")}
        >
          View My Work
        </Button>
      </Box>

      {/* About Section */}
      <Container id="about" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          I am a software engineer with experience in building scalable web and
          mobile applications. I specialize in Golang, Flutter, React, and cloud
          infrastructure. I love solving problems and creating meaningful
          solutions.
        </Typography>
      </Container>

      {/* Projects Section */}
      <Container id="projects" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Recent Projects
        </Typography>
        <Grid container spacing={4}>
          {recentProjects.map((project, idx) => (
            <Grid key={idx} size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: 2, boxShadow: 3, height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image} // Example: "/images/ecommerce.png" or external URL
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleViewDetails(project.id)}
                  >
                    View Details →
                  </Button>
                  {project.liveLink && (
                    <Button
                      size="small"
                      component="a"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      size="small"
                      component="a"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button variant="contained" href="/all-projects">
            View All Projects →
          </Button>
        </Box>
      </Container>

      {/* Contact Section */}
      <Container id="contact" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 3 }}>
          I am always open to new opportunities and interesting projects. Feel
          free to reach out!
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Link
            href="mailto:vinojithab17@gmail.com"
            underline="hover"
            variant="h6"
            color="primary"
          >
            vinojithab17@gmail.com
          </Link>
        </Box>
      </Container>

      {/* Footer */}
      <Paper
        component="footer"
        square
        sx={{
          mt: 8,
          p: 3,
          textAlign: "center",
          bgcolor: "grey.100",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Vinojith. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
          <IconButton
            component="a"
            href="https://github.com/Vinojithab17"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/vinojith-g/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton component="a" href="mailto:vinojithab17@gmail.com">
            <EmailIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
