import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="conatiner-fluid bg-primary ">
        <div className="row text-white p-4">
      <h2>Projects</h2>
      <p>Here are some of my recent projects.</p>
       </div>
       <div className="row p-4">
        <div className="col">
 <ProjectCard project={{
        title: "Project One",
        description: "This is a description of project one.",
        image: "https://via.placeholder.com/300",
        link: "https://example.com/project-one"
      }} />
        </div>
     
      <div className="col">
        <ProjectCard project={{
        title: "Project Two",
        description: "This is a description of project two.",
        image: "https://via.placeholder.com/300",
        link: "https://example.com/project-two"
      }} />
      </div>
      
      <div className="col">
        <ProjectCard project={{
        title: "Project Three",
        description: "This is a description of project three.",
        image: "https://via.placeholder.com/300",
        link: "https://example.com/project-three"
      }} />
      </div>
      
       </div>
    </div>
  );
}

export default Projects;