# State Management with useState:
> The `useState` hook is a built-in hook in React that allows functional components to manage state. It provides a way to add stateful behavior to functional components without using class components.

## Using the useState Hook in React:
To use the `useState` hook in React, you can follow these steps:

1. **Import the `useState` Hook**: Import the `useState` hook from the react package.

2. **Declare State Variables**: Declare one or more state variables using the `useState` hook. Each state variable maintains its own state value.

3. **Initialize State**: Set an initial value for the state variable(s) by passing the initial state as an argument to the `useState` hook. The hook returns an array with two elements: the current state value and a function to update the state.

4. **Accessing and Updating State**: Access the current state value by using the state variable. To update the state, call the state update function returned by the `useState` hook, passing the new value as an argument. React will re-render the component with the updated state.

Let's explore an example that demonstrates the usage of the `useState` hook in React.

## Example: Counter Component with `useState`
In this example, we create a simple counter component using the `useState` hook to manage the counter's state.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

In this example:

* We import React and the `useState` hook from the `react` package.
* The `Counter` component is defined as a functional component.
* Inside the component, we use the `useState` hook to initialize the state. We declare a state variable count and its corresponding updater function `setCount` by calling `useState(0)`. Here, `0` is the initial state value for the counter.
* When the "Increment" button is clicked, the `handleIncrement` function is called, which updates the `count` value by calling the `setCount` function with the new value `count + 1`.
* The current count value is displayed in the paragraph `<p>` element using `{count}` within curly braces.
* React automatically updates the UI with the new count value when the state changes.

By utilizing the `useState` hook, we can manage and update state within functional components in React. The hook simplifies the process of adding state to functional components and enables components to be dynamic and responsive to changes in the state.