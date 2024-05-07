import Link from "next/link";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
      <Link 
          href={demoLink}
    target="_blank"
          className="flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className=" self-end flex-1 mx-2 mb-1 bg-transparent border-dashed border-b border-muted" />

      <p className="text-foreground">
        {new Date(date).toLocaleString("default", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
    </Link>
  );
};

export default ProjectLayout;
