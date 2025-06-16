import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";
import { ProjectCardProps } from "../../types/experience"
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, technologies, pageUrl, source }) => {
    return (
        <Card className="max-w-[400px]  bg-[#222222] rounded-lg shadow-lg px-4 py-4 ">
            <CardHeader className="flex gap-3">
                <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src={imageUrl}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md text-white">{title}</p>

                </div>
            </CardHeader>
            <Divider className="bg-gray-400 h-[1px]" />
            <CardBody className=" gap-1">
                <p className="text-white">{description}</p>
                <p className="text-gray-500">
                    Technologies used:&nbsp;
                    {technologies.map((tech, i) => (
                        <span key={i}>
                            {tech}
                            {i < technologies.length - 1 ? ", " : ""}
                        </span>
                    ))}
                </p>
            </CardBody>
            <Divider className="bg-gray-400 h-[1px]" />
            <CardFooter>

                <Link isExternal showAnchorIcon className="text-blue-500" href={pageUrl}>
                    Visit on {source}
                </Link>

            </CardFooter>
        </Card>
    );
}
export default ProjectCard;
