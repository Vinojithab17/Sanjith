// components/ProjectForm.tsx
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  TextField,
  Button,
  Box,
  Chip,
  Typography,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import type { ProjectDoc } from "@/app/models/projects";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Project, Section, SubSection } from "../data/projectsData";

type FormProps = {
  initial?: Partial<ProjectDoc>;
  onSaved?: (project: Project) => void;
  submitLabel?: string;
};

function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = (e) => reject(e);
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export default function ProjectForm({ initial = {}, onSaved, submitLabel = "Save" }: FormProps) {
  const [title, setTitle] = useState(initial.title ?? "");
  const [description, setDescription] = useState(initial.description ?? "");
  const [longDescription, setLongDescription] = useState(initial.longDescription ?? "");
  const [technologies, setTechnologies] = useState<string[]>(initial.technologies ?? []);
  const [techInput, setTechInput] = useState("");
  const [features, setFeatures] = useState<string[]>(initial.features ?? []);
  const [featureInput, setFeatureInput] = useState("");
  const [challenges, setChallenges] = useState<string[]>(initial.challenges ?? []);
  const [solutions, setSolutions] = useState<string[]>(initial.solutions ?? []);
  const [image, setImage] = useState<string | undefined>(initial.image);
  const [githubLink, setGithubLink] = useState(initial.githubLink ?? "");
  const [liveLink, setLiveLink] = useState(initial.liveLink ?? "");
  const [duration, setDuration] = useState(initial.duration ?? "");
  const [teamSize, setTeamSize] = useState(initial.teamSize ?? "");
  const [role, setRole] = useState(initial.role ?? "");
  const [sections, setSections] = useState<Section[]>(initial.sections ?? []);

  useEffect(() => {
    // ensure sections have ids
    setSections((s) =>
      s.map((sec: Section) => ({ ...sec, id: sec.id ?? uuidv4(), subSections: sec.subSections ?? [] }))
    );
  }, []); // run once

  // Image selector (convert to data URL)
  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setImage(dataUrl);
  }

  function addTechnology() {
    if (!techInput.trim()) return;
    setTechnologies((t) => [...t, techInput.trim()]);
    setTechInput("");
  }
  function removeTechnology(i: number) {
    setTechnologies((t) => t.filter((_, idx) => idx !== i));
  }

  function addFeature() {
    if (!featureInput.trim()) return;
    setFeatures((f) => [...f, featureInput.trim()]);
    setFeatureInput("");
  }
  function removeFeature(i: number) {
    setFeatures((f) => f.filter((_, idx) => idx !== i));
  }

  function addSection() {
    setSections((s) => [
      ...s,
      { id: uuidv4(), heading: "New section", content: [""], image: undefined, subSections: [] },
    ]);
  }
  function updateSection(idx: number, patch: Partial<any>) {
    setSections((s) => s.map((sec, i) => (i === idx ? { ...sec, ...patch } : sec)));
  }
  function removeSection(idx: number) {
    setSections((s) => s.filter((_, i) => i !== idx));
  }

  function addSubSection(secIdx: number) {
    const sub = { id: uuidv4(), heading: "New sub", content: [""], points: [], image: undefined };
    setSections((s) =>
      s.map((sec, i) => (i === secIdx ? { ...sec, subSections: [...(sec.subSections ?? []), sub] } : sec))
    );
  }
  function updateSubSection(secIdx: number, subIdx: number, patch: Partial<SubSection>) {
    setSections((s) =>
      s.map((sec, i) =>
        i === secIdx
          ? {
              ...sec,
              subSections: sec.subSections?.map((sub: SubSection, j: number) => (j === subIdx ? { ...sub, ...patch } : sub)),
            }
          : sec
      )
    );
  }
  function removeSubSection(secIdx: number, subIdx: number) {
    setSections((s) =>
      s.map((sec, i) => (i === secIdx ? { ...sec, subSections: sec.subSections?.filter((_: SubSection, j: number) => j !== subIdx) } : sec))
    );
  }

  // section image upload (client side)
  async function handleSectionImageChange(e: React.ChangeEvent<HTMLInputElement>, secIdx: number) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    updateSection(secIdx, { image: dataUrl });
  }
  async function handleSubSectionImageChange(e: React.ChangeEvent<HTMLInputElement>, secIdx: number, subIdx: number) {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    updateSubSection(secIdx, subIdx, { image: dataUrl });
  }

  // add / remove content paragraph inside section
  function updateSectionContent(secIdx: number, contentIdx: number, val: string) {
    setSections((s) =>
      s.map((sec, i) =>
        i === secIdx ? { ...sec, content: sec.content.map((c: string, j: number) => (j === contentIdx ? val : c)) } : sec
      )
    );
  }
  function addSectionParagraph(secIdx: number) {
    setSections((s) => s.map((sec, i) => (i === secIdx ? { ...sec, content: [...sec.content, ""] } : sec)));
  }
  function removeSectionParagraph(secIdx: number, contentIdx: number) {
    setSections((s) => s.map((sec, i) => (i === secIdx ? { ...sec, content: sec.content.filter((_: any, j: number) => j !== contentIdx) } : sec)));
  }

  // sub-section points handling
  function addPoint(secIdx: number, subIdx: number, text = "") {
    setSections((s) =>
      s.map((sec, i) =>
        i === secIdx
          ? {
              ...sec,
              subSections: sec.subSections?.map((sub: any, j: number) => (j === subIdx ? { ...sub, points: [...(sub.points ?? []), text] } : sub)),
            }
          : sec
      )
    );
  }
  function updatePoint(secIdx: number, subIdx: number, pointIdx: number, text: string) {
    setSections((s) =>
      s.map((sec, i) =>
        i === secIdx
          ? {
              ...sec,
              subSections: sec.subSections?.map((sub: SubSection, j: number) =>
                j === subIdx ? { ...sub, points: sub.points?.map((p: string, k: number) => (k === pointIdx ? text : p)) } : sub
              ),
            }
          : sec
      )
    );
  }
  function removePoint(secIdx: number, subIdx: number, pointIdx: number) {
    setSections((s) =>
      s.map((sec, i) =>
        i === secIdx
          ? {
              ...sec,
              subSections: sec.subSections?.map((sub: SubSection, j: number) =>
                j === subIdx ? { ...sub, points: sub.points?.filter((_: any, k: number) => k !== pointIdx) } : sub
              ),
            }
          : sec
      )
    );
  }

  async function submit(e?: React.FormEvent, method = "POST", id?: string) {
    if (e) e.preventDefault();
    const payload: Project = {
      title,
      description,
      longDescription,
      technologies,
      features,
      challenges,
      solutions,
      image,
      githubLink,
      liveLink,
      duration,
      teamSize,
      role,
      sections,
    };

    try {
      let res;
      if (method === "POST") {
        res = await axios.post("/api/projects", payload);
      } else {
        res = await axios.put(`/api/projects/${id}`, payload);
      }
      onSaved && onSaved(res.data);
    } catch (err: any) {
      console.error(err);
      alert("Failed to save: " + (err?.response?.data?.error || err?.message));
    }
  }

  return (
    <Paper sx={{ p: 3 }}>
      <form onSubmit={(e) => submit(e, "POST")}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Project
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 , md:8 }} >
            <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Grid>
          <Grid size={{ xs: 12 ,md:4}} >
            <TextField label="Role" fullWidth value={role} onChange={(e) => setRole(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField label="Short description" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <TextField label="Long description" fullWidth multiline minRows={3} value={longDescription} onChange={(e) => setLongDescription(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12 , md:6 }}>
            <TextField label="Github link" fullWidth value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12 , md:6 }}>
            <TextField label="Live link" fullWidth value={liveLink} onChange={(e) => setLiveLink(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12 ,md:4}} >
            <TextField label="Duration" fullWidth value={duration} onChange={(e) => setDuration(e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12 ,md:4}} >
            <TextField label="Team size" fullWidth value={teamSize} onChange={(e) => setTeamSize(e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
              <TextField label="Add technology" value={techInput} onChange={(e) => setTechInput(e.target.value)} size="small" />
              <Button onClick={addTechnology} startIcon={<AddIcon />}>Add</Button>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {technologies.map((t, i) => (
                <Chip key={i} label={t} onDelete={() => removeTechnology(i)} />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 1 }}>
              <TextField label="Add feature" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} size="small" />
              <Button onClick={addFeature} startIcon={<AddIcon />}>Add</Button>
            </Box>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {features.map((f, i) => (
                <Chip key={i} label={f} onDelete={() => removeFeature(i)} />
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12 , md:6 }}>
            <TextField label="Challenges (comma separated or keep blank)" fullWidth value={challenges?.join(", ")} onChange={(e) => setChallenges(e.target.value.split(",").map(s=>s.trim()).filter(Boolean))} />
          </Grid>
          <Grid size={{ xs: 12, md:6 }}>
            <TextField label="Solutions (comma separated)" fullWidth value={solutions?.join(", ")} onChange={(e) => setSolutions(e.target.value.split(",").map(s=>s.trim()).filter(Boolean))} />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Box>
              <Typography variant="subtitle2">Project image</Typography>
              {image && (
                <Box sx={{ mb: 1 }}>
                  <img src={image} alt="project" style={{ maxWidth: 240, borderRadius: 8 }} />
                </Box>
              )}
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Typography variant="h6">Sections</Typography>
            {sections.map((sec, si) => (
              <Paper sx={{ p: 2, mb: 2 }} key={sec.id}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <TextField label="Heading" value={sec.heading} onChange={(e)=>updateSection(si, { heading: e.target.value })} />
                  <IconButton color="error" onClick={()=>removeSection(si)}><DeleteIcon/></IconButton>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Paragraphs</Typography>
                  {sec.content.map((c: string, ci: number) => (
                    <Box key={ci} sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
                      <TextField fullWidth multiline value={c} onChange={(e)=>updateSectionContent(si, ci, e.target.value)} />
                      <IconButton onClick={()=>removeSectionParagraph(si, ci)}><DeleteIcon/></IconButton>
                    </Box>
                  ))}
                  <Button onClick={()=>addSectionParagraph(si)} startIcon={<AddIcon/>}>Add paragraph</Button>
                </Box>

                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Section image</Typography>
                  {sec.image && <Image alt={sec.heading} src={sec.image} style={{ maxWidth: 200, display: "block" }} />}
                  <input type="file" accept="image/*" onChange={(e)=>handleSectionImageChange(e, si)} />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2">Subsections</Typography>
                  {sec.subSections?.map((sub: SubSection, subi: number) => (
                    <Paper key={sub.id} sx={{ p: 2, mt: 1 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <TextField label="Sub heading" value={sub.heading} onChange={(e)=>updateSubSection(si, subi, { heading: e.target.value })} />
                        <IconButton color="error" onClick={()=>removeSubSection(si, subi)}><DeleteIcon/></IconButton>
                      </Box>

                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2">Content</Typography>
                        {sub.content?.map((pc: string, pci: number) => (
                          <Box key={pci} sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
                            <TextField fullWidth multiline value={pc} onChange={(e)=>updateSubSection(si, subi, { content: sub.content?.map((x:any, idx:number)=> idx===pci ? e.target.value : x) })} />
                          </Box>
                        ))}
                      </Box>

                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2">Points</Typography>
                        {sub.points?.map((p: string, pi: number) => (
                          <Box key={pi} sx={{ display: "flex", gap: 1, alignItems: "center", mt: 1 }}>
                            <TextField fullWidth value={p} onChange={(e)=>updatePoint(si, subi, pi, e.target.value)} />
                            <IconButton onClick={()=>removePoint(si, subi, pi)}><DeleteIcon/></IconButton>
                          </Box>
                        ))}
                        <Button onClick={()=>addPoint(si, subi, "")} startIcon={<AddIcon/>}>Add point</Button>
                      </Box>

                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2">Subsection image</Typography>
                        {sub.image && <Image alt={sub.heading?? ""} src={sub.image} style={{ maxWidth: 200, display: "block" }} />}
                        <input type="file" accept="image/*" onChange={(e)=>handleSubSectionImageChange(e, si, subi)} />
                      </Box>
                    </Paper>
                  ))}

                  <Button onClick={()=>addSubSection(si)} startIcon={<AddIcon/>} sx={{ mt: 1 }}>Add subsection</Button>
                </Box>
              </Paper>
            ))}

            <Button onClick={addSection} startIcon={<AddIcon/>}>Add section</Button>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ display: "flex", gap: 1 }}>
            <Button variant="contained" type="submit">{submitLabel}</Button>
            <Button variant="outlined" onClick={()=> {
              // quick save via API directly (create)
              submit(undefined, "POST");
            }}>Save</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
