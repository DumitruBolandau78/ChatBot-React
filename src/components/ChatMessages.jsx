import { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

const ChatMessages = ({ chatMessages }) => {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;

    if (chatMessagesRef) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div ref={chatMessagesRef} className="chat-messages-container">
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
          isLoading={chatMessage.isLoading}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
