// function to call for onclick event
function showDate() {
    document.getElementById("span1").innerHTML = Date();
}

// fuction to call for onchange event
function showSelected() {
    var val = document.getElementById("selectList").value;
    document.getElementById("span2").innerHTML = "Favorite pet animal = " + val;
}

// functions to call for onmuseover event
function mouseOver() {
    document.getElementById("span3").style.color = "#c17639";
}

// function to call for onmouseout event
function mouseOut() {
    document.getElementById("span3").style.color = "black";
}

//function to call for onkeypress event
function showKeyPrssed() {
   document.getElementById("span4").innerHTML = "Key has been presed in the input box!!";
}

// function to call for onfocus event
function showOnFocusColor() {
    document.getElementById("demo2").style.background = "#42e5f4";
}

// function to call for onblur event
function showOnBlurColor() {
    document.getElementById("demo3").style.background = "#f438d2";
}
