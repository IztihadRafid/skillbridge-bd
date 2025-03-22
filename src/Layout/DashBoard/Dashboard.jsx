import { FaBlogger, FaFileAlt, FaHome } from "react-icons/fa";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { MdEmail, MdLogout } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const [cart, refetch] = useCart()
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
             })
            .catch(error => console.log(error))
    }
    return (
        <div className="flex">
            {/* side bar */}
            <div className="w-64 min-h-full bg-sky-400">
                <ul className="menu p-4 text-xl my-10">
                    <li>

                        <Link to={'/dashboard/cart'}> <FaFileAlt />My Profile</Link>
                    </li>
                    <li>

                        <Link to={'/dashboard/appliedjobs'}> <IoPerson />Applied Jobs <sup className="text-lg">{cart.length}</sup> </Link>
                    </li>
                    <li>

                        <Link to={'/dashboard/emails'}> <MdEmail />Emails</Link>
                    </li>
                    <li>

                        <Link to={'/dashboard/settings'}> <IoSettingsOutline />Settings</Link>
                    </li>
                    <li>

                        <Link to={'/dashboard/updatecv'}> <SiReaddotcv />Update CV</Link>
                    </li>
                    <li>

                        <button onClick={handleLogOut}> <MdLogout />LogOut</button>
                    </li>
                    <div className="divider"></div>
                    {/* main root */}
                    <li>
                        <Link to={'/'}> <FaHome />Home</Link>
                    </li>
                    <li>
                        <Link to={'/blog'}> <FaBlogger />Blog</Link>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;