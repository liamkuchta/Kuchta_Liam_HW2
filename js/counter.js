export class Counter {

    constructor(selector, initialValue=0) {
        this.count = initialValue;
        this.selector = selector;
        this.mount();
    }

    mount() {

        const container = document.querySelector(this.selector);

        this.display = document.createElement('div');
        this.incrementButton = document.createElement('button');
        this.decrementButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.incrementButton.textContent = 'Increment';
        this.decrementButton.textContent = 'Decrement';
        this.resetButton.textContent = 'Reset';

        container.appendChild(this.display);
        container.appendChild(this.incrementButton);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        this.incrementButton.addEventListener('click', () => this.increment());
        this.decrementButton.addEventListener('click', () => this.decrement());
        this.resetButton.addEventListener('click', () => this.reset());

        this.update();

    }

    increment() {

        this.count++;
        this.update();

    }

    decrement() {

        // Needs an if statement to stop from going below 0
            this.count--;
            this.update();

        return;

    }

    reset() {

        this.count = 0;
        this.update();

    }

    update() {

        this.display.textContent = `Count: ${this.count}`;

        // Add toggling button styles if count reaches 0

    }

}

// Counter is super class
// StepCounter is subclass of Counter

export class StepCounter extends Counter {

    constructor(selector, initialValue = 0, step = 1) {

        // Grab the properties and methods from the Counter class
        super(selector, initialValue);
        this.step = step;
    }

    // Update increment and decrement methods

}