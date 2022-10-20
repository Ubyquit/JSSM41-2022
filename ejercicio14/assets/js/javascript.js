const USER = "ubyquit";
const PASSWORD = "Holamundo";

let u = prompt("Ingresa tu usuario");
let p = prompt("Ingresa tu contraseña");

if (USER == u && PASSWORD == p) {
  document.write("Bienvenido");
} else {
  document.write("usuario y/o contraseña erronea");
}