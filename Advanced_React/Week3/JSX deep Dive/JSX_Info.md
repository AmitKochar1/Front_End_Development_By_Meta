Whats is Element?
 You also know that the final web pages that React produces are nothing more than pure HTML, CSS, and JavaScript. When react analyzes your rendering methods from all your components, it takes the whole JSX tree, starting from the root and creates an intermediary representation. This representation is essentially another tree similar to before, but where each node instead of being JSX is a plain object describing a component instance or dom node and its desired properties. This plane object is what React defines as an element. An element is just a way to represent the final HTML output as a plain object. It consists primarily of two attributes, type and props. Type defines the type of node such as a button and props encompasses all the properties the component receives in a single object.

What is component composition?
There are two main features that enable component composition; containment and specialization. Let's break down these two main features now starting with containment. 
Containment refers to the fact that some components don't know their children ahead of time.
Specialization defines components as being special cases of other components.