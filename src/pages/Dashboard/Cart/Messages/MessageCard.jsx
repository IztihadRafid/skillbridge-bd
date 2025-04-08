
const MessageCard = ({messageItem}) => {
    const [message] = messageItem
    return (
    <div className="m-2">
            <div className="card  bg-slate-200  w-full rounded-xl ">
                <div className="card-body">
                    <h2 className="card-title">Message</h2>
                    <p>{message[1]}</p>
                    
                    <div className="md:flex items-end justify-end">
                        date
                    </div>
                </div>
            </div>
    </div>
    );
};

export default MessageCard;