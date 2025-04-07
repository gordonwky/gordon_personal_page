"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GordonNavBar from "../components/GordonNavBar/GordonNavBar";
import ProductCard from "../components/ProductCard"; // Import ProductCard
import Chatbot from "../components/Chatbot";
export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState<string | null>(null);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            image: "/images/headphones.jpeg",
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 199.99,
            image: "/images/smartwatch.jpeg",
        },
        {
            id: 3,
            name: "Gaming Mouse",
            price: 49.99,
            image: "/images/mouse.jpeg",
        },
    ]);

    useEffect(() => {
        // Fetch user session from localStorage (for simplicity)
        setUser("DemoUser"); // Replace with API call if needed
        const token = localStorage.getItem("token");
        // if (!token) {
        //     router.push("/"); // Redirect to login if no token
        // } else {

        // }
    }, []);

    const handleAddToCart = (product: { id: number; name: string; price: number }) => {
        console.log(`Added ${product.name} to cart!`);
    };

    return (

        <div className="min-h-screen bg-gray-100">
            <GordonNavBar />
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Welcome, {user || "Guest"}!</h1>
                <p className="text-gray-600">This is your dashboard.</p>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
            <div className="relative min-h-screen bg-gray-200">
                <Chatbot />

            </div>
        </div>
    );
}
