import React, { useState } from "react";

function FormReact(){

const[name,setname]= useState("");

const[email,setemail]= useState("");

const[age,setage]= useState("");

const handlename = (event)=> {

    setname(event.target.value);
}

const handleemail = (event)=> {

    setemail(event.target.value);
}

const handleage = (event)=> {

    setage(event.target.value);
}

   
    return(

        <div>
            <label>Enter your Name</label>:
            <input  onChange={handlename} placeholder="Name"/>

  
<br></br>
<br></br>

    <label>Enter your Email </label>:
    <input  onChange={handleemail}placeholder="Email"/>
<br></br>
<br></br>

    <label>Enter your Age</label>:
    <input onChange={handleage} placeholder="Age"/>
<br></br>
<br></br>

<button>submit</button>

<div>

<h1> name-{name}</h1>
<h1>email-{email}</h1>
<h1>age- {age}</h1>

</div>

        </div>
    )
}
export default FormReact;