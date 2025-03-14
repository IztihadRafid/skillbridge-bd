import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"
const Navbar = () => {
    const navlinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to='/getsupport'>Get Support</Link></li>
        <li><Link to={'/alljobs'}>Jobs</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
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
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;