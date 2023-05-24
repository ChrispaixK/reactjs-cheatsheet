# CSS-in-JS:

> CSS-in-JS is an approach to styling in which CSS is written using JavaScript, typically in the form of JavaScript objects or tagged template literals. It allows for the creation of scoped styles that are tightly coupled with the components they are applied to.

# Implementing CSS-in-JS in React:

To use CSS-in-JS in a React application, you can follow these steps:

1. **Choose a CSS-in-JS Library**: There are several popular CSS-in-JS libraries available for React, such as styled-components, Emotion, or CSS Modules. Choose the library that best suits your needs.

2. **Install the CSS-in-JS Library**: Install the chosen CSS-in-JS library using a package manager like npm or yarn.

3. **Import the Library**: Import the necessary functions or components from the CSS-in-JS library in your React components.

4. **Write Styles**: Use the CSS-in-JS syntax provided by the library to define styles. This may involve writing JavaScript objects or using tagged template literals.

5. **Apply Styles**: Apply the styles to your React components by passing them as props or using the library's specific syntax.

Let's explore an example that demonstrates the basics of using CSS-in-JS in a React application.

## Example: CSS-in-JS Basics

In this example, we have a simple `Button` component that applies styles using CSS-in-JS.

1. **Choose a CSS-in-JS Library**: For this example, we will use the styled-components library.

2. **Install styled-components**: Install the `styled-components` library by running the following command:
    ```
    npm install styled-components
    ```

3. **Create a styled component**: Create a styled component using the styled function provided by styled-components.
    ```jsx
    // Button.js
    import React from 'react';
    import styled from 'styled-components';

    const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    `;

    const Button = () => {
    return <StyledButton>Click me</StyledButton>;
    };

    export default Button;
    ```

4. **Use the styled component**: Use the `Button` component in other parts of your application, and the styles defined in the `StyledButton` component will be applied.
    ```jsx
    // App.js
    import React from 'react';
    import Button from './Button';

    const App = () => {
    return (
        <div>
        <h1>Welcome to my app</h1>
        <Button />
        </div>
    );
    };

    export default App;
    ```

In this example:

* We import the `styled` function from `styled-components` and use it to create a styled component named `StyledButton`.
* Inside the tagged template literal of the `StyledButton` component, we write CSS code that defines the styles for the button.
* We create a `Button` component that renders the `StyledButton` component, and the styles defined in the `StyledButton` component are applied to the rendered button element.
* In the `App` component, we use the `Button` component, and the styled button with its defined styles will be displayed.

By using CSS-in-JS in your React application, you can write and manage component-specific styles in a more cohesive and maintainable way. The styles are scoped to the components they are applied to, reducing the chances of class name collisions and making it easier to understand and update the styles as needed.