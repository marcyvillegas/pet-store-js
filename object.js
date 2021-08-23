

const petStore = {
    _pets: {
        _aerial: [],
        _land: [],
        _aquatic: [],
        _clients: [],

        //Getters of aerial
        get aerial() {
            return this._aerial;
        },

        //Getters of land
        get land() {
            return this._land;
        },

        //Getters of aquatic
        get aquatic() {
            return this._aquatic;
        },
    },

    //Method that adds new pets to the types of pets
    addNewPet(petType, petName, petPrice) {
        const petInfo = {
            name: petName,
            price: petPrice,
        };

        this._pets[petType].push(petInfo);
        return `${petName} -> ${petPrice}`;
    },

    //Method that prints the pets based on pet type
    printPet(petType) {

        this._pets[petType].forEach(element => {
            console.log(`The pet with a type of ${petType} is ${element.name} and has a price of ${element.price}.`);
        });
    },

    //Method that deletes the pet
    deletePet(petType,petName) {
        
        findName = (element) => element.name === petName;
        const index = this._pets[petType].findIndex(findName);
        this._pets[petType].splice(index, 1);
        
    },

    //Method that updates the selected pet
    updatePet(petName, newPetName, petPrice, newPetPrice) {

        for(var prop in this._pets){
            for(var i in this._pets[prop]){
                if(this._pets[prop][i].name === petName && this._pets[prop][i].price === petPrice){
                    this._pets[prop][i].name = newPetName;
                    this._pets[prop][i].price = newPetPrice;
                }
            }
        }
    },
};


//CONSOLE LOG
petStore.clients = "Marcy"

console.log(petStore._pets); //"Array of land"

//Add pet
console.log(petStore.addNewPet('land', 'Rabbit', 600)); //Rabbit -> 600
console.log(petStore.addNewPet('land', 'Cat', 2500)); //Cat -> 2500
console.log(petStore.addNewPet('land', 'Dog', 4000)); //Dog -> 4000

//Read pets
petStore.printPet("land");

//Delete
petStore.deletePet("land","Rabbit");

//Read pets
petStore.printPet("land");

//Update pet
petStore.updatePet("Cat", "Cow", 2500, 8000);

console.log(petStore._pets.land); //"Array of land"


//Methods
//Add new pet
//Read all pets
//Delete new pet
//Update new pet
//Adopt new pet with date