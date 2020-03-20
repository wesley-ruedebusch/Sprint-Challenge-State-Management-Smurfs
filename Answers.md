1. What problem does the context API help solve?
This solves having to use prop drilling.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions- functions that dispatch the type of payloads to send, along to your store.
Reducers- hold the switch statement that takes and actions type and specifys a  state change in he response to the called case.
Store- Global place object that holds state where every file in the app has access to state.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is on a global level while Component state is just locally.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
It is a middleman program that lets once call action creators that return a function instead on the action object.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux because it has been the most widely used which means the most youtube videos when you get stuck. It is also good at it job of being a REDUCER that shrinks the project size and limits redundancy.