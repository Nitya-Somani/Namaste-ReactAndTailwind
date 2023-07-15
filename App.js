import React from "react";
import ReactDOM from "react-dom";

//This is react element
const headingJSX = <h1 className="heading">hello there namaste react !!!!</h1>;

/* 

There are two types of React component 
1. Class  Based component 
2. Functional component

/*This is Functional react component
 React component always starts from capital letters.
 we can describe it as a function that returns some JSX or react element is a functional component 
 React functional component at the end of the day is the javascript function .
 */
const HeadingComponent = () => {
  return <h1 className="heading">HI THERE I AM REACT FUNCTIONAL COMPONENT </h1>;
};

//this syntax is similar to the above syntax  without return

const HeadingComponent2 = () => (
  <h1>HI THERE I AM WITHOUT RETURN FUNCTIONAL COMPONENT </h1>
);

//How to render a component  ?
/* const root = ReactDOM.createRoot(document.getElementById("root"));
This is how you render a component because babel understands the react component like this
and then compile it or transpile it to javascript   
root.render(<HeadingComponent/>); */

//what is component composition ?
/* A component inside a component is known as component composition
 or we can say a component inside the other component .
for eg if we have to include title component inside heading component  
*/

const Title = () => {
  return <h1> Title here !!!!</h1>;
};

const Heading = () => (
  <div id="conatainer">
    <Title />
    <h2> I AM heading !!!!</h2>
    <h3>what is the difference between heading and title &#128512;</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);