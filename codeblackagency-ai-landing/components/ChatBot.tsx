import { useState } from "react";

export const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.reply);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded shadow-xl w-80">
      <input value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 mb-2 rounded text-black" placeholder="Ask something..." />
      <button onClick={sendMessage} className="bg-blue-600 px-4 py-2 rounded">Send</button>
      <div className="mt-2 text-sm text-gray-300">{response}</div>
    </div>
  );
};