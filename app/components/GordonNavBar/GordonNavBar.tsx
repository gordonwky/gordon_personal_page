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
    Image
} from "@heroui/react";
export const MyLogo = () => {
    return (
        <Image
            alt="My Logo"
            className="mr-2 hidden h-8 w-auto sm:inline-block font-white "
            src="/images/GordonSignature.png"
            width={150}
            height={44}
        />
    );
};

export default function GordonNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Profile",
        "Projects",
        "Experience",
        "Education"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#222222] py-6 h-[60px] px-4 ">
            <NavbarContent justify="start" className="gap-2">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand className="sm:flex" >
                    <MyLogo />
                </NavbarBrand>
            </NavbarContent>

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
                    <Link className="text-white" href="#Working">
                        Experience
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link className="text-white" href="#contact">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

