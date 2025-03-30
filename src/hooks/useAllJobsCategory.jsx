import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllJobsCategory = () => {
    const axiosPublic = useAxiosPublic()
    // const [jobs, setJobs] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/jobs')
    //         .then(res => res.json())
    //         .then(data => {
    //             setJobs(data)
    //             setLoading(false)
    //         })
    // }, [])
    const {data: jobs=[],refetch,isPending:loading} = useQuery({
        queryKey: ['jobs'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/jobs');
            return res.data
        }
    })
    return [jobs,refetch,loading]
};

export default useAllJobsCategory;