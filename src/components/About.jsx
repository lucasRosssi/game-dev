import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, bg }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {bg ? (
          <div className="bg-white rounded-full h-16 w-16 border-2 border-white flex items-center justify-center">
            <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />
          </div>
        ) : (
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />
        )}

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Character</p>
        <h2 className={styles.sectionHeadText}>Backstory</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate game developer who thrives at the intersection of creativity and technical problem-solving. My focus is on crafting engaging gameplay systems built on scalable, modular and robust architecture.<br/><br/>

        Over the years, I've worked both independently and alongside designers and QA teams to bring products to life. From combat systems using Unreal Engine’s Gameplay Ability System to dynamic UI and animation integration, I aim to build experiences that feel responsive and polished.<br/><br/>

        I constantly seek to improve, staying current through courses, R&D and experimentation. Whether it’s learning a new system, refining an existing mechanic, or collaborating across disciplines, I bring a proactive mindset and a commitment to quality in everything I do.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
