import { useDrag } from "react-dnd";

const Completed = ({completed}) => {
    const [{isDragging},Drag]=useDrag(()=>({
        type:'div',
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })
    })); 
    return (
        <div ref={Drag} className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
            {
                <>
                    <h1 className="overflow-hidden">{completed.title}</h1>
                    <p>{completed.task}</p>
                </>
            }
        </div>
    );
};

export default Completed;