import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
} from "@heroui/react";
import { Image } from "@heroui/react";
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

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#222222] py-6 h-[60px] px-4 ">
            <NavbarContent justify="start" className="gap-2">
                {/* <NavbarMenuToggle
                    className="sm:hidden"
                /> */}
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
                    <Link className="text-white font-Inter" href="#">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Experience
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link className="text-white" href="#">
                        Contact
                    </Link>
                </NavbarItem>

            </NavbarContent>

        </Navbar>
    );
}

