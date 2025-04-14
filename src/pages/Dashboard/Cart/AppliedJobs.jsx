import { useContext } from "react";
import useAllHiredJobs from "../../../hooks/useAllHiredJobs";
import useAllUsers from "../../../hooks/useAllUsers";
import { AuthContext } from "../../../Providers/AuthProvider";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext); // Get current logged-in user
    const [hiredJobs, isLoading] = useAllHiredJobs(user?.email);

    console.log(hiredJobs);
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">My Hired Jobs</h2>
            {hiredJobs.length === 0 ? (
                <p className="text-red-500 font-semibold text-3xl">Not Hired Yet</p>
            ) : (
                <ul className="space-y-4">
                    {hiredJobs.map((job) => (
                        <li key={job._id} className="border p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">{job.jobtitle}</h3>
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default AppliedJobs;