import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllCV = () => {
    const axioSecure = useAxiosSecure()
    const { data: uploadedAllCV = [], isLoading } = useQuery({

        queryKey: ['uploadedAllCV'],
        
        queryFn: async () => {
            const res = await axioSecure.get('/allCV');
            
            return res.data; // assuming this returns an array of job applications
        }
    });

    return [uploadedAllCV, isLoading];
};

export default useAllCV;