import { Project } from '@/app/data/projectsData';
import { create } from 'zustand';

interface ProjectStoreState {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  getProjectById: (id: string) => Project | undefined;
  removeProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStoreState>((set, get) => ({
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
  getProjectById: (id: string) => {
    return get().projects.find((p) => p._id === id);
  },

  // Optional: remove project
  removeProject: (id: string) =>
    set((state) => ({
      projects: state.projects.filter((p) => p._id !== id),
    })),
}));
