import React from "react";
import { Button } from "@heroui/react";
interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "solid" | "bordered" | "light" | "faded" | "ghost" | "shadow";
    size?: "sm" | "md" | "lg" | undefined;
    disabled?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = "light",
    size = "md",
    disabled = false,
}) => {
    return (
        <Button color="primary" variant={variant} size={size} disabled={disabled} onClick={onClick}>
            {label}
        </Button>
    );
};

export default CustomButton;
