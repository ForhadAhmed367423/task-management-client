import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../useAxiosPublic ";
import { useQuery } from "@tanstack/react-query";
import MyCompletedCard from "./MyCompletedCard";

const MyCompleted = () => {
    const {user}= useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const  {data}= useQuery({
        queryKey:['allCompleted'],
        queryFn:async ()=>{
            const {data:allCompleted}=await axiosPublic(`/allCompleted?email=${user.email}`)
            return allCompleted;
        }
    
    })
    return (
        <div className="w-3/4 my-7 ml-[350px]">
            <div className="grid  grid-cols-1 gap-4 lg:grid-cols-3">
            {
                data?.map(comp => <MyCompletedCard key={comp._id} completed={comp} ></MyCompletedCard>)
            }
            </div>
        </div>
    );
};

export default MyCompleted;