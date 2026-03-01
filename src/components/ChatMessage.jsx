import dayjs from "dayjs";
import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender, isLoading }) => {
  const currentTimeMili = dayjs().valueOf();
  const formatedTime = dayjs(currentTimeMili).format('HH:mm');
  return (
    <div
      className={
        sender == "user"
          ? "chat-message-container-user"
          : "chat-message-container-robot"
      }
    >
      {sender === "robot" && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
          width="50"
        />
      )}
      <p className="chat-message-contents">
        {isLoading ? (
          <span className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        ) : (
          <>
            {message}
            {formatedTime && <span className="time-message">{formatedTime}</span>}
          </>
        )}
      </p>
      {sender === "user" && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
          width="50"
        />
      )}
    </div>
  );
};

export default ChatMessage;