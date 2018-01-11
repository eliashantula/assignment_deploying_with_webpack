require("./style.css");
const imgSrc = require("./image.jpg");
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// Inside the IIFE ...

// Create the image
const image = document.createElement("img");
image.src = imgSrc;
image.height = 400;
document.body.appendChild(image);

const greeting = "Hello, Webpack!";
(() => {
	console.log(greeting);
	const d = document.createElement("div");
	d.classList.add("myDiv");
	d.innerText = greeting;
	document.body.appendChild(d);
})();


const Greeting = ({ name }) => <p className="greet">Hello, {name}!</p>;

ReactDOM.render(<Greeting name="Reign" />, document.getElementById('root'));
