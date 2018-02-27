/*
 * This file supports testLearned.html
*/
function myFunction3() {
	document.getElementById('demo5').innerHTML = "This text brought to you by an external JS script.";
}

// function to revert demo5 to original state for funsies
function rewriteOriginalMessage() {
	document.getElementById('demo5').innerHTML = "I was characters once.";
}