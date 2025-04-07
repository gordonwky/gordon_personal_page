"use client"
import { use } from "chai";
import GordonNavBar from "../components/GordonNavBar/GordonNavBar";
import Image from 'next/image';
import { GordonAnimatedText } from "../components/GordonAnimatedText/GordonAnimatedText";
import GordonButton from "../components/GordonButton/GordonButton";
import { Button, Link } from "@heroui/react";
import ProjectCard from "../components/GordonProjectCard/GordonProjectCard";
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
                fill
                className="object-cover object-center"
            />
        </div>
    );
}

export default function Home() {
    return (
        <div className="w-full h-full bg-black" >
            <div>
                <GordonNavBar />
            </div>
            <div className="grid grid-cols-3 bg-black h-[500px] gap-4 px-4 py-[80px] ">
                <div className="col-span-1">
                    <Avatar src="/images/profolio.JPG" alt="Gordon Signature" size={300} />
                </div>
                <div className="col-span-2 justify-center items-center ">
                    <GordonAnimatedText sentence="I code and create content " />
                    <GordonAnimatedText sentence="to make impact!" className="text-[#FF8660]" />
                    <h1 className="text-[#C5C5C5] text-[18px] font-bold mt-4">
                        Computational Science ✖ Software Engineeing ✖ Humanities <br />
                    </h1>
                    <h2 className="text-[#C5C5C5]">
                        I am a software engineer with a background in science and a love in literature <br />
                        I am dedicated to creating innovative solutions that bridge the gap between technology and human experience. <br />
                    </h2>
                </div>
            </div>

            <div className="bg-black h-[120px] flex justify-center items-center">
                <Button color="default" radius="full" className="bg-white h-[64px] w-[195px] font-bold text-[18px]" disableAnimation disableRipple >Get in Touch</Button>
                <Button color="default" variant="ghost" radius="full" className="text-white h-[64px] w-[195px] font-bold text-[18px] " disableAnimation disableRipple >Download CV</Button>
            </div>

            <div className=" flex-col gap-2 bg-black px-4">
                <h1 className="  text-[#C5C5C5] text-[18px] font-bold ">
                    Experience with
                </h1>
                <div className=" h-[40px] flex gap-8 mt-6 justify-center " >
                    <Image src="/images/reactjs.png" alt="React" width={45} height={45} />
                    <Image src="/images/python.png" alt="Next.js" width={45} height={45} />
                    <Image src="/images/c-logo-black-and-white.png" alt="Tailwind CSS" width={45} height={45} />
                    <Image src="/images/Typescript.png" alt="TypeScript" width={45} height={45} />
                </div>
            </div>

            <div>

                <h1 className=" px-4 text-2xl font-bold bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent">
                    Projects
                </h1>
                <div className="grid grid-cols-3 gap-4 px-4 py-4">
                    <ProjectCard title="ChatBot" imageUrl="/images/gitlab.png" />
                </div>
                <h1 className=" px-4 text-2xl font-bold bg-gradient-to-r from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent">
                    Working Experience
                </h1>
            </div>
        </div >
    );
}