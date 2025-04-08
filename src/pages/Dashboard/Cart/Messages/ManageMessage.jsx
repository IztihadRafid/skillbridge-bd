import { useEffect, useState } from "react";
import useMessage from "../../../../hooks/useMessage";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageMessage = () => {
    // const [message, setMessage] = useState([]);
    const axiosSecure = useAxiosSecure()
    const [message,refetch,loading]= useMessage()
    // useEffect(() => {
    //     fetch('http://localhost:5000/allmessage')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMessage(data)
    //             // console.log(data);
    //         })
    // }, [])

    //delete messages
    const handleDeleteMessages=(eachMessageCard)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/allmessage/${eachMessageCard._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `Message has been Deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold text-blue-500 m-8">Number of Messages Sent: {message.length}</h1>
            {
                message.map(eachMessageCard => <div key={eachMessageCard._id} className=" border-blue-500  m-5 border-2 bg-base-100 w-full">
                    <div className="p-4">
                        <p className="text-xl ">{eachMessageCard?.message}</p>
                        <p className="text-lg mt-2">Date: {eachMessageCard?.date}</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>handleDeleteMessages(eachMessageCard)} className="btn btn-primary">Delete</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default ManageMessage;