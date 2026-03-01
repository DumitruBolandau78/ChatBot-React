import { useEffect, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";



function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const messages = JSON.parse(localStorage.getItem('messages'));

    if(messages && Array.isArray(messages)){
      setChatMessages([
        ...messages
      ]);
    }

  }, []);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
