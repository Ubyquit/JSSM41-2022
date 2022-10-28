let arrayA = {
  imgP: "assets/img/yo.jpg",
  imgF: "assets/img/firma.png",
  apellidoP: "VILLAFAÑA",
  apellidoM: "REJON",
  nombre: "LUIS FERNANDO",
};


let imgP = arrayA.imgP;
let imgF = arrayA.imgF;
let apellidoP = arrayA["apellidoP"];
let apellidoM = arrayA.apellidoM;
let nombre = arrayA.nombre;


document.getElementById("imgP").src = imgP;
document.getElementById("imgF").src = imgF;
document.getElementById("apellidoP").innerHTML = apellidoP;
document.getElementById("apellidoM").innerHTML = apellidoM;
document.getElementById("nombre").innerHTML = nombre;
