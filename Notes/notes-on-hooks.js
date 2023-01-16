/*


#hooks 
-> useState
-> useEffect
-> useContext
-> useReducer 
-> useCallBack
-> useMemo
-> useRef
-> useImperativeHandle


# RULES OF HOOKS 
>>  1.1 Only call react hooks in react functions
>>  1.2 Custom hooks 
>>  2.1 Only call React Hooks at the top level 
>>  3. In useEffect() - ALWAYS ADD everything you refer to inside of useEffect as a dependency unless there is a good reason not to. (eg - only call useEffect on initial state render)

# useEffect



#   useReducer
-> const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
>> useReducer is a good replacement of useState when you have two states that belong together and/or if you have state updates that depends on other state

>> useReducer just like useState returns 2 arrays. The function on the useReducer hook dispatches a new action(i.e a trigger an update of the state)
>> The action will be consumed by the first argument you pass to the useReducer

>> reducerFn --> (prevState, action) => newState 
>> A function that is triggered automatically once an action is dispatched   (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state

>> initialState - to set initial State
>> initFn - a function to set the initial state programmatically


# useCallback hook
->> useCallback is a hook that allows us to basically store a function across component executions.
>> So it basically allows us to tell React that we want to save a function and that this function should not be recreated with every execution.

? what useCallback does behind the scene
>> let obj1 = {}
->> undefined
>> let obj2={}
->> undefined
>> obj1 === obj2
->> false
>> obj2 = obj1
->> {}
>> obj1 === obj2
->> true

->> Use callBack requires 2 arguments - 
>> The function which should not be recreated
>> An array of dependencies for the callback call. The dependencies are same as that for useEffect



#useRef, useImperativeHandle hooks and forwardRefs function
# useRef 
>> useRef creates a reference to the DOM element to access the values and methods of that element 
>> ref hook is supported on all built in html components
>> eg 
const inputRef = useRef()

useEffect(()=> {
  inputRef.current.focus() //got access to js focus method on HTML input element
},[])

return (
  <div>
    <input ref={inputRef} />
  </div>
)

# useImperativeHandle 
->-------------------------------------------
>> NOTE - Avoid using this approach at all cost
->-------------------------------------------
-> useImperativeHandle hook, has a strange name, is a hook that allows us to use Component or functionalities from inside this Component imperatively, which simply means not through the regular state props management, not by controlling the Component through state in the parent Component, but instead by directly calling or manipulating something in the Component programmatically.
-> Takes 2 arguments - refs, f()
IMPORTANT - in our Component function argument list, we have always just worked with props and in 99.9% of cases, that is all you will need. However, there technically also is a second argument you can accept and that's a ref.
>> ref - takes the reference
>> func - should return object. (Contain all the external data and bind it to internal func)

 //Focus points to an internal function activate
useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  //activate func
useImperativeHandle(ref, () => { 
   const activate = () => {
    inputRef.current.focus();
  };
  
#forwardRefs
>>In order to enable this second argument here, we need to export our Component function in a special way. We need to wrap it with something, and it's called forwardRef. 
>> And that is basically a function which we execute, to which we pass our Component function. 
>> So our Component function is now the first argument to forwardRef and forwardRef returns a React Component, so Input still is a React Component but a React Component that is capable of being bound to a ref. 

EXAMPLE
import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.emailIsValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        ref={inputRef}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

# useMemo Hook
-> useMemo basically allows you to memoize, so basically that means to store, any kind of data which you want to store, just like useCallback does it for functions.
>> Now, just like useCallback, useMemo wants a second argument which is an array of dependencies, basically to ensure that this stored value is updated whenever one of the values you're using in there changes.
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------
-------------------------------------------------

# importing React, whats called behind the scenes - 
# when we use jsx the following code is executed behind the scenes
return React.createElement(element, attribute arguments, content between opening and closing tags )

Example -
-> import React from 'react'
->import Expenses from './Expenses'
->
->JSX ->
->return (
->  <div>
->    <h2> Let's get started</h2>
->    <Expenses items={expenses} />
->  </div>
->)
->
->BEHIND THE SCENES ->
->return React.createElement(
->  'div',
->  {}, 
->  React.createElement('h2',{},'Let'\s get started')
->  React.createElement(Expenses, {items: expenses})
->  )

-> useState 
-> if your state update depends on the previous state, the following
>> useState gives access to a prevState variable which holds the previous state of the object we are updating 

 const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });


  const titleChange = e => {
    setUserInput((prevState)=>{
    return {...prevState, title: e.target.value}
  })
  }

  // if you are setting style prop as background-color which has a (-) dash in it, make sure to define it in either of the two ways
//-> {'background-color':'red'}
//->{backgroundColor:'red'}

*/
