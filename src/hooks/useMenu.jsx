import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () =>{
    const [menu, setMenu] = useState([]);
    const [ loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        const {data} = await axios.get('menu.json')
        setMenu(data);
        setLoading(false)
    }
    return [menu, loading]
}

export default useMenu;