//!///!///!//!///!///
/////////////////////  what to do/passback with CONTROLLER
/////DISPLAY ////
//////////////// shows/interacts with USER
///////////////

// controller is controller object, output is reference to output div
function View(controller, output) {

	// reference to controller
	this.controller = controller;

	// Get reference to class-level props/methods
	var self = this;

	// Draw the pet at index `index` into the jQuery DOM element `container`
	this.drawPetAtIndex = function (index, container) {
		// $('#adopt').off(); // This is how to remove all event listeners on adopt id
		// get the pet info from the controller
		var pet = this.controller.getPetByIndex(index);
		// empty out the existing container so we can rebuild it
		container.empty();
		// append the pet's name as a paragraph tag
		container.append("<p>" + pet.name + "</p>");
		// append the pet's hunger and boredom as a paragraph tag
		container.append(
			"<p>Food: " + pet.hunger + ", Joy: " + pet.boredom + "</p>"
		);

		// feed pet button
		// create button
		var feedButton = $('<button>Feed</button>');
		// When we click the button, feed the pet and refresh that pet's
		// DOM representation
		feedButton.click(function () {
			this.controller.feedPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));
		// BIND `this`, so that we have the correct reference when
		// the event listener is called

		//append the button to the container
		container.append(feedButton);

		//create play
		var playButton = $('<button>Play</button>');
		playButton.click(function () {
			this.controller.playWithPet(index);
			this.drawPetAtIndex(index, container);
		}.bind(this));
		container.append(playButton);
	}

	// Draw all of the pets (should probably just be called once)
	this.drawAllPets = function () {
		// get all of the pets
		var pets = this.controller.getAllPets();
		// for each pet
		for (var i = 0; i < pets.length; i++) {
			// create a new container
			var container = $('<div></div>');

			// draw that pet
			this.drawPetAtIndex(i, container);

			// append the container to the main div of all pets
			output.append(container);
		}
	}

	// DEBUG adding some pets for practice
	//ok this.controller.addPet("milo", "dog");
	//ok this.controller.addPet("juno", "pterydactyl");

	// Draw all of the pets when we instanciate the view
	this.drawAllPets();

	// Adopt button
	$('#adopt').on('click', function () {
		var name = $("#name").val();
		var species = $("#species").val();
		if (!name || !species) {
			alert("You must enter both name and species...");
		if (species === 'Bulbasaur'){
			species = species + $("images/1.png")
		}
		}
		else {
			self.controller.addPet(name, species);
			self.drawAllPets();
			// Refresh the web page to not show duplicate buttons
			location.reload();
		}
	});
}
