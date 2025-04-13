import { FaBlogger, FaFile, FaFileAlt, FaHome } from "react-icons/fa";
import { IoMenu, IoPerson, IoSettingsOutline } from "react-icons/io5";
import { MdEmail, MdLogout } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { FaPeopleGroup } from "react-icons/fa6";
import useAdmin from "../../hooks/useAdmin";
import useAllJobsCategory from "../../hooks/useAllJobsCategory";
import useMessage from "../../hooks/useMessage";
import { BsListColumnsReverse } from "react-icons/bs";

const Dashboard = () => {
    const [cart, refetch] = useCart()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [jobs,loading] = useAllJobsCategory();
const [message] = useMessage()
    // Logout button function
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
             })
            .catch(error => console.log(error))
    }


    const [isAdmin]= useAdmin()

    return (
        <div>
            <Navbar></Navbar>
            <div className="flex max-w-screen-2xl mx-auto ">
            {/* side bar */}
            <div className="w-64 min-h-full bg-sky-400">
                <ul className="menu p-4 text-xl my-10 ">
                   {
                    isAdmin ? <>
                     <li>
                        <Link to={'/dashboard/cart'}> <FaHome />Admin Home</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/jobrequest'}> <BsListColumnsReverse />Job Request</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/addjobs'}> <FaFile />Add Jobs</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/managejobs'}> <IoMenu />Manage jobs <sup>{jobs.length}</sup> </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/allusers'}> <FaPeopleGroup />All Users</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/messageform'}> <MdEmail />Send Message</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/manageMessage'}> <MdEmail />Manage Message</Link>
                    </li>
                    <li>
                        <button onClick={handleLogOut}> <MdLogout />LogOut</button>
                    </li></>:


                    // if not admin
                    <>
                     <li>
                        <Link to={'/dashboard/cart'}> <FaFileAlt />My Profile</Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/appliedjobs'}> <IoPerson />Applied Jobs <sup className="text-lg">{cart.length}</sup> </Link>
                    </li>
                    <li>
                        <Link to={'/dashboard/message'}> <MdEmail />Messages <span className="text-lg">{message.length}</span></Link>
                    </li>
                  
                    <li>
                        <Link to={'/dashboard/updatecv'}> <SiReaddotcv />Update CV</Link>
                    </li>
                    <li>
                        <button onClick={handleLogOut}> <MdLogout />LogOut</button>
                    </li></>
                   }


                    <div className="divider"></div>
                    {/* main root */}



                    <li>
                        <Link to={'/'}> <FaHome />Home</Link>
                    </li>
                    <li>
                        <Link to={'/aboutus'}> <FaBlogger />About Us</Link>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;