// A combinação de uma função e a referência ao seu estado externo é uma closure.
// É importante para esconder os dados (data privacy)

function init() {
	var name = 'Andrew';
	function hello() {
		console.log('Hello ' + name);
	}
	hello();
}

init();
//Hello Andrew

hello();
// Reference error: hello is not defined
