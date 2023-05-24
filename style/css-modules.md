# CSS Modules:

> CSS Modules is a popular approach for styling in React applications. It provides a way to locally scope CSS classes, preventing naming collisions and making it easier to manage styles within individual components.

## Implementing CSS Modules in React:

To use CSS Modules in a React application, you can follow these steps:

1. **Configure CSS Modules**: Set up your project to support CSS Modules. This typically involves configuring your build tool (such as webpack) to handle CSS Modules and their naming conventions.

2. **Create CSS Modules**: Instead of using regular CSS files, create CSS Modules files with the `.module.css` extension. Each CSS Module file will correspond to a specific component.

3. **Import and Apply Styles**: In your React components, import the CSS Module file and apply styles by using the generated unique class names as object properties.

4. **Use Styles in Components**: Use the imported styles to assign classes to elements or components, leveraging the locally scoped styles provided by CSS Modules.

Let's explore an example that demonstrates the basics of using CSS Modules in a React application.

## Example: CSS Modules Basics

In this example, we have a simple `Button` component that applies CSS styles using CSS Modules.

1. **Configure CSS Modules**: Ensure that your project is configured to support CSS Modules. This typically involves configuring your build tool or bundler to handle CSS Modules. Refer to your specific build tool's documentation for the necessary configuration.

2. **Create CSS Modules**: Create a CSS Modules file named `Button.module.css`.
    ```css
    /* Button.module.css */
    .button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }
    ```

3. **Import and Apply Styles**: In your `Button` component, import the CSS Module file and apply the styles.
    ```jsx
    // Button.js
    import React from 'react';
    import styles from './Button.module.css';

    const Button = () => {
    return <button className={styles.button}>Click me</button>;
    };

    export default Button;
    ```

4. **Use Styles in Components**: Use the `Button` component in other parts of your application, and the styles defined in the CSS Module will be applied.
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

* We create a CSS Module file named `Button.module.css` that defines the styles for the `Button` component.
* In the `Button` component, we import the styles from the CSS Module file using the `import` statement.
* We apply the styles by assigning the generated unique class name from the CSS Module as the `className` prop of the `button` element.
* In the `App` component, we use the `Button` component, and the styles defined in the CSS Module file will be applied.

By using CSS Modules in your React application, you can have locally scoped styles, avoid class name collisions, and make styling more modular and maintainable within individual components.