//Metodo de asignacion de parametros por defecto antes de ES6
function newFunction(name, age, country) {
    var name = name || "Enrique";
    var age = age || 22;
    var country = country || "SV";
    console.log(name, age, country);
}
newFunction();

//Asignacion de parametros por defecto en ES6

function newFunction2(name = "Enrique", age = 22, country = "SV") {
    var name = name;
    var age = age;
    var country = country;
    console.log(name, age, country);
}
newFunction2();

//Concatenación antes de ES6
let hello = "hello";
let world = "World";
console.log(hello + " " + world);

//usando template strings
let hello1 = "hello";
let world1 = "World";
console.log(`${hello1} ${world1}`);

//Multilinea antes de ES6
let lorem = "lorem ipsun\n"
+ "otra frase";

console.log(lorem);

//Multilinea con ES6
let lorem2 = `frase 1
frase 2
frase 3`;

console.log(lorem2);

//Destruccturaciòn
let person = {
    name: 'Enrique',
    country: 'SV',
}

console.log(person.name, person.country);

//ES6
let = {name, country} = person;
console.log(name, country);

//Spread Operation
let team1 = ['Enrique', 'Oscar', 'Paco']
let team2 = ['Camila', 'Carlos']

let all = ['Daniel', ...team1, ...team2]
console.log(all);

//Funciones antes de ES6
function funcion (name) {
    console.log(`Hola ${name}`);
}
funcion('Enrique');

//ES6
const names = [
    { name: 'Enrique', age: 22},
    { name: 'Jessica', age: 23},
]

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(name, age, country);
}

//Promesas en ES6
/**
 * Las promesas funcionan con el principio de que algo va a suceder
 */
const helloPromise = () => {
    //se retorna la promesa que tiene como parametros un resolve y un reject
    return new Promise((resolve, reject) => {
        if (true) {
            //resolve se ejecuta cunado el resultado es el esperado
            resolve('Hola, si funcionó');
        } else {
            //reject se usa para cunado el resultado no salió como debia
            reject('Nel, no funcionó');
        }
    });
}
//Ejecución de  una promesa
helloPromise()//Dentro de los paréntesis se pasan los argumentos, si es que existen. 
    .then (response => console.log(response)) //.then funciona para realizar la acción de respuesta
    .catch(error => console.log(error)); //.catch sirve para agarrar el error y devolver información


const promesa = (name) => {
    return new Promise( (resolve, reject) => {
        if (name) {
            resolve(`Hola ${name}`);
        } else {
            reject(`¿Cómo te llamas?`)
        }
    });
}

promesa()
    .then(response => console.log(response))
    .catch(error => console.error(error));


//Clases
class Calculator {
    constructor() {
        this.valueA = 0,
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB;
    }
}

const suma = new Calculator()
console.log(suma.sum(2, 3));