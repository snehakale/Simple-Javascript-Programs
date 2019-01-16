var result = "";

// if..elseif..else
function loopFn1() {
	var tech = 'html';
	result = "tech = html "+"<br />";
	if(tech == 'css') {
		result = result + "Technology = CSS "+ "<br />";
	} else if(tech == 'html') {
		result = result + "Technology = HTML" + "<br />";
	} else {
		result = result + "Technology Not Found!! = "+ "<br />";
	}
	document.getElementById("demo1").innerHTML = result
}

// switch case
function loopFn2() {
	var pet = "Dog";
	result ="";
	result ="Switch case for pet"+"<br />";
							   
	switch(pet) {
		case 'Cat':
			result = result + "Cat it is!" + "<br />";
			break;
		case 'Dog':
			result = result + "Dog it is!" + "<br />";
			break;
		case 'Horse':
			result = result + "Horse it is!" + "<br />";
			break;
		case 'Sheep':
			result = result + "Sheep it is!" + "<br />";
			break;
		default: 
			result = result + "No pet it is!" + "<br />";
			break;
	}
	document.getElementById("demo2").innerHTML = result;
}

// while Loop
function loopFn3() {
	result = "";
	var x = 1; var sum = 0; 
	while(x <= 10) {
		result = result + "value of x = "+ x +" ";
		sum = sum + x;
		result = result + "and sum = "+ sum + "<br />";
		x++;
	}
	document.getElementById("demo3").innerHTML = result;
}

// do.. while 
function loopFn4() {
	result = "";
	var age = 20; 
	do {
		result = result + "age ="+ age +" and it is eligible for voting <br/>";
		age = age - 1;
	} while (age >= 18);
	document.getElementById("demo4").innerHTML = result;
}

// for loop 
function loopFn5() {
	result = "";
	var fruits = ['Mango','Banana','Apple','Pineapple','Orange','Plum'];
	result = result + "Array = "+ fruits + "<br />";
	for(i = 0; i < fruits.length; i++) {
		result = result + "Fruit is = "+ fruits[i] + "<br />";
	}
	document.getElementById("demo5").innerHTML = result;
}