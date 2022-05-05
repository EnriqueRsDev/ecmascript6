//includes, sirve para encontrar un string o un numero dentro de un arreglo
let numbers = [1, 2, 3, 4, 5, 6, 7];

const thereIsANumber = (number) => {
    if (numbers.includes(number)) console.log(`Si, el valor ${number} se encuentra`);
    else console.log(`No, el valor ${number} no existe`);
};

thereIsANumber(0);

//Exponent

const potencias = (base, exponent) => {
    let resultado = base ** exponent;
    console.log(resultado);
};

potencias(2,2);