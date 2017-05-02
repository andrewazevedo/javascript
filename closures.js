function Person(pName) {
	var _name = pName;

	this.getName = function() {
		return _name;
	};
}

var me = new Person('Rodrigo')

console.log(me.getName())
