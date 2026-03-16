import { Counter, StepCounter } from './counter.js';

const counter1 = new Counter('#counter-container1', 0);
const counter2 = new Counter('#counter-container2', 8);
const counter3 = new StepCounter('#counter-container3', 12, 5);