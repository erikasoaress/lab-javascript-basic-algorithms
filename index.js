// Iteration 1: Names and Input

let hacker1 = "Miguel";
let hacker2 = "Miguel";

console.log(`The driver´s name is ${hacker1}.`)

console.log (`The navigator´s name is ${hacker2}.` )

//Iteration 2: Conditionals

let size1 = hacker1.length ;
let size2= hacker2.length;

if ( size2 < size1) {
    console.log (`The driver has the longest name, it has ${size1} characters.`);
} else if ( size2 > size1) {
    console.log(`It seems that the navigator has the longest name, it has ${size2} characters`);
} else  {
    console.log(`Wow, you both have equally long names, ${size2} characters!`);
}

//Iteration 3: Loops
//3.1

let driverName = hacker1.toUpperCase();
let fdriver = "";

for ( i= 0 ; i < size1 ; i++) {
    if ( size1 - 1 === i) {
        fdriver += driverName[i];
    } else {
        fdriver += driverName[i] + " ";
    }
}

console.log(fdriver);

//3.2

    let reversed = "";
    for (let i = hacker2.length - 1; i >= 0; i--) {
      reversed += hacker2[i];
    }

//3.3
if ( hacker1.localeCompare(hacker2) ) {
    console.log( "The driver name goes first");
} else if (!hacker1.localeCompare(hacker2)) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
