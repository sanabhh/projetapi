import axios from "axios";
import { useEffect, useState } from "react";

const ListUsers=()=>{
    const [users,setUsers] = useState([])
    const [Loading,setLoading]= useState(true)
    useEffect(()=>{
        
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=>console.log('Error : ',err))

    },[] )
return(
    <div>
       {
       Loading ? <h3> Mazel </h3> : users.map(el=><h3>{el.name}</h3>)
       }
    </div>
)

}

export default ListUsers