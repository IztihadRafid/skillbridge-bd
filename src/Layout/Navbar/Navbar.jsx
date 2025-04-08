import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaRegFileAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart]=useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navlinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to='/getsupport'>Get Support</Link></li>
        <li><Link to={'/alljobs'}>Jobs</Link></li>
        <li><Link to={'/aboutus'}>About Us</Link></li>
        {/* <li><Link to={'/secret'}>secret</Link></li> */}
        <li><Link to={'/dashboard/cart'}><button className="flex items-center justify-center">
            <FaRegFileAlt /> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
        </button></Link></li>

        {
            user ? <><li><button onClick={handleLogOut} className="btn btn-ghost">logOut</button></li></> : <><li><Link to={'/login'}>Login</Link></li></>
        }
    </>
    return (
        <div className="navbar bg-[#0A304D] text-white text-lg font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#0A304D] rounded-box z-[1] mt-3 w-64 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <img className="w-40 rounded-lg" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>{user.email}</>: <><button>user</button></>
                }
                {/* <a className="btn">Button</a> */}
            </div>
        </div>
    );
};

export default Navbar;