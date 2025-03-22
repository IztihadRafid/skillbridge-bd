import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";


const AllJobsCards = ({ job }) => {
    const { _id, title, description, open_position, image, sector, salary,price } = job;
    const { user } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()



    const handleApplyToJob = () => {
        if (user && user.email) {

            //send cart apply to DATABASE
            const cartItem = {
                jobapplyId: _id,
                email: user.email,
                title,
                description,
                salary,
                price
            }
            axiosSecure.post('/jobcarts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Applied Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please Login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //send to login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }




    return (
        <div>
            <div className="card bg-green-400 text-white w-full shadow-lg transition-transform duration-300 hover:-rotate-[-5deg] hover:translate-x-1 hover:translate-y-1 hover:scale-105 hover:bg-cyan-500 transform perspective-1000  lg:mb-0 mb-4">
                <div className="card-body">

                    <img src="" alt="" />
                    <h2 className="card-title text-2xl">{title}</h2>
                    {/* <p className="text-lg font-bold">Open Seat: <span className="mx-4">{open_position}</span></p> */}
                    <p className="text-lg font-bold">Salary: <span className="mx-4">{salary} <span className="text-pink-600">(Negotiable)</span></span></p>
                    <button onClick={ handleApplyToJob} className='btn-block bg-purple-500 py-2 rounded-xl'>Apply</button>
                </div>
            </div>
        </div>

    );
};

export default AllJobsCards;