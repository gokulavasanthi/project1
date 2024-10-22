import React, {useState} from "react";
import NameChangeComp from "./NameChangeComp";

   


function CounterComp(){

    const [ticket,setticket] = useState(0)

    const handleadd =() =>{
        setticket(ticket + 1)

    } 


    const handlesub =() =>{
        setticket(ticket - 1)

    } 

    const handlereset =() =>{
        setticket(0)

    } 

//    const handleoperation = (VA) =>{()=>handleoperation("reset")

//     if(VA == "add"){
//         setticket ("ticket + 1");{()=>handleoperation("sub")
//     }
//     if(VA == "sub"){
//         setticket ("ticket -1");()=>handleoperation("add")
//     }
//     if(VA == "reset"){
//         setticket (0);
//     }
//    }
    return(
        <div>
            <h1>DaDa - {ticket}</h1>
            <button onClick={handleadd}>Add</button>
            <button onClick={handlesub}>minus</button>
            <button onClick={handlereset}>reset</button>
            <NameChangeComp/>
            </div>
    )
}

export default CounterComp
