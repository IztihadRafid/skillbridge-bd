import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAppliedJobs = (email) => {
    const axioSecure = useAxiosSecure()
    const { data: appliedJobs = [], isLoading } = useQuery({

        queryKey: ['appliedJobs', email],
        enabled: !!email,
        queryFn: async () => {
            const res = await axioSecure.get(`/jobcarts?email=${email}`);
            return res.data; // assuming this returns an array of job applications
        }
    });

    return [appliedJobs, isLoading];
};

export default useAppliedJobs;