import Swal from "sweetalert2";
import UseTaskHooks from "../../../Hooks/UseTaskHooks";
import { useParams } from "react-router-dom";

const TODOUpdate = () => {
    const [tasklist] = UseTaskHooks();
    console.log(tasklist)
    const updateId = useParams();
    const updateItem = tasklist.filter(item => item._id === updateId.id)
    console.log("updated item :", updateItem)
    const handleEdit = (event) => {
        event.preventDefault();

        const form = event.target;
        console.log(form);
        
        const task = form.task.value;

        const taskData = { task };
        console.log(taskData);

        fetch(`http://localhost:5000/tasklist/${updateItem[0]._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Task Update successfully.",
                        icon: "success",
                        confirmButtonText: "cool",
                    });
                }
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
            });
        }
    return (
        <div className="w-3/4  my-7 ml-[350px]">
        <div className="w-3/4 mx-auto">
            <h2 className="text-[60px] font text-center text-[#5C8374]   font-medium mb-[10px]">
                Update task
            </h2>

            <div className="bg-[#FAF9F8]  rounded-[10px] py-[60px] px-[60px]">
                <form onSubmit={handleEdit}>

                    <div className="flex justify-center mb-8">
                        
                        <input
                            className="rounded-[10px] w-[500px]
                            py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                            placeholder="Add Your Task"
                            type="text"
                            name="task"
                            
                        />


                    </div>





                    <div className="flex justify-center">
                        <button className="px-8 py-4 rounded-[30px] bg-[#5C8374] text-white font-semibold text-[18px]">
                            Update Task
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    );
};

export default TODOUpdate;