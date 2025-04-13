import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAllUsers from "../../../hooks/useAllUsers";
import useAppliedJobs from "../../../hooks/useAppliedJobs";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAllCV from "../../../hooks/useAllCV";
import { data } from "react-router-dom";
import useAllJobsCategory from "../../../hooks/useAllJobsCategory";

const DashboardContent = () => {
    const [appliedJobsint, setAppliedJobs] = useState([]);

    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const [totalPriceInBDT, setTotalPriceInBDT] = useState((totalPrice * 123.02).toFixed(2));
    const axiosSecure = useAxiosSecure()
    const [users, loading] = useAllUsers() // all users fetching from backend
    const { user, logOut } = useContext(AuthContext)
    const [uploadedAllCV] = useAllCV()
    const myCVs = uploadedAllCV?.filter(cv => cv.email === user?.email);
    const myCVInfo = myCVs[myCVs.length - 1]// job seeker information last updated CV
    // console.log(myCVInfo);  
    const mycvSector = myCVs.map(myCV => myCV.sector)
    // console.log(mycvSector);
    const [appliedJobs, isLoading] = useAppliedJobs(users?.email)
    const isApplied = appliedJobs.some(job => job.jobId === jobItem._id); // check if this job is already applied
    const [jobs] = useAllJobsCategory()
    const matchedJobs = jobs?.filter(job => mycvSector.includes(job.sector));
    const matchedJobsInfo = matchedJobs[matchedJobs.length - 1]

    // console.log(matchedJobsInfo);
    const myJob = jobs?.filter(job => job.sector === user?.sector)
    // console.log(myJob);
    // const [appliedJobs, setAppliedJobs] = useState([]);
    // 1$ == 123TK
    // const totalPriceInBDT = (totalPrice * 123.02).toFixed(2);
    const price = 0.82
    const priceToTk = 0.82 * 123

    //applied job
    const handleApplyJob = (id, myCVs, matchedJobs) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apply!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post(`/appliedjobs/${id}`, { email: user?.email, myCVInfo })
                    .then(res => {
                        refetch(); // refresh parent data
                        setAppliedJobs(prev => [...prev, id]);
                        setTotalPriceInBDT(prev => (parseFloat(prev) - priceToTk).toFixed(2));
                        Swal.fire({
                            title: "Applied!",
                            text: "Applied Successfully",
                            icon: "success"
                        });
                    });
            }
        });
    }



    //delete job
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
                <h1 className="text-3xl">PAY {totalPriceInBDT} TK</h1>

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
                                        <button
                                            onClick={() => handleApplyJob(jobItem._id, myCVInfo)}
                                            className={`btn btn-lg text-lg ${appliedJobs.includes(jobItem._id) || isApplied
                                                ? "text-green-600 border border-green-600 bg-transparent cursor-not-allowed"
                                                : "text-blue-500 hover:bg-blue-100"
                                                }`}
                                            disabled={appliedJobsint.includes(jobItem._id) || isApplied} // ✅ dynamic disable
                                        >
                                            {appliedJobsint.includes(jobItem._id) || isApplied ? "Applied" : "Apply"}
                                        </button>
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