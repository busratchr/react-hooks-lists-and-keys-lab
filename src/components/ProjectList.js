import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((project) => {
    return (
      <ProjectItem
      key={project.id}
      about={project.about}
      technologies={project.technologies}
      name={project.name}
      />
    );
  });
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {project}
        </div>
    </div>
  );
}

export default ProjectList;
