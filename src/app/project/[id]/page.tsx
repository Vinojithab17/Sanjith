"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
  IconButton,
  useMediaQuery,
  Fab,
  Zoom,
  AppBar,
  Button,
  Toolbar,
  Drawer,
  ListItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";
import { useParams, useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import CircleIcon from "@mui/icons-material/Circle";
import { Project, Section, SubSection } from "@/app/data/projectsData";

const drawerWidth = 240;

export default function ProjectDetailsPage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const params = useParams();
  const projectId = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch project from API
  useEffect(() => {
    if (!projectId) return;

    async function fetchProject() {
      setLoading(true);
      try {
        const res = await fetch(`/api/projects/${projectId}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [projectId]);

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Project not found!</Typography>
        <Button onClick={() => router.push("/all-projects")}>Back</Button>
      </Container>
    );
  }

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleBackToHome = () => router.push("/");
  const handleBackAllProject = () => router.push("/all-projects");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* AppBar */}
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleBackToHome} sx={{ mr: 2 }}>
            <HomeIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button onClick={handleBackAllProject}>← View All Projects</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Sidebar / Drawer */}
        {isSmallScreen ? (
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: drawerWidth } }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <List>
                {project.sections.map((section: Section) => (
                  <ListItemButton
                    key={section.id}
                    onClick={() => {
                      handleScroll(section.id);
                      setOpen(false);
                    }}
                  >
                    <ListItemText primary={section.heading} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        ) : (
          <Box
            sx={{
              width: open ? drawerWidth : 0,
              transition: "width 0.3s ease",
              bgcolor: "background.paper",
              flexShrink: 0,
              borderRight: open ? "1px solid #ddd" : "none",
              overflow: "hidden",
            }}
          >
            <Paper elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, borderBottom: "1px solid #ddd" }}>
                <Typography variant="h6" noWrap>
                  {project.title}
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1 }}>
                <List>
                  {project.sections.map((section: Section) => (
                    <ListItemButton key={section.id} onClick={() => handleScroll(section.id)}>
                      <ListItemText primary={section.heading} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Paper>
          </Box>
        )}

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, width: "100%", transition: "margin-left 0.3s ease", ml: { md: open ? 2 : 0 }, height: "100%", overflowY: "auto", p: 2, scrollBehavior: "smooth" }}>
          {!open && !isSmallScreen && (
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", mb: 2 }}>
              <IconButton onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ ml: 1 }}>
                {project.title}
              </Typography>
            </Box>
          )}

          {isSmallScreen && (
            <>
              <Typography variant="h6" noWrap>
                {project.title}
              </Typography>
              <Box sx={{ height: "20px" }} />
            </>
          )}

          {/* Sections */}
          <Grid container spacing={2}>
            {project.sections.map((section: Section) => (
              <Grid size={{ xs: 12 }} key={section.id}>
                <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3, scrollMarginTop: "80px" }} id={section.id}>
                  <Typography variant="h5" gutterBottom>
                    {section.heading}
                  </Typography>
                  {section.content.map((para: string, i: number) => (
                    <Typography key={i} component="p" sx={{ mb: 2, textAlign: "justify" }}>
                      {para}
                    </Typography>
                  ))}
                  {section.image && (
                    <Box component="img" src={section.image} alt={section.heading} sx={{ display: "block", mx: "auto", width: { xs: "80%", sm: "60%", md: "50%" }, borderRadius: 2, mt: 2 }} />
                  )}

                  {(section.subSections?.length ?? 0) > 0 &&
                    section.subSections?.map((sub: SubSection) => (
                      <Box key={sub.id} sx={{ mt: 4 }}>
                        {sub.heading && <Typography variant="h6">{sub.heading}</Typography>}
                        {sub.content?.map((para: string, i: number) => (
                          <Typography key={i} component="p" sx={{ mb: 2, textAlign: "justify" }}>
                            {para}
                          </Typography>
                        ))}

                        <List>
                          {sub.points?.map((point: string, idx: number) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CircleIcon sx={{ fontSize: 10 }} />
                              </ListItemIcon>
                              <ListItemText primary={point} />
                            </ListItem>
                          ))}
                        </List>

                        {sub.image && (
                          <Box component="img" src={sub.image} alt={sub.heading} sx={{ display: "block", mx: "auto", width: { xs: "80%", sm: "60%", md: "50%" }, borderRadius: 2, mt: 2 }} />
                        )}
                      </Box>
                    ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Floating Drawer Toggle Button */}
        <Zoom in>
          <Fab color="primary" onClick={() => setOpen(!open)} sx={{ position: "fixed", left: 24, bottom: 32, transition: "all 0.3s ease", zIndex: 1200 }}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </Fab>
        </Zoom>
      </Box>
    </Box>
  );
}
