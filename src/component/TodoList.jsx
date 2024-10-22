import React,{useEffect,useState} from "react";
import axios from "axios";
import { FaEdit } from  "react-icons/fa";
import { MdDeleteOutline } from  "react-icons/md";


function TodoList(){

const[data,setdata]=useState([])


const handlefetch = async () =>{
    let res   = await axios.get("http://localhost:3000/todoList")
    
    setdata(res.data)


}

useEffect(()=>{
    handlefetch();
},[]);



    return(
        <div>

            <h1> Todo List</h1>
            


            <input placeholder='enter u r todo'/>

            <button className="btn btn-primary ms-3" >Add</button>

   {data.map((da,i)=> (
    <div  className="d-flex mt-5"key={i}>
          <h1>{i = i+1} . {da.task}</h1> 
           <span> <FaEdit/>
           </span>
           <span> <MdDeleteOutline />
           </span>

        </div>
        
        
     ))}
    </div>
    );
}

export default TodoList;