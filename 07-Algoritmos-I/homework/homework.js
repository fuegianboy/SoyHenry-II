'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]
  for (let i = 2; i <= num; i++) {
    while (num % i === 0 ) {
        array.push(i)
        num = num/i
    }
  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let resultado = []
  let flag = "blue"
  while (flag !== "red") {
    flag = "red"
    for( let i=0 ; i<array.length ; i++ ) {
      if (array[i]>array[i+1]){
        flag = "blue"
        array.unshift(array.splice(i+1,1)[0]) 
      }
    }
  }  
  return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for ( let i=1 ; i<array.length ; i++ ) {
    var aux = array[i]
    var j = i-1
    while (j>=0 && aux <array[j]) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = aux
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j=0;j<array.length-1; j++) {
    var menor = j
    for (let i=j+1;i< array.length;i++){
      if(array[i]< array[menor]){
        menor = i
      }
    }
    //var aux = array[j]
    //array[j] = array[menor]
    //array[menor] = aux
    array.splice(j,0,array.splice(menor,1)[0])
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
