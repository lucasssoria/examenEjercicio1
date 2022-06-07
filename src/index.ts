// Realizar una función que devuelva el menor valor de un arreglo de valores numéricos.
// El arreglo estará cargado con datos aleatorios y con dimensión ingresada por el usuario.

// Realizar una función que permita genere un arreglo de tamaño ingresado por el usuario y cargarlo con valores aleatorios.
// Realizar una función que muestre por consola los elementos del arreglo.
// Realizar una función que devuelva el menor valor del arreglo con valores numéricos.
// Por ultimo muestra por consola el menor valor devuelto por la función.

let ingresos: number[] = new Array(0);
function cargarArreglo() {
  let longitud = Number(prompt("Ingrese cuantos numeros tiene su arreglo: "));
  for (let i = 0; i < longitud; i++) {
    ingresos[i] = Math.floor(Math.random() * 100);
  }
}
function mostrarPorConsola() {
  return console.log("Los numeros ingresados en su arreglo son: " + ingresos);
}
function mostrarMenor() {
  return Math.min(...ingresos);
}
cargarArreglo();
mostrarPorConsola();
console.log("El menor de sus numeros es: " + mostrarMenor());
