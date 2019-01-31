// Function to initialize a map 
var geocoder;
var map;
var marker;

var initMap = function() {
	geocoder = new google.maps.Geocoder();
	map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 33.753746, lng: -84.386330},
			zoom: 14,
			mapTypeControl: false
		});
	};

// Function to validate data and load a map
function submitData() {
	var address = document.getElementById("address").value;
	if(address == null || address.length <= 0 ) {
		alert("Please Enter valid City / Address value");
		document.getElementById("address").focus();
		document.getElementById("address").value = "";
		return false;
	}
	else {
		loadMap(address);
	}
}

// Function to load map and marker as per given address
function loadMap(address) {
	// hide previous marker
	if(marker) {
		hideMarker();	
	}
	// geocode 
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == 'OK') {
			map.setCenter(results[0].geometry.location);
			marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: address,
				animation: google.maps.Animation.DROP
			});
						
			document.getElementById('map-div').style.display = 'block';
		}
		else {
			alert('Geocode was not successful for the following reason: ' + status);
			document.getElementById("address").focus();
			document.getElementById("address").value = "";
		}
	});
}

// function to hide marker on blur event
function hideMarker() {
	if(marker) {
		marker.setMap(null);
	}
}