import { useContext, useEffect, useState } from "react";
import loginImg from "../../assets/jobimage/softwareenginneer.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
    const [signInError, setSignInError] = useState('')
    const [signInSuccess, setSignInSuccess] = useState('')
    const [disabled, setDisabled] = useState(true)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    //handle Login
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSignInError('')
        setSignInSuccess('')
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Signed Up successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
    }
    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="bg-sky-200 ">
            <h1 className="text-6xl bg-sky-200 pt-10  font-bold text-center">Login now!</h1>
            <div className="hero bg-sky-200 n">
                <div className="hero-content lg:flex flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
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
                        <p className="text-center m-3">New Here? <Link to={'/signUp'}> <span className=" text-blue-500">Sign Up</span></Link></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;