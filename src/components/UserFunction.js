import { useState } from "react";

const UserFunction = (props)=>{

    console.log(props);
    const {Name, location } = props;

    const [count] = useState("0");
    const [count2] = useState("1");
  return (
    <div className = "card-user">
    <h1>Name : {Name}</h1>
    <h2>Location : {location} </h2>
    <h3>Occupation : Employed </h3>
    <h3>count : {count} </h3>
    <h3>count2 : {count2} </h3>
   </div> 
  )
}

export default UserFunction;