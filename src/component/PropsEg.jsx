import React, { useState } from "react";


function PropsEg({a,b,c,data}) {

    console.log(data);
    
   
    


    return (
        <div>
            <h1>what is your name -{a}</h1>

            <h1>my age is-{b}</h1>

            <h1>my dob is-{c}</h1>

            {/* <h2> {Props.dob} </h2> */}


        </div>
    )
}

export default PropsEg