import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddJobs = () => {
const axiosSecure = useAxiosSecure()
    // const { register, handleSubmit } = useForm()
    // const onSubmit = (data) => {
    //     console.log(data)
    // }
    const handleAddJob = async(event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const open_position = form.open_position.value;
        const sector = form.sector.value;
        const salary = form.salary.value;
        const jobtype = form.jobtype.value;
        const price = 0.82
        const jobItem = {title,description,open_position,sector,salary,jobtype,price}
        console.log(jobItem);
        const newJobAdded = await axiosSecure.post('/jobs',jobItem);
        if(newJobAdded.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "New Job Added",
                showConfirmButton: false,
                timer: 1500
              });
        }

    }
    return (
        <div className="bg-slate-50">
            <div className="hero  min-h-screen">
                <div className="">
                <h1 className="text-center  text-sky-600 text-4xl mb-5 font-semibold">Add a Job</h1>
                    <div className="card lg:px-16 md:px-10 px-8  bg-sky-50 w-full border-2 border-blue-300 shrink-0 shadow-2xl ">
                        <form onSubmit={handleAddJob} className="text-black font-semibold text-lg">
                            <div className="form-control my-5 pt-2">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <input type="text" name="title" placeholder="job title" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Open Position</span>
                                </label>
                                <input type="number" name="open_position" placeholder="open position" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Job Sector</span>
                                </label>
                                <input type="text" name="sector" placeholder="sector" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Job Salary</span>
                                </label>
                                <input type="number" name="salary" placeholder="salary" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" value={0.82} placeholder="salary" className="input input-bordered" required />
                            </div>
                            <select defaultValue={'default'} name="jobtype"  className="select select-info w-full max-w-xs my-5">
                                <option disabled  value='default'>Job Type</option>
                                <option>remote</option>
                                <option>parttime</option>
                                <option>fulltime</option>

                            </select>

                            <textarea name="description" className="textarea textarea-info" placeholder="Job Description" required></textarea>
                            <div className="form-control my-6">
                                <button className="btn btn-primary">Add Job</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>



            {/* <div>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-sky-200">
                    <input {...register("title", { required: true, maxLength: 20 })} />

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Job Title</span>
                        </div>
                        <input {...register('title')} type="text" placeholder="Job Title" className="input input-bordered w-full" />
                        
                    </label>

                    <select {...register("sector")} className="select select-bordered w-full">
                        <option disabled selected>Select sector</option>
                        <option value="design">Design</option>
                        <option value="technology">Technology</option>
                        <option value="media">Media</option>
                        <option value="data">Data</option>
                        <option value="management">Management</option>
                        <option value="marketing">Marketing</option>
                        <option value="security">Security</option>
                    </select>
                    <input type="submit" />
                </form>
            </div> */}
        </div>
    );
};

export default AddJobs;