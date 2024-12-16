import { Message } from "../App";

interface MessageListProps {
  messages: Message[];
  username: string;
}

export function MessageList({ messages, username }: MessageListProps) {
  return (
    <div className="space-y-1 mb-4">
      {messages.map((message, index) => {
        const isSentByCurrentUser = message.by === username;
        return (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
            } px-2 py-1 rounded-md`}
          >
            <span className="font-bold">
              {isSentByCurrentUser ? "Me" : message.by}
            </span>
            {": "}
            <span>{message.text}</span>
          </div>
        );
      })}
    </div>
  );
}
