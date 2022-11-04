let frutas = ["Uva", "Fresa", "Platano", "Mango", "Mandarina"];

document.write("FOR CON IN IMPRIME LA POSICIÓN<BR>");
for (const fruta in frutas) {
  document.write(fruta + "<br>");
}

document.write("RECORRIDO DE ARREGLO ANTIGUO<BR>");
for (const fruta in frutas) {
  document.write(frutas[fruta] + "<br>");
}

document.write("FOR CON OF IMPRIME EL VALOR<BR>");
for (const fruta of frutas) {
  document.write(fruta + "<br>");
}
