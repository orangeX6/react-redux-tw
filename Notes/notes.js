/*

# ⎛⎝(•‿•)⎠⎞
# SECTION 2 -  CREATING CONTENT WITH JSX
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 10. Showing Basic Content
# 11. What is JSX?
# 12. Printing JavaScript Variables in JSX
# 13. Shorthand JS Expressions
# Quiz 2: Showing Javascript Values in JSX
# 14. Exercise Overview
# Coding Exercise 1: Quick Practice with JSX
# 15. Exercise Solution
# 16. Typical Component Layouts
# 17. Customizing Elements with Props
# 18. Converting HTML to JSX
# 19. Applying Styling in JSX
# Quiz 3: More on JSX
# Coding Exercise 2: Practice JSX Conversion
# 20. Exercise Solution
# 21. Extracting Components
# 22. Module Systems Overview
# Quiz 4: Imports and Exports
# 23. Cheatsheet for JSX
_  ###############################################

# 10 Showing basic content 
* 1 Import React and ReactDOM libs
>> import React from 'react';
>> import ReactDOM from 'react-dom/client';

-> React -> Library that defines what a component is and how multiple components work together
-> ReactDOM -> Library that knows how to get a component to show up in the browser
_ The idea here is that the React authors wanted to eventually use react in multiple different environments, not only inside the browser, but on mobile devices as well.
-> So they created a base library called React that knows what a component is, and then they make separate libraries. 
_They'll allow you to show components in these different environments, like inside of a browser, as is the case with React DOM or on a mobile device, as is the case with another library called React Native.

* 2 Get a reference to the div with ID root
const el = document.getElementById('root');

* 3 Tell React to take control of that element
const root = ReactDOM.createRoot(el);

* 4 Create a component
function App() {
  return <h1>Hi there!</h1>;
}
* 5 Show the component on the screen
root.render(<App />);


_ https://babeljs.io/repl

<div>
	<h1>Hi there!</h1>
  	<ul>
      <li>Red</li>
      <li>Green</li>
      <li>Blue</li>
  	</ul>
</div>
>> Typing the following jsx returns the JS below
*/
'use strict';
/*#__PURE__*/ React.createElement(
  'div',
  null,
  /*#__PURE__*/ React.createElement('h1', null, 'Hi there!'),
  /*#__PURE__*/ React.createElement(
    'ul',
    null,
    /*#__PURE__*/ React.createElement('li', null, 'Red'),
    /*#__PURE__*/ React.createElement('li', null, 'Green'),
    /*#__PURE__*/ React.createElement('li', null, 'Blue')
  )
);
/*

# 17. Customizing Elements with Props
_ Props can refer to a variable using the curly braces syntax
_ Props dont have to be defined as variables
*    <input
*      type="number"
*      min={5}
*      max={10}
*      list={[1, 2, 3]}
*      style={{ color: 'red' }}
*      alt={message}
*    />
_ String - wrap with double quotes
_ Number - Wrap with curly braces
_ Arrays - Wrap with curly braces
_ Objects - Wrap with curly braces
_ Variables - Wrap with curly braces

-> const config = {color:'red'}
! Trying to display an object does not work
! <h1>{config}</h1>
* Trying to provide an object as a prop DOES WORK
* <input abc={config} />

# 18. Converting HTML to JSX
>> Names/Values of attributes that you provide to elements in HTML are slightly different when writing JSX
-> See image converting-html-to-jsx.png



# ⎛⎝(•‿•)⎠⎞
# SECTION 3 - BUILDING WITH REUSABLE COMPONENTS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 24. Project Overview
# 25. Creating Core Components
# 26. Introducing the Props System
# 27. Picturing the Movement of Data
# 28. Adding Props
# 29. Using Argument Destructuring
# Coding Exercise 3: Practice with Props
# 30. Exercise Solution
# 31. The React Developer Tools
# 32. The Most Common Props Mistake
# Quiz 5: Communicating With Props
# 33. Images for the App
# 34. Including Images
# 35. Handling Image Accessibility
# 36. Review on how CSS Works
# 37. Adding CSS Libraries with NPM
# 38. A Big Pile of HTML!
# 39. Last Bit of Styling
_  ###############################################

# 26. Introducing the Props System
-> Communicate with Props
>> 1  Add attributes to JSX Element
>> 2  React collects the attributes and puts them in an object
>> 3  Props objects shows up as the first argument to the child component function
>> 4  We use the props however we wish

-> Parent component
function App(){
  return <Child color='red'/>
}
      ⬇️ Props Object {color:'red'}
-> Child Component
function Child(props){
  return <div>{props.color}</div>
}


# 33. Images for the App
_ When we are importing a js file, we do not put a file extension
-> But if we are adding an import for a image or any non js file, we have to add an extension for example - 
* import AlexaImage from './images/alexa.png'


-> import AlexaImage from './images/alexa.png';
-> import SiriImage from './images/siri.png';
-> console.log(AlexaImage);
-> console.log(SiriImage);

_ the images that we are trying to console.log right now are going to be served slightly differently by the development server, depending upon how large the image is.
-> If our image is less than 10,000 bytes or about 9.7 kilobytes, then the images raw data is taken. It is converted into a format called base64. And that string representing the entire image.
-> So the image, all the pixels, all the colors, all the stuff related to the image gets placed as a single string into our JavaScript file.
>> If the image is larger than 9.7 kilobytes, then it gets treated as a separate file and it will be served up as a separate file by the development server. 
_ So that is why we see two very different looking console logs here.
_ See image s03/including-images.jpg




# ⎛⎝(•‿•)⎠⎞
# SECTION 4 - STATE: HOW TO CHANGE YOUR APP
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 40. App Overview
# 41. Initial App Setup
# 42. Introducing the Event System
# 43. Events in Detail
# 44. Variations on Event Handlers
# Quiz 6: Quiz on Events
# Coding Exercise 4: Exercise with Events
# 45. Exercise Solution
# 46. Introducing the State System
# 47. More on State
# 48. Understanding the Re-Rendering Process
# Quiz 7: Got These Five Points?
# 49. Why Array Destructuring?
# 50. Back to the App
# 51. Picking a Random Element
# 52. List Building in React
# 53. Images for the App
# 54. Loading and Showing SVGs
# 55. Increasing Image Size
# 56. Adding Custom CSS
# 57. Finalizing Styling
# 58. App Wrapup and Review
_  ###############################################

# 47. More on State
_ Data that changes as the user interacts with our app
_ When this data changes, React will update content on the screen automatically
>> This is one and only way we can change what content React shows
* Even other libs that appear to update content use the state system behind the scenes



*/
