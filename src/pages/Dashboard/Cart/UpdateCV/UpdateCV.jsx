import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const UpdateCV = () => {
    const axiosSecure = useAxiosPublic()

    const handleUpdateCV = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const age = form.age.value;
        const sector = form.sector.value;
        const jobtitle = form.jobtitle.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const jobtype = form.jobtype.value;
        const address = form.address.value;
        const price = 0.82
        const cvItem = { name, description, age, sector, phone, jobtype,jobtitle, price, address, email }
        // console.log(cvItem);


        const jobCv = await axiosSecure.post('/allCV', cvItem);
        if (jobCv.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "CV Added",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }


    return (
        <div className="bg-slate-50">
            <div className="hero min-h-screen">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-center text-sky-600 text-4xl mb-5 font-semibold">Your CV</h1>
                    <div className="card lg:px-16 md:px-10 px-8 bg-sky-50 w-full border-2 border-blue-300 shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdateCV} className="text-black font-semibold text-lg">
                            {/* Row 1 */}
                            <div className="md:flex gap-4">
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input type="number" name="age" placeholder="age" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            {/* Row 1 */}
                            <div className="md:flex gap-4">
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <select defaultValue={'default'} name="gender" className="select select-info w-full">
                                        <option disabled value='default'>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Nationality</span>
                                    </label>
                                    <input type="text" name="nationality" placeholder="nationality" className="input input-bordered w-full" required />
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="md:flex gap-4">
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Job Type</span>
                                    </label>
                                    <select defaultValue={'default'} name="sector" className="select select-info w-full">
                                        <option disabled value='default'>Job Sector</option>
                                        <option>data</option>
                                        <option>design</option>
                                        <option>marketing</option>
                                        <option>security</option>
                                        <option>technology</option>
                                        <option>media</option>
                                        <option>management</option>
                                    </select>
                                </div>
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Job Type</span>
                                    </label>
                                    <select defaultValue={'default'} name="jobtype" className="select select-info w-full">
                                        <option disabled value='default'>Job Type</option>
                                        <option>remote</option>
                                        <option>parttime</option>
                                        <option>fulltime</option>
                                    </select>
                                </div>

                            </div>

                            {/* Row 3 */}
                            <div className="md:flex gap-4">
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name="phone" placeholder="phone" className="input input-bordered w-full" required />
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="md:flex gap-4">

                                <div className="form-control my-5 flex-1">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="address" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className="form-control my-5 flex-1">
                                <label className="label">
                                    <span className="label-text">Job Title</span>
                                </label>
                                <select defaultValue={'default'} name="jobtitle" className="select select-info w-full" required>
                                    <option disabled value='default'>Job Title</option>
                                    <option>Data Analyst</option>
                                    <option>UX/UI Designer</option>
                                    <option>Marketing Specialist</option>
                                    <option>Cybersecurity Analyst</option>
                                    <option>Web Developer</option>
                                    <option>MERN Stack Developer</option>
                                    <option>Photographer</option>
                                    <option>Project Manager</option>
                                    <option>Content Writer</option>
                                    <option>Software Engineer</option>

                                </select>
                            </div>
                            {/* Experience */}
                            <div className="form-control my-5">
                                <label className="label">
                                    <span className="label-text">Any Experience</span>
                                </label>
                                <textarea name="description" className="textarea textarea-info w-full" placeholder="Any Experience" required></textarea>
                            </div>

                            {/* Submit */}
                            <div className="form-control my-6">
                                <button className="btn btn-primary w-full">Update CV</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpdateCV;