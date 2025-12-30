import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Javascript,
  nodejs,
  mongodb,
  CPP,
  Python
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl">
          SKILLS
        </h1>

        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image img={HTML} />
          <Image img={CSS} />
          <Image img={Javascript} />
          <Image img={react} />
          <Image img={TailwindCSS} />
          <Image img={CPP} />
          <Image img={Python} />
          <Image img={Vite} />
          <Image img={Git} />
          <Image img={Github} />
          <Image img={nodejs} />
          <Image img={mongodb} />
        </div>
      </section>
    </>
  );
};

export default Skills;
