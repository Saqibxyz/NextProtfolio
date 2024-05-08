"use client"
import ProjectLayout from "./ProjectLayout";
import { delay, motion } from "framer-motion";
const container = {
    hidden: {
        opacity: 0,

    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 1.5,
        }
    }
}
const ProjectList = ({ projects }) => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"


            className=" w-full max-w-auto  xl:max-w-4xl lg:px-16 px-4 mx-auto  md:space-y-8 space-y-6 flex-col items-center">
            {projects.map((project, index) => {
                return <ProjectLayout {...project} key={index} />;
            })}
        </motion.div>
    );
};

export default ProjectList;
