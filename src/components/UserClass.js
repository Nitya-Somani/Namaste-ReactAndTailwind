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
        
            this.state= {
                data: {
                    login:"dummyName",
                    id:"dummylocation"
                }
            }

            //How to use State in class based component 
            
            

        }
        
        async componentDidMount()
        {
            console.log("componenet did mount of child got printed .............")

            const aboutData =await fetch("https://api.github.com/users/Nitya-Somani")

            const json = await aboutData.json();
            
            console.log(json);

            this.setState({
                data:json
            })

        }

        
        componentDidUpdate()
        {
            console.log("yes  component got update ")
        }
        componentWillUnmount()
        {
            console.log("component unmounted .............................")
        }
        render() {
            console.log("Component render got printed...");
            const { userinfo } = this.state;
        
            if (!userinfo) {
                return <div>Loading...</div>;
            }
        
            return (
                <div className="card-user">
                    <h1>Name: {userinfo.login}</h1>
                    <h2>ID: {userinfo.id}</h2>
                    <h3>Occupation: Employed</h3>
                    {/* Update the state */}
                    {/* ... */}
                </div>
            );
        }
        

    }

    export default UserClass;