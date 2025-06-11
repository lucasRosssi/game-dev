import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-fit mx-auto">
      <div className={`inset-0 pt-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Lucas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do
            <Typewriter
              options={{
                strings: ["Gameplay Mechanics", "AI", "Animation", "GAS", "UI", "Motion Matching"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
