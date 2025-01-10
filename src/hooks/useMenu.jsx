import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () =>{
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [ loading, setLoading] = useState(true);
    // useEffect(()=>{
    //     fetchData();
    // },[])
    // const fetchData = async() =>{
    //     const {data} = await axios.get(`${import.meta.env.VITE_URL}/menu`)
    //     setMenu(data);
    //     setLoading(false);
    // }
    // return [menu, loading]

    const {data : menu=[], isPaused: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    return [menu, loading, refetch]
}

export default useMenu;