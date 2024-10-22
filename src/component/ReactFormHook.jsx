 import React from "react";
import { useForm } from "react-hook-form";



function ReactFormHook(){

const{register,handlesubmit,formState:{error}}=useForm()

const handleform =(data)=>{
    console.log(data);

}
console.log(error);

    return (
        <div>


            <h1> Hook Form</h1>

<label>Enter your Name</label>:
<input {...register("firstname",{register:"first name is required"})}  placeholder="Name"/>

<p>{error?.firstname?.Message}</p>
  
<br></br>
<br></br>

    <label>Enter your Email </label>:
    <input{...register("email")} placeholder="Email"/>
<br></br>
<br></br>

    <label>Enter your Age</label>:
    <input {...register("age")} placeholder="Age"/>
<br></br>
<br></br>

<button onClick={handlesubmit(handleform)}>submit</button>





        </div>
    )
}

export default ReactFormHook;