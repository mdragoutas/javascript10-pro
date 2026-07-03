
// Number Constants
console.log("Min-Max Value: " + Number.MIN_VALUE + " - " + Number.MAX_VALUE);

console.log("Min-Max Safe Int" + Number.MIN_SAFE_INTEGER + " - " + Number.MAX_SAFE_INTEGER);

// NaN
console.log("Is a abc a number? " + Number(abc)); // Not a Number

// Division by zero
console.log("Positive div by zero: " + (12 / 0));   // infinity

console.log("Positive div by zero: " + (-12 / 0));  // -infinity

// Explicit Conversion
let num = number("12");     // num -> 12

if (Number.isInteger(num)) {
    console.log("num is integer: " + Number.isInteger(num));
} else {
    console.log("Not an integer");
}

// Implicit Conversion --- Coercion
let aNum = 4 / "aueb";

// Υπάρχει και global isNaN("Hello") true -- backward compatibility
// Number.isNaN("Hello") false
if (Number.isNaN(aNum)) {
    console.log("aNum =" + aNum);
} else {
    console.log(aNum)
}

// Format decimals
console.log((12.12345).toFixed(2));     // toFixed(2) επιστρέφει String