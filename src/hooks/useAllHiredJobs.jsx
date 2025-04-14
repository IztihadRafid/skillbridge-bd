import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllHiredJobs = (email) => {
    const axioSecure = useAxiosSecure()
    const { data: hiredJobs = [], refetch,isLoading } = useQuery({

        queryKey: ['hiredJobs', email],
        enabled: !!email,
        queryFn: async () => {
            const res = await axioSecure.get(`/hiredjob?email=${email}`);
            return res.data; // assuming this returns an array of job applications
        }
    });
    console.log(hiredJobs);
    return [hiredJobs, isLoading];
};

export default useAllHiredJobs;