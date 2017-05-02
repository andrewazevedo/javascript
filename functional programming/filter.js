var animals = [
	{ name: 'Flukky', species: 'rabbit' },
	{ name: 'Ursula', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Yusfugi', species: 'fish' },
	{ name: 'Bob', species: 'cat' },
	{ name: 'Jimmy', species: 'dog' },
]

// 'filter' function return true or false
var dogs = animals.filter((animal) => animal.species === 'dog')

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
// 	if (animals[i].species === 'dog')
// 		dogs.push(animals[i])
// }

console.log(dogs)
