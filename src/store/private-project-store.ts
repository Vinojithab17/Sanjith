import { Project } from '@/app/data/projectsData';
import { Types } from 'mongoose';
import { create } from 'zustand';

interface PrivateProjectStoreState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  getProjectById: (id: Types.ObjectId | string) => Project | undefined;
  removeProject: (id: Types.ObjectId) => void;
}

export const usePrivateProjectStore = create<PrivateProjectStoreState>((set, get) => ({
  projects: [],

  // Replace whole list
  setProjects: (projects) => set({ projects }),

  // Add new
  addProject: (project) =>
    set((state) => ({
      projects: [...state.projects, project],
    })),

  // Update by matching _id
  updateProject: (project) =>
    set((state) => ({
      projects: state.projects.map((p) => (p._id === project._id ? { ...p, ...project } : p)),
    })),

  // Get project by id
  getProjectById: (id: Types.ObjectId | string) => {
    return get().projects.find((p) => p._id === id);
  },

  // Optional: remove project
  removeProject: (id: Types.ObjectId | string) =>
    set((state) => ({
      projects: state.projects.filter((p) => p._id !== id),
    })),
}));
