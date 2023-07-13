# Q.1 What are hooks in react? how to identify hooks?

Hooks are a feature introduced in React 16.8 that allow developers to use state and other React features in functional components. Prior to hooks, state management and lifecycle behavior were primarily handled by class-based components.

Hooks are identified by two characteristics:

1. Hook Functions: Hooks are functions provided by the React library that can be used within functional components. They are prefixed with the word "use" to indicate that they are hooks. For example, `useState`, `useEffect`, `useContext`, `useReducer`, etc., are some of the built-in hooks provided by React.

2. Rules of Hooks: Hooks follow specific rules defined by React. These rules enforce correct usage and ensure that hooks are called in the same order on every render. The rules include:
   - Hooks can only be called at the top level of a functional component or another custom hook. They cannot be called inside loops, conditions, or nested functions.
   - Hooks cannot be called from regular JavaScript functions. They can only be used within React components or other custom hooks.
   - Hooks should always be called in the same order. This allows React to maintain the association between hooks and their respective component instances.

To identify hooks in React code, look for function calls that start with the "use" prefix, such as `useEffect`, `useState`, or `useContext`. These function calls indicate the usage of hooks within a functional component.

Here's an example of a functional component that uses hooks:

```jsx
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
```

In the above code, `useState` is used to define and manage the state variable `count`, and `useEffect` is used to perform a side effect (updating the document title) based on the count state. These function calls indicate the usage of hooks in the functional component.