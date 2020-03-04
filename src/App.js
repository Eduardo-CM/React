import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {} from './playground/es6-arrow-function.js';
import './playground/es6-arrow-function.js';

const user = {
  name: 'name',
  age: 22,
  location: 'location'
};



function getLocation(location) {

  if (location) {
    return <p>Location: {location} </p>;
  }

};

const templatetwo = (
  <div>
    <h1>
      {user.name ? user.name : 'Anonymous'}
    </h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const user2 = {
  title: 'title',
  subtitle: 'A sub title',
  options: [' one ', ' two']
};

const template = (
  <div>
    <h1>

    </h1>
    {user2.subtitle && user2.subtitle && <p>subtitle: {user2.subtitle}</p>}
    {user2.options.length > 0 ? 'Here are your options:' + user2.options : 'No Options'}
  </div>
);

//const nameVar = 'name var';
//console.log("nameVar", nameVar);

//let nameLet = 'namelet';

//console.log("nameLet", nameLet);

// block scoping 
/*let and const only accessible inside its code block*/
/*let fullName = 'First Second';
if (fullName) {
  fullName = fullName.split(' ')[0];
   zconsole.log(fullName);
}*/
/*
function App() {
  return ();
}*/ 