/*
Trying to render 

 <h1 id = "parent"> hi i am parent 
 <h2 id = "child1">hello there i m child 1
 <h3 id = "child2">"hi there "
</h3> 
 <h4 id = "child3">"hi there child-3"
</h4></h2>
 </h1> 


*/




const heading = React.createElement(
    "h1",
    { id: "parent" },
    React.createElement(
        "h2",
        { id: "child1" },
        [React.createElement(
            "h3",
            { id: "child3" },
            "hi there"), React.createElement(
                "h4",
                { id: "child4" }, "child4" 
            )]
        )
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);