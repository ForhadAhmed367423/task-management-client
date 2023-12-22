import { useDrag } from "react-dnd";

const ManageTodoCard = ({ todo }) => {
    const [{isDragging},Drag]=useDrag(()=>({
        type:'div',
        item:{id:todo._id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })
    })); 
    return (
        <div ref={Drag} className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
            {
                <>
                    <h1 className="overflow-hidden">{todo.title}</h1>
                    <p>{todo.task}</p>
                </>
            }
        </div>
    );
};

export default ManageTodoCard;