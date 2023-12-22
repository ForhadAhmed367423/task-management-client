import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { RiHomeOfficeLine } from "react-icons/ri";
import { MdOutlineRateReview } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";







const Drawe = () => {
    return (
        <div className="fixed">
            <div className="drawer drawer-open lg:w-[300px] min-h-screen ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                </div>
                <div className="drawer-side bg-[#FAF9F8] rounded-lg ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay fixed"></label>
                    <ul className="flex flex-col  p-4 w-80 min-h-full text-base-content ">
                        {/* Sidebar content here */}





                        <>
                            <h2 className="text-center text-2xl font font-bold mb-6 text-black">Dashboard</h2>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 active" to={'profile'}><CgProfile /><span>My Profile</span></NavLink ></li>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'mytodo'} className="flex items-center gap-2"><GoHeart /><span>My TODO</span></Link></li>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'completed'} className="flex items-center gap-2"><GiFinishLine /><span>My Completed Task</span></Link></li>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'myongoing'} className="flex items-center gap-2"><FaPersonRunning /><span>My ongoing Task</span></Link></li>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'taskmanage'} className="flex items-center gap-2"><MdOutlineRateReview /><span>Task Management</span></Link></li>
                            <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><Link to={'create'} className="flex items-center gap-2"><MdCreateNewFolder /><span>Create Task</span></Link></li>
                        </>






                        {/* sheard links */}
                        <div className="divider"></div>

                        <li className="bg-[#FFFFFF] p-2 hover:bg-slate-200 rounded-lg mb-3 font font-semibold"><NavLink className="flex items-center gap-2 " to={'/'}>< RiHomeOfficeLine /><span>Home</span></NavLink ></li>
                        
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Drawe;