'use strict';

function BinarioADecimal(num) {
  num = num.split("").reverse().join("")
  let result = 0
  for (let i = 0 ; i < num.length ; i++ ) {
    result = num[i]* 2**i + result
  }
  return result
}

// function BinarioADecimalRecursivo(strBin) {
//   let result = 0
//   if (strBin === ""){
//     return 0
//   } else {
//     return (2**(strBin.length-1) * strBin.slice(0,1)) + BinarioADecimalRecursivo(strBin.slice(1))
//   }
// }


function DecimalABinario(num) {
  let resultado = ""
  if (num === undefined || num === 0) resultado = "0"
  while (num>0) {
    if (num % 2 === 0) {
      resultado = "0" + resultado
    } else {
      resultado = "1" + resultado
    }
  num = Math.floor(num/2)
  }
  return resultado
}

// function DecimalABinarioRecursivo(num) {
//   return (num ===0) ? "" : DecimalABinarioRecursivo(Math.floor(num/2)) + ((num % 2 === 0)? "0":"1") 
 
// }


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
