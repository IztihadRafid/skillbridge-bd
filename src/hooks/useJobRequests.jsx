import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useJobRequests = () => {

    const axioSecure = useAxiosSecure()
    const { data: jobAllRequests = [], refetch, isLoading } = useQuery({
        queryKey: ['jobAllRequests'],
        queryFn: async () => {
            const res = await axioSecure.get('/appliedjobs');
            return res.data; // assuming this returns an array of job applications
        }
    });

    return [jobAllRequests, refetch, isLoading];
};

export default useJobRequests;