import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { AuthContext, auth } from "../../../providers/AuthProviders";
import { useContext } from "react";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut(auth);
  }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/dashboard/profile'}>Dashboard</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>
    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {/* links  */}
                        {links}
                    </ul>
                </div>
                 <img className="logo"  src="/public/tasskweb-removebg-preview.png" alt="" /> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {/* links */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                   
                   {
                       user ? <>
                       <img src={user?.photoURL} className="hover:border-2 hover:border-[#BC8664] cursor-pointer  h-[50px] w-[50px] rounded-full mr-4 max-[425px]:w-[30px] max-[425px]:h-[30px]" alt="" />
                       <p className="font lg:font-bold max-[425px]:text-base  lg:mr-3 max-[425px]:hidden">{user?.displayName}</p>
                       <button onClick={handleLogOut} className="login max-[425px]:hidden" >logout</button>
                       </> :
                       <>
                <div className="navbar-end">
                   
                    {
                        user ? <>
                        <img src={user?.photoURL} className="hover:border-2 hover:border-[#BC8664] cursor-pointer  h-[50px] w-[50px] rounded-full mr-4 max-[425px]:w-[30px] max-[425px]:h-[30px]" alt="" />
                        <p className="font lg:font-bold max-[425px]:text-base  lg:mr-3 max-[425px]:hidden">{user?.displayName}</p>
                        <button onClick={handleLogOut} className="mr-6 primaryBtn font max-[425px]:hidden" >logout</button>
                        </> :
                        <>
                        <Link className="login" to={'/login'}>Login/SignUp</Link>
                        </>
                        
                     }
                    
                </div>
                       </>
                       
                    }
                   
               </div>
        </div>
    );
};

export default Navbar;