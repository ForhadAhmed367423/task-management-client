import { Link } from "react-router-dom";

const MyTODOCard = ({ todo }) => {
    return (

        <div className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
            {
                <>
                    <h1 className="overflow-hidden font-bold text-white">{todo.title}</h1>
                    <p className="overflow-hidden text-white font-semibold">{todo.task}</p>
                    <Link to={`todoEdit/${todo._id}`}>
                <button className="btn btn-xs mt-4">Update</button>
            </Link>
                </>
            }
     
        </div>
    );
};

export default MyTODOCard;