import { useState, FormEvent, useEffect } from "react";
import { JoinChat } from "./components/join-chat";
import { ChatRoom } from "./components/chat-room";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

export interface Message {
  by: string;
  text: string;
}

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [messageInputValue, setMessageInputValue] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsername, setTypingUsername] = useState("");
  const [ currentChatRoom, setCurrentChatRoom ] = useState("General");

  useEffect(() => {
    if (isJoined) {
      socket.on("message", (message) => {
        setMessages((prev) => [...prev, message]);
      });

      socket.on("user-typing-message", (typingUsername) => {
        setIsTyping(true);
        setTypingUsername(typingUsername);
        setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      });

      return () => {
        socket.off("message");
        socket.off("user-typing-message");
      };
    }
  }, [isJoined]);

  function join(e: FormEvent) {
    e.preventDefault();
    if (username) {
      socket.emit("join", username);
      setIsJoined(true);
    }
  }

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (messageInputValue) {
      setMessageInputValue("");
      socket.emit("message", messageInputValue);
    }
  }

  function onMessageInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessageInputValue(e.target.value);
    socket.emit("user-typing-message");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="max-w-2xl text-slate-950 bg-slate-50 p-4 rounded-xl">
        {!isJoined ? (
          <JoinChat
            username={username}
            setUsername={setUsername}
            join={join}
          />
        ) : (
          <ChatRoom
            username={username}
            messages={messages}
            messageInputValue={messageInputValue}
            currentChatRoom={currentChatRoom}
            onMessageInputChange={onMessageInputChange}
            sendMessage={sendMessage}
          />
        )}
      </div>
      {isTyping ? `${typingUsername} is typing...` : null}
    </div>
  );
}
