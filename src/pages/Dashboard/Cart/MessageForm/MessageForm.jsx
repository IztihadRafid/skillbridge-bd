import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const MessageForm = () => {
    const axiosSecure = useAxiosSecure();
    // const axiosSecure = useAxiosPublic();
    const handleSendMessageToAll = async (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const date = form.date.value;
        const mymessage = { message,date }
        const messsageSend = await axiosSecure.post('/allmessage', mymessage);
        if (messsageSend.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Message Sent Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="  min-h-screen">
            <div className=" flex-col lg:flex-row-reverse">

                <div className=" md:m-10 m-3">
                    <form onSubmit={handleSendMessageToAll} className="card-body bg-slate-200">
                        <label className="label">
                            <span className="label-text">Type Message</span>
                        </label>
                        <textarea name="message" className="textarea textarea-info w-full h-48" placeholder="type here..." required></textarea>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            defaultValue={new Date().toISOString().split('T')[0]} // today's date
                            required
                        />
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;