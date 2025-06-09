import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon }) => {
  const duration = Math.floor(Math.random() * 10) + 10;

  return (
    <div className="xs:w-[250px] w-full relative rounded-[20px] p-[2px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        animate={{
          rotate: 360,
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        style={{
          zIndex: 0,
          borderRadius: "inherit",
        }}
      />

      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center relative z-10">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="w-full mt-4">
        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className="w-full max-w-full"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary text-[17px] leading-[30px] 
            w-full lg:w-4/5 xl:w-3/4"
          >
            As a <strong>Frontend & Fullstack Developer</strong> specializing in{" "}
            <strong>JavaScript and TypeScript</strong>, I build high-performance
            web applications with scalable architecture and seamless user
            experiences. My expertise spans{" "}
            <strong>
              frontend (React.js, Next.js, Redux-toolkit, Three.js, D3.js,
              Chart.js, Framer-motion)
            </strong>
            , <strong>backend (Node.js, Python, REST/GraphQL APIs)</strong>, and{" "}
            <strong>UI/UX design (Figma, CSS/SASS, Tailwind CSS)</strong>, with
            cloud deployment experience in{" "}
            <strong>AWS (Amplify, Cognito, S3), Vercel</strong>. From SAAS,
            e-commerce platforms to AI-driven apps, I transform complex
            requirements into clean, efficient solutions.{" "}
            <strong>Let's collaborate</strong> to bring your most ambitious web
            projects to life.
          </motion.p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map(service => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
