let nombre = "Juan";
let apellido = "Palomino";

console.log(`estudiante: ${nombre} ${apellido}`);

let estudiante = `${nombre} ${apellido}`;
//mayusculas
console.log(estudiante.toUpperCase());
//minusculas
console.log(estudiante.toLowerCase());
//cantidad de caracteres
console.log(estudiante.length);
//primera letra de la variabe estudiante 
console.log(estudiante.charAt(0));
//ùltima letra de la variabe estudiante
console.log(estudiante.charAt(12));
//Comienza con J
console.log(estudiante.startsWith("J"));
// Finaliza con o
console.log(estudiante.endsWith("o"));
//Eliminar espacios
console.log(estudiante.trim());
// ¿existe el nombre?
console.log(estudiante.includes("Juan"));