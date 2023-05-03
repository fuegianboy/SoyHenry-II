'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}

BinarySearchTree.prototype.size = function () {
  let count = 1
  if (this.left === null && this.right === null) return count    
  else if (this.left === null && this.right !== null) return  count + this.right.size()
  else if (this.left !== null && this.right === null) return  count + this.left.size() 
   
  count = count + this.left.size() + this.right.size()
  return count
}

BinarySearchTree.prototype.insert = function (value) {
   let newNodo = new BinarySearchTree(value)
   if (value < this.value) {
      if (this.left === null) {this.left = newNodo}
      else {this.left.insert(value)} 
   } else{
      if (this.right === null) {this.right = newNodo}
      else {this.right.insert(value)}}
}

BinarySearchTree.prototype.contains = function (target) {
   if (target === this.value) return true 
   if (target < this.value) {
     if (this.left !== null) {
       return this.left.contains(target)
     } else return false
   } else {
     if (this.right !== null) {
       return this.right.contains(target)
     } else return false
   }
}
BinarySearchTree.prototype.depthFirstForEach = function (cb,order) {
   if (order === "post-order"){
      if (this.left !== null) { this.left.depthFirstForEach(cb,order)}
      if (this.right !== null) { this.right.depthFirstForEach(cb,order)}
      cb(this.value)
      // recorrer post-order:I-D-N
    } else if (order === "pre-order"){
      cb(this.value)
      if (this.left !== null) { this.left.depthFirstForEach(cb,order)}
      if (this.right !== null) { this.right.depthFirstForEach(cb,order)}
      // recorre pre-order:  N-I-D
    } else {
      if (this.left !== null) { this.left.depthFirstForEach(cb,order)}
      cb(this.value)
      if (this.right !== null) { this.right.depthFirstForEach(cb,order)}
      //recorre in-order: I-N-D
    }

}
BinarySearchTree.prototype.breadthFirstForEach = function (cb,pend) {
  if (!pend) {
    
    var pend = []
  }
  
  cb(this.value)
  
  if (this.left !== null ) pend.push(this.left)
  if (this.right !== null ) pend.push(this.right)

  if (pend.length >0 ) {
    pend.shift().breadthFirstForEach(cb,pend)
  }
   
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
