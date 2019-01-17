// global variable
var result="";

// function call - pass by values
function demoFunction1( firstName, lastName ) {
	result ="Values passed are : First Name = "+ firstName +" ";
	result = result + "and Last Name ="+ lastName+ " ";
	document.getElementById("demo1").innerHTML = result;
}
						
// function to call demoFunction1 with pass by values
function callDemoFunction1() {
	// Function call, passby parameters
	demoFunction1("John", "Doe");
}

// Functon call - pass by parameters
function demoFunction2(personName) {
	result = "";
	result ="Name passed is: "+ personName;
	document.getElementById("demo2").innerHTML = result;
}

//function to call demoFunction2 with Values
function callDemoFunction2() {
	var name = prompt("Enter your name","Jane Doe");
	if(name) {
		if(confirm("Do you want to continue ?")) {
			demoFunction2(name);
		}
		else {
			alert("No Function Call");
		}
	}
	else {
		alert("Invalid name");
	}
}

// Anonymous Function
function demoFunction3() {
	var x = prompt("Enter a number","2");
	result = "";
				
	if(!(isNaN(x)) && (x > 0)) {
		var xSquare = function(y) {
			return (y * y);
		};
	
		result = "Square of "+ x + " is = "+ xSquare(x);
	}
	else {
		result ="Invalid Number";
	}
	document.getElementById("demo3").innerHTML = result;
}
			
// Using Function as a Constructor
function callDemoFunction4() {
	// Constructor
	function demoFunction4(street, city, state) {
		this.street = street;
		this.city = city;
		this.state = state;
	}

	// function call
	var address = new demoFunction4("Lathene view court", "Alpharetta", "Georgia");
	result ="";
	result = "Street = "+ address.street + "<br />";
	result = result + "City = "+ address.city + "<br />";
	result = result + "State = "+ address.state;
	document.getElementById("demo4").innerHTML = result;
}