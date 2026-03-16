export class Counter {

    constructor(selector, initialValue = 0) {
        this.count = initialValue;
        this.selector = selector;
        this.handleIncrementClick = this.handleIncrementClick.bind(this);
        this.handleDecrementClick = this.handleDecrementClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);

        if (this.count < 0) {
            this.count = 0;
        }

        this.mount();
    }

    mount() {

        const container = document.querySelector(this.selector);

        this.display = document.createElement('div');
        this.incrementButton = document.createElement('button');
        this.decrementButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.display.classList.add('counter-display');
        this.incrementButton.classList.add('counter-button');
        this.decrementButton.classList.add('counter-button');
        this.resetButton.classList.add('counter-button');

        this.incrementButton.textContent = 'Increment';
        this.decrementButton.textContent = 'Decrement';
        this.resetButton.textContent = 'Reset';

        container.appendChild(this.display);
        container.appendChild(this.incrementButton);
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);

        this.incrementButton.addEventListener('click', this.handleIncrementClick);
        this.decrementButton.addEventListener('click', this.handleDecrementClick);
        this.resetButton.addEventListener('click', this.handleResetClick);

        this.update();

    }

    handleIncrementClick() {

        this.increment();

    }

    handleDecrementClick() {

        this.decrement();

    }

    handleResetClick() {

        this.reset();

    }

    increment() {

        this.count++;
        this.update();

    }

   decrement() {

        // Needs an if statement to stop from going below 0
        if (this.count > 0) {
            this.count--;
            this.update();
        }

        return;

    }

    reset() {

        this.count = 0;
        this.update();

    }

    update() {

        this.display.textContent = `Count: ${this.count}`;

        // Add toggling button styles if count reaches 0
        if (this.count === 0) {
            this.decrementButton.classList.add('is-inactive');
            this.resetButton.classList.add('is-inactive');
        } else {
            this.decrementButton.classList.remove('is-inactive');
            this.resetButton.classList.remove('is-inactive');
        }

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
        increment() {

        this.count += this.step;
        this.update();

    }

    decrement() {

        if (this.count >= this.step) {
            this.count -= this.step;
        } else {
            this.count = 0;
        }

        this.update();

    }


}