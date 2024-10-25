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
