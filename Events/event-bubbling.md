# Event Bubbling in React
> Event bubbling is a mechanism in which an event that is triggered on a nested or child element propagates up the DOM tree, triggering event handlers on parent or ancestor elements. React follows the same event bubbling principle as the native DOM event system.

## Handling Event Bubbling in React:
To handle event bubbling in React, you can follow these steps:

1. ***Attach Event Handlers***: Attach event handlers to the appropriate elements within your components. React follows a naming convention where event names are written in camelCase, such as `onClick`, `onChange`, or `onSubmit`.

2. ***Define Event Handler Functions***: Define functions that will be called when the associated event is triggered. These functions can be declared within the component using arrow functions or class methods.

3. ***Access Event Information***: Event bubbling in React allows you to access event information and utilize it in event handler functions. The `event` object passed as an argument to the event handler contains details about the event, including the target element, event type, and other relevant information.

4. ***Handle Event in Parent Elements***: To handle events on parent or ancestor elements, assign event handlers to those elements, and React will handle event bubbling for you.

Let's explore an example that demonstrates event bubbling in React.

## Example: Event Bubbling

In this example, we have a parent component with nested child components. Each child component contains a button, and when the button is clicked, the event bubbles up to the parent component, triggering a parent event handler.

```jsx
import React from 'react';

class ParentComponent extends React.Component {
  handleButtonClick = () => {
    console.log('Button Clicked');
  };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <ChildComponent onClick={this.handleButtonClick} />
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h3>Child Component</h3>
        <button onClick={this.props.onClick}>Click me</button>
      </div>
    );
  }
}
```

In this example:

* We have two components: `ParentComponent` and `ChildComponent`.
* The `ParentComponent` renders the parent element that includes the child component.
* The `ChildComponent` contains a button element with an `onClick` event handler assigned to the `this.props.onClick` function. This function is passed as a prop from the parent component.
* When the button is clicked, the `onClick` event is triggered on the child component, and the event bubbles up to the parent component.
* In the parent component, the `handleButtonClick` function is called when the event reaches the parent component, and it logs "Button Clicked" to the console.

When you click the button in the child component, the event bubbles up to the parent component, and the parent event handler logs "Button Clicked" to the console. This demonstrates how event bubbling allows you to handle events in parent components triggered by actions on their nested or child components.

By utilizing event bubbling in React, you can handle events at higher levels in the component tree, enabling you to manage and respond to events from multiple child components in a centralized manner.