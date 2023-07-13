# Q.4 Whats component? Types of component

In the context of web development, a component is a self-contained, reusable building block that encapsulates the structure, behavior, and presentation of a part of a user interface. Components are used to create modular and scalable web applications.

Components can be thought of as independent units that have their own functionality and styling. They can be composed and combined to build complex user interfaces. Each component may consist of HTML markup, CSS styles, and JavaScript code or logic that defines its behavior.

Here are some commonly used types of components:

1. Functional Components:
   - Also known as stateless components, these are simple JavaScript functions that return a React element (or JSX) representing the component's UI. They are primarily responsible for rendering the UI based on the input props they receive. Functional components do not have their own state and are typically used for presentational purposes.

2. Class Components:
   - Class components are JavaScript classes that extend the base `React.Component` class. They use inheritance and lifecycle methods to define the behavior and rendering of the component. Class components can have their own state and are commonly used when more complex logic or state management is required.

3. Presentational Components:
   - Presentational components, also known as dumb components, focus solely on the presentation of the UI. They receive data through props and render the UI accordingly. These components do not handle state or have any logic other than rendering the UI elements.

4. Container Components:
   - Container components, also known as smart components, are responsible for managing the application state and providing data and behavior to other components. They encapsulate the logic and handle data fetching, state updates, and interaction with other components. Container components often contain presentational components and pass data and callbacks to them.

5. Higher-Order Components (HOC):
   - Higher-Order Components are functions that take a component as an argument and return a new enhanced component. They are used to add additional functionality to existing components, such as handling authentication, data fetching, or rendering based on certain conditions. HOCs are a way to reuse and compose behavior across multiple components.

6. Functional Hooks (React Hooks):
   - With the introduction of React Hooks, functional components can now have their own state and lifecycle management. Hooks such as `useState`, `useEffect`, and `useContext` allow functional components to manage state and have lifecycle behavior similar to class components. Hooks provide a more concise and flexible way to handle state and side effects in functional components.

These are some of the common types of components used in web development. The choice of component type depends on the requirements of the application and the specific framework or library being used, such as React.