import React, { useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project One", description: "Description of project one." },
    { id: 2, title: "Project Two", description: "Description of project two." },
  ]);

  const [newProject, setNewProject] = useState({ title: "", description: "" });
  const [editProject, setEditProject] = useState(null); // State for the project to be edited

  const handleAddProject = () => {
    const id = projects.length + 1;
    setProjects([...projects, { id, ...newProject }]);
    setNewProject({ title: "", description: "" });
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleEditProject = (project) => {
    setEditProject(project); // Set the project to be edited
  };

  const handleSaveEdit = () => {
    setProjects(
      projects.map((project) =>
        project.id === editProject.id ? editProject : project
      )
    );
    setEditProject(null); // Clear the editing state
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
            <button onClick={() => handleEditProject(project)}>Edit</button>
          </li>
        ))}
      </ul>

      <div className="add-project">
        <h2>Add a New Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <textarea
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      {editProject && (
        <div className="edit-project">
          <h2>Edit Project</h2>
          <input
            type="text"
            placeholder="Project Title"
            value={editProject.title}
            onChange={(e) =>
              setEditProject({ ...editProject, title: e.target.value })
            }
          />
          <textarea
            placeholder="Project Description"
            value={editProject.description}
            onChange={(e) =>
              setEditProject({ ...editProject, description: e.target.value })
            }
          />
          <button onClick={handleSaveEdit}>Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default Projects;