var x=5;
var y=4;
var result="";
// arithmetic operators
function operatorFn1() {
	x=5; y=4; result="";
	result= "x="+ x +" y="+ y +"<br/> ";
	result = result + "(x+y) ="+ (x+y) + "<br/>";
	result = result + "(x-y) ="+ (x-y) + "<br/>";
	result = result + "(x*y) ="+ (x*y) + "<br/>";
	result = result + "(x/y) ="+ (x/y) + "<br/>";
	result = result + "(x%y) ="+ (x%y) + "<br/>";
	result = result + "(x++) ="+ (x++) + "<br/>";
	result = result + "(y--) ="+ (--y);
	document.getElementById("demo1").innerHTML = result;
}

//assignment Opeartors
function operatorFn2() {
	x=5; y=4; result="";
	var temp=0;
	result= "x="+ x +" y="+ y;
	result = result + " temp="+ temp+ "<br />";
	result = result + "temp=y => temp="+ (temp=y) + "<br/>";
	result = result + "temp+= y => temp="+ (temp+=y) + "<br/>";
	result = result + "temp-= y => temp="+ (temp-=y) + "<br/>";
	result = result + "temp*= y => temp="+ (temp*=y) + "<br/>";
	result = result + "temp/= y => temp="+ (temp/=y) + "<br/>";
	result = result + "temp%= y => temp="+ (temp%=y) + "<br/>";
	document.getElementById("demo2").innerHTML = result;
}

// comparison Opeartors
function operatorFn3() {
	x=5; y=4; result="";
	var temp='5';
	result= "x="+ x +" y="+ y;
	result = result +" temp="+ temp+ "<br />";
	result = result + "x==temp "+ (x==temp) + "<br/>";
	result = result + "temp===x "+ (temp===x) + "<br/>";
	result = result + "x!=y "+ (x!=y) + "<br/>";
	result = result + "x!==y "+ (x!==y) + "<br/>";
	result = result + "x > y "+ (x>y) + "<br/>";
	result = result + "x < y "+ (x<y) + "<br/>";
	result = result + "x >= 5 "+ (x>=5) + "<br/>";
	result = result + "x <= 40 "+ (x<=4) + "<br/>";
	document.getElementById("demo3").innerHTML = result;
}

// Logical Opeartors
function operatorFn4() {
	var a=true; var b=false; result="";
	result= "a="+ a +" b="+ b+" <br/>";
	result = result + "a && b = "+ (a&&b) + "<br/>";
	result = result + "a || b = "+ (a || b) + "<br/>";
	result = result + "!(a) = "+ !(a) + "<br/>";
	document.getElementById("demo4").innerHTML = result;
}

// Ternary (Conditional) Opeartor
function operatorFn5() {
	var age = 5; result="";
	var voteable = (age > 18) ? "Eligible to vote":"Not Eligible to vote";
	result = "age = 5"+"<br />";
	result = result + "(age > 18) ? Eligible to vote:Not Eligible to vote"+ "<br />";
	result = result + "Answer = "+voteable; 
	document.getElementById("demo5").innerHTML = result;
}

// typeof Opeartor
function operatorFn6() {
	result ="";
	result = "typeof John= " + typeof "John" + "<br />";
	result = result + "typeof 234= " + typeof 234 + "<br />";
	result = result + "typeof NaN= " + typeof NaN + "<br />";
	result = result + "typeof false= " + typeof false + "<br />";
	result = result + "typeof [3,4,5,6]= " + typeof [3,4,5,6] + "<br />";
	result = result + "typeof myVar= " + typeof myVar + "<br />";
	result = result + "typeof function(){}= " + typeof function(){};
	document.getElementById("demo6").innerHTML = result;
}