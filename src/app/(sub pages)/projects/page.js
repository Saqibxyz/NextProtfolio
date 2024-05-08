import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";
const Staff = dynamic(() => 
    import("@/components/models/Staff"),{ssr:false}
    
);
export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" fixed w-full top-0 left-0 -z-50 h-full object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />
      <div
        className=" flex items-center justify-center fixed top-16  lg:top-20 lg:-left-24 left-1/2 -translate-x-1/2 lg:translate-x-0 h-screen -z-10
          
          
          "
      >
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
