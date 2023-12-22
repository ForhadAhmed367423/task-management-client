import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import useAxiosPublic from "../../../useAxiosPublic ";
import { useQuery } from "@tanstack/react-query";
import MyTODOCard from "./MyTODOCard";

const MyTODO = () => {
    const {user}= useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const  {data}= useQuery({
        queryKey:['alltodo'],
        queryFn:async ()=>{
            const {data:alltodo}=await axiosPublic(`/alltodo?email=${user.email}`)
            return alltodo;
        }
    
    })
    return (
        <div className="w-3/4 my-7 ml-[350px]">
            <h1 className="text-center text-4xl font-bold mt-5">My TODO List</h1>
            <div className=" mx-auto ">
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 mt-10 gap-20">
                        {
                            data?.map(todo =><MyTODOCard key={todo._id} todo={todo}></MyTODOCard>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTODO;