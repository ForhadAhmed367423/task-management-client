import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const UseTaskHooks = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const { refetch, data: offerData = [] } = useQuery({
        queryKey: ['tasks', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tasks?email=${user?.email}`)
            return res.data;
        }
    })
    return [offerData, refetch]

};

export default UseTaskHooks;