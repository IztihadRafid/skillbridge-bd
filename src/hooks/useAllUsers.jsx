import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const {data: users=[],refetch,isPending:loading} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    
    return [users,refetch,loading]
};

export default useAllUsers;