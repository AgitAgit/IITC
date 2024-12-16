import { FormEvent } from "react";

interface AddMessageFormProps {
  messageInputValue: string;
  onMessageInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendMessage: (e: FormEvent) => void;
}

export function AddMessageForm({
  messageInputValue,
  onMessageInputChange,
  sendMessage,
}: AddMessageFormProps) {
  return (
    <form onSubmit={sendMessage}>
      <input
        required
        className="border-2 border-slate-950 p-2 rounded-md w-full mb-4"
        type="text"
        value={messageInputValue}
        onChange={onMessageInputChange}
        placeholder="Type a message..."
      />
      <button
        className="bg-violet-500 text-white px-6 py-2 rounded-xl w-full uppercase"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
