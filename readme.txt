Lec 1. intro
learn about react js, functionalities, how it works? its use? 
React is js library. some consider it framework because it is compareable with angular but in real, it is library
developed by fb. it is single page application. the main advantage is that it only refreshes the component 
not the whole page. using components provides us reuseability. a reuseabile component is piece of ui that can be 
used in various parts. first download vs code, npm, node package manager. 


Lec 2. Creating first Component. 
npx create-react-app app-name. npm start to start the app. react works in hierarichel manner. first is parent 
and it has child components. children can be component, function or anything like that. parent is always one. 
index.html file is parent file in public folder of react. we don't need to use this. single div with id root is 
always parent in react app. now the default screen is showing, but we will remove clean code and make our own 
code. 
now clean the code. remove reportWebVitals.js, setupTests.js, logo.svg, app.js, app.css, app.test.js. remove 
imported app and reportWebVitals in index.js.We will be getting error but we will solve it later. 

we have first folder node_modules. these are packages we installed through npm. package dependencies are stored 
here. e.g., if we install bootstrap or tailwind, we see its dependencies here. in package.json, the metadata 
of our application is stored like app, name, version dependencies, scripts. don't delete these are important. 
in index.js we have render that displays content of application on browser. 


Lec 3. JSX in react js. 
our browser do not understand react, so when load the browser converts code into its own form. if we want to use 
js in html, we need to use script tag and then use it but using jsx we can write js inside the html. 
we need to import react and reactDOm in index.js to use it. 


Lec 4. Styling component hooks. 
internal and inline styling. 
<h1 style={{color:"red"}}>This is heading</h1>. 

or const main = {
    background:"Red",
    color:"yellow",
}

<div style={main}> <h1>How are you?</h1> </div>


Lec 5. Template Literals in React. js
in html file, we can use js using Template Literals ``. <></> this is fragment. if we want to use more than one 
elements tags then we will need to use them inside this fragment. we can just put variable inside the {} and use 
them. in js we use ${} and put variable name inside it but in react we can use directly inside {} without $ and ``. 
if we want to use variables combined we can put {firstvariable +" "+ secondvariable }. if we don't use +" "
then there will be no space between these two variables. we can use {firstvariable}{secondvariable} separately. 
if we give space every time by +" ", then it becomes complex. but we can use <h1> {`we are ${firstvariable} 
${secondvariable}`} </h1>. we can use Template Literals inside {}. 


Lec 6. Components in React JS. 
we use components for reuseability. when we create component, we import react in each file. once function is 
created we need to export it at the end. export default functionName; if there are more than one, then we need to 
export as export {functionOne, functionTwo} and without using default keyword. 


Lec 7. Props in React JS. 
we created component, but how to pass data of component to other. there we need props. we will pass data as props 
from parent and then access it using props keyword in which component we want to use. 
<User name="Kashan" expertise="Developer" />
function User(props) {
    return(
        <>
        <h1>My name is {props.name}</h1>
        <p>I am a {props.expertise}</p>
        </>
    )    
}


Lec 8. Hooks 
class based and function based two components. we write any component in class and then convert it into function. 
function based component don't have this complication. in hooks, we need to write just few lines of codes. 
we have many hooks like useState, useRef, useEffect, useNavigator. We can also make our own hooks. 
hooks are imported at the top and written at the top of component. 


Lec 9. Project 1. 
