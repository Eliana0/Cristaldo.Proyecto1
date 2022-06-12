// class Libro{
//     constructor(titulo, precio){
//         this.titulo= titulo;
//         this.precio= precio;
//     }
//     descuento(){
//         if((this.precio >=3000)&&(this.precio < 4000)){
//             alert(`Su libro tiene un descuento del 10% precio final es: `+ Math.round(this.precio/(1.1)));
//         }if((this.precio >=4000)&&(this.precio < 5000)){
//             alert(`Su libro tiene un descuento del 20% precio final es: `+ Math.round(this.precio/(1.2)));
//         }if(this.precio >=5000){
//             alert(`Su libro tiene un descuento del 30% precio final es: `+ Math.round(this.precio/(1.3)));
//         }
//   
// }

// const it= new Libro(`It`, 6400);
// const despues= new Libro(`Después`, 4200); 
// const elResplandor= new Libro(`El Resplandor`, 3600);
// const laCupula= new Libro(`La Cúpula`, 6500);
// const laExpedicion= new Libro(`La Expedición`, 3600);
// const ojosDeFuego= new Libro(`Ojos de fuego`, 4200);
// const desesperacion= new Libro(`Desesperación`, 3700);
// const elVisitante= new Libro(`El Visitante`, 4700);
// const laMillaVerde= new Libro(`la milla verde`, 3500);
// const despuesDeMedianoche= new Libro(`Después de medianoche`, 2800);
// const cementerioDeAnimales= new Libro(`Cementerio de animales`, 3500);
// const elBazarDeLosMalosSueños= new Libro(`El bazar de los malos sueños`, 3500);
// const quienPierdePaga= new Libro(`Quien pierde, paga`, 3000);
// const laTormentaDelSiglo= new Libro(`La tormenta del siglo`, 4000);
// const rabia= new Libro(`Rabia`, 2500);
// const misery= new Libro(`Misery`, 3000);
// const joyland= new Libro(`Joyland`, 3000);
// const laMitadOscura= new Libro(`La mitad oscura`, 4500);
// const elInstituto= new Libro(`El instituto`, 3600);
// const christine= new Libro(`Christine`, 2000);

// console.log(ojosDeFuego.descuento())






  var libros = new Array;
  libros = [
     {nombre: `It`, precio: 6400},
     {nombre: `Después`, precio: 4200}, 
     {nombre: `El Resplandor`, precio: 3600}, 
     {nombre: `La Cúpula`, precio: 6500},
     {nombre: `La Expedición`, precio: 3600},
     {nombre: `Ojos de fuego`, precio: 4200},
     {nombre: `Desesperación`, precio: 3700},
     {nombre: `El Visitante`, precio: 4700},
     {nombre: `la milla verde`, precio: 3500},
     {nombre: `Después de medianoche`, precio: 2800},
     {nombre: `Cementerio de animales`, precio: 3500},
     {nombre: `El bazar de los malos sueños`, precio: 3500},
     {nombre: `Quien pierde, paga`, precio: 3000},
     {nombre: `La tormenta del siglo`, precio: 4000},
     {nombre: `Rabia`, precio: 2500},
     {nombre: `Misery`, precio: 3000},
     {nombre: `Joyland`, precio: 3000},
     {nombre: `La mitad oscura`, precio: 4500},
     {nombre: `El instituto`, precio: 3600},     
     {nombre: `Christine`, precio: 2000}  
    ]; 
    libros.sort( function(v1, v2){return v1[1]>v2[1]?-1:1});         
    console.table(libros);
let precio= Number(prompt("Ingrese una cifra el dinero"));
let nombreL = libros.filter(elemento => elemento.precio <= precio);
console.log(nombreL)
//.toUpperCase(); console.log(libros.includes["Rabia"])
//¿cómo puedo hacer que el nombreL tenga un .sort así me salen los resultados en orden?

