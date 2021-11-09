const miFunction = () => {
  let num = parseInt(prompt('Ingresa un numero'))
  if (num >= 1 && num <= 20) {
    for (let i = 1; i <= num; i++) {
      console.log(`${i} x ${num} = ${i*num}`);
    }
    for (let i = 1; i <= num; i++) {
      const result = factorial(i);
      console.log(`Factorial de ${i} es ${result}`);
    }
  } else {
    console.log('numero fuera del rango')
  }

}

function factorial (num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

miFunction()