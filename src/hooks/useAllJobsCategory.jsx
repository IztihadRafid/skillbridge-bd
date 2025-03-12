import { useEffect, useState } from "react";

const useAllJobsCategory = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setLoading(false)
            })
    }, [])
    return [jobs,loading]
};

export default useAllJobsCategory;