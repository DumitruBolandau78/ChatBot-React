import { useState } from "react";
import ollama from "ollama";
import "./ChatInput.css";

const ChatInput = ({ chatMessages, setChatMessages, inputPosition }) => {
  const [inputText, setInputText] = useState("");

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: "",
        sender: "robot",
        id: crypto.randomUUID(),
        isLoading: true,
      },
    ]);

    setInputText("");

    const messageHistory = chatMessages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.message,
    }));

    try {
      const response = await ollama.chat({
        model: "llama3.2:1b",
        messages: [...messageHistory, { role: "user", content: inputText }],
      });

      const finalMessages = [
        ...newChatMessages,
        {
          message: response.message.content,
          sender: "robot",
          id: crypto.randomUUID(),
          isLoading: false,
        },
      ];

      setChatMessages(finalMessages);
      localStorage.setItem("messages", JSON.stringify(finalMessages));
    } catch (error) {   
      setChatMessages([
        ...newChatMessages,
        {
          message: error.message,
          sender: "robot",
          id: crypto.randomUUID(),
          isLoading: false,
        },

      ]);
    }
  }

  const deleteAllMessagesHandler = () => {
    localStorage.setItem("messages", JSON.stringify([]));
    setChatMessages([]);
  };

  return (
    <div className={"chat-input-container " + inputPosition}>
      <input
        className="chat-input"
        value={inputText}
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
      {chatMessages.length > 0 && (
        <button onClick={deleteAllMessagesHandler} className="clear-button">
          Clear
        </button>
      )}
    </div>
  );
};

export default ChatInput;
