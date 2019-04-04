// String
var str1 = "I can eat Banana";

// function to calculate length
function calculateLength() {
   document.getElementById("demo1").innerHTML = str1.length;
}

// function to concat strings
var str2 = " and Banana."
var str = str1.concat(str2);
function concatStrings() {
   document.getElementById("demo2").innerHTML = str;
}

// function to search in the string
function callSearch() {
    var pos = str.search("Banana");
    document.getElementById("demo3").innerHTML = pos;
}

// function to call indexOf
function callIndexOf() {
    var position1 = str.indexOf("Banana");
    document.getElementById("demo4").innerHTML = position1;
}

// function to call lastIndexOf
function callLastIndexOf() {
    var position2 = str.lastIndexOf("Banana");
    document.getElementById("demo5").innerHTML = position2;
}

// function to call substrig
function callSubstring() {
    var txt1 = str.substring(10, 20);
    document.getElementById("demo6").innerHTML = txt1;
}

// function to call substr
function callSubstr() {
    var txt2 = str.substr(10, 6);
    document.getElementById("demo7").innerHTML = txt2;
}

// function to call slice
function callSlice() {
    var txt = str.slice(-7);
    document.getElementById("demo8").innerHTML = txt;
}

// function to call replace
function callReplace() {
    var newStr = str.replace("Banana", "Apple");
    document.getElementById("demo9").innerHTML = newStr;
}

// function to call Uppercase
function callUpperCase() {
    var word1 = str.toUpperCase();
    document.getElementById("demo10").innerHTML = word1;
}

// function to call Lowercase
function callLowerCase() {
    var word2 = str.toLowerCase();
    document.getElementById("demo11").innerHTML = word2;
}
