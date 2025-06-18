"use client"
import GordonNavBar from "@/components/GordonNavBar/GordonNavBar";
import { HeroUIProvider } from "@heroui/react";
import Image from "next/image"
import { GordonAnimatedText } from "@/components/GordonAnimatedText/GordonAnimatedText";
import { Button } from "@heroui/react";
import ProjectCard from "@/components/GordonProjectCard/GordonProjectCard";
import { projectData } from "@/constants/ExperienceData";
import ExperienceCard from "@/components/GordonExperienceCard/GordonExperienceCard";
import { experienceData, EducationData } from "@/constants/ExperienceData";
import { Footer } from "@/components/Footer/Footer";
import Link from "next/link";
type AvatarProps = {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
};
function Avatar({ src, alt = 'User Avatar', size = 250, className }: AvatarProps) {

  return (
    <div
      className={`relative rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        // height={300}
        // width={300}
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

export default function Home() {
  return (
    <HeroUIProvider>
      <div className="w-full min-h-screen bg-black overflow-hidden" >
        <div>
          <GordonNavBar />
        </div>

        <div className="bg-black h-auto px-4 py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Avatar section */}
            <div className="flex justify-center md:justify-start">
              <Avatar src={`/images/profolio.JPG`} alt="Gordon Signature" size={300} />
            </div>

            {/* Text section */}
            <div className="md:col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <GordonAnimatedText sentence="I code and create content " />
              <GordonAnimatedText sentence="to make impact!" className="text-[#FF8660]" />
              <h1 className="text-[#C5C5C5] text-[18px] font-bold mt-4">
                Computational Science ✖ Software Engineeing ✖ Humanities <br />
              </h1>
              <h2 className="text-[#C5C5C5] mt-2">
                I am a software engineer with a background in science and a love in literature <br />
                I am dedicated to creating innovative solutions that bridge the gap between technology and human experience. <br />
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-black h-[120px] flex justify-center items-center">
          <Button color="default" as={Link} href="#contact" radius="full" className="bg-white h-[64px] w-[195px] font-bold text-[18px]" disableAnimation disableRipple >Get in Touch</Button>
          <Button color="default" as={Link} href="https://drive.google.com/file/d/1DOLApQiA76RKxifcA7lyFdBLsTlaObEU/view?usp=sharing" variant="ghost" radius="full" className="text-white h-[64px] w-[195px] font-bold text-[18px] boader boader-1 boader-white " disableAnimation disableRipple >Download CV</Button>
        </div>

        <div className=" py-2 flex-col gap-2 bg-black px-4" id="Programming">
          <h1 className="  text-[#C5C5C5] text-[18px] font-bold ">
            Experience with
          </h1>
          <div className="flex flex-wrap gap-6 mt-6 justify-center h-auto sm:h-[40px]">
            <Image src={`/images/reactjs.png`} alt="React" width={50} height={50} />
            <Image src={`/images/python.png`} alt="Python" width={50} height={50} />
            <Image src={`/images/c-logo-black-and-white.png`} alt="C++" width={50} height={50} />
            <Image src={`/images/css.png`} alt="CSS" width={50} height={50} />
            <Image src={`/images/html.png`} alt="HTML" width={50} height={50} />
            <Image src={`/images/nodejs.png`} alt="Node.js" width={50} height={50} />
            <Image src={`/images/sql.png`} alt="SQL" width={50} height={50} className="invert" />
          </div>

        </div>

        <div>

          <h1 className=" py-2 px-4 text-2xl font-bold bg-[#8C24F3] bg-clip-text text-transparent" id="Education" >
            Education
          </h1>
          <div className="space-y-6">
            {EducationData.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                companyLogo={exp.companyLogo}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>

          <h1 className=" py-2 px-4 text-2xl font-bold bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent" id="Projects" >
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <h1 className=" py-4 pt-2 px-4 text-2xl font-bold bg-gradient-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent" id="Working">
            Working Experience
          </h1>
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                role={exp.role}
                companyLogo={exp.companyLogo}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div >
    </HeroUIProvider>
  );
}