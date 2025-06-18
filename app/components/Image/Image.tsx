'use client';

import Image, { ImageProps } from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const BaseImage = ({ src, ...props }: ImageProps) => {
    const finalSrc = `${basePath}${src}`;
    return <Image src={finalSrc} {...props} />;
};
