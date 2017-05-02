// Call x Apply
// Invoca métodos como se estivéssemos no contexto de outro objeto
// apply aceita um array e call requer parâmetros divididos por virgula.

var myself = { firstName: 'Andrew', lastName: 'Alves', age: 20 };

function showFullName() {
	console.log(this.firstName + " " + this.lastName);
}

showFullName.call(myself);
// Andrew Alves

showFullName.apply(myself);  
// Andrew Alves


function isOlderThan() {
	for (var i = 0; i < arguments.length; i++) {
		console.log(this.age < arguments[i]);
	}
}

isOlderThan.call(myself, 30, 40, 15);
// true true false

isOlderThan.apply(myself, [30, 40, 15]);
// true true false