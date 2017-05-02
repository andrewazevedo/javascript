var animals = [
	{ name: 'Flukky', species: 'rabbit' },
	{ name: 'Ursula', species: 'dog' },
	{ name: 'Hamilton', species: 'dog' },
	{ name: 'Yusfugi', species: 'fish' },
	{ name: 'Bob', species: 'cat' },
	{ name: 'Jimmy', species: 'dog' },
]

// 'filter' function return true or false
var dogs = animals.filter(function(animal) {
	return animal.species === 'dog'
})

console.log(dogs)
