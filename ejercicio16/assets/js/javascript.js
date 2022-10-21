/*
aa == JSON
aa == una base de datos noSQL orientada a documentos 
aa == una base de datos noSQL orientada a Clave-Valor
*/

let arrayA = {
  nombre: "Luis Fernando",
  edad: 32,
  correoE: "luisvrmexico@gmail.com",
};

document.write(
  '<img src="https://media-exp1.licdn.com/dms/image/C4E03AQEfQcAaOIAZRw/profile-displayphoto-shrink_200_200/0/1517043051432?e=1671062400&v=beta&t=8MH3gzf3E7qDcvNZNUWLvsnJ-oW8aclxIJ5z6HpJHWg">'
);

document.write(typeof arrayA);
document.write("<br><br>");

document.write("Clave");
document.write("<br>");
document.write(arrayA["nombre"]);
document.write("<br>");
document.write(arrayA["edad"]);
document.write("<br>");
document.write(arrayA["correoE"]);
document.write("<br><br>");

document.write("Propiedad");
document.write("<br>");
document.write(arrayA.nombre);
document.write("<br>");
document.write(arrayA.edad);
document.write("<br>");
document.write(arrayA.correoE);
document.write("<br><br>");

document.write("Variables");
document.write("<br>");

let nombre = arrayA["nombre"];
let edad = arrayA["edad"];
let correoE = arrayA["correoE"];

document.write(nombre);
document.write("<br>");
document.write(arrayA.edad);
document.write("<br>");
document.write(arrayA.correoE);
document.write("<br>");
