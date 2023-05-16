# React Functional Component Lifecycle

Functional components are a lightweight and concise way to define React components. With the introduction of React Hooks, functional components can also have lifecycle-like behavior. Let's explore the lifecycle of functional components with the use of hooks.

### Mounting Phase:

During the mounting phase, a functional component is being created and inserted into the DOM.

* `useEffect(() => {}, [])` : The useEffect hook with an empty dependency array serves a similar purpose to `componentDidMount`. It runs the effect function once after the component is mounted. 

Here's an example:

```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  // ...
}
```

### Updating Phase:

The updating phase occurs when a functional component is re-rendered due to changes in its props or state.

* `useEffect(() => {})`: The `useEffect` hook without a dependency array runs the effect function after every render. It can be used to handle updates in functional components. 

Here's an example:

```jsx
import React, { useEffect } from 'react';

function ExampleComponent(props) {
  useEffect(() => {
    console.log('Component updated');
  });
  // ...
}
```

* `useEffect(() => {}, [dependency])`: By providing a dependency array to the useEffect hook, it allows you to specify dependencies that trigger the effect when they change. This can be used to control the effect's behavior on specific updates. 

Here's an example:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  // ...
}
```

### Unmounting Phase:

The unmounting phase occurs when a functional component is being removed from the DOM.

* `useEffect(() => {})` with cleanup: You can return a cleanup function from the effect function to handle cleanup tasks when the component is unmounted.

Here's an example:

```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);
  // ...
}
```

These examples demonstrate how you can utilize hooks in functional components to achieve similar lifecycle behavior as class components.

Please note that functional components with hooks provide a more concise and flexible approach to handling component lifecycles. The examples above showcase some common scenarios, but there are many more possibilities with hooks.
