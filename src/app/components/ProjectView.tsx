'use client';

import { Project, Section, SubSection } from '@/app/data/projectsData';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Container,
  Drawer,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BlockMath } from 'react-katex';

import { useProjectStore } from '@/store/public-project-store';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LoadingBackdrop from './LoadingBackdrop';

export default function ProjectPreview() {
  const drawerWidth = 240;
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [open, setOpen] = useState(false);
  const getProject = useProjectStore((state) => state.getProjectById);

  const [project, setProject] = useState<Project | null>(getProject(id || '') ?? null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [loadingProject, setProjectLoading] = useState(false);

  // 1️⃣ Check auth
  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setUser({ loggedIn: false }));
  }, []);

  // 2️⃣ Fetch project
  useEffect(() => {
    if (!id) return;
    async function fetchProject() {
      if (!project) {
        setProjectLoading(true);
        try {
          const res = await fetch(`/api/projects/${id}`);
          if (!res.ok) throw new Error('Failed to fetch project');
          const data = await res.json();
          setProject(data);
        } catch (err) {
          console.error(err);
        } finally {
          setProjectLoading(false);
        }
      }
    }

    fetchProject();
  }, [user, id, project]);

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading project...</Typography>
      </Container>
    );
  }
  if (loadingProject) {
    return <LoadingBackdrop open={loadingProject} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
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
            transition: 'width 0.3s ease',
            bgcolor: 'background.paper',
            flexShrink: 0,
            borderRight: open ? '1px solid #ddd' : 'none',
            overflow: 'hidden',
          }}
        >
          <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                borderBottom: '1px solid #ddd',
              }}
            >
              <Typography variant="h6" noWrap>
                {project.title}
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 1 }}>
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
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          transition: 'margin-left 0.3s ease',
          ml: { md: open ? 2 : 0 },
          height: '100%',
          overflowY: 'auto',
          p: 2,
          scrollBehavior: 'smooth',
        }}
      >
        {!open && !isSmallScreen && (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mb: 2 }}>
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
            <Box sx={{ height: '20px' }} />
          </>
        )}

        {/* Sections */}
        <Grid container spacing={2}>
          {project.sections.map((section: Section) => (
            <Grid size={{ xs: 12 }} key={section.id}>
              <Paper
                sx={{ p: 3, borderRadius: 2, boxShadow: 3, scrollMarginTop: '80px' }}
                id={section.id}
              >
                <Typography variant="h5" gutterBottom>
                  {section.heading}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                  }}
                >
                  {/* LEFT CONTENT AREA */}
                  <Box sx={{ flex: 1 }}>
                    {section.content.map((para, i) => (
                      <Typography key={i} sx={{ mb: 2, textAlign: 'justify' }}>
                        {para}
                      </Typography>
                    ))}
                  </Box>

                  {/* RIGHT IMAGE AREA */}
                  {section.image && (
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.heading}
                      sx={{
                        flex: 1,
                        width: '100%',
                        maxWidth: 400,
                        borderRadius: 2,
                        objectFit: 'contain',
                        alignSelf: 'flex-start',
                      }}
                    />
                  )}
                </Box>

                {(section.subSections?.length ?? 0) > 0 &&
                  section.subSections?.map((sub: SubSection) => (
                    <Box key={sub.id} sx={{ mt: 4 }}>
                      {sub.heading && <Typography variant="h6">{sub.heading}</Typography>}

                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', md: 'row' },
                          gap: 3,
                          mt: 2,
                        }}
                      >
                        {/* LEFT CONTENT AREA */}
                        <Box sx={{ flex: 1 }}>
                          {sub.content?.map((para: string, i: number) => (
                            <Typography key={i} component="p" sx={{ mb: 2, textAlign: 'justify' }}>
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
                          {/* {sub.equation && (
                          <Box sx={{ my: 2, textAlign: 'center' }}>
                            <BlockMath math={sub.equation} />
                          </Box>
                        )} */}

                          {sub.equation && (
                            <Box
                              sx={{
                                my: 2,
                                textAlign: 'center',
                                transform: { xs: 'scale(0.5)', sm: 'scale(0.7)', md: 'scale(1)' },
                                transformOrigin: 'center',
                              }}
                            >
                              <BlockMath math={sub.equation} />
                            </Box>
                          )}
                        </Box>

                        {sub.image && (
                          <Box
                            component="img"
                            src={sub.image}
                            alt={sub.heading}
                            sx={{
                              flex: 1,
                              maxWidth: 300,
                              width: '100%',
                              borderRadius: 2,
                              objectFit: 'contain',
                            }}
                          />
                        )}
                      </Box>

                      {/* {sub.columns && sub.columns.length > 0 && (
                        <Box
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 3,
                            mt: 2,
                          }}
                        >
                          {sub.columns.map((col, idx) => (
                            <Box key={idx} sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                              {col.type === 'text' && <Typography>{col.content}</Typography>}
                              {col.type === 'image' && (
                                <Box
                                  component="img"
                                  src={col.content as string}
                                  alt=""
                                  sx={{ width: '100%', borderRadius: 2 }}
                                />
                              )}
                              {col.type === 'points' && (
                                <List>
                                  {Array.isArray(col.content) ? (
                                    col.content.map((pt: string, i: number) => (
                                      <ListItem key={i} sx={{ py: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                          <CircleIcon sx={{ fontSize: 10 }} />
                                        </ListItemIcon>
                                        <Typography
                                          sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                        >
                                          {pt}
                                        </Typography>
                                      </ListItem>
                                    ))
                                  ) : (
                                    <ListItem sx={{ py: 0 }}>
                                      <ListItemIcon sx={{ minWidth: 30 }}>
                                        <CircleIcon sx={{ fontSize: 10 }} />
                                      </ListItemIcon>
                                      <Typography
                                        sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                      >
                                        {col.content}
                                      </Typography>
                                    </ListItem>
                                  )}
                                </List>
                              )}

                              {col.type === 'equation' && (
                                <Box
                                  sx={{
                                    my: 2,
                                    textAlign: 'center',
                                    transform: {
                                      xs: 'scale(0.5)',
                                      sm: 'scale(0.7)',
                                      md: 'scale(1)',
                                    },
                                    transformOrigin: 'center',
                                  }}
                                >
                                  {(Array.isArray(col.content) ? col.content : [col.content]).map(
                                    (line, i) => (
                                      <BlockMath key={i} math={line as string} />
                                    )
                                  )}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      )} */}

                      {sub.columns && sub.columns.length > 0 && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 3,
                            mt: 2,
                          }}
                        >
                          {sub.columns.map((col, idx) => (
                            <Box
                              key={idx}
                              sx={{
                                p: 2,
                                border: '1px solid #ddd',
                                borderRadius: 2,
                                width: {
                                  xs: '100%',
                                  md: `${col.width}%`, // ← important!
                                },
                                boxSizing: 'border-box',
                              }}
                            >
                              {col.type === 'text' && <Typography>{col.content}</Typography>}

                              {col.type === 'image' && (
                                <Box
                                  component="img"
                                  src={col.content as string}
                                  alt=""
                                  sx={{ width: '100%', borderRadius: 2 }}
                                />
                              )}

                              {col.type === 'points' && (
                                <List>
                                  {(Array.isArray(col.content) ? col.content : [col.content]).map(
                                    (pt, i) => (
                                      <ListItem key={i} sx={{ py: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                          <CircleIcon sx={{ fontSize: 10 }} />
                                        </ListItemIcon>
                                        <Typography
                                          sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                        >
                                          {pt}
                                        </Typography>
                                      </ListItem>
                                    )
                                  )}
                                </List>
                              )}

                              {col.type === 'equation' && (
                                <Box
                                  sx={{
                                    my: 2,
                                    textAlign: 'center',
                                    transform: {
                                      xs: 'scale(0.5)',
                                      sm: 'scale(0.7)',
                                      md: 'scale(1)',
                                    },
                                    transformOrigin: 'center',
                                  }}
                                >
                                  {(Array.isArray(col.content) ? col.content : [col.content]).map(
                                    (line, i) => (
                                      <BlockMath key={i} math={line as string} />
                                    )
                                  )}
                                </Box>
                              )}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}

                {/* Section Columns */}
                {section.columns && section.columns.length > 0 && (
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 3,
                      mt: 3,
                    }}
                  >
                    {section.columns.map((col, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          p: 2,
                          border: '1px solid #ddd',
                          borderRadius: 2,
                          width: {
                            xs: '100%',
                            md: `${col.width || 100}%`, // use width %, default 100%
                          },
                          boxSizing: 'border-box',
                        }}
                      >
                        {col.type === 'text' && <Typography>{col.content}</Typography>}

                        {col.type === 'image' && (
                          <Box
                            component="img"
                            src={col.content as string}
                            alt=""
                            sx={{ width: '100%', borderRadius: 2 }}
                          />
                        )}

                        {col.type === 'points' && (
                          <List>
                            {(Array.isArray(col.content) ? col.content : [col.content]).map(
                              (pt, i) => (
                                <ListItem key={i} sx={{ py: 0 }}>
                                  <ListItemIcon sx={{ minWidth: 30 }}>
                                    <CircleIcon sx={{ fontSize: 10 }} />
                                  </ListItemIcon>
                                  <Typography
                                    sx={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                  >
                                    {pt}
                                  </Typography>
                                </ListItem>
                              )
                            )}
                          </List>
                        )}

                        {col.type === 'equation' && (
                          <Box
                            sx={{
                              my: 2,
                              textAlign: 'center',
                              transform: {
                                xs: 'scale(0.5)',
                                sm: 'scale(0.7)',
                                md: 'scale(1)',
                              },
                              transformOrigin: 'center',
                            }}
                          >
                            {(Array.isArray(col.content) ? col.content : [col.content]).map(
                              (line, i) => (
                                <BlockMath key={i} math={line as string} />
                              )
                            )}
                          </Box>
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
            position: 'fixed',
            left: 24,
            bottom: 32,
            transition: 'all 0.3s ease',
            zIndex: 1200,
          }}
        >
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </Fab>
      </Zoom>
    </Box>
  );
}
