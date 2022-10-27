let arrayA = {
  nombre: "LUIS FERNANDO",
  apellidoP: "VILLAFAÑA",
  apellidoM: "REJON",
  img: "assets/img/yo.jpg",
};

let nombre = arrayA["nombre"];
let apellidoP = arrayA.apellidoP;
let apellidoM = arrayA.apellidoM;
let img = arrayA.img;

document.getElementById("apellidoP").innerHTML = apellidoP;
document.getElementById("apellidoM").innerHTML = apellidoM;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("img").src = img;


