# Styled-Components:

> Styled-components is a popular library that allows you to write CSS code directly inside your React components using tagged template literals. It provides a way to encapsulate styles within components and create reusable styled elements.

## Implementing styled-components in React:

To use styled-components in a React application, you can follow these steps:

1. **Install styled-components**: Start by installing the `styled-components` library using a package manager like npm or yarn.

2. **Import styled-components**: Import the necessary functions and components from the styled-components library in your React components.

3. **Create styled components**: Use the `styled` function to create styled components. This function generates a new component with the specified styles.

4. **Apply styles**: Write CSS code directly inside the styled component's template literal, defining the styles for that component.

5. **Use styled components**: Use the created styled components in your React application, just like any other React component.

Let's explore an example that demonstrates the basics of using styled-components in a React application.

## Example: styled-components Basics

In this example, we have a simple Button component that is styled using styled-components.

1. **Install styled-components**: Install the styled-components library by running the following command:
    ```
    npm install styled-components
    ```
2. **Create styled components**: Create a styled component named StyledButton using the styled function from styled-components.
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

3. **Use styled components**: Use the `Button` component in other parts of your application, and the styles defined in the `StyledButton` component will be applied.
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
* Inside the template literal of the `StyledButton` component, we write CSS code that defines the styles for the button.
* We create a Button component that renders the `StyledButton` component, and the styles defined in the `StyledButton` component are applied to the rendered button element.
* In the `App` component, we use the `Button` component, and the styled button with its defined styles will be displayed.

By using styled-components in your React application, you can write and manage component-specific styles in a more intuitive and modular manner, making your codebase more maintainable and reusable.