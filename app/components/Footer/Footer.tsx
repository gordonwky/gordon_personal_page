'use client';
import { Image } from "@heroui/react";

export const Footer = () => {
    return (
        <div className="w-full h-[180px] bg-[#191919] text-white p-8" id="contact">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <div className="flex items-center space-x-2">
                <Image src="/images/Email.png" alt="Email Icon" width={20} height={20} />
                <span>wong31415@gmail.com</span>
            </div>
        </div>
    );
};

export default Footer;
