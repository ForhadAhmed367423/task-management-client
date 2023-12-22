import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../useAxiosPublic ";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";
import ManageTodoCard from "./ManageTodoCard";
import OngoingManage from "../OngoingManage/OngoingManage";
import { useDrop } from "react-dnd";
import Completed from "../Completed/Completed";
import Swal from "sweetalert2";


const TaskManage = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data = {}, refetch } = useQuery({
        queryKey: 'taskmanage',
        queryFn: async () => {
            const { data: task } = await axiosPublic(`/managetask?email=${user.email}`)
            return task;
        }

    });
    console.log(data)
    // ongoing drop  ((function
    const [{isOver},OnGoingDrop]=useDrop(()=>({
    accept:'div',
    drop:(item)=>statusOngoing(item.id)

    }))
    const statusOngoing = async (id)=>{
     await axiosPublic.put(`/ongoing/${id}`);
     Swal.fire({
        title: "Successful",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok"
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload()
        }
    });    }

    // completed Drop
    const [{isOver:over},CompletedDrop]=useDrop(()=>({
        accept:'div',
        drop:(item)=>statusCompleted(item.id)
    
        }))
        const statusCompleted = async (id)=>{
         await axiosPublic.put(`/completed/${id}`);
         Swal.fire({
            title: "Successful",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        });        }
    return (
        <div className="w-3/4 my-7 ml-[350px]">
            <h1 className="text-5xl font font-bold text-center text-[#5C8374]"> Task Management</h1>
            <div className="flex justify-center items-center gap-10">

                <div className="bg-[#FFFFFF] w-2/4 my-10 px-5 py-5 rounded-lg border-2 hover:border-dotted border-[#5C8374] h-[350px] overflow-y-auto">
                    <h1>My Todo</h1>
                    {
                        data.todo?.map(to => <ManageTodoCard key={to._id} todo={to} ></ManageTodoCard>)
                    }
                </div>
                <div ref={OnGoingDrop} className="bg-[#FFFFFF] w-2/4 my-10 px-5 py-5 rounded-lg border-2 hover:border-dotted border-[#5C8374] h-[350px] overflow-y-auto">
                    <h1>ongoing</h1>
                    {
                        data?.ongoing?.map(on => <OngoingManage key={on._id} ongoing={on}
                        ></OngoingManage>)
                    }
                </div>
                <div ref={CompletedDrop} className="bg-[#FFFFFF] w-2/4 my-10 px-5 py-5 rounded-lg border-2 hover:border-dotted border-[#5C8374] h-[350px] overflow-y-auto mr-10">
                    <h1>Completed</h1>
                    {
                        data?.completed?.map(comp=><Completed key={comp._id} completed={comp}></Completed>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskManage;