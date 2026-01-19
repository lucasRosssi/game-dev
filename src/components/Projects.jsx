import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, role, team, description, tags, image, video, source_code_link }) => {
  return (
    <motion.div 
      className="w-full" 
      onClick={source_code_link ? () => window.open(source_code_link, "_blank") : undefined} 
      variants={fadeIn("up", "spring")}
    >
      <div>
        <div
          className={`gradient-border bg-tertiary p-5 rounded-2xl w-full${source_code_link ? " cursor-pointer" : ""}`}
        >
          <div
            className="relative w-full"
          >
            {image && <img
              src={image}
              alt="project_image"
              className="w-full max-h-[570px] object-contain rounded-2xl bg-black"
            />}
            {video && <video
              src={video}
              alt="project_video"
              className="w-full max-h-[570px] object-contain rounded-2xl"
              autoPlay
              muted
              loop
              disablePictureInPicture
            />}
            {!image && !video && <img
              src="https://dev.epicgames.com/community/api/documentation/image/meta_tag?path=en-us/unreal-engine/API/Plugins/IntroTutorials/FTutorialCategory/Icon&application_version=5.5"
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />}
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {role && <h4>{role}</h4>}
            {team && <h4>{team}</h4>}
            <p className="mt-2 text-secondary text-[14px] whitespace-pre-line">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
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
    
      <div className="mt-20 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
