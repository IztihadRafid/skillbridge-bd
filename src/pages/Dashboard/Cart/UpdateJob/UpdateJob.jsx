import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const {title,description,open_position,sector,salary,jobtype,price,_id} = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    
    const handleUpdateJob = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const open_position = form.open_position.value;
        const sector = form.sector.value;
        const salary = form.salary.value;
        const jobtype = form.jobtype.value;
        const price = 0.82
        const jobItem = { title, description, open_position, sector, salary, jobtype, price }
        // console.log(jobItem);

        const jobUpdated = await axiosSecure.patch(`/jobs/${_id}`, jobItem);
        if (jobUpdated.data.modifiedCount>0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Job Updated Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="bg-slate-50">
            <div className="hero  min-h-screen">
                <div className="">
                    <h1 className="text-center  text-sky-600 text-4xl mb-5 font-semibold">Update The Job</h1>
                    <div className="card lg:px-16 md:px-10 px-8  bg-sky-50 w-full border-2 border-blue-300 shrink-0 shadow-2xl ">
                        <form onSubmit={handleUpdateJob} className="text-black font-semibold text-lg">
                            <div className="form-control my-5 pt-2">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input defaultValue={title} type="text" name="title" placeholder="job title" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Open Position</span>
                                </label>
                                <input defaultValue={open_position} type="number" name="open_position" placeholder="open position" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Job Sector</span>
                                </label>
                                <input defaultValue={sector} type="text" name="sector" placeholder="sector" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Job Salary</span>
                                </label>
                                <input defaultValue={salary} type="number" name="salary" placeholder="salary" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" value={0.82} placeholder="salary" className="input input-bordered" required />
                            </div>
                            <select defaultValue={jobtype} name="jobtype" className="select select-info w-full max-w-xs my-5">
                                <option disabled value='default'>Job Type</option>
                                <option>remote</option>
                                <option>parttime</option>
                                <option>fulltime</option>

                            </select>

                            <textarea defaultValue={description} name="description" className="textarea textarea-info" placeholder="Job Description" required></textarea>
                            <div className="form-control my-6">
                                <button className="btn btn-primary">Update Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default UpdateJob;