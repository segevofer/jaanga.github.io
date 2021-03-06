Jaanga Style Guide
===

## Coding Style Guidelines

Everything in Jaanga is written client-side JavaScript.

The code should be as close as possible to readable English. 

The coding style of an app should follow the style of the most-used library of the app.

Absolute URLs are recommended for items that would otherwise have issues with loading into Code-Edit-View.

In the instance of a [Three.js]( http://threejs.org ) script, the style generally follows [Mr.doob Coding Style]( https://github.com/mrdoob/three.js/wiki/Mr.doob%27s-Code-Style%E2%84%A2 ).

* Code generally follows the [Three.js examples]( http://mrdoob.github.io/three.js/examples/ ) coding style more than the source code style
	* Descriptive, informative variable names
	* Functions are functions not variables
	* Uses init() and animate() functions
	* Loads libraries from GitHub via a CDN
	* No external js or css files other then standard Three.js files
	* You should be able to move from reading Mr.doob's examples to reading Jaanga examples with little or no hesitation
	* In other words, code for youngsters/oldsters/beginners
* Lots of white space
	* Good: x = 23 * y + 54 * z
	* Not so good: x=23*y+54*z
	* Remember: JavaScript is compiled on the fly: no longer need to worry about whitespace slowing things down
* Minimum notation or use of symbols
	* Good: y = Math.floor( x );
	* Not so good: y = ~~x;
* Everything in one file
	* No need to have multiple files open 
	* No need to keep looking all over the place 
* Emphasis on the use of one tool: JavaScript
	* The Document Object Model(DOM) is your friend
	* Use the DOM to add HTML and CSS to the document on the fly
* Very limited usage of libraries
	* No need to know Three.js and jQuery and whatever before you begin
	* Knowing some JavaScript and something about a single library should be good enough in most instances
* Lots of small apps
	* Not one big app
* Emphasis on astronomy, physics, math but not coding
	* We seek great visualizations not great code
	* The code is not there to impress programmers or to show off programming skills
		* Unless that skill is about making code simpler and easier to digest
	* The code must be easy to read so that the physics, math, engineering or whatever stands out not the techie bits
	* Typically you are looking at two screens or windows - one showing the simulation and the other showing the code
		* The task is to reduce the multi-tasking to a minimum
* Sharing is of the essence
	* Fork, edit/improve, share is the mantra
	* GitHub is the platform

### Various Other Coding Quirks

* CSS tags are in alphabetical order
* Latitude and longitude are always specified in this order
	* lat = 2 * x
	* lon = 3 * y
* X and y are always specified in this order
	* x = lon - 10;
	* y = lat + 5;
* Width and height are always specified in this order 
	* width = lon / 2
	* height = lat / 3
* Separation of 3D in-world code and 2D user interface code
	* All interaction with the Three.js code for 3D interaction is via embedded iframes
	* Allows parent window to use any of the many popular JavaScript libraries
	* Makes no attempt to turn Three.js code into, say, jQuery and ditto _vice versa_
* Takes as much advantage of the HTML 5 [Document Object Model (DOM)]( http://en.wikipedia.org/wiki/Document_Object_Model ) as possible
	* Example: `<tag id=thing >stuff</tag>`
		* 'thing' is taken as a global variable directly and immediately
		* `document.getElemenById` is never invoked
	* Implies no support for elderly browsers
		* OK since WebGL cannot run in elderly browsers
		* Follows the Mr.doob ethos of no nostalgia, remain calm and progress into the future ASAP
* Code is highly-risk taking
	* Example: Double quotes only used when absolutely necessary
		* The world: <html lang="en">
		* Us: <html lang=en >
	* Example: plays happily, willfully with untyped variables 
	* Example: see above / no support for elderly browsers
* Code is designed to be load or render on demand
	* In other words to load and display something ASAP
	* 'Just-in-time' library and data loading
* Code style
	* Generally follows ['MDCS']( https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2 ) 
	* As generous horizontally but much more greedy vertically
	* Also passes jsHint
* Code is designed to be seriously easy
	* Encourages engineers, architects and designers and non-professional programmers to add features
	* No need to know jQuery, Backbone, Angular. Get going if you only know a tiny bit of JavaScript
	* And do feel free to build a jQuery version...
* Content, appearance and behavior that are related are kept together
	* Every HTML file contains all its associated CSS, HTML data - as well as the JavaScript
	* No need to keep three files open. It's all in one file just in front of you
	* This is part of techniques that help you become more accustomed to the DOM
