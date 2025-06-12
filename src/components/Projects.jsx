import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, video, source_code_link }) => {
  return (
    <motion.div 
      className="sm:w-[48%] w-full" 
      onClick={source_code_link ? () => window.open(source_code_link, "_blank") : undefined} 
      variants={fadeIn("up", "spring")}
    >
      <div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`bg-tertiary p-5 rounded-2xl w-full${source_code_link ? " cursor-pointer" : ""}`}
        >
          <div 
            className="relative w-full h-[400px]"
          >
            {image && <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />}
            {video && <video
              src={video}
              alt="project_video"
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
            />}
            {!image && !video && <img
              src="https://dev.epicgames.com/community/api/documentation/image/meta_tag?path=en-us/unreal-engine/API/Plugins/IntroTutorials/FTutorialCategory/Icon&application_version=5.5"
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />}
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Journal</p>
        <h2 className={`${styles.sectionHeadText}`}>Quest Log</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
