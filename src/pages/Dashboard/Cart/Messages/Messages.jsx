import { useEffect, useRef } from "react";
import useMessage from "../../../../hooks/useMessage";
import MessageCard from "./MessageCard";
import toast from "react-hot-toast";

const Messages = () => {
    const [message, refetch, loading] = useMessage()
    const latestMessageId = useRef(null);
    // console.log(message);
    useEffect(() => {
        const interval = setInterval(async () => {
            const newMessages = await refetch();
            if (newMessages?.length > 0) {
                const newest = newMessages[0];
                if (latestMessageId.current && newest._id !== latestMessageId.current) {
                    toast.success("New message from admin!");
                }
                latestMessageId.current = newest._id;
            }
        }, 10000); // check every 10 seconds

        return () => clearInterval(interval);
    }, []);
    return (
      <div>
        <h1 className="text-center text-3xl font-semibold text-blue-500 my-5">All Messages</h1>
          <div className="grid grid-cols-1   gap-4">
            {message.map(messageItem => (
                <div className="card m-2 bg-slate-200 w-full rounded-xl shadow-md" key={messageItem._id}>
                    <div className="card-body">
                        <h2 className="card-title">Hey There</h2>
                        <p className="text-black text-xl">{messageItem.message}</p>

                        <div className="flex justify-end mt-4 text-lg">
                            Date: {messageItem.date}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
};

export default Messages;