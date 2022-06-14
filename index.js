class Libro{
    constructor(titulo, precio, genero){
        this.titulo= titulo;
        this.precio= precio;
        this.genero= genero;
    }
    descuento(){
        if((this.precio >=3000)&&(this.precio < 4000)){
            alert(`Su libro tiene un descuento del 10% precio final es: `+ Math.round(this.precio/(1.1)));
        }if((this.precio >=4000)&&(this.precio < 5000)){
            alert(`Su libro tiene un descuento del 20% precio final es: `+ Math.round(this.precio/(1.2)));
        }if(this.precio >=5000){
            alert(`Su libro tiene un descuento del 30% precio final es: `+ Math.round(this.precio/(1.3)));
        }
  
  }
}

const it= new Libro(`It`, 6400);
const despues= new Libro(`Después`, 4200); 
const elResplandor= new Libro(`El Resplandor`, 3600);
const laCupula= new Libro(`La Cúpula`, 6500);
const laExpedicion= new Libro(`La Expedición`, 3600);
const ojosDeFuego= new Libro(`Ojos de fuego`, 4200);
const desesperacion= new Libro(`Desesperación`, 3700);
const elVisitante= new Libro(`El Visitante`, 4700);
const laMillaVerde= new Libro(`la milla verde`, 3500);
const despuesDeMedianoche= new Libro(`Después de medianoche`, 2800);
const cementerioDeAnimales= new Libro(`Cementerio de animales`, 3500);
const elBazarDeLosMalosSueños= new Libro(`El bazar de los malos sueños`, 3500);
const quienPierdePaga= new Libro(`Quien pierde, paga`, 3000);
const laTormentaDelSiglo= new Libro(`La tormenta del siglo`, 4000);
const rabia= new Libro(`Rabia`, 2500);
const misery= new Libro(`Misery`, 3000);
const joyland= new Libro(`Joyland`, 3000);
const laMitadOscura= new Libro(`La mitad oscura`, 4500);
const elInstituto= new Libro(`El instituto`, 3600);
const christine= new Libro(`Christine`, 2000);


class Usuario{
  constructor(nombre, mail){
    this.nombre= nombre.toUpperCase();
    this.edad= mail;
  }
}




  let libros = new Array;
  libros = [
     {nombre: `IT`, precio: 6400, genero: "TERROR"},
     {nombre: `DESPUÉS`, precio: 4200, genero: "CRIMINAL, SUSPENSO"}, 
     {nombre: `EL RESPLANDOR`, precio: 3600, genero: "TERROR"}, 
     {nombre: `LA CÚPULA`, precio: 6500, genero: "CIENCIA FICCION"},
     {nombre: `LA EXPEDICIÓN`, precio: 3600, genero: "RECOPILACION"},
     {nombre: `OJOS DE FUEGO`, precio: 4200, genero: "CIENCIA FICCION"},
     {nombre: `DESESPERACIÓN`, precio: 3700, genero: "RECOPILACION"},
     {nombre: `EL VISITANTE`, precio: 4700, genero: "FANTASIA, TERROR"},
     {nombre: `LA MILLA VERDE`, precio: 3500, genero: "FANTASIA, DRAMA"},
     {nombre: `DESPUÉS DE MEDIANOCHE`, precio: 2800, genero: "RECOPILACION"},
     {nombre: `CEMENTERIO DE ANIMALES`, precio: 3500, genero: "TERROR"},
     {nombre: `EL BAZAR DE LOS MALOS SUEÑOS`, precio: 3500, genero: "RECOPILACION"},
     {nombre: `QUIÉN PIERDE, PAGA`, precio: 3000, genero: "THRILLER CRIMINAL"},
     {nombre: `LA TORMENTA DEL SIGLO`, precio: 4000, genero: "FANTASIA, CIENCIA FICCION"},
     {nombre: `RABIA`, precio: 2500, genero: "SUSPENSO, TERROR"},
     {nombre: `MISERY`, precio: 3000, genero: "SUSPENSO, TERROR"},
     {nombre: `JOYLAND`, precio: 3000, genero: "TERROR"},
     {nombre: `LA MITAD OSCURA`, precio: 4500, genero: "RECOPILACION"},
     {nombre: `EL INSTITUTO`, precio: 3600, genero: "CIENCIA FICCION"},     
     {nombre: `CHRISTINE`, precio: 2000, genero: "TERROR"}  
    ]; 
    libros.sort( function(v1, v2){return v1[1]>v2[1]?-1:1});         
    console.table(libros);

    let opcion= Number(prompt("*1 buscar libros *2 carrito de compras *3 comprar *4 solo el propietario"));
  
switch (opcion) {
  case 1:
  let opcion1 = Number(prompt("*Opción 1 buscar por precio *Opción 2 buscar por nombre *Opción 3 buscar por género"));
            switch (opcion1) {
            case 1:
            let precio= Number(prompt("Ingrese la cifra que desea gastar en un libro"));
            let precioL = libros.filter(elemento => elemento.precio <= precio);
            console.log(precioL)
            break;
            case 2:
            let nombre= prompt("Ingrese el nombre del libro que desea buscar").toUpperCase();
            let nombreL= libros.find(elemento => elemento.nombre == nombre);
            console.log(nombreL)
            break;
            case 3:
              let genero= prompt("Ingrese genero que desea buscar").toUpperCase();
              let generoL= libros.filter(elemento => elemento.genero.includes(genero));
              console.log(generoL)
              break;
            default:
            break;
            }
            break;


    case 2:
        let libro = prompt(`Ingrese el nombre del libro que desea agregar al carrito o "esc" para salir`).toUpperCase();
        const adquiridos = [];
      while (libro != 'ESC') {
          adquiridos.push(libros.find(elemento => elemento.nombre == libro));
          libro = prompt(`Ingrese el nombre del libro que desea agregar al carrito o "esc" para salir`).toUpperCase();
      }
      for (i= 0; i<adquiridos.length; i++) {
          console.log(adquiridos[i]);
      }
      break;


    case 3:
        // const comprar= adquiridos.map(elemento => elemento.precio, elemento.precio)
        // console.log(comprar)

        let elegir = prompt(`Ingrese el nombre del libro que desea comprar o "esc" para salir`).toUpperCase();
        const comprar = [];
      while (elegir != 'ESC') {
          comprar.push(libros.find(elemento => elemento.nombre == elegir));
          elegir = prompt(`Ingrese el nombre del libro que desea comprar o "esc" para salir`).toUpperCase();
        }
        let precios= comprar.map(elemento => elemento.precio +"......."+ elemento.nombre)
      for (i= 0; i<precios.length; i++) {
          console.log(precios[i]);
      }
      function suma(){
        let precio= comprar.map(elemento => elemento.precio)
        let sum= 0;
        for(number of precio){
         sum += number;
       }
        console.log(`${sum}.......Total`)
      }
      suma()



      // function sumInput() {
      //   let numbers = [];
      //   while (true) {
      //     let value = prompt("Un número, por favor...", 0);
      //     // ¿Debemos cancelar?
      //     if (value === "" || value === null || !isFinite(value)) break;
      //     numbers.push(+value);
      //   }
      //   let sum = 0;
      //   for (let number of numbers) {
      //     sum += number;
      //   }
      //   return sum;
      // }
      // alert( sumInput() );





      break;


    case 4:
      const usuario= new Usuario (prompt("Escriba su nombre"), prompt("Escriba su mail"));
      alert(`Bienvenido, ${usuario.nombre}`)
      break;


    case 5: 
  default:
    break;
}
  




//¿cómo puedo hacer que el nombreL tenga un .sort así me salen los resultados en orden?

