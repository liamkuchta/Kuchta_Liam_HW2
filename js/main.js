import { Counter } from './counter.js';
import { StepCounter } from './counter.js';

const counter1 = new Counter('#counter-container1', 5);
const counter2 = new Counter('#counter-container2', 15);
const counter3 = new Counter('#counter-container3', 3, 5);

//Const step10 = new StepCounter(id, start number, step);