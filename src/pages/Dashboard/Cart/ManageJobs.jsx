import React from 'react';
import useAllJobsCategory from '../../../hooks/useAllJobsCategory';
import { FaTrash } from 'react-icons/fa';
import { GrUpdate } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';


const ManageJobs = () => {
    const [jobs,refetch,loading] = useAllJobsCategory();
    const axiosSecure = useAxiosSecure()
    
    //======================================================
    //  delete job function
    //======================================================
    const handleDeleteJob = (job) => {
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
                const res = await axiosSecure.delete(`/jobs/${job._id}`)
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${job.title} has been Deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div>
            <h1>ManageJobs</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Description</th>
                            <th>Sector</th>
                            <th>Salary</th>
                            {/* <th>JobType</th> */}
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job?.title}</td>
                                <td>{job?.description}</td>
                                <td>{job?.sector}</td>
                                <td>{job?.salary}</td>
                                {/* <td>{job?.jobtype}</td> */}
                                <td><Link to={`/dashboard/updateJob/${job._id}`}><button  className="btn bg-sky-500 hover:bg-white hover:text-sky-500 text-white btn-lg"><GrUpdate className="text-lg" /></button></Link> </td>

                                <td>  <button onClick={() => handleDeleteJob(job)} className="btn btn-ghost btn-lg"><FaTrash className="text-blue-500 text-lg"></FaTrash></button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageJobs;