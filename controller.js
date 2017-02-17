//!///!///!//!///!///
/////////////////////
//PASSES DATA //
////////////////
///////////////

function Controller(model) {
	//reference to model so we can update it and ask it questions
	this.model = model;

	//add new pet given name and species
	this.addPet = function (name, species) {
		//pass through data to the model 
		this.model.addPet(name, species);
		// Data was updated, so update storage
		this.model.updateAllPets();
	}

	//return pet at index[i]
	this.getPetByIndex = function (index) {
		return this.model.getPetByIndex(index);
	}

	//copy of the entire array of pets
	this.getAllPets = function () {
		return this.model.getAllPets();
	}

	//feed the pet at index[i]
	this.feedPet = function (index) {
		var pet = this.getPetByIndex(index);
		pet.hunger += 10;
		// Data was updated, so update storage
		this.model.updateAllPets();
	}

	// reduce the boredom of the pet at index[i]
	this.playWithPet = function (index) {
		var pet = this.getPetByIndex(index);
		pet.boredom += 10;
		// Data was updated, so update storage
		this.model.updateAllPets();
	}
}