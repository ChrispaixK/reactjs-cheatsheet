# Context and useContext:

> Context is a feature in React that allows you to share data between components without passing props explicitly at each level. The useContext hook is used to consume the values provided by a context in functional components.

## Using the useContext Hook in React:

To use the `useContext` hook in React, you can follow these steps:

1. **Create a Context**: Create a context using the `React.createContext()` function. This function returns a context object that consists of a Provider and a Consumer.

2. **Provide a Value**: Wrap the parent component(s) that provide the context value with the `Provider` component. Pass the desired value as a prop to the `Provider`.

3. **Consume the Context Value**: In the child component(s) that need access to the context value, use the `useContext` hook to consume the value. Pass the context object as an argument to the `useContext` hook, which returns the current context value.

4. **Update the Context Value (Optional)**: If the context value changes over time, you can update it from the parent component(s) using state or other means. The child components consuming the context value will be re-rendered automatically with the updated value.

Let's explore an example that demonstrates the usage of the `useContext` hook in React.

## Example: User Context

In this example, we create a user context to store and share the user's name across multiple components.

```jsx
import React, { useContext } from 'react';

// Step 1: Create a Context
const UserContext = React.createContext();

const App = () => {
  return (
    // Step 2: Provide a Value
    <UserContext.Provider value="John">
      <HomePage />
    </UserContext.Provider>
  );
};

const HomePage = () => {
  // Step 3: Consume the Context Value
  const userName = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <UserProfile />
    </div>
  );
};

const UserProfile = () => {
  // Step 3: Consume the Context Value
  const userName = useContext(UserContext);

  return <p>Profile: {userName}</p>;
};
```

In this example:

* We import React and the `useContext` hook from the `react` package.
* We create a user context using `React.createContext()` and assign it to the `UserContext` variable.
* The `App` component wraps the `HomePage` component with the `UserContext.Provider` component. We pass the value "John" as the context value.
* The `HomePage` component consumes the context value by calling the `useContext` hook with the `UserContext`. It retrieves the user's name from the context and renders a welcome message.
* The `UserProfile` component also consumes the context value using the `useContext` hook and displays the user's name.
* Both the `HomePage` and `UserProfile` components can directly access the user's name without passing it through props.

By utilizing the `useContext` hook, we can consume and access values provided by a context in functional components. This allows for a cleaner and more efficient way of sharing data across components without the need for prop drilling.