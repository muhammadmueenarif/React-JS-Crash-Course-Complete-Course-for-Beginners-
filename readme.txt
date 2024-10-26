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
counter html and css. 


Lec 10. Project 1. part 2. 
react use state added. 


Lec 11. Hierarichy rendering and Advanced Hooks
Understanding hierarichy. 
react works in hierarichel manner. it has parent and then children and children keep on forming until we want. 
these children can be component and functions. create app.js file and import react from it and make function. 


Lec 12. Conditional Rendering. 
in simple js we use if else for Conditional rendering but in jsx we can't use that. if we do that, we get error. 
so we will use condition ? trueResult : falseResult. 


Lec 13. useEffect hook in react js. 
very helpful in functional components. if we want to make changes during rendering then we can use useEffect. 
in our counter app, when we click on button, only button increment but i want to get alert also and increment. 


Lec 14. React Router DOM
we have different pages on our website. if we want every page has its separate route, then we have to define the route. and we define that 
route with the help of npm package react router dom. before using it, we need to install it in the Project. 
npm install react-router-dom command to install it. when it is installed, we will import it in file to use it.
read documentation of react router dom how to use it. in index.js add, 
import { BrowserRouter } from "react-router-dom";

write main rendering component as   
<BrowserRouter>
    <App />
  </BrowserRouter>. 

to use routes we need to import it in the file. import { Routes, Route } from "react-router-dom";
then we can use them as below: 
  <>
      <Routes>
        <Route path="/" element={<Home/>}/> {/*default page home*/}
      <Route path="/about" element={<About/>}/> {/*when someone goes on about route, about page will show */}
      </Routes>
    </>


Lec 15. Linking in react router DOM. 
if we click on button or link, then we navigate to that particular page. if we want to use multiple
inside the single route then we can use it as 

<Route path="/" element={ 
        <>
        <Header /> <Home />
        </>
    }/>

now i want that when i click on home in the Header, then i go to header page. if i click on about in header 
then i go to about page. for this we will import Link from react router dom in the file where we want to use.
we can't do that like a tag of html. we use ahref in html but here we use to="". 
<div className="main-header">
    <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
    </ul>
  </div>

  now if we click on home button, we will goto home and if we click on about, we will go to about page. 


  Lec 16. Handling error pages with React Router DOM. 
  we have defined proper routes like home and about but what happens if someone enter invalid route like /gsjfhsk.
  react will show nothing. so we will make a page for error handling like what page should be shown if someone 
  enters wrong url. 
make error page and then export it and then use it in app.js file. 
<Route path="*" element={<> <Error/> </>} /> 
now if someone enter wrong url, then error page will show. 


Lec 17. Using useNavigate Hook. 
if we get condition in which we want that after one condition, we do transition b/w different groups. we use 
useNavigate hook. we need to import this first. 
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    }
  return (
    <>
    <p>This is Home Page</p>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}
when we click on buton, it moves to about page. 


Lec 18. Building calculator. Part 1. 
Lec 19. Building calculator. Part 2. 

Lec 20. Using the Pokemon API 
Building a restful api in ReactJS. Part 1. 
How to use restful api in our Project. how to manipulate api and fetch the data that we need. 
what is api? if we want to fetch data from sever, we will send request. that request is form of api. we will use 
Pokemon api that tells us about all the Pokemon and which Pokemon is present on what number. 

Part 2. 
fetching data from api and displaying it in our project.
different Pokemon are present on different number. the number which user selects, then its corresponding Pokemon
should display. we will need to install axios package of npm. 
https://pokeapi.co/ we will use this url to fetch api. we will import axios in file where fetch data. 
