

let stringA = "Uwielbiam JavaScript";
let stringB = "Jestem świetnym programistą";

function longerString(strA, strB) {
	let longerString = (strA.length > strB.length)?strA:strB;
    return longerString;
}
console.log( longerString(stringA, stringB) );
