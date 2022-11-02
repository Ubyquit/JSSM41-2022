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

class Animal {
  constructor(especie, color, edad, patas) {
    this.especie = especie;
    this.color = color;
    this.edad = edad;
    this.patas = patas;

    this.info = `Hola soy un ${especie}, soy de color ${color}<br>
    tengo la edad de ${edad} años y tengo ${patas} patas`;
  }
  imprimirDatos() {
    document.write(this.info);
  }
  ladrar() {
    document.write("<br> Waaff waff <br> ");
  }
}

const PERRO = new Animal("Perro", "Azul", 30, 4);
const pajaro = new Animal("Pajaro", "Verde", 12, 2);

PERRO.imprimirDatos();
PERRO.ladrar();

pajaro.imprimirDatos();
