// components/ExperienceCard.tsx

import Image from "next/image";
import { Experience } from "@/types/experience";

const ExperienceCard: React.FC<Experience> = ({
    role,
    companyLogo,
    period,
    description,
}) => {
    return (
        <div className="px-[16px]">
            <div className="px-4 py-4 grid grid-cols-3 items-center gap-4">
                <div className="col-span-1 flex flex-row items-center">
                    <Image src={companyLogo} alt="company logo" width={100} height={80} />
                </div>
                <h1 className="mb-3 col-span-1 text-[20px] text-white font-extrabold">
                    {role}
                </h1>
                <h1 className="mb-3 col-span-1 text-[16px] text-[#8491A0] font-light text-right">
                    {period}
                </h1>
            </div>

            <div className="px-4">
                {description.map((item, index) => (
                    <p
                        key={index}
                        className="text-[14px] text-[#8491A0] font-light mb-1"
                    >
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
