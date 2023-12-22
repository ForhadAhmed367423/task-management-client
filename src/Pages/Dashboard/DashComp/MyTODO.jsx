import { Link } from "react-router-dom";
import UseTaskHooks from "../../../Hooks/UseTaskHooks";

const MyTODO = () => {

    const [tasks] = UseTaskHooks();
    return (
        <div className="ml-[400px] ">
            <h1 className="text-center text-4xl font-bold mt-5">My TODO List</h1>
            <div className=" mx-auto ">
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 mt-10">
                        {
                            tasks.map(task => <div className="mr-10 bg-slate-200  rounded-lg p-5 w-[250px]" key={task._id}>
                                <h3>{task.task}</h3>
                                <div>
                                    <Link to={`todoEdit/${task._id}`}>
                                        <button className="btn btn-xs">Update</button>
                                    </Link>

                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTODO;