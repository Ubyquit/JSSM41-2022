// FUNCIONES FLECHA

const operacion = (numero1, numero2) => {
  let multiplicacion = numero1 * numero2;
  document.write(multiplicacion);
};

operacion(2, 4);
document.write("<br>");

// bloque de codigo
const saludar = (nombres) =>{
  document.write(`Hola ${nombres}`);
}

saludar("Eduardo Vilafaña");
document.write("<br>");

// Linea de codigo
const saludar2 = nombre => document.write(`Hola ${nombre}`);
saludar2("Luis Villafaña");