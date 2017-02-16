function enterBridge() {

	if (powerOn.toggle == 0) {
	
	description = 
		"You find yourself on a dimly lit spaceship and can see a small sign hanging above an "+
		"entrance to another room. "+
		"You can just barely make out the sign, it says '<a href='#' onclick='enterEngine()'>Engine Room</a>'.";
	} else {
	
	description = 
		"The spaceship is now brightly lit up and you can see other entrances, "+
		"back to the <a href='#' onclick='enterEngine()'>engine room</a>, "+
		"another entrance to the <a href='#' onclick='placeholder()'>locker room</a> and one more that leads to the "+
		"<a href='#' onclick='placeholder()'>escape pod bay</a>";
	}
		roomDesc = document.getElementById('RoomDesc');
		roomDesc.innerHTML = description;


}

function enterEngine() {

	description = 
		"You enter the engine room and find a button that turns on the <a href='#' onclick='powerOn.press()'>emergency power</a>. "+
		"There is only one exit in this room, back to the <a href='#' onclick='enterBridge()'>bridge</a>";
		
	roomDesc = document.getElementById('RoomDesc');
	roomDesc.innerHTML = description;

}

var powerOn = {

	toggle: 0,
	
	press: function() {
	
		powerOn.toggle = 1,
		
		console.log(powerOn.toggle)
	
	}

}

function placeholder() {

	console.log('this has not been implemented yet');

}