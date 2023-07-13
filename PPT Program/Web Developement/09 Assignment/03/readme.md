# Q.3 How to pass data from one component to another component

In React, there are several ways to pass data from one component to another component, depending on the relationship between the components and the nature of the data being passed. Here are some common approaches:

1. Props:
   - The most common and straightforward way to pass data between components is by using props. In React, props (short for properties) are used to pass data from a parent component to its child component. The parent component sets the data as a prop when rendering the child component, and the child component receives and uses that data.

2. Context API:
   - The Context API provides a way to share data across multiple components without explicitly passing props through each level of the component tree. It allows you to create a context object that holds the shared data and make it accessible to any component within its subtree. Components can access the shared data using the `useContext` hook or by consuming the context using the `Context.Consumer` component.

3. State Management Libraries:
   - State management libraries like Redux, MobX, or Zustand provide centralized stores to manage and share data across components. These libraries allow you to define a global state that can be accessed and modified by any component in the application. Components can subscribe to the store to receive updates and dispatch actions to modify the state.

4. React Router Parameters:
   - If you need to pass data between components based on URL parameters, you can use React Router. React Router allows you to define dynamic routes with parameters that are passed as props to the rendered components. The components can access these parameters and use them as needed.

5. Event Emitters/Listeners:
   - If the components are not directly related or are far apart in the component tree, you can use an event emitter/listener pattern. You can create an event emitter in a common parent component and have the child components subscribe to specific events. When the data needs to be passed, the emitting component can trigger the event with the data, and the listening components can react to the event by receiving the data.

6. URL Query Parameters:
   - If the data is required to be persisted in the URL, you can use URL query parameters. Components can read the query parameters from the URL using libraries like `react-router-dom` and extract the data they need.

These are some common methods to pass data between components in React. The choice of method depends on factors such as component relationships, the scope of data sharing, and the complexity of the application.