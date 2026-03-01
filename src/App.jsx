import { useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import ChatInputPosition from "./components/ChatInputPosition";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputPosition, setInputPosition] = useState('bottom');

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem("messages"));

    if (messages && Array.isArray(messages)) {
      setChatMessages([...messages]);
    }
  }, []);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        inputPosition={inputPosition}
      />
      <ChatInputPosition
        text={inputPosition === "bottom"? "Move the input on top" : "Move the input on bottom"}
        inputPosition={inputPosition}
        setInputPosition={setInputPosition}
      />
    </div>
  );
}

export default App;
