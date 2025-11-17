// models/Project.ts
import mongoose, { Document, Model } from "mongoose";

export interface SubSection {
  id: string;
  heading?: string;
  content?: string[]; // paragraphs
  points?: string[];
  image?: string; // data URL
}

export interface Section {
  id: string;
  heading: string;
  content: string[];
  image?: string; // data URL
  subSections?: SubSection[];
}

export interface ProjectDoc extends Document {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  image?: string; // data URL
  githubLink?: string;
  liveLink?: string;
  duration?: string;
  teamSize?: string;
  role?: string;
  sections: Section[];
  createdAt: Date;
  updatedAt: Date;
}

const SubSectionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    heading: String,
    content: [String],
    points: [String],
    image: String,
  },
  { _id: false }
);

const SectionSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    heading: { type: String, required: true },
    content: [String],
    image: String,
    subSections: [SubSectionSchema],
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    longDescription: String,
    technologies: [String],
    features: [String],
    challenges: [String],
    solutions: [String],
    image: String,
    githubLink: String,
    liveLink: String,
    duration: String,
    teamSize: String,
    role: String,
    sections: [SectionSchema],
  },
  { timestamps: true }
);

let ProjectModel: Model<ProjectDoc>;

try {
  ProjectModel = mongoose.model<ProjectDoc>("Project");
} catch {
  ProjectModel = mongoose.model<ProjectDoc>("Project", ProjectSchema);
}

export default ProjectModel;
