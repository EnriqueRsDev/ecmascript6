//Object.entries transforma un objeto, tanto llave y valor, a un arreglo
const data = {
    frontend: 'Enrique',
    backend: 'Eduardo',
    design: 'Oscar'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values transforma solo los valores de un objeto a un arreglo
const data2 = {
    frontend: 'Enrique',
    backend: 'Eduardo',
    design: 'Oscar',
}

const values = Object.values(data2);
console.log(values);

//padding
const string = 'Hello';
console.log(string.padStart(10, 'hi = ')); //PadStart concatena un string al inicio
console.log(string.padEnd(10, ' = hi')); //padEnd concatena un string al final

//Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => resolve('Hello World'), 3000)
        } else {
            reject(new Error('No se pudo'))
        }
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.error(error)
    }
}
anotherFunction();


//Ejemplo de promesas con async y await
const hola = (name) => { //se define la función y se le asigna el parametro que va a recibir
    return new Promise((resolve, reject) => { //Se retorna una nueva promesa y como argumento se le pasa una función anónima.
        if (name) { 
            setTimeout(() => resolve(`Hola ${name}`), 3000) //Si la respuesta es la esperada se resuelve con el resolve, el setTimeOut es para que haya un delay al mostrar la respuesta
        } else {
            reject(new Error(`¿Cómo te llamas?`)); //Si la respuesta no es la esperada, se envía el reject con el error
        } 
        
    })
}

const holaAsync = async (name) => { //Se crea la función async, se le asigna un argumento (si es necesario se asigna)
    const saludo = await hola(name); //Se crea una constante que contiene el await de la función hola()
    console.log(saludo);//se da la respuesta
}
holaAsync("Enrique"); //Se ejecuta la función