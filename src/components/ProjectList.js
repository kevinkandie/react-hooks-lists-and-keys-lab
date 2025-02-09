import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem 
          key={project.id} 
          name={project.name} 
          about={project.about} 
          technologies={project.technologies || []}  // Ensure it's always an array
        />
      ))}
    </div>
  );
}

export default ProjectList;
