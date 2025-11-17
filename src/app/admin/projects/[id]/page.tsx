"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Container, Typography, Box, Button, Paper } from "@mui/material";
import ProjectForm from "@/app/components/projectForm";
import { Project } from "@/app/data/projectsData";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProject() {
      if (!id) return;

      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");

        const json = await res.json();
        setProject(json);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h4">{project.title}</Typography>
        <Box>
          <Button variant="outlined" onClick={() => router.push("/admin/projects")}>Back</Button>
        </Box>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Preview</Typography>
        {project.image && <Image alt= {project.title}src={project.image} style={{ maxWidth: 300 }} />}
        <Typography variant="body1" sx={{ mt: 1 }}>{project.longDescription}</Typography>
      </Paper>

      <Typography variant="h6">Edit project</Typography>
      <ProjectForm
        initial={project}
        submitLabel="Update"
        onSaved={(updated) => {
          setProject(updated);
          alert("Saved");
        }}
      />

      <Box sx={{ mt: 2 }}>
        <Button
          color="error"
          variant="outlined"
          onClick={async () => {
            if (!confirm("Delete project?")) return;
            await axios.delete(`/api/projects/${id}`);
            router.push("/admin/projects");
          }}
        >
          Delete project
        </Button>
      </Box>
    </Container>
  );
}
