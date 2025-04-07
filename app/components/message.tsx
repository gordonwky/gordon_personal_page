import React from "react";
import { useState, useEffect } from "react";

interface Messageprops {
    text: string;
    sender: "bot" | "user";
    loading: boolean;

}

function Message(props: Messageprops) {
    return (
        <div className={`flex ${props.sender === "user" ? "justify-end" : "justify-start"
            }`}>
            <div
                className={`rounded-lg px-3 py-2 text-white ${props.sender === "user"
                    ? "bg-gray-400"
                    : "bg-teal-500 text-white"
                    }`}
            >
                {props.loading ? "loading..." : props.text}
            </div>
        </div>
    );
}
export default Message;