var foo = function() { // anonymus function because it has no name.
    console.log('Anonymus function.')
};

foo();

function bar(){
    console.log('Normal function.')
};

bar();

// Immediately Invoked Function Expressions (IIFEs)

(function IIFE(){
    console.log( "Immediately Invoked Function Expressions (IIFEs)" );
})();




