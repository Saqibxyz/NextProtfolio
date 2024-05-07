import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div className=" w-full max-w-4xl px-16 space-y-8 flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectLayout {...project} key={index} />;
      })}
    </div>
  );
};

export default ProjectList;
