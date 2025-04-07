"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://backend:5001/api";

export default function Signup() {
    const router = useRouter();
    const [form, setForm] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("api link", API_URL);
        const res = await fetch(`${API_URL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setMessage(data.message);
        if (res.ok) router.push("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* <input type="text" placeholder="Name" className="w-full p-2 border rounded"
                        onChange={(e) => setForm({ ...form, name: e.target.value })} /> */}
                    <input type="email" placeholder="Username" className="w-full p-2 border rounded"
                        onChange={(e) => setForm({ ...form, username: e.target.value })} />
                    <input type="password" placeholder="Password" className="w-full p-2 border rounded"
                        onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-red-500 mt-2">{message}</p>
                <button onClick={() => router.push("/")} className="mt-4 text-blue-600 underline block text-center">
                    Already have an account? Login
                </button>
            </div>
        </div>
    );
}
