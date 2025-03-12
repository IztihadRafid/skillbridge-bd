import { useEffect, useState } from "react";
import SectionTitle from "../../../Layout/Navbar/Components/SectionTitle/SectionTitle";
import JobItem from "../../shared/Jobitem/JobItem";
import useAllJobsCategory from "../../../hooks/useAllJobsCategory";

const PopularJobs = () => {
    const [jobs]= useAllJobsCategory();
    const popularjobs = jobs.filter(popularjob=> popularjob.sector === 'technology' || popularjob.sector ==='design')

    return (
        <div>
            <SectionTitle heading={"Popular Job Categories"} subHeading={"Find The Jobs That's Perfect For You."}></SectionTitle>
            <div className="">
                {/* Floating Cards */}
                <div>
                    <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-4 p-7">
                       {
                        popularjobs.map(job=><JobItem key={job._id} job={job}></JobItem>)
                       }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PopularJobs;