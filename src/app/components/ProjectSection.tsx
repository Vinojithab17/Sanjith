"use client"

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  background-color: #e4dcafff;
  color: #ccd6f6;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #93d1c3ff;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.a`
  background-color: #b5bdc9ff;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ccd6f6;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(100, 255, 218, 0.4);
  }
`;

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A simple task manager application using React & TypeScript.",
    link: "#",
  },
  {
    title: "E-commerce Demo",
    description: "A demo e-commerce project with shopping cart functionality.",
    link: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat app built with WebSockets.",
    link: "#",
  },
];

const ProjectsSection: React.FC = () => {
  // show only last 3 projects
  const recentProjects = projects.slice(-3);

  return (
    <Section id="projects">
      <Title>Recent Projects</Title>
      <ProjectsGrid className="flex flex-col gap-4">
        {recentProjects.map((project, idx) => (
          <ProjectCard key={idx} href={project.link} target="_blank">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectsGrid>

 {/* View All Projects button */}
      <div className="mt-8 flex justify-center">
        <a
          href="/all-projects"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
        >
          View All Projects →
        </a>
      </div>
    </Section>
  );
};


export default ProjectsSection;
