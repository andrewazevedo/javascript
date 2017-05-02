var animals = [
	{ name: 'Flukky', species: 'rabbit' },
	{ name: 'Ursula', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Yusfugi', species: 'fish' },
	{ name: 'Bob', species: 'cat' },
	{ name: 'Jimmy', species: 'dog' },
]

// var names = animals.map(function(animal) {
//   return animal.name + " is a " + animal.species
// })

// using arrow functions (ES6)
// map return a callback function
var names = animals.map((animal) => animal.name)

console.log(names);
