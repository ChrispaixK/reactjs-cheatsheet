# React Router in React:

> React Router is a popular library for handling routing in React applications. It allows you to define routes and map them to different components, enabling navigation and rendering of specific components based on the current URL.

## React Router Basics:

To use React Router in your React application, you can follow these steps:

1. **Install React Router**: Start by installing React Router using a package manager like npm or yarn. You'll need to install both `react-router-dom` and `history` packages.

2. **Set Up Router Component**: Wrap your application with a `Router` component provided by React Router. This component manages the routing functionality for your application.

3. **Define Routes**: Use the `Route` component to define routes in your application. Each Route component maps a specific path to a corresponding component.

4. **Render Components**: Use the `Switch` component to render the appropriate component based on the current URL. The `Switch` component ensures that only one route is rendered at a time.

5. **Navigate Between Routes**: Use the `Link` component to create links that navigate between different routes in your application. This component provides a declarative way to navigate without triggering a full page reload.

Let's explore an example that demonstrates the basics of using React Router.

## Example: React Router Basics

In this example, we create a simple application with two pages: a home page and an about page.

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

In this example:

* We import React and the necessary components from `react-router-dom`, including `BrowserRouter`, `Switch`, `Route`, and `Link`.
* The `Home` component and `About` component are defined as functional components representing the home page and about page, respectively.
* The `App` component is the main component of our application.
* Inside the `App` component, we wrap our application with the `Router` component provided by React Router. This sets up the routing functionality.
* We define the navigation links using the `Link` component. The `to` prop specifies the path to navigate to when the link is clicked.
* The `Switch` component is used to render the appropriate component based on the current URL. It ensures that only one route is rendered at a time.
* The `Route` components define the routes in our application. The `exact` prop ensures that the route is matched only when the path is an exact match.
* When the user clicks on the links, the corresponding components are rendered based on the specified routes.
By following these steps and utilizing React Router, you can implement routing functionality in your React application, allowing users to navigate between different pages or components based on the current URL.