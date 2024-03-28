/****************************************************************************
 * If you are completely new to JavaScript, these may be helpful:
 * 		- https://developer.mozilla.org/en-US/docs/Web/JavaScript
 * 		- https://www.w3schools.com/js/
 *		- https://javascript.info/
 * If you are proficient at another language but new to JS, see also:
 * 		- https://learnxinyminutes.com/docs/javascript/
 * 		- https://rosettacode.org/wiki/Category:JavaScript
 * 		- https://devhints.io/es6
 * 
 * Contents:
 * 		1. Basic Types
 * 		2. Mathematical Operations
 * 		3. Lists
 * 		4. Loops and Control Flow
 * 		5. Common Libraries/Functions
 * 		6. Writing Functions
 * 		7. Objects
 * 		8. Binary Search
 *****************************************************************************/



/****************************************************************************
 * 1.
 * BASIC TYPES
 *****************************************************************************/
// Constant
const CANNOT_BE_CHANGED = 10;
// This will result in a TypeError:
//CANNOT_BE_CHANGED = 24;

// typeof(flag) is 'boolean'
let flag = true;

// typeof(string) is 'string'
let string = "I am writing code";

let declaration;
// In a file, this will result in a SyntaxError:
//let declaration = 24;
// This will not:
declaration = 24;

// JavaScript has dynamic types.
// This means that variables don't have to be fixed to a specific category.
let value = "Testing new value"		// typeof(value) is 'string'
value = 75;							// typeof(value) is now 'number'
value = -75.5;						// typeof(value) is still 'number'
/*****************************************************************************/



/****************************************************************************
 * 2.
 * MATHEMATICAL OPERATIONS
 ****************************************************************************/
// Addition
let four = 1 + 3;								// Numerical addition
let five = four + 1;							// Numerical addition with a variable
let nameStatement = "My name is " + "Taylor";	// This is string concatenation

// Subtraction
let three = four - 1;		// Numerical subtraction

// Multiplication
let almostTwoPi = 2 * 3.14;		// See "libraries" section for better approximation of pi

// Division
let degrees_per_radian = 180 / 3.14;	// Float division; see "libraries" section for integer division
let extra = 24 % 7;						// Modulo operator (remainder)

// Comparison
// In most cases, === is preferable to ==.
let conditional_1 = (74 == '74');		// Returns 'true' because double equal signs (==) only compare contents.
let conditional_2 = (74 === '74');		// Returns 'false' because triple equal signs (===) compares contents and type.
let conditional_3 = (74 !== '74');		// Returns 'true', opposite of ===
let conditional_4 = (250 > 100);		// Returns 'true'
let conditional_5 = (50 < 40);			// Returns 'false'
let conditional_6 = (25 <= 25);			// Returns 'true'
let conditional_7 = (130 >= 90);		// Returns 'true'
/*****************************************************************************/



/****************************************************************************
 * 3.
 * Lists
 * State symbols from https://en.wikipedia.org/wiki/List_of_North_Carolina_state_symbols
 ****************************************************************************/
// Indexing
const STATE_PLANTS = ["venus flytrap", "fraser fir", "flowering dogwood", "pine", "carolina lily"]
let carnivorousPlant = STATE_PLANTS[0];
let wildflower = STATE_PLANTS[4];
let one = STATE_PLANTS.indexOf("fraser fir");
let negOne = STATE_PLANTS.indexOf("cardinal");
let nPlants = STATE_PLANTS.length;
STATE_PLANTS[2] = "FLOWERING DOGWOOD";

// Adding
let state_geology = ["gold", "granite"];
state_geology.push("emerald");

// Removing
state_geology.pop();			// Removes last item
state_geology.splice(0, 1);		// Remove 1 item starting at index 0
/*****************************************************************************/



/****************************************************************************
 * 4.
 * LOOPS AND CONTROL FLOW
 * Not mentioned, but would be good to look into:
 * 		- try/catch https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 * 		- break/continue https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
 * 						https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
 * 		- filter() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *****************************************************************************/
// If/Else
// If conditional_1 is true...
if (conditional_1) {
	console.log("Condition 1 is true");
} // Otherwise if conditional_2 is *not* true...
else if (!conditional_2) {
	console.log("Condition 1 and 2 are false");
} // Otherwise...
else {
	console.log("Condition 1 is false and condition 2 is true");
}

// While Loop
// conditional_4 is true...
while (conditional_4) {
	console.log("Condition 4 is true");
	// Redefine conditional_4 to false, so the loop terminates.
	conditional_4 = false;
}

// For-Loop
// Prints: 0, 1, 2, 3, 4.
for (let i = 0; i < 5; i++) {
	console.log("Loop " + i);
}
// "let i" can be declared again because it has limited scope.
// Prints: 5, 4, 3, 2, 1, 0.
for (let i = 5; i >= 0; i--) {
	console.log("Loop " + i);
}
// Prints out the elements in the array.
for (let plant in STATE_PLANTS) {
	console.log(plant)
}
/****************************************************************************/



/****************************************************************************
 * 5.
 * COMMON BUILTIN LIBRARIES AND FUNCTIONS
 ****************************************************************************/
// Rounding (helpful for integer division)
let divided = 25 / 4;					// 6.25
let rounded = Math.trunc(divided);		// 6
// Rounding down; trunc and floor act differently for negative numbers
let decimal = 1.44;						// 1.44
rounded = Math.floor(decimal);			// 1
// Rounding up
rounded = Math.ceil(decimal);			// 2

// Pi
let twoPi = 2 * Math.PI;

// Date and Time
// Default is the current time and date.
let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
// Date can also be assigned in a variety of ways, not just the format provided below.
let sunday = new Date(2024, 2, 31, 0, 0, 0, 0);
let hours_difference = (sunday - now) / (1000 * 60 * 60); 	// Converting to hours from milliseconds

// Strings
let testString = "The quick brown fox jumps over the lazy dog";
testString.charAt(0);
// This will not work
//testString[testString.length];
testString[testString.length - 1];
testString.substring(0, 5);
testString.includes("brown");
testString.includes("blue");
testString.toUpperCase();
testString.length;
/****************************************************************************/



/****************************************************************************
 * 6.
 * WRITING FUNCTIONS
 * Not listed here, but async/await is also important to know for web development.
 * 		- async: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
 ****************************************************************************/
// Can call the function via "sum" and "getSum."
const sum = function getSum(list) {
	let total = 0;
	for (let i = 0; i < list.length; i++) {
		total += list[i];
	}
	return total;
}
// Get results.
sum([1, 2, 3, 4, 5]);
/****************************************************************************/



/****************************************************************************
 * 7.
 * OBJECTS
 * Objects can also contain lists and functions.
 * Looks very similar to JSON data.
 * Not mentioned here, but can also use classes to create objects.
 ****************************************************************************/
let state_insect = {
	name: "Western honey bee",
	scientific_name: "Apis mellifera",
	year: 1973
};
// Can access values from an object in a couple different ways.
state_insect["name"];
state_insect.year;


/****************************************************************************
 * 8.
 * BINARY SEARCH IMPLEMENTATION (RECURSION)
 * Finding the index of a value in a list, return null if it is not found
 ****************************************************************************/
function binary_search(value, list) {
	return binary_search_indexed(value, list, 0, list.length);
}

function binary_search_indexed(value, list, left, right) {
	// Value not found.
	if (right < left) {
		return null;
	}

	// Mark the "center" value.
	const middle_index = Math.trunc((left + right) / 2);
	const middle_value = list[middle_index];

	// Keep searching the "right" half.
	if (value > middle_value) {
		return binary_search(value, list, middle_index + 1, right);
	} // Keep searching the "left" half.
	else if (value < middle_value) {
		return binary_search(value, list, left, middle_index - 1);
	}

	return middle_index;
}