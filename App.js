
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