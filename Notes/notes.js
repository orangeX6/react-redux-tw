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
_ Check useEffect images in notes




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

# 157. Validating Props with PropTypes
_ prop-types
-> Js Library to validate the props that get passed into your component
->If someone passes down the incorrect kind of value(number instead of a boolean), a warning will appear in console
-> Used to be very popular. Now Typescript does almost the same thing(and more)
* npm i prop-types

# 159. Introducing TailwindCSS
-> Components get harder to read
-> Tons of classNames to look upto apply any styling
-> Some normal CSS features don't work well with Tailwind
##########  WHY ???????? 
-> The className soup is going to force you to write smaller and more reusable components

# 160. Installing Tailwind
>> Tailwind releases new version extremely frequently
_ https://tailwindcss.com/docs/guides/create-react-app
_ https://tailwindcss.com/docs/installation/framework-guides


# 161. How to use Tailwind
_ Using TailWind
_ 1 Decide on a new styling rule you want to add
_ 2 Go to tailwindcss.com/docs
_ 3 Smash Ctrl+K as hard as possible (LOL)
_ 4 Search for your styling rule
_ 5 Add appropriate className to your elements


# 163. The ClassNames Library
_classnames
-> JS library for building up a 'className' string based on different values
-> Library is called 'classnames', but prop is 'className'
-> npmjs.com/package/classnames

# 166. Using Icons in React Projects
_ react icons
_ https://react-icons.github.io/react-icons/
* npm install react-icons --save
-> Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.


IMPORTANT
# 168 IMPORTANT 
# 168. Passing Props Through



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

# 180. Variation on Event Handlers
For anyone who is curious (as I was) how else you can save a reference to the index, I came up with three more ways:

1. using bind
2. using data attribute
3. returning a function
For example we have our handleClick defined like this:
const handleClick = (i, e) => {
       console.log(parseInt(e.target.dataset.index)
       console.log(i);
};
_ Using bind, data attribute
<div onClick={handleClick.bind(null, index)} data-index={index}>{item.label}</div>

_Returning a function:
const handleClick = (i) => {
     return () => console.log(i);
};
<div onClick={handleClick(index)}>{item.label}</div>

# 186. [Optional] Delayed State Updates
-> IN BROWSER DEV TOOLS IF WE GO TO INSPECT AND SELECT AN ELEMENT, WE CAN ACCESS THAT ELEMENT IS THE BROWSER CONSOLE USING $0
-> you can then use event handlers and much more stuff on it

_ $0
>> <div class="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer">The Raven<span class="text-2xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 8 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z"></path></svg></span></div>
_ $0.click()



# ⎛⎝(•‿•)⎠⎞
# SECTION 12 - MASTERING THE STATE DESIGN PROCESS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 189. Component Overview
# 190. Designing the Props
# 191. Component Creation
# 192. [Optional] More State Design
# 193. Finally... Implementation!
# 194. Reminder on Event Handlers in Maps
# 195. Dropdown as a Controlled Component
# 196. Controlled Component Implementation
# 197. Existence Check Helper
# 198. Community Convention with Props Names
# Coding Exercise 11: Form Controls - Prop Naming Convention
# 199. Exercise Solution
# 200. Adding Styling
# 201. The Panel Component
# 202. Creating the Reusable Panel
# 203. A Challenging Extra Feature
# 204. Document-Wide Click Handlers
# 205. Event Capture and Bubbling
# 206. Putting it All Together
# 207. Why a Capture Phase Handler?
# 208. Reminder on the useEffect Function
# 209. Reminder on useEffect Cleanup
# 210. Issues with Element References
# 211. useRef in Action
# 212. Checking Click Location

_  ###############################################
# 207. Why a Capture Phase Handler?
IMPORTANT
_ check s12 images, and rewatch video when in doubt
_ performance.now() 
! to debug such an error
-> CHECK DROPDOWN.JS
>> In devtools - (Applied an capture phase event listener)
const dropdown = document.querySelector('.w-48')
const handleClick = (e)=> {
    window.timeThree = performance.now()
    if(dropdown.contains(e.target)) {
        console.log('Inside dropdown')
    } else {
        console.log('OUTSIDE Dropdown')
    }
}

document.addEventListener('click',handleClick,true)

2VM12954:4 Inside dropdown

IMPORTANT
->logging out time taken by each phase
window.timeOne
50508.80000001192
window.timeTwo
50509.5
window.timeThree
50508.5




# ⎛⎝(•‿•)⎠⎞
# SECTION 13 - MAKING NAVIGATION REUSABLE
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 213. Traditional Browser Navigation
# 214. Theory of Navigation in React
# 215. Extracting the DropdownPage
# 216. Answering Critical Questions
# 217. The PushState Function
# 218. Handling Link Clicks
# 219. Handling Back:Forward Buttons
# 220. Navigation Context
# 221. Listening to Forward and Back Clicks
# 222. Programmatic Navigation
# 223. A Link Component
# 224. A Route Component
# 225. Handling Control and Command Keys
# 226. Link Styling
# 227. Custom Navigation Hook
# 228. Adding a Sidebar Component
# 229. Highlighting the Active Link
# 230. Navigation Wrapup
_  ###############################################

# 214. Theory of Navigation in React
-> User types our address in 
  _ Always send back the same index.html file
  * Create React App already does this
  _ When app loads up, look at address bar and use it to decide what content to show
  >> how do we look at the address bar?
  * using window.location
  >>which part of it do we care about?
  * We only care about path  

-> User clicks a link or presses 'back' button
  _ Stop the browser's default page-switching behavior!
  -> USER CLICKING ON A LINK
  * location.pathname
  * history.pushState({}, '', '/pathname')
  NOTE - WHENEVER WE ARE AT AN ADDRESS WHICH WAS ADDED WITH pushState, THERE IS NO FULL PAGE REFRESH 

  -> USER CLICKING ON FORWARD AND BACK BUTTON
  # using popState event
  # Window emits a 'popstate' event if the user current url was added by 'pushState'
  * window.addEventListener('popstate', ()=>console.log('Im at', window.location.pathname))


  _ Figure out where the user was trying to go
  _ Update content on the screen to trick the user into thinking they swapped pages
  _ Update the address bar to trick user into thinking they swapped pages 

  NOTE - CALLING pushState DOES NOT TRIGGER A POPSTATE EVENT, SO WE HAVE TO UPDATE CURRENT PATH FOR THAT
  SO BASICALLY WE NEED TO 
  >> call pushState to update address bar
  >> update currentPath state 


# 222. Programmatic Navigation
_ Automatically navigate the user from code. For example bank apps logging out i.e. navigating you to homepage in case of inactivity





# ⎛⎝(•‿•)⎠⎞
# SECTION 14 - CREATING PORTALS WITH REACT DOM
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 231. Modal Component Overview
# 232. Toggling Visibility
# 233. At First Glance, Easy!
# 234. We're Lucky it Works At All!
# 235. Fixing the Modal with Portals
# 236. Closing the Modal
# 237. Customizing the Modal
# 238. Additional Styling
# 239. One Small Bug
# 240. Modal Wrapup
_  ###############################################
# 234. We're Lucky it Works At All!
 _ Correctly displaying a Modal is Hard
 -> The background of the modal needs to cover the entire screen
 -> The modal needs to cover up all existing content

[...document.querySelectorAll('*')].filter((el)=> !['','static'].includes(el.style.position))

[...document.querySelectorAll('*')].filter((el)=> el.style.position)

[...document.querySelectorAll('*')].map((el)=> el.style.position).filter(el=>el!=='')


# ⎛⎝(•‿•)⎠⎞
# SECTION 15 - MAKE A FEATURE-FULL DATA TABLE!
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 241. Creating a Reusable table
# 242. Communicating Data to the Table
# 243. Reminder on Table HTML Structure
# 244. Building the Rows
# 245. Better Styling
# 246. Done! But It's Not Reusable
# 247. Here's the Idea
# 248. Dynamic Table Headers
# 249. Rendering Individual Cells
# 250. Fixed Cell Values
# 251. Nested Maps
# 252. Fixing the Color
# 253. Adding a Key Function
_  ###############################################


# ⎛⎝(•‿•)⎠⎞
# SECTION 16 - GETTING CLEVER WITH DATA SORTING
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 254. Adding Sorting to the Table
# 255. Reminder on Sorting in JavaScript
# 256. Sorting Strings
# 257. Sorting Objects
# 258. Object Sort Implementation
# 259. Reversing Sort Order
# 260. Optional Sorting
# 261. A Small Extra Feature
# 262. Customizing Header Cells
# 263. React Fragments
# 264. The Big Reveal
# 265. Adding SortableTable
# 266. Watching for Header Cell Clicks
# 267. Quick State Design
# 268. Adding Sort State
# 269. Yessssss, It Worked!
# 270. Determining Icon Set
# 271. Styling Header Cells
# 272. Resetting Sort Order
# 273. Table Wrapup
_  ###############################################

# 256. Sorting Strings
const data = ['t','A','a','B','b']
data.sort((a,b)=> a.localeCompare(b))


# 263. React Fragments
_ How fragments works ?
function Echo({children}){
  return children
}
<Echo key={column.label}>{column.header()}</Echo>;

_React provides this echo function by default and its called Fragment


import { Fragment } from 'react';
 <Fragment key={column.label}>{column.header()}</Fragment>;

# 265. Adding SortableTable
_ 1 Create Sortable Table. 
_ 2 Make sure TablePage shows SortableTable
_ 3 Add 'sortValue' functions to column config in TablePage.
_ 4 SortableTable should find column objects with 'sortValue' and add a 'header' function to them
_ 5 TH returned by the 'header' function should watch for click events
_ 6 When user clicks on TH, sort data and pass the result to Table



# ⎛⎝(•‿•)⎠⎞
# SECTION 17 - CUSTOM HOOKS IN DEPTH
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 274. Exploring Code Reuse
# 275. Revisiting Custom Hooks
# 276. Creating the Demo Component
# 277. Custom Hook Creation
# 278. Quick Note
# 279. Hook Creation Process in Depth
# 280. Making a Reusable Sorting Hook
_  ###############################################
# 277. Custom Hook Creation
 _ CounterPage
  ? count               -|        Seems kind of useful
  >> useEffect            |->       Maybe we should
  -> handleClick        -|           create a hook
  # JSX

NOTE STRATEGY FOR MAKING CUSTOM HOOKS 
_ 1 Find code in a component related to a single piece of state  
_ 2  Copy paste it all into a helper function
_ 3  Find all broken references
_ 4  TA-DAAAA, you now have a hook


IMPORTANT 
# HOOK CREATION PROCESS IN DEPTH
IMPORTANT 
-> BRUTE-FORCE HOOK CREATION
_ 1 Make a function 'useSomething'
_ 2 Find all non-JSX expressions that refer to 1-2 related pieces of state
_ 3 Cut them all out, paste them into 'useSomething'
_ 4 Find 'not defined' errors in your component
_ 5 In your hook, return an object that contains the variables the component needs
_ 6 In the component, call your hook. Destructure the properties the component needs
_ 7 Find 'not defined' errors in the hook. Pass the missing variables in as arguments to the hook
_ 8 Rename the hook to something more meaningful
_ 9 Rename returned properties to something more descriptive



# ⎛⎝(•‿•)⎠⎞
# SECTION 18 - INTO THE WORLD OF REDUCERS
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 281. App Overview
# 282. Adding the Form
# 283. More on the Form
# 284. useReducer in Action
# 285. Rules of Reducer Functions
# 286. Understanding Action Objects
# 287. Constant Action Types
# 288. Refactoring to a Switch
# 289. Adding New State Updates
# 290. A Few Design Considerations Around Reducers
# Quiz 12: A Few Questions on Reducers
# 291. Introducing Immer
# 292. Immer in Action
_  ###############################################
# 284. useReducer in Action
-> USE STATE VS USE REDUCERS
_ useState -> Absolutely fine hook to use whenever component needs state

_ useReducer
_ 1 Alternative to useState
_ 2 Produces state
_ 3 Changing this state makes component rerender
_ 4 Useful when you have several different closely-related pieces of state
_ 5 Useful when future state values depend on current state


# 291. Introducing Immer
_ Immer is a library that allows us to change how we write reducers
_ It allows us to write some code that directly modifies our state object

_ SEE IMMER FOLDER FOR EXAMPLE
* npm i immer

# 292. Immer in Action
>> use diffcheck to check difference b/w
>> CounterPageReducerWithoutImmer and CounterPage



# ⎛⎝(•‿•)⎠⎞
# SECTION 19 - DIVE INTO REDUX TOOLKIT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 293. Into the World of Redux
# 294. Redux vs Redux Toolkit
# 295. App Overview
# 296. The Path Forward
# 297. Implementation Time!
# 298. Understanding the Store
# 299. The Store's Initial State
# 300. Understanding Slices
# 301. Understanding Action Creators
# 302. Connecting React to Redux
# 303. Updating State from a Component
# 304. Accessing State in a Component
# 305. Removing Content
# 306. Practice Updating State!
# 307. Practice Accessing State!
# 308. Even More State Updating!
# 309. Resetting State
# 310. Multiple State Updates
# 311. Understanding Action Flow
# 312. Watching for Other Actions
# 313. Getting an Action Creator's Type
# 314. Manual Action Creation
# 315. File and Folder Structure
# 316. Refactoring the Project Structure
# 317. Link to Completed Project
_  ###############################################
# 293. Into the World of Redux
-> WHAT IS REDUX?
_ Redux is a library for managing state using the same techniques as useReducer
_ State objects are usually more complicated than useReducers

# 295. App Overview
* https://codesandbox.io/s/rtk-360ssw


# ⎛⎝(•‿•)⎠⎞
# SECTION 20 - MANAGING MULTIPLE SLICES WITH REDUX TOOLKIT
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 318. Project Overview
# 319. Adding Component Boilerplate
# 320. Thinking About Derived State
# 321. Thinking About Redux Design
# 322. Adding the Form Slice
# 323. Maintaining a Collection with a Slice
# 324. Creating the Store
# 325. Form Values to Update State
# 326. Receiving the Cost
# 327. Dispatching During the Form Submission
# 328. Awkward Double Keys
# 329. Listing the Records
# 330. Deleting Records
# 331. CSS File for Download
# 332. Adding Styling
# 333. Form Reset on Submission
# 334. Reminder on ExtraReducers
# 335. Adding a Searching Input
# 336. Derived State in useSelector
# 337. Total Car Cost
# 338. Highlighting Existing Cars
_  ###############################################



# ⎛⎝(•‿•)⎠⎞
# SECTION 21 - INTERACTING WITH API's USING ASYNC THUNK
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 339. App Overview
# 340. Adding a Few Dependencies
# 341. Initial App Boilerplate
# 342. API Server Setup
# 343. Component Files
# 344. Adding a Few Components
# 345. Creating the Redux Store
# 346. Thinking About Data Structuring
# 347. Reminder on Request Conventions
# 348. Data Fetching Techniques
# 349. Optional Async Thunks Section
# 350. Adding State for Data Loading
# 351. Understanding Async Thunks
# 352. Steps for Adding a Thunk
# 353. More on Adding Thunks
# 354. Wrapping up the Thunk
# 355. Using Loading State
# 356. Adding a Pause for Testing
# 357. Adding a Skeleton Loader
# 358. Animations with TailwindCSS
# 359. Rendering the List of Users
# 360. Creating New Users
# 361. Unexpected Loading State
# 362. Strategies for Fine-Grained Loading State
# 363. Local Fine-Grained Loading State
# 364. More on Loading State
# 365. Handling Errors with User Creation
# 366. Creating a Reusable Thunk Hook
# 367. Creating a Fetch-Aware Button Component
# 368. Better Skeleton Display
# 369. A Thunk to Delete a User
# 370. Updating the Slice
# 371. Refactoring the Component
# 372. Deleting the User
# 373. Fixing a Delete Error
# 374. Album Feature Overview
# 375. Additional Components
# 376. Adding the ExpandablePanel
# 377. Wrapping Up the ExpandablePanel
# 378. Adding the Albums Listing
_  ###############################################
# 340. Adding a Few Dependencies
* npm install @faker-js/faker @reduxjs/toolkit react-redux axios classnames json-server react-icons
* install tailwind
* https://tailwindcss.com/docs/guides/create-react-app


# 351. Understanding Async Thunks
_ SEE IMAGES 
-> When we create an async thunk it ll have the following three properties
_ fetchUsers.pending === 'users/fetch/pending'
_ fetchUsers.fulfilled === 'users/fetch/fulfilled'
_ fetchUsers.rejected === 'users/fetch/rejected'
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  return response.data;
});

# 363. Local Fine-Grained Loading State
! The js Promises rule is broken in the dispatch function
_ see 79 04 dispatch promises image
-> But we can fix this up a little by calling a function on here called unwrap
-> Unwrap is going to give us a brand new promise back, and the promise we get is going to follow the conventional rules.
* dispatch(fetchUsers())
*     .unwrap()
*     .then(() => console.log('SUCCESS'))
*     .catch(() => console.log('FAIL'));







# ⎛⎝(•‿•)⎠⎞
# SECTION 21 - INTERACTING WITH API's USING ASYNC THUNK
##################################################
-> ###############################################
>> ###############################################
*  ###############################################
# 379. Skipping to this Section?
# 380. [Optional] Getting Caught Up
# 381. Introducing Redux Toolkit Query
# 382. Creating a RTK Query API
# 383. Creating an Endpoint
# 384. Using the Generated Hook
# 385. A Few Immediate Notes
# 386. Rendering the List
# 387. Changing Data with Mutations
# 388. Differences Between Queries and Mutations
# 389. Options for Refetching Data
# 390. Request De-Duplication
# 391. Some Internals of Redux Toolkit Query
# 392. Refetching with Tags
# 393. Fine-Grained Tag Validation
# 394. Styling Fixups
# 395. Adding a Pause for Testing
# 396. Implementing Delete Endpoints
# 397. Refactoring the List
# 398. Remove Implementation
# 399. Easy Tag Invalidation
# 400. Getting Clever with Cache Tags
# 401. More Clever Tag Implementation
# 402. Photos Feature Overview
# 403. Lots of Photos Setup!
# 404. Adding the Endpoints
# 405. Creating the Photo
# 406. Showing the List of Photos
# 407. Adding Mouse-Over Deletes
# 408. Adding Automatic Data Refetching
_  ###############################################

 
# 384. Using the Generated Hook
NOTE - STEP 7 FROM 81-08 - rtkq image
-> Whenever we create a piece of API a slice is created automatically, and that slice is gonna make a combined reducer. We have to connect that combined reducer upto all of the different reducers in the reducer object in configureStore
NOTE - ⬇   
_SEE FILE store/index.js
>> one way of doing it is 
reducer: {
  users:usersReducer
_ albums: albumsApi.reducer
}
_ and this will work because we have specified reducerPath as albums in albumsApi file
>> to void typos we ll instead use
reducer: {
  users:usersReducer
_ [albumsApi.reducerPath]: albumsApi.reducer
}
_ then we add middleware property to configureStore option obj
_then we need to call setupListeners(store.dispatch)


# 391. Some Internals of Redux Toolkit Query


*/
