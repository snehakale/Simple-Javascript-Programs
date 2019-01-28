// Function to display sample code for css property
function submitData() {
	var result = "";
	var name = document.getElementById("name").value;
	var city = document.getElementById("city").value;
	var room = document.getElementById("room-number").value;
	var checkInDate = document.getElementById("check-in-date").value;
	var checkOutDate = document.getElementById("check-out-date").value;
				
	// validations and output
	// name
	if(name == null|| name.length <= 0) {
		alert("Please Enter Valid Name");
		document.getElementById("name").focus();
		document.getElementById("name").value = "";
		return false;
	}
	else {
		result = result + "Name : " + name + "<br/>";
	}

	// city
	if(city != null && city.length > 0) {
		result = result + "City : " + city + "<br/>";
	}

	// room
	if(room != null && room.length > 0) {
		result = result + "Room Number : " + room + "<br/>";
	}
				
	// calculating difference
	var checkInDateTime = new Date(checkInDate);
	var checkOutDateTime = new Date(checkOutDate);

	// check-in-date
	if(checkInDate == null|| checkInDate.length <= 0) {
		alert("Please Enter Valid Check-in-date");
		document.getElementById("check-in-date").focus();
		document.getElementById("check-in-date").value = "";
		return false;
	}
	else {
		var checkindateoutput = (checkInDateTime.getMonth()+1) + "/"+ checkInDateTime.getDate() +"/"
								  + checkInDateTime.getFullYear(); 
		result = result + "Check-In-Date : " + checkindateoutput + "<br/>";
	}

	// check-out-date
	if(checkOutDate == null|| checkOutDate.length <= 0) {
		alert("Please Enter Valid Check-out-date");
		document.getElementById("check-out-date").focus();
		document.getElementById("check-out-date").value = "";
		return false;
	}
	else {
		var checkoutdateoutput = (checkOutDateTime.getMonth()+1) + "/"+ checkOutDateTime.getDate() +"/"
								  + checkOutDateTime.getFullYear(); 
		result = result + "Check-Out-Date : " + checkoutdateoutput ;
	}
				
	var oneDay = 24 * 60 * 60 * 1000;  // oneDay = hours * minutes * seconds * milliseconds
	var diff = 0;
	if(checkOutDateTime > checkInDateTime) {
		diff = Math.abs(((checkOutDateTime.getTime()) - (checkInDateTime.getTime())) / oneDay);
	}
				
	if(diff > 1) {
		result = result + "<br/><br/>";
		result = result + name + " Stayed for "+ diff + " days!!";
	}
	else if(diff == 1) {
		result = result + "<br/><br/>";
		result = result + name + " Stayed for "+ diff + " day!!";
	}
	else {
		result = result + "<br/><br/> ";
		result = result + "<span style='color:red'>Wrong Dates Entered!!</span>";
	}
				
	document.getElementById('modal').style.display = 'block';
	document.getElementById('modal-content').innerHTML = result;
}

// Function to close modal box
function closeModal() {
	document.getElementById('modal').style.display ='none';
}

// Function to close modal box if clicked anywhere
window.onclick = function(event) {
	var modal = document.getElementById('modal');
	if (event.target == modal) {
		modal.style.display = 'none';
	}
}	