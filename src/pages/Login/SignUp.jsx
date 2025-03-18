import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/jobimage/softwareenginneer.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
    const [signInError, setSignInError] = useState('')
    const [signInSuccess, setSignInSuccess] = useState('')
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    //signUp function
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signed Up successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true })

        //reset validation
        setSignInError('')
        setSignInSuccess('')
        createUser(email,password)
        .then(result=>{
            const signedUser = result.user;
            console.log(signedUser);
        })
    }


    return (
        <div className="bg-sky-200 ">
            <h1 className="text-6xl bg-sky-200 pt-10  font-bold text-center">Sign Up Now!</h1>
            <div className="hero bg-sky-200 n">
                <div className="hero-content lg:flex flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="username" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                                {/* <button className="btn btn-primary">Login</button> */}
                                {
                                    // Viewing authentication error in SignUp
                                    signInError && <p className="text-red-500 text-lg font-medium w-2/3">{signInError}</p>
                                }
                                {
                                    signInSuccess && <p className="text-green-600 text-lg font-medium w-2/3">{signInSuccess}</p>
                                }
                            </div>
                        </form>
                        <p className="text-center m-3">Have an Account? <Link to={'/login'}> <span className=" text-blue-500">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;