"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import { ToastProvider } from "@heroui/toast";

export const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroUIProvider>
            <ToastProvider
                toastProps={{
                    radius: "sm",
                }}
            />
            {children}
        </HeroUIProvider>
    );
};