// Basic review

// Exercise 1

let age = prompt("Inserte su edad")

if (age >= 18) {
    alert("Sos mayor de edad")
} else {
    alert("No sos mayor de edad todavia.")
}

// Exercise 2

let number = prompt("Ingrese un numero")

if (number > 0) {
    alert("El numero es positivo")
} else if (number < 0) {
    alert("El numero es negativo")
} else {
    alert("El numero es 0")
}

// Exercise 3

let greaterNumber;

for(let i = 0;i < 2;i++){
    let insertedNumber = parseInt(prompt("Inserte el numero N° " + (i+1)));
    if(greaterNumber === undefined){
        greaterNumber = insertedNumber;
    }
    if (insertedNumber > greaterNumber){
        greaterNumber = insertedNumber;
    }
}

alert("El número mas grande es " + greaterNumber)

// Loops

// Exercise 1

for(let i = 1; i <= 10;i++){
    console.log(i);
}

// Exercise 2

let counter = 0;
let sum = 0;

while(counter < 100){
    sum += (counter +1);
    counter++;
}

alert("Suma de numeros del 1 al 100: " + sum)

// Exercise 3

const fruit = ['durazno','pomelo','manzana','banana','pera','kiwi','sandia','melon']

fruit.forEach((fruit) => {console.log(fruit)})
