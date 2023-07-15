import React from "react";
import ReactDOM from "react-dom/client";

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

//IMPORTANT POWER OF JSX if you write inside curly brackets then you can write 
//Javascript inside it 
//for eg :

const superNum = 1234;

const SuperPowerOFJSX = () =>
(
    <div id="container">
        <h1>I AM THE SUPER POWER OF JSX !!!!!</h1>
        <h2>{superNum}</h2>

    </div>
)




const Title = () => {
  return <h1> Title here !!!!</h1>;
};

//Three ways to include the functional component in a component -
/*
These three ways are the same ways  and will do the same job 
1. <Title/>
2.<Title></Title>
This 3. way is valid because with the help of curly brackets in JSX 
we used to render  javascript and functional component at the end of the day 
is a javascript function so yes in JSX we can call that function so it is valid -
3.{Title()}

*/
const Heading = () => (
  <div id="conatainer">
    <Title />
    <Title></Title>
    {Title()}
    <h2> I AM heading !!!!</h2>
    <h3>what is the difference between heading and title &#128512;</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//ques - can we have to root render and if yes what will happen ?

/* when we will have two root render ideally , In react we should have one root render 
but if  you will include like this then it will render the content of <Title /> only the one which is at last 
The render() method is intended to render the initial component hierarchy into the root element, 
but subsequent calls to render() will replace the previously rendered content.

In your example code, when you call root.render(<Heading />) and then root.render(<Title />), 
the second call to render() will replace the previously rendered <Heading />
component with the <Title /> component.
As a result, only the content of <Title /> will be rendered, and the <Heading />
component will not be visible.

*/

//root.render(<Heading />);
//root.render(<Title />);

root.render(<SuperPowerOFJSX/>)
