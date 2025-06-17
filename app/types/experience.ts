export type Experience =  {
    role: string;
    companyLogo: string;
    period: string;
    description: string[];
  }
export type ProjectCardProps = {
    title?: string;
    description?: string;
    technologies: string[];
    imageUrl: string;
    pageUrl?: string;
    source?: string;
};