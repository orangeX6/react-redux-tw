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


# ⎛⎝(•‿•)⎠⎞
# SECTION 5 - USING AN API WITH REACT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 59. App Overview
# 60. Project Setup
# 61. The Path Forward
# 62. Overview of HTTP Requests
# 63. Understanding the API
# 64. Making an HTTP Request
# 65. [Optional] Using Async:Await
# 66. Data Fetching Cleanup
# 67. Thinking About Data Flow
# 68. Child to Parent Communication
# 69. Implementing Child to Parent Communication
# Quiz 8: Upward Communication
# 70. Handling Form Submission
# 71. Handling Input Elements
# 72. [Optional] OK But Why?
# Coding Exercise 5: Creating a Controlled Input
# 73. Exercise Solution
# 74. Running the Search
# 75. Reminder on Async:Await
# 76. Communicating the List of Images Down
# 77. Building a List of Images
# 78. Handling List Updates
# 79. Notes on Keys
# 80. Displaying Images
# 81. A Touch of Styling
# 82. App Wrapup
_  ###############################################

# 67. Thinking About Data Flow
-> We use a prop system to communicate information from a parent to a child
-> Parent component 'App' can send the list of images down to the child component 'ImageList' using props

-> Whenever user presses the enter key in search bar we need to somehow take the searchTerm produced in child component 'Searchbar' and send it up to the parent component 'App'
! TOTALLY OPPOSITE OF THE PROP SYSTEM WE KNOW

# 68. CHILD TO PARENT COMMUNICATION
! Props system is only for parent to child component is NOT SUPER ACCURATE
* see image 
_ child-to-parent-communication
  
# 71. Handling Input Elements
  const handleFormSubmit = (event) => {
    event.preventDefault();
    //! NEVER EVER EVER DO THIS
    onSubmit(document.querySelector('input').value);
  };

 ! Don't try to get a value out of an input using a query selector 
 >> The way React handles form elements (text, input, checkboxes, radio buttons, etc) is a little weird

 * SEE IMAGE 
 _ handling-text-inputs



# ⎛⎝(•‿•)⎠⎞
# SECTION 6 - HOW TO HANDLE FORMS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 83. App Overview
# 84. Initial Setup
# 85. State Location
# 86. Reminder on Event Handlers
# 87. Extra CSS
# 88. Receiving New Titles
# 89. Adding Styling
# 90. Updating State
# 91. Don't Mutate That State!
# 92. State Updates - Cheat Sheet
# 93. [Optional] Adding Elements to the Start or End
# Coding Exercise 6: Adding Elements
# 94. [Optional] Exercise Solution
# 95. [Optional] Inserting Elements
# Coding Exercise 7: Inserting Elements
# 96. [Optional] Exercise Solution
# 97. [Optional] Removing Elements
# Coding Exercise 8: Removing Elements
# 98. [Optional] Exercise Solution
# 99. [Optional] Modifying Elements
# 100. [Super Optional] Why the Special Syntax?
# Coding Exercise 9: Modifying Elements
# 101. [Optional] Exercise Solution
# 102. [Optional] Adding, Changing, or Removing Object Properties
# 103. Cheatsheet for State Changes
# 104. Adding a Book, For Real!
# 105. Generating Random ID's
# 106. Displaying the List
# 107. Deleting Records
# 108. Toggling Form Display
# 109. Default Form Values
# 110. Updating the Title
# 111. Closing the Form on Submit
# 112. A Better Solution!
# 113. Collapsing Two Handlers into One
# 114. Adding Images
_  ###############################################


# 90. Updating State
IMPORTANT
_ LEARN ABOUT THIS IN THE IMAGES IN arrayAndState Folder



# ⎛⎝(•‿•)⎠⎞
# SECTION 7 - DATA PERSISTENCE WITH API REQUESTS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 115. Adding Data Persistence
# 116. Server Setup
# 117. What Just Happened?
# 118. How the API Works
# 119. Introducing the REST Client
# 120. ECONNREFUSED 127.0.0.1:3001 Errors in VSCode
# 121. Using the REST Client
# 122. Creating a New Record
# 123. Fetching a List of Records
# 124. Introducing useEffect
# 125. useEffect in Action
# 126. More on useEffect
# Quiz 9: When Does it Run?
# 127. Updating a Record
# 128. Thinking About Updates
# 129. Deleting a Record
_  ###############################################




# ⎛⎝(•‿•)⎠⎞
# SECTION 8 - COMMUNICATION USING THE CONTEXT SYSTEM
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 130. Introducing Context
# 131. Context in Action
# 132. Changing Context Values
# 133. More on Changing Context
# 134. Application vs Component State
# 135. Refactoring to Use Context
# 136. Refactoring the App
# 137. Quick Note
# 138. Reminder on Sharing with Context
# 139. Props and Context Together
# 140. Last Bit of Refactoring
# 141. A Small Taste of Reusable Hooks
_  ###############################################

# 130. Introducing Context
! CONTEXT IS NOT A REPLACEMENT FOR PROPS
! CONTEXT IS NOT A REPLACEMENT FOR CENTRALIZED STATE STORES LIKE REDUX

_ CONTEXT BY ITSELF IS A COMMUNICATION CHANNEL. 
>> IT DOES'NT REALLY CARE ABOUT WHAT DATA YOU ARE SHARING OR HOW THAT DATA IS ORGANIZED
-> REDUX IS ALL ABOUT ORGANIZATION OF DATA
_ SO REDUX AND CONTEXT REALLY ARE DOING TWO DIFFERENT THINGS

_ SEE CONTEXT IMAGES FOLDER




# ⎛⎝(•‿•)⎠⎞
# SECTION 9 - DEEPER DIVE INTO HOOKS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 142. Return to useEffect
# 143. Quick Note
# 144. Understanding the Issue
# 145. Applying the Fix
# 146. ESLint is Good, but be Careful!
# 147. Stable References with useCallback
# 148. Fixing Bugs with useCallback
# Quiz 10: Fixing UseEffect Bugs
# 149. useEffect Cleanup Functions
# 150. The Purpose of Cleanup Functions
_  ###############################################





# ⎛⎝(•‿•)⎠⎞
# SECTION 10 - CUSTOM NAVIGATION AND ROUTING SYSTEMS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 151. Project Overview
# 152. Project Setup
# 153. Some Button Theory
# 154. Underlying Elements
# 155. The Children Prop
# 156. Props Design
# 157. Validating Props with PropTypes
# 158. PropTypes in Action
# 159. Introducing TailwindCSS
# 160. Installing Tailwind
# 161. How to use Tailwind
# 162. Review on Styling
# 163. The ClassNames Library
# 164. Building Some Variations
# 165. Finalizing the Variations
# 166. Using Icons in React Projects
# 167. Issues with Event Handlers
# 168. Passing Props Through
# 169. Handling the Special ClassName Case
_  ###############################################


# ⎛⎝(•‿•)⎠⎞
# SECTION 11 - MASTERING THE STATE DESIGN PROCESS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 170. Project Organization
# 171. Refactoring with Organization
# 172. Component Overview
# 173. Component Setup
# 174. Reminder on Building Lists
# 175. Quick Note
# 176. State Design Process Overview
# 177. Finding the Expanded Item
# 178. Conditional Rendering
# 179. Inline Event Handlers
# 180. Variation on Event Handlers
# 181. Conditional Icon Rendering
# 182. Displaying Icons
# 183. Adding Styling
# 184. Toggling Panel Collapse
# 185. Quick Note
# 186. [Optional] Delayed State Updates
# 187. [Optional] Functional State Updates
# Quiz 11: Conditional Rendering
# Coding Exercise 10: Event Handlers with Lists
# 188. Exercise Solution
_  ###############################################
*/
