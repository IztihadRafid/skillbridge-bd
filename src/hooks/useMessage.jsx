import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMessage = () => {
    const axiosPublic = useAxiosPublic()
    const {data: message=[],refetch,isPending:loading} = useQuery({
        queryKey: ['message'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/allmessage');
            return res.data
        }
    })
    
    return [message,refetch,loading]
};

export default useMessage;