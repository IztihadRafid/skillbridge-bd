
import useJobRequests from "../../../../hooks/useJobRequests";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const JobRequest = () => {
    const [jobAllRequests, refetch, isLoading] = useJobRequests()
    const axiosSecure = useAxiosSecure()
    console.log(jobAllRequests);


    //handle reject job requests
    const handleReject = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reject"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/appliedjobs/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Rejected",
                                text: "Rejected the job",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    //handleAccept job by admin
    const handleAccept = (email, name, jobtitle, sector, description) => {
        const jobSeekerInfo = { email, name, jobtitle, sector, description }
        Swal.fire({
            title: "Do you want to hire?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Reject"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.post('/hiredJob', jobSeekerInfo)

                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Hired",
                                text: `${jobItem?.myCVInfo?.name} has hired`,
                                icon: "success"
                            });

                        } console.log(jobSeekerInfo)
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Job Title</th>
                        <th>Experience</th>
                        <th>Job Sector</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobAllRequests.map((jobItem, index) => <tr key={jobItem._id}>
                            <td>{index + 1}</td>
                            <th>{jobItem?.email}</th>
                            <td>{jobItem?.myCVInfo?.name}</td>
                            <td>{jobItem?.myCVInfo?.jobtitle}</td>
                            <td>{jobItem?.myCVInfo?.description}</td>
                            <td>{jobItem?.myCVInfo?.sector}</td>
                            <th className="flex justify-evenly">
                                <button onClick={() => handleAccept(jobItem?.email, jobItem?.myCVInfo?.name, jobItem?.myCVInfo?.jobtitle, jobItem?.myCVInfo?.sector, jobItem?.myCVInfo?.description)} className="btn hover:bg-blue-500 hover:text-white bg-blue-100 text-blue-500">Hire</button>
                                <button onClick={() => handleReject(jobItem._id)} className="btn hover:bg-red-500 hover:text-white  bg-red-100 text-red-500">Reject</button>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default JobRequest;