import  React,{ useEffect, useState } from "react";



function ApiCallWithBtn(){
    const [data,setdata]= useState([]);

    const handleapi=async ()=>{
        let res =await fetch ("https://fakestoreapi.com/products")
        let apidata=await res .json();
        setdata(apidata);
 }
let a= localStorage.getItem("name")


useEffect(()=>{
    handleapi();

localStorage.setItem("name","vasanthi")

return ()=>{
    console.log("unmounting clear");

    // localStorage.removeItem("name")
}

},[])


    return(
        <div className="vasu">

            <button onClick={handleapi}>call api</button>
            {data.map((va)=>(

            <div>
                <h1>{va.title}</h1>

                <img src={va.image} height={100} width={100}/>

                <h4>{va.price}</h4>
            </div>
            ))}
</div>
    
        )
    }  
 export default ApiCallWithBtn;