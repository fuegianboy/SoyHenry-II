# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10 
   console.log(a);  // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;  
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1
```





```javascript
console.log(bar); // undefined
console.log(baz); // not declared
foo(); 
function foo() {
   console.log('Hola!'); // Hola!
}
var bar = 1; // si lo muevo arriba del console.log, funcionaria
baz = 2;  // si le pongo var o let y lo muevo arrriba tambien funcionaria
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);  // Franco el segundo var pisa al primero, esto no es igual si está dentro de una funcion
```




```javascript
var instructor = 'Tony'; 
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);   // Franco
   }
})();
console.log(instructor);  // Tony
```




```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);   // The flash 
   console.log(pm); // Reverse Flash
}
console.log(instructor);  // The flash
console.log(pm);  // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2  // 2
"4px" - 2 // ???????????????
7 / 0 // infinite
{}[0] // undefined, un objeto no tiene indice
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 26, porque los convierte a str los 3 y luego le resta 10 y la resta tiene que ser entre numeros
3>2>1 // 3>2 es igual a true, true es igual a 1, 1 > 1 es falso, da falso
[] == ![] // muy complicado. un array vacio es false, pero un array es verdadero, pero se lo niega con ! , da false, false == fasle da true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined 
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;  // undefined, 
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());  // Juan Perez Es al reves, pero no entiendo uno se aplica sobre el global, el otro se aplica
                                       // sobre el objeto, quizas utiliza closures????

var test = obj.prop.getFullname;

console.log(test()); // Aurelio de Rosas

```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);            // orden= 1,4,3,2 porque 1 y 4 estan al toque, 3 y 2 tienen timeout y van a la pila, pero 3 tiene tiempo 0
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
