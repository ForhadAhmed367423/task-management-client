import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../useAxiosPublic ";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyOnCard from "./MyOnCard";

const MyOnGoing = () => {
    const {user}= useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const  {data}= useQuery({
        queryKey:['allOnGoing'],
        queryFn:async ()=>{
            const {data:allOnGoing}=await axiosPublic(`/allOnGoing?email=${user.email}`)
            return allOnGoing;
        }
    
    })
    return (
        <div className="w-3/4 my-7 ml-[350px]">
                <div className="grid grid-cols-3 gap-4">
                {
                data?.map(ongo=> <MyOnCard key={ongo._id} ongoing={ongo}></MyOnCard>)
            }
                </div>
        </div>
    );
};

export default MyOnGoing;