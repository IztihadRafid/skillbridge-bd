import { useEffect, useState } from "react";
import SectionTitle from "../../../Layout/Navbar/Components/SectionTitle/SectionTitle";
import JobItem from "../../shared/Jobitem/JobItem";





const PopularJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                
                const popularjobs = data.filter(popularjob => popularjob.sector === "technology" || popularjob.sector === "design")
                setJobs(popularjobs)
                // console.log(popularjobs);
            })
    }, [])



    return (
        <div>
            <SectionTitle heading={"Popular Job Categories"} subHeading={"Find The Jobs That's Perfect For You."}></SectionTitle>
            <div className="relative h-72">
                {/* Fixed background */}
                <div className="absolute inset-0 bg-cyan-200 h-full rounded-t-full"></div>

                {/* Floating Cards */}
                <div>
                    <div className="relative lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-4 p-7">
                       {
                        jobs.map(job=><JobItem key={job._id} job={job}></JobItem>)
                       }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PopularJobs;