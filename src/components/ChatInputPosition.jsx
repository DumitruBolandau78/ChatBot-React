import './ChatInputPosition.css';

const ChatInputPosition = ({ text, inputPosition, setInputPosition }) => {
    const changePosition = () => {
        if(inputPosition === "top"){
            setInputPosition('bottom');
        } else {
            setInputPosition('top');
        }
    }

  return (
    <div className={'chat-input-position-text ' + (inputPosition === 'top'? 'bottom' : 'top')} onClick={changePosition}>{text}</div>
  )
}

export default ChatInputPosition;