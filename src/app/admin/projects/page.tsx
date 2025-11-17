// pages/projects/index.tsx
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Card, CardContent, Typography, CardMedia, Button, Box } from "@mui/material";
import ProjectForm from "../../components/projectForm";
import { useRouter } from "next/navigation";
import { Project } from "@/app/data/projectsData";


export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [creating, setCreating] = useState(false);
const router = useRouter();
  async function fetchAll() {
    const res = await axios.get("/api/projects");
    setProjects(res.data);
  }

const handleEditView = (projectId: string) => {
  router.push(`/admin/projects/${projectId}`);
};
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Projects</Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6}}>
          <Box sx={{ mb: 2 }}>
            <Button variant="contained" onClick={() => setCreating((c) => !c)}>{creating ? "Hide" : "Add new project"}</Button>
          </Box>

          {creating && (
            <ProjectForm
              onSaved={() => {
                setCreating(false);
                fetchAll();
              }}
            />
          )}
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="subtitle1">Existing projects</Typography>
          <Grid container spacing={2}>
            {projects.map((p) => (
              <Grid key={p._id} size={{ xs: 12 }}>
                <Card>
                  <CardContent sx={{ display: "flex", gap: 2 }}>
                    {p.image && <CardMedia component="img" image={p.image} sx={{ width: 140, height: 90, borderRadius: 1 }} />}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6">{p.title}</Typography>
                      <Typography variant="body2">{p.description}</Typography>
                      <Box sx={{ mt: 1 }}>
                       <Button size="small" onClick={()=>handleEditView(p._id??"")}>View / Edit</Button>
                        <Button size="small" onClick={async () => {
                          if (!confirm("Delete project?")) return;
                          await axios.delete(`/api/projects/${p._id}`);
                          fetchAll();
                        }}>Delete</Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
