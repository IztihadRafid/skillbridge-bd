import { useEffect, useState } from "react";
import SectionTitle from "../../../Layout/Navbar/Components/SectionTitle/SectionTitle";
import AllJobsCards from "./AllJobsCards";
import useAllJobsCategory from "../../../hooks/useAllJobsCategory";

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6; // Show 6 jobs per page
    const [jobs, loading] = useAllJobsCategory()
    // Fetch jobs
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setAllJobs(data);
                setFilteredJobs(data); // Default filtered jobs
            });
    }, []);

    // Filter jobs based on search text
    const handleSearch = () => {
        const lowercasedText = searchText.toLowerCase();
        const filtered = allJobs.filter(job =>
            job.title.toLowerCase().includes(lowercasedText) ||
            job.sector.toLowerCase().includes(lowercasedText)
        );
        setFilteredJobs(filtered);
        setCurrentPage(1); // Reset to first page after search
    };

    // Pagination Logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="mb-40">
            <SectionTitle heading={"All Jobs"} subHeading={"Find Your Dream Job"} />

            {/* Search Bar */}
            <div className="w-[90%] mx-auto mb-5 flex gap-4">
                <input
                    type="text"
                    placeholder="Search by title or sector..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="border p-2 w-full rounded-md"
                />
                <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Search
                </button>
            </div>

            {/* Job Cards */}
            <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-4 p-7">
                {currentJobs.length > 0 ? (
                    currentJobs.map(job => (
                        <AllJobsCards job={job} key={job._id} />
                    ))
                ) : (
                    <p className="text-center text-red-500">No jobs found!</p>
                )}
            </div>

            {/* Pagination Buttons */}
            <div className="flex justify-center my-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className={`px-4 py-2 mx-2 rounded-md ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                >
                    Previous
                </button>
                <button
                    disabled={indexOfLastJob >= filteredJobs.length}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className={`px-4 py-2 mx-2 rounded-md ${indexOfLastJob >= filteredJobs.length ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllJobs;
