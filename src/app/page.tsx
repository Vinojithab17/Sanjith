'use client';

import * as React from 'react';
import {
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
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/navigation';
import { Project } from './data/projectsData';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Type from '@/app/components/type';
import Header from './components/header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchAll() {
    const res = await axios.get('/api/projects/visible');
    setProjects(res.data);
  }

  useEffect(() => {
    fetchAll();
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const router = useRouter();
  const recentProjects = projects.slice(-3);
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    console.log(mobileMenuOpen);
    setMobileMenuOpen(false);
  };

  const handleViewDetails = (projectId: string | number) => {
    window.scrollTo(0, 0);
    router.push(`/project/${projectId}`);
  };

  // const AdminViewAll = () => {
  //   window.scrollTo(0, 0);
  //   router.push(`/admin/projects`);
  // };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          p: 4,
        }}
      >
        {/* <h1 style={{ paddingBottom: 15 }} className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1> */}
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I am Sanjith
        </Title>
        <Type />
        <Typography variant="h6" gutterBottom sx={{ maxWidth: 600 }}>
          I am an aspiring Electronic Engineer who loves sharing my experience with community.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => handleNavClick('projects')}
        >
          View My Work
        </Button>
        {/* <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => AdminViewAll()}>
          Admin View All Projects
        </Button> */}
      </Box>

      {/* About Section */}
      <Container id="about" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 800, mx: 'auto' }}>
          Working on advanced FPGA/DSP modem systems with involvement in the entire pipeline —
          MATLAB modeling, system design, RTL development, and hardware deployment. This end-to-end
          responsibility has helped me build both the technical depth and the architectural view
          needed to deliver efficient and reliable designs.
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
              <Card sx={{ borderRadius: 2, boxShadow: 3, height: '100%' }}>
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
                  <Button size="small" onClick={() => handleViewDetails(project._id ?? '')}>
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
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
          I am always open to new opportunities and interesting projects. Feel free to reach out!
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Link href="mailto:vinojithab17@gmail.com" underline="hover" variant="h6" color="primary">
            shansanjithofficial@gmail.com
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
          textAlign: 'center',
          bgcolor: 'grey.100',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Sanjith. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <IconButton component="a" href="https://github.com/sanjith1999" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/sanjith-shanmugathashan-1377571b8/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton component="a" href="mailto:shansanjithofficial@gmail.com">
            <EmailIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
