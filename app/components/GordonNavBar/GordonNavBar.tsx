'use client';
import React from "react";
import { NavbarMenuToggle } from "@heroui/navbar"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@heroui/react";
import Image from "next/image";
export const MyLogo = () => {
    return (
        <Image
            alt="My Logo"
            className="mr-2 h-8 w-auto  font-white "
            src="/images/GordonSignature.png"
            width={150}
            height={44}
        />
    );
};

export default function GordonNavBar() {

    return (
        <Navbar className="bg-[#222222] py-6 h-[60px] px-4 ">
            <NavbarBrand >
                <MyLogo />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-[60px] font-serif ml-auto" justify="end">
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-white font-Inter" href="#Projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#Experience">
                        Experience
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link className="text-white" href="#contact">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>

        </Navbar>
    );
}

