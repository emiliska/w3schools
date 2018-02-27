var car = {
	type:"Dodge",
	model:"RAM 1500",
	color:"black",
	year:1998
	};

function talkAboutCars() {
			document.getElementById("trucks").innerHTML =
			 "I once had a " + car.year  + " "
					 + car.color + " " 
					 + car.type  + " " 
					 + car.model + ".";
			};
talkAboutCars();
