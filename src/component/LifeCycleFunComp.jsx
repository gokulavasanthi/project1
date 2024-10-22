import React,{useState} from "react";
import {useEffect}  from "react";

function LifeCycleFunComp(){

const[count,setcount]=useState(0);
useEffect(()=>{
    console.log("vasu");

    return ()=>{};
       
},[count]);


const handleadd =() => {
    setcount(count + 1);
}

    return(
        <div>

            <h1>go -{count}</h1>

            <button onClick={handleadd}> Ad</button>
        </div>
    );

}


export default LifeCycleFunComp