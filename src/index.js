import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
let count = 0;
const addOne = () => {
    count++;
    renderCounter();
};
const subOne = () => {
    count--;
    renderCounter();
};
const reset = () => {
    count = 0;
    renderCounter();
};



const renderCounter = () => {
    const templatethree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={subOne} >-1</button>
            <button onClick={reset} >Reset</button>
        </div>
    );

    ReactDOM.render(templatethree, document.getElementById('root'));
};
renderCounter();
*/
const user2 = {
    title: 'title',
    subtitle: 'A sub title',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();//prevent full page reload
    console.log("Form Submited");
    const option = e.target.elements.option.value;

    if (option) {
        user2.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }

}


const RemoveAll = () => {
    user2.options=[];
    renderApp();
};


const renderApp=() => {
    const template = (
        <div>
            <h1>
    
            </h1>
            {user2.subtitle && user2.subtitle && <p>subtitle: {user2.subtitle}</p>}
            {user2.options.length > 0 ? 'Here are your options:' : 'No Options'}
            <p>{user2.options.length}</p>
        
            <button onClick={RemoveAll} >Remove All</button>
            <ol>
                <li>Item One</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, document.getElementById('root'));
};
renderApp();

//  <App />

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
