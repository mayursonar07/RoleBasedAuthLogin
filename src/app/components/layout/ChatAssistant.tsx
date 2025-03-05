import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useAuth } from "../../context/AuthContext";
import { ChatResponse } from "@/types/authTypes";

interface Message {
  role: "user" | "ai";
  text: string;
}

interface ChatProps {
  initialChatHistory?: Message[];
}

const ChatAssistant: React.FC<ChatProps> = ({ initialChatHistory = [] }) => {
    const { callChatService } = useAuth();
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== "undefined") {
      const storedMessages = JSON.parse(localStorage.getItem("chatHistory") || "[]");
      return storedMessages.length > 0 ? storedMessages : initialChatHistory;
    }
    return [];
  });

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // // Detect system dark mode preference
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const darkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     setIsDarkMode(darkPref);
  //   }
  // }, []);

  // Scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (typeof window !== "undefined") {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

//   // Simulated AI response without UI components
//   const fetchResponse = async () => {
//     return new Promise<Message>((resolve) => {
//       setTimeout(() => {
//         resolve({
//           role: "ai",
//           text: "This is a **formatted AI response** with *Markdown support*! Click [here](https://example.com) to learn more.",
//         });
//       }, 2000);
//     });
//   };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
        const aiResponse: ChatResponse = await callChatService(input);
        const aiMessage: Message = { role: "ai", text: aiResponse.response.data };
    
        setMessages((prev) => [...prev, aiMessage]);
    } catch {
        const aiMessage: Message = { role: "ai", text: "An error occurred. Please try again." };
        setMessages((prev) => [...prev, aiMessage]);
    }
    setIsLoading(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const clearChat = () => {
    setMessages([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatHistory");
    }
  };

  return (
    <div className={`flex flex-col w-[95%] max-w-2xl border rounded-lg shadow-lg transition-all 
        mt-4 px-4 sm:px-0 mx-auto  
        ${messages.length > 0 ? "min-h-[400px] max-h-[500px]" : "min-h-[150px]"} 
        ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>

      {/* Header with Dark Mode Toggle & Clear Chat */}
      <div className="p-3 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
        <div className="flex space-x-2">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Clear Chat
            </button>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <p className="text-gray-400 text-center">Start a conversation...</p>
        )}

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "ai" && (
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                🤖
              </div>
            )}
            <div
              className={`p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              } max-w-xs transition`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </motion.div>
        ))}

        {/* Typing Animation */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
              🤖
            </div>
            <div className="p-3 rounded-lg bg-gray-200 text-black self-start max-w-xs flex space-x-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </div>
          </motion.div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-3 border-t flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg transition focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          className={`ml-2 px-4 py-2 rounded-lg transition ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
