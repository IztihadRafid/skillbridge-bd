import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardContent = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure()

    // 1$ == 123TK
    const totalPriceInBDT = (totalPrice * 123.02).toFixed(2);
    const price = 0.82
    const priceToTk = 0.82 * 123
    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/jobcarts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Applied job has been Deleted",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h1 className="text-3xl">Applied Jobs {cart.length}</h1>
                <h1 className="text-3xl">PAY {totalPriceInBDT}TK</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>salary</th>
                            <th>Pay for Apply</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((jobItem, index) => <tr key={jobItem._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {jobItem.title}
                                </td>
                                <td>
                                    {jobItem.description}
                                </td>
                                <td>{jobItem.salary}</td>

                                <td>
                                    <div className="tooltip tooltip-error text-lg" data-tip="0.82 $">
                                        <button className="btn  btn-lg text-blue-500 text-lg">Payment</button>
                                    </div>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(jobItem._id)} className="btn btn-ghost btn-lg"><FaTrash className="text-blue-500 text-lg"></FaTrash></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default DashboardContent;