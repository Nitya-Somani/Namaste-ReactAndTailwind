Namaste React

# md stands for markdown document

# Plan your code

<!-- * Header
    - Navbar
        -logo
        - anchor links (Home, About us , contact us , cart)
* Body
    -searchbar and search button
    -Resaturant card container
      - cards (6)
      -rating , cuisine ,image , restaurant name
* Footer
    - copyright
    - Description about  the company .   -->

# Props stands for properties

# Basically when we are sending the props into a componenet at the end of the day we are passing it like

# the arguments to a function in javascript

# Lesson - 7

How does useEffect hook come ?

# IT comes from the named import from react

USE EFFECT IS CALLED WITH TWO ARGUMENTS \_
1 ) is callback function
2)dependency array
when is the use effect called

- useEffect is called after every render f that component
  only callback function is mandatory in the argument the depency array is not that important
  case 1:
  useEffect(()=>{
  with callback function
  })
  so if the useeffect is rendered only with the callback function then the useeffect will be rendered everytime wheneveer the component is rendered

case 2:
what if useEffect hook is rendered with callback function and empty array ?

- whenever
  useEffect (()=>{

},[])
useEffect is rendered like this then the useEffect will be rendered only once only at the time of initialization

case 3 :
what if useEffect is rendered with a array having value for eg :
useEffect (()=>{

},[someArray])
so now the use effect will be rendered everytime whenever the array - [someArray will be updated ]


# useState hook explained

- useState hook should not be used above the component it will throw a error 
- useState hook should not  be put in the if else block in the react docs it is mentioned that if u mess up with react the react will  mess with u .
- never create use state inside for loop , function . the state variables are meant to be created inside the function component at the top and no where else .