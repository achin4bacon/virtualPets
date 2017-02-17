//!///!///!//!///!///
/////////////////////
//STORES DATA //
//////////////// edit & retrieve / controller
///////////////

function Model() {
	//storing pets
	this.pets = [];

	//return pets in array at index[i]
	this.getPetByIndex = function(index){
		return this.pets[index];
	}

	//add new pet (name and species)
	this.addPet = function(name, species){
		var p = new Pet(name, species);
		this.pets.push(p);
	}

	// this function retrieves the pets array from storage. 
	// since array was stringified when stored, unstringify (parse) it as well
	 this.getAllPets = function(){
		 this.pets = JSON.parse(localStorage.getItem("pets"));
		 if (!this.pets){
			 this.pets=[];
		 }
		 return this.pets;
	}

	// preserve status of pets
	// just keep overwriting whatever was last stored using "pets" id.
	// need to stringify array since localStorage only accepts string format
	this.updateAllPets = function() {
		localStorage.setItem("pets", JSON.stringify(this.pets));
	}

	// uncomment lines below to remove all pets.
	// this.pets = [];
	// this.updateAllPets();
}