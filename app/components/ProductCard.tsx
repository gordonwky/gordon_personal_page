import React from "react";
import { useState, useEffect } from "react";
const useAddToCartButton = () => {
    const [buttonText, setButtonText] = useState("Add to Cart");

    const handleClick = () => {
        setButtonText("Added!");
        setTimeout(() => setButtonText("Add to Cart"), 2000);
    };

    return { buttonText, handleClick };
};

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

type ProductCardProps = {
    product: Product;
    handleAddToCart: (product: Product) => void;
};

const useFavorite = (productId: number) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Load favorite status from localStorage when component mounts
    useEffect(() => {
        const storedFavorite = localStorage.getItem(`product_${productId}_favorite`);
        if (storedFavorite) {
            setIsFavorited(JSON.parse(storedFavorite)); // Convert string to boolean
        }
    }, [productId]);

    // Toggle favorite status and save to localStorage
    const toggleFavorite = () => {
        setIsFavorited((prev) => {
            const newState = !prev;
            localStorage.setItem(`product_${productId}_favorite`, JSON.stringify(newState));
            return newState;
        });
    };

    return { isFavorited, toggleFavorite };
};


const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart }) => {
    const { buttonText, handleClick } = useAddToCartButton();
    const { isFavorited, toggleFavorite } = useFavorite(product.id);

    return (
        <div className="relative border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg" />
            <button onClick={toggleFavorite}
                className={`absolute top-2 right-2 text-2xl ${isFavorited ? "text-yellow-500" : "text-gray-300"}`}
            >
                ★
            </button>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                onClick={() => {
                    handleClick();
                    handleAddToCart(product);
                }}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default ProductCard;
