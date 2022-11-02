/*
 * Class es la fabrica
 * Constructor las maquinas que ensamblan
 * Abstracción obtener datos generales de un objeto.
 * Atributos = Parametros
 ! Objeto = this con propiedades = atributos
 * Instanciación
 * Metodos
 * Polimorfismo la propiedad de las clases de crear multiples objetos, con parametros diferentes.
 */

import Animal from "./superclase.js";

class Perro extends Animal {
  constructor(especie, color, edad, patas, raza) {
    super(especie, color, edad, patas);
    this.raza = raza;

    this.info = `Hola soy un ${especie}, soy de color ${color}<br>
    tengo la edad de ${edad} años, tengo ${patas} patas, soy de raza ${raza}`;
  }
  datosPerro() {
    document.getElementById("perro").innerHTML = this.info;
  }
  ladrar() {
    document.write("<br> Waaff waff <br>");
  }
}

const PERRO = new Perro("Perro", "Azul", 30, 4, "Pitbull");

PERRO.datosPerro();
