import './style.css';
import MainService from './mainService.js';
import Barcode from './barcode.svg'
const targetEl = document.querySelector("#log");

const service = new MainService({targetEl})
const datalist = [1,2,3,4,[5,6,[7]]];
const subHtml = service.init(datalist);

targetEl.innerHTML = `datalist is ${subHtml}`;

// Add the image to our existing div.
const element = document.createElement('div');
const myIcon = new Image();
myIcon.src = Barcode;

element.appendChild(myIcon);

document.body.appendChild(element);