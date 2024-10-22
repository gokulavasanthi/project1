import React,{useState} from"react";



function NameChangeComp(){

    const [name,setname]= useState("gokulavasanthi");


    const handlename =() => {
        // setname("vasanthi");
    

        if(name =="gokulavasanthi"){
            setname("vasanthi");
        }
        if(name =="vasanthi"){
            setname("gokulavasanthi")
        }

    };
    return(
        <> 
            <h1>{name}</h1>
            <button onClick={handlename}>change</button>
        </>
    );
}
    export default NameChangeComp