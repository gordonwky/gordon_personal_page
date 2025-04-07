import { useState, useEffect } from "react";

const useAddToCartButton = () => {
    const [buttonText, setButtonText] = useState("Add to Cart");

    const handleClick = () => {
        setButtonText("Added!");
        setTimeout(() => setButtonText("Add to Cart"), 2000);
    };

    return { buttonText, handleClick };
};

export default useAddToCartButton;
