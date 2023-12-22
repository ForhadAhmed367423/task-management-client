import { useDrag } from "react-dnd";

const OngoingManage = ({ongoing}) => {
    const [{isDragging},Drag]=useDrag(()=>({
        type:'div',
        item:{id:ongoing._id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })
    })); 
    console.log(ongoing._id)
    return (
        <div ref={Drag} className="bg-slate-400 rounded-lg p-2 min-h-[200px] w-[250px] mb-5 ">
        {
            <>
                <h1 className="overflow-hidden">{ongoing.title}</h1>
                <p>{ongoing.task}</p>
            </>
        }
    </div>
    );
};

export default OngoingManage;