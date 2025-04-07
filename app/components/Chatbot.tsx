import React, { useState } from "react";

interface Message {
    text: string;
    sender: "bot" | "user";
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Welcome to chatbot!", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = { text: input, sender: "user" };
        const botReply: Message = { text: `echo : ${input}`, sender: "bot" };

        setMessages([...messages, userMessage, botReply]);
        setInput("");

        // Auto-scroll to bottom when new message is added
        setTimeout(() => {
            const chatBox = document.getElementById("chat-messages");
            if (chatBox) {
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        }, 100);
    };

    return (
        <div className="fixed bottom-5 right-5">
            {/* Chatbot Toggle Button */}
            <button
                className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                💬 Chat
            </button>

            {/* Chatbox */}
            {isOpen && (
                <div className="w-80 bg-white rounded-lg shadow-2xl flex flex-col fixed bottom-16 right-5 border border-gray-300">
                    <div className="bg-blue-900 text-white text-center py-2 font-mono rounded-t-lg">
                        React Chatbot UI
                    </div>
                    {/* Chat messages container with scroll */}
                    <div
                        id="chat-messages"
                        className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-100 h-60 max-h-60 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    >



                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`rounded-lg px-3 py-2 text-white ${msg.sender === "user"
                                        ? "bg-gray-400"
                                        : "bg-teal-500 text-white"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t flex items-center">
                        <input
                            type="text"
                            className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your message here"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button
                            onClick={handleSend}
                            className="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg"
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
