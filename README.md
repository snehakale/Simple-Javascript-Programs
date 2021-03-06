## Project Title
**Simple JavaScript Programs**

This project contains few programs practising on JavaScript concepts such as Loops, Operators, Functions, Forms, Event Handling etc. This project also uses HTML and CSS for UI.

## Pre-Requisites and Installation
1. Download / Clone the given Github Project.
2. Unzip the folders and files.
3. Change the path values in all ***.html** files at the places of **YOUR_PATH** as per the following:
`<link rel="stylesheet" type="text/css" href="YOUR_PATH/css/style.css">` and
`<script type="text/javascript" src="YOUR_PATH/js/....js">`
4. To run the programs, run the ***.html** files from **html** folder.
5. To run the program for Maps demo, Change the Google Maps API key value in the mapDemo.html file at the place of Google_API_Key in the following.
`<script async defer
            src="https://maps.googleapis.com/maps/api/js?key=Google_API_Key&v=3&callback=initMap">
        </script>`
  Check out this link to [Get API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) and after generating an API key, set the credentials including *HTTP Referrers*.
  For Example: `__file_url__//....Path..../mapDemo.html`

## Code Examples
**1. style.css :**
This file contains rules for different selectors in order to display stylized html pages.
For Example : `table {
	border-collapse: collapse;
	width: 70%;
	.....
}`

**2. loopDemo.html :**
This file contains HTML code to display the results after execution of conditional statements and loops using tabular format.
For Example : `... <tr>
				<td>
					<button id="element2" onclick="loopFn2();">switch.. ase</button>
				</td>....`

**3. loopDemo.js :**
This file contains a JavaScript code for different conditional statements and loops.
For Example : `switch(pet){
					case 'Cat':
						result = result + "Cat it is!" + "<br />";
						break; ....`

**4. functionsDemo.html :**
This file contains HTML code to display the results after execution of different types of functions in JavaScript.
For Example : `<td>
					<button id="element2" onclick="callDemoFunction2();">Function Pass by Parameters</button>
				</td>`

**5. functionDemo.js :**
This file contains a JavaScript code for different types of JavaScript functions.
For Example : `function demoFunction4(street, city, state) {
		this.street = street;
		this.city = city;
		....
	}`

**6. operatorDemo.html :**
This file contains HTML code to display results after execution of different operators in JavaScript.
For Example : `<td>
					<button id="element1" onclick="operatorFn1();">Arithmetic Operators</button> ..
				</td>`

**7. operatorDemo.js :**
This file contains a JavaScript code for different operators.
For Example : `function operatorFn1() {
	x=5; y=4; result="";
	result= "x="+ x +" y="+ y +"<br/> ";
	result = result + "(x+y) ="+ (x+y) + "<br/>";
	result = result + "(x-y) ="+ (x-y) + "<br/>";
	result = result + "(x*y) ="+ (x*y) + "<br/>";
	result = result + "(x/y) ="+ (x/y) + "<br/>"; ...`

**8. FormValidationDemo.html :**
This file contains HTML code to display form with different fields and calls a function on submission of a form to perform validations on form fields.
For Example : `.. <input type="submit" name="submit" id="submit" value="Register" onclick="callVaidateForm()" /> ..`

**9. FormValidationDemo.js :**
This file contains a JavaScript code to perform validations on form fields using regular experssions.
For Example : `var age =  document.getElementById("age").value;
	var agePattern = /^[0-9]+$/;
	if(age != null) {
		if(agePattern.test(age) == false) { ...`

**10. dateDemo.html :**
This file contains HTML code for dates demo program.
For Example : `<td>
					<input type = "date" name = "check-in-date" id = "check-in-date" />
				</td>..`

**11. dateDemo.js :**
This file contains a JavaScript code for dates demo program.
For Example : `var checkindateoutput = (checkInDateTime.getMonth()+1) + "/"+ checkInDateTime.getDate() +"/"
								  + checkInDateTime.getFullYear(); ..`

**12. mapDemo.html :**
This file contains HTML code for displaying Map for entered location.
For Example: `<td colspan="2">
					<button id="submit" name="submit" onclick="submitData()">Show Map</button>
				</td>...`

**13. mapDemo.js :**
This file contains a JavaScript code for loading Google Maps API and performing related functions.
For Example: `var initMap = function() {
	geocoder = new google.maps.Geocoder();
	map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 33.753746, lng: -84.386330}, ....`

**14. eventsDemo.html :**
This file contains HTML code to display results of events handling program.
For Example : `<input id="demo1" onkeypress="showKeyPrssed()" type="text" ...`

**15. eventsDemo.js :**
This file contains a JavaScript code to perform events handling program.
For Example : `function showKeyPrssed() {
   document.getElementById("span4").innerHTML = "Key has been presed in the input box!!";
}...`

**16. arraysDemo.html :**
This file contains HTML code to display arrays and array methods.
For Example : `<button type="button" name="button2" onclick="pushToArray()">
                  Click here to Push</button>`

**17. arraysDemo.js :**
This file contains a JavaScript code to perform arrays and array methods.
For Example : `function pushToArray() {
   fruits.push("Kiwi");
   document.getElementById("demo2").innerHTML = fruits;
}`

**18. stringDemo.html :**
This file contains HTML code to display strings and string methods.
For Example : `<button type="button" name="button5" onclick="callLastIndexOf()">
          	Click here to call lastIndexOf</button>`

**19. stringDemo.js :**
This file contains a JavaScript code to perform string methods.
For Example : `function callLastIndexOf() {
    var position2 = str.lastIndexOf("Banana");
    document.getElementById("demo5").innerHTML = position2;
}`

## References
1. [JavaScript if..else.. else if](https://www.w3schools.com/js/js_if_else.asp)
2. [JavaScript Switch statement](https://www.w3schools.com/js/js_switch.asp)
3. [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
4. [JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)
5. [JavaScript Do..While statement](https://www.w3schools.com/jsref/jsref_dowhile.asp)
6. [JavaScript Function Definitions](https://www.w3schools.com/js/js_function_definition.asp)
7. [JavaScript Function Invocation](https://www.w3schools.com/js/js_function_invocation.asp)
8. [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
9. [HTML forms](https://www.w3schools.com/html/html_forms.asp)
10. [JavaScript RegExp](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)
11. [JavaScript Dates](https://www.w3schools.com/js/js_dates.asp)
12. [Difference between dates in JavaScript](https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript)
13. [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
14. [JavaScript Events](https://www.w3schools.com/js/js_events.asp)
15. [JavaScript Methods](https://www.w3schools.com/js/js_array_methods.asp)
16. [CSS Tutorial](https://www.w3schools.com/css/)
17. [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
18. [JavaScript Arrays Methods](https://www.w3schools.com/js/js_arrays.asp)
19. [JavaScript Strings](https://www.w3schools.com/js/js_strings.asp)
20. [JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

## Author
Sneha Kale
