
//Object petStore
const petStore = {
    _pets: {
        _aerial: [],
        _land: [],
        _aquatic: [],
        _clients: [],

        /*
        The purpose of the getters here is to use the property of the object pets in different methods.
        */

        //Getters of aerial
        get aerial() {
            return this._pets[this._aerial];
        },

        //Getters of land
        get land() {
            return this._land;
        },

        //Getters of aquatic
        get aquatic() {
            return this._aquatic;
        },

        //Getters of clients
        get clients() {
            return this._clients;
        },

    },

    //Method that adds new pets to the types of pets
    addNewPet(petType, petName, petPrice) {
        let petInfo = {
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
    deletePet(petName) {

        for (let prop in this._pets) {
            let findName = (element) => element.name === petName;
            const index = this._pets[prop].findIndex(findName);
            this._pets[prop].splice(index, 1);
        }

    },

    //Method that updates the selected pet
    updatePet(petName, newPetName, petPrice, newPetPrice) {

        for (let prop in this._pets) {
            for (let i in this._pets[prop]) {
                if (this._pets[prop][i].name === petName && this._pets[prop][i].price === petPrice) {
                    this._pets[prop][i].name = newPetName;
                    this._pets[prop][i].price = newPetPrice;
                }
            }
        }
    },

    //Method that lets a client adopt a pet
    adoptPet(client, petName) {
        this._pets.clients.push(client);
        console.log(`Our client named ${client} adopted ${petName} at ${Date()}`);
    }
};


//CONSOLE LOG
console.log(petStore._pets); //"Object pets"

//Add pet
console.log(petStore.addNewPet('land', 'Rabbit', 600)); //Rabbit -> 600
console.log(petStore.addNewPet('land', 'Cat', 2500)); //Cat -> 2500
console.log(petStore.addNewPet('land', 'Dog', 4000)); //Dog -> 4000
console.log(petStore.addNewPet('land', 'Pig', 7000)); //Pis -> 7000
console.log(petStore.addNewPet('land', 'Mouse', 200)); //Mouse -> 00

//Reads a list of pets based on petType
petStore.printPet("land");

//Delete a pet
petStore.deletePet("Dog");

//Update a pet
petStore.updatePet("Cat", "Cow", 2500, 8000);

console.log(petStore._pets.land); //"Array of land"

//Client adopts a pet
petStore.adoptPet("Marcy", "Rabbit");

console.log(petStore._pets.clients); //"Array of clients"


//Methods:
//Add new pet
//Read all pets
//Delete new pet
//Update new pet
//Adopt new pet with date