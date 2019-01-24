// function to validate form 
function validateForm() {
	// for name
	var name =  document.getElementById("name").value;
	var namePattern = /^[a-z A-Z]+$/;
				
	if(name != null) {
		if((name.length < 0) || (namePattern.test(name) == false)) {
			document.getElementById("name").focus();
			document.getElementById("name").value ="";
			alert("Enter a valid name!");
			return false;
		}
	}

	// for age
	var age =  document.getElementById("age").value;
	var agePattern = /^[0-9]+$/;

	if(age != null) {
		if(agePattern.test(age) == false) {
			document.getElementById("age").focus();
			document.getElementById("age").value ="";
			alert("Enter a valid age!");
			return false;
		}
		else if(age <= 0 || age > 50) {
			document.getElementById("age").focus();
			document.getElementById("age").value ="";
			alert("Enter a valid age between 1 to 50!");
			return false;
		}
	}

	// for address
	var address =  document.getElementById("address").value;
	var addressPattern = /^[a-z A-Z 0-9 \s \n , \.]+$/;
				
	if(address != null) {
		if((address.length < 0) || (addressPattern.test(address) == false)) {
			document.getElementById("address").focus();
			document.getElementById("address").value ="";
			alert("Enter a valid address!");
			return false;
		}
	}

	// for country
	var country =  document.getElementById("country").value;
	var countryPattern = /^[a-zA-Z]+$/;
				
	if(country != null) {
		if((country.length < 0) || (countryPattern.test(country) == false)) {
			document.getElementById("country").focus();
			document.getElementById("country").value ="";
			alert("Enter a valid country!");
			return false;
		}
	}

	// for languages
	var languages =  document.getElementById("languages").value;
	var languagesPattern = /^[a-z A-Z \s \n , \.]+$/;
				
	if(languages != null) {
		if((languages.length < 0) || (languagesPattern.test(languages) == false)) {
			document.getElementById("languages").focus();
			document.getElementById("languages").value ="";
			alert("Enter valid languages!");
			return false;
		}
	}

	// for Email
	var email =  document.getElementById("email").value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
	if(email != null) {
		if((email.length < 0) || (emailPattern.test(email) == false)) {
			document.getElementById("email").focus();
			document.getElementById("email").value ="";
			alert("Enter a valid Email!");
			return false;
		}	
	}

	// for password
	var password =  document.getElementById("password").value;
	var passwordPattern = /^[a-zA-Z0-9_@#$*]+$/;
	if(password != null) {
		if(passwordPattern.test(password) == false) {
			document.getElementById("password").focus();
			document.getElementById("password").value ="";
			alert("Enter a valid Password!");
			return false;
		}
		else if(password.length < 6 || password.length > 8) {
			document.getElementById("password").focus();
			document.getElementById("password").value ="";
			alert("Enter a valid Password with length between 5 to 8!");
			return false;
		}
	}

	return true;
}

// function to call form validation function
function callVaidateForm() {
	if(validateForm()) {
		alert("Form Validation Completed Successfully!");
		document.getElementById("name").value ="";
		document.getElementById("age").value ="";
		document.getElementById("address").value ="";
		document.getElementById("country").value ="";
		document.getElementById("languages").value ="";
		document.getElementById("email").value ="";
		document.getElementById("password").value ="";
	}
}
