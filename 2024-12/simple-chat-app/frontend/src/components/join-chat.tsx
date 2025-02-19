import { FormEvent } from "react";

interface JoinChatProps {
  username: string;
  setCurrentChatRoom: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  join: (e: FormEvent) => void;
}

export function JoinChat({ username, setUsername, join, setCurrentChatRoom }: JoinChatProps) {
  return (
    <>
      <div className="font-bold border-b-2 pb-2 mb-4 flex justify-around">
        <h1 className="text-xl">Join Chat</h1>
        <select onChange={(event) => setCurrentChatRoom(event.target.value)}>
          <option>General</option>
          <option>FullyStuck</option>
          <option>Room3000</option>
        </select>
      </div>
      <form onSubmit={join}>
        <input
          required
          className="border-2 border-slate-950 p-2 rounded-md mb-4 w-full"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <button
          className="bg-violet-500 text-white px-6 py-2 rounded-xl w-full uppercase"
          type="submit"
        >
          Join Chat
        </button>
      </form>
    </>
  );
}
