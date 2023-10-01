import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";


//Let us now convert the about.js componenet into class based componenet to understand the
// lifecycle of class based componenet 

class About extends Component{

    constructor(props)
    {
     super(props);
     console.log("componenet constructor of parent printed ..............")
    }

    componentDidMount()
    {
        console.log("componenet did mount of parent printed ..........");
    }

    render(){
        console.log("component render of parent class printed ........");
        return(
            
            <div className= "body">
            <br />
        {/* <h1>Introducing Function based component .</h1>
        <UserFunction Name ={"NITYA"} location ={"INDORE"} /> */}
        
        <h1>Introducing Class Based Component .</h1>        
        <UserClass  Name ={"NITYA"} location ={"INDORE"}  />
        <UserContext.Consumer>
            {(data)=>console.log(data)}
        </UserContext.Consumer>
        
       
        </div>
        )
    }
}

export default About;

//  how the render cycle will work 
// - parent constructor 
// - parent render 
// basically the react lifecycle happens in two phases  render phase and then commit phase 
// in the render phase first the all the componenets are rendered together and then  the commit phase start 
// where the react first updates the dom and then  do compoenet did mount 
// - userclass 1st constructor
// -userclass 1st render will be called 
// userclass 2nd constructor 
//userclass 2nd render 
// user class 3rd constructor 
//usserclass 3rd render 
// user class 1st componentdid mount 
//userclass 2nd component did mount 
// userclass 3rd component did mount 
 //to know the diagram - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
