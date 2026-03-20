# Kuchta_Liam_HW2


## Overview

Reusable JavaScript counter built with object-oriented programming. It uses a base Counter class and a StepCounter subclass to show encapsulation, inheritance, and state-driven UI updates.



- Multiple counters are mounted on the same page
- StepCounter extends the base class and overrides increment() and decrement()
- Documentation is included


## Features

- Increment button
- Decrement button
- Reset button
- Custom starting value with a default of 0
- Counter never goes below 0
- Inactive button class added when the count reaches 0
- Multiple counters on one page
- Step-based counter using inheritance

## How To Use

### HTML

```html
<div id="counter-container1"></div>
```

### JavaScript

```javascript
import { Counter, StepCounter } from './js/counter.js';

const counter1 = new Counter('#counter-container1', 0);
const counter2 = new Counter('#counter-container2', 8);
const counter3 = new StepCounter('#counter-container3', 12, 3);
```

## Parameters

- `selector`: the container the counter mounts into
- `initialValue`: the starting count value
- `step`: the amount added or subtracted in `StepCounter`



