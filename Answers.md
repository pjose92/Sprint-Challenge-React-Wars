# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a UI library built in JavaScript. React has its own virtual DOM (ReactDOM) and does its operations on it. Late it injects the final result to the actual DOM through an anchor point such as #root. React is powerful, it responds faster to the data changes in applications state and updates it individual components.

1. What does it mean to think in react?

it means that when we create components and designing our app flow, we need to consider React's principals. if a project starts to get bigger we need to consider breaking the components into smaller ones. 

1. Describe state.

State is an object that determines how a component renders & behaves. State is what allows us to create components that are dynamic and interactive. 

1. Describe props.

Props(properties) are used to pass data from one component to another or a parent component to a child component. 

example 



1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side Effects are the things that happen outside of our components function. Anything that affects something outside of the function being executed. There's the effect hook were we can control the side effect with it. The effect hook takes two parameters, one is a callback function where the side effect runs. The second is a dependency array which will tell when the use effect was fired. An empty array will cause the effect to fire once when the component mounts, an array with data inside will make it so that the effect will fire first when it mounts and then again only after data is changed.  
