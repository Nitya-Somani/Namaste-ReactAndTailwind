import React from "react";

// what is a class based component 
// It  is a old way of writing the component 
// In class based component we extends the React.component which we import from the React modules 
// and in class based component we have a render(){} function that returns some piece of jsx 
// if we have to pass props in class based components we get it by the constructor of the class 
// in the constructor  by writing the super(props) we are able to  have extended class  functions ,variables etc .
// and later inside the render(){} function we can access the props by this.props.name ;

class UserClass extends React.Component{

    constructor(props)
    {
        console.log("componenet constructor  of child got printed .............")
        super(props);
       

        //How to use State in class based component 
        
        this.state = {
            count :0,
            count1 :1,
            count2:2,
          
        }

    }
    
    componentDidMount()
    {
        console.log("componenet did mount of child got printed .............")
    }
    
    render(){

        console.log("componenet constructor  of render  got printed .............")
        const  { Name, location } = this.props;    
        return(
        <div className = "card-user">
        <h1>Name : {this.props.Name}</h1>
        <h2>Location :{location} </h2>
        <h3>Occupation : Employed </h3>
        <h3>Count by 1 : {this.state.count} </h3>
        <h3>Count by 2 : {this.state.count1} </h3>
        <h3>Count by 3 : {this.state.count2} </h3>
        {/* how to update the state  in class based component  */}
        <button  className ="btn btn-outline-info" onClick = {()=>{
            //the wrong method to update the state in class based component is :
            //this.state.count = this.state.count+1;
            // The right method to increase the count is 
            //->
            //what if we have set state of two count count1, count 2 then -->
            this.setState ({
                count : this.state.count+1,
                count1:this.state.count1+2,
                count2:this.state.count2+3,
            });

        }}>Increase the count </button>
       
       </div> )

    }

}

export default UserClass;