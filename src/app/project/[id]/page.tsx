"use client";
import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  IconButton,
  useMediaQuery,
  Fab,
  Zoom,
  AppBar,
  Button,
  Toolbar,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTheme } from "@mui/material/styles";
import { useParams, useRouter } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import { getProjectById } from "@/app/data/projectsData";

const drawerWidth = 240;

export default function ProjectDetailsPage() {
  // const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const params = useParams();
  const projectIdParam = params.id;

  // Make sure projectId is a single string
  const projectId =
    typeof projectIdParam === "string" ? projectIdParam : projectIdParam?.[0];

  const project = projectId ? getProjectById(projectId) : null;

  if (!project) {
    return (
      <Box p={4}>
        <Typography variant="h4">Project not found!</Typography>
        <Button onClick={() => router.push("/all-projects")}>Back</Button>
      </Box>
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

  // Detect scroll to reposition FAB
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 80);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <Box sx={{ p: 3 }}>
      {/* AppBar */}
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar>
          {/* Home icon */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleBackToHome}
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button onClick={handleBackAllProject}>← View All Projects</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Box sx={{ height: "16px" }} />

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
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { width: drawerWidth } }}
          >
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <List>
                {project.sections.map((section) => (
                  <ListItemButton
                    key={section.id}
                    onClick={() => {
                      handleScroll(section.id);
                      setOpen(false); // close drawer on mobile
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
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Sidebar Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Typography variant="h6" noWrap>
                  {project.title}
                </Typography>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </Box>

              {/* Sidebar Content */}
              <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1 }}>
                <List>
                  {project.sections.map((section) => (
                    <ListItemButton
                      key={section.id}
                      onClick={() => handleScroll(section.id)}
                    >
                      <ListItemText primary={section.heading} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Paper>
          </Box>
        )}

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            transition: "margin-left 0.3s ease",
            ml: { md: open ? 2 : 0 },
            height: "100%",
            overflowY: "auto",
            p: 2,
            scrollBehavior: "smooth",
          }}
        >
          {/* Header (only when drawer closed on large screens) */}
          {!open && !isSmallScreen && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                mb: 2,
              }}
            >
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
              <Box sx={{ height: "20px" }}></Box>
            </>
          )}

          {/* Scrollable Content */}
          <Grid container spacing={2}>
            {/* {project.sections.map((section) => (
              <Grid size={{ xs: 12 }} key={section.id}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    scrollMarginTop: "80px",
                  }}
                  id={section.id}
                >
                  <Typography variant="h5" gutterBottom>
                    {section.heading}
                  </Typography>
                  {section.content.map((paragraph, i) => (
                    <Typography
                      key={i}
                      component="p"
                      sx={{
                        mb: 2,
                        textAlign: "justify",
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                  {section.image && (
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.heading}
                      sx={{
                        display: "block",
                        mx: "auto",
                        width: { xs: "80%", sm: "60%", md: "50%" },
                        borderRadius: 2,
                        mt: 2,
                      }}
                    />
                  )}
                </Paper>
              </Grid>
            ))} */}
            {project.sections.map((section) => (
  <Grid size={{ xs: 12 }} key={section.id}>
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        scrollMarginTop: "80px",
      }}
      id={section.id}
    >
      <Typography variant="h5" gutterBottom>
        {section.heading}
      </Typography>

      {section.content.map((paragraph, i) => (
        <Typography
          key={i}
          component="p"
          sx={{
            mb: 2,
            textAlign: "justify",
          }}
        >
          {paragraph}
        </Typography>
      ))}

      {section.image && (
        <Box
          component="img"
          src={section.image}
          alt={section.heading}
          sx={{
            display: "block",
            mx: "auto",
            width: { xs: "80%", sm: "60%", md: "50%" },
            borderRadius: 2,
            mt: 2,
          }}
        />
      )}

      {/* ---- SUBSECTIONS ---- */}
      {section.subSections && section.subSections.length > 0 && (
        <Box sx={{ mt: 4 }}>
          {section.subSections.map((sub) => (
            <Box key={sub.id} sx={{ mt: 3 }}>
              {sub.heading && (<Typography variant="h6" gutterBottom>
                {sub.heading}
              </Typography> )}
              {sub.content?.map((paragraph, i) => (
                <Typography
                  key={i}
                  component="p"
                  sx={{ mb: 2, textAlign: "justify" }}
                >
                  {paragraph}
                </Typography>
              ))}

              {sub.image && (
                <Box
                  component="img"
                  src={sub.image}
                  alt={sub.heading}
                  sx={{
                    display: "block",
                    mx: "auto",
                    width: { xs: "80%", sm: "60%", md: "50%" },
                    borderRadius: 2,
                    mt: 2,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      )}
    </Paper>
  </Grid>
))}

          </Grid>
        </Box>

        {/* Floating Drawer Toggle Button */}
        <Zoom in>
          <Fab
            color="primary"
            onClick={() => setOpen(!open)}
            sx={{
              position: "fixed",
              left: 24,
              bottom: 32,
              transition: "all 0.3s ease",
              zIndex: 1200,
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </Fab>
        </Zoom>
      </Box>
    </Box>
  );
}
