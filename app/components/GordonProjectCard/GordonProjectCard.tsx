import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@heroui/react";

type ProjectCardProps = {
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string;
    pageUrl?: string;
    source?: string;
};
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link, source }) => {
    return (
        <Card className="max-w-[400px] text-white bg-[#222222] rounded-lg shadow-lg px-4 py-4">
            <CardHeader className="flex gap-3">
                <Image
                    alt="heroui logo"
                    height={40}
                    radius="sm"
                    src={imageUrl}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link isExternal showAnchorIcon href={link}>
                    Visit source code on {source}.
                </Link>
            </CardFooter>
        </Card>
    );
}
export default ProjectCard;
