import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";

const Create = () => {

    const { user } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        console.log(form);
        const task = form.task.value;
        const title = form.title.value;
        const email = user.email;

        const taskData = { task, email, status: 'todo', title };
        console.log(taskData);

        fetch("https://task-management-server-olive-two.vercel.app/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Task added successfully.",
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
                    Create a new Task
                </h2>

                <div className="bg-[#FAF9F8]  rounded-[10px] py-[60px] px-[60px]">
                    <form onSubmit={handleSubmit}>

                        <div className="flex justify-center mb-8">

                            <input
                                className="rounded-[10px] w-[500px]
                                py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                placeholder="Add Your Task"
                                type="text"
                                name="task"
                            />
                            <input
                                className="rounded-[10px] w-[500px]
                                py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                                placeholder="Add Your Title"
                                type="text"
                                name="title"
                            />


                        </div>





                        <div className="flex justify-center">
                            <button className="px-8 py-4 rounded-[30px] bg-[#5C8374] text-white font-semibold text-[18px]">
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Create;