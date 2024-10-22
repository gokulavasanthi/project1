import React from "react";

export default function PropsProduct({da}){
    return(
        <div>
            <h1>{da.title}</h1>

            <img src={da.image} height={100} width={100}/>
       
                
          
        </div>
    )
}