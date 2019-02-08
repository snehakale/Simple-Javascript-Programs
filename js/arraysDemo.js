// fruits Array
var fruits = ["Banana","Mango","Apple","Orange"];

// function to calculate length
function calculateLength() {
   document.getElementById("demo1").innerHTML = fruits.length;
}

// function to push array
function pushToArray() {
   fruits.push("Kiwi");
   document.getElementById("demo2").innerHTML = fruits;
}

// function to pop element from array
function popFromArray() {
    fruits.pop();
    document.getElementById("demo3").innerHTML = fruits;
}

var splicedFruits = fruits.slice();
splicedFruits.splice(2, 2, "Lemon");
// function to splice array
function callSpliceArray() {
    document.getElementById("demo4").innerHTML = splicedFruits;
}

var moreFruits = ["Coconut","Pineapple","Plum","Melon"];
var newFruits = splicedFruits.concat(moreFruits);
// function to concate Arrays
function callConcateArray() {
    document.getElementById("demo5").innerHTML = newFruits;
}

// function to slice Array
function callSliceArray() {
    var slicedArray = newFruits.slice(5);
    document.getElementById("demo6").innerHTML = slicedArray;
}
