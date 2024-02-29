// src/pages/ProjectDetailsPage.jsx

import { useParams, Link, Navigate } from "react-router-dom";

function ProjectDetailsPage({ projects }) {
  const { projectId } = useParams();
  console.log("projectId -->", projectId);

  const project = projects.find((project) => project._id === projectId);
  console.log(project);

  if (!project)
    return (
      <>
        <h1>No TYPING IN THE URL!</h1>
        <Link to="/projects">Go back</Link>
      </>
    );

  return (
    project && (
      <div>
        <h1>Project Details</h1>
        <h2>{project.name}</h2>
        <h3>Tech Stack: {project.technologies}</h3>
        <p>{project.description}</p>
        <Link to="/projects">Back</Link>
      </div>
    )
  );
}

export default ProjectDetailsPage;
