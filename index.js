tienda = document.getElementById("galeria");
/* mainFloor= document.getElementById("mainFloor"); */
/* const libros = [
  {nombre: `IT`, precio: 6400, genero: "TERROR", img: `ima/IT.jpg`, descripcion: "It es un payaso malvado que vive bajo la ciudad de Derry y se alimenta del miedo de sus victimas. Sólo un grupo de niños unidos por la amistad podrán detenerlo."},
  {nombre: `DESPUÉS`, precio: 4200, genero: "CRIMINAL, SUSPENSO", img: `ima/despues.jpg`, descripcion: "Cuando una inspectora le obliga a evitar el último atentado de un asesino, Jamie no tardará en descubrir que el precio que debe pagar por su poder tal vez es demasiado alto."}, 
  {nombre: `EL RESPLANDOR`, precio: 3600, genero: "TERROR", img: `ima/EL_RESPLANDOR.jpg`, descripcion: "Jack es contratado para cuidar el hotel Overlook junto con su familia. Lo que no esperaban es que ese lugar despertará el resplandor de su hijo Danny."}, 
  {nombre: `LA CÚPULA`, precio: 6500, genero: "CIENCIA FICCION", img: `ima/la-cupula-stephen-king.jpg`, descripcion: "Chester`s Mill es un pueblo normal hasta que un misterioso domo cae alrededor de él. Nadie puede entra... ni salir. Los ciudadanos deberán arreglarse por su cuenta."},
  {nombre: `LA EXPEDICIÓN`, precio: 3600, genero: "RECOPILACION", img: `ima/LA_EXPEDICION.jpg`, descripcion: "Una recopilación de cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {nombre: `OJOS DE FUEGO`, precio: 4200, genero: "CIENCIA FICCION", img: `ima/OJOS_DE_FUEGO.jpg`, descripcion: "Charly es una niña que, junto con su padre, debe escapar de la organización que años atrás experimentó con ellos y les dió sus poderes."},
  {nombre: `EL UMBRAL DE LA NOCHE`, precio: 3700, genero: "RECOPILACION", img: "ima/el-umbral-de-la-noche-1.jpg", descripcion: "Aquellos que mueren rápidamente son el realidad los más afortunados, ya que para los supervivientes Desesperación se convertirá en el escenario de una horrenda pesadilla."},
  {nombre: `EL VISITANTE`, precio: 4700, genero: "FANTASIA, TERROR", img: "ima/EL_VISITANTE.jpg", descripcion: "El detective Anderson no está satisfecho. Maitland parece un buen tipo, un ciudadano ejemplar, ¿acaso tiene dos caras? Y ¿cómo es posible que estuviera en dos sitios a la vez?"},
  {nombre: `LA MILLA VERDE`, precio: 3500, genero: "FANTASIA, DRAMA", img: "ima/LA_MILLA_VERDE.jpg", descripcion: "La penitenciaría Could Mountain es donde los condenados esperan la muerte. Pero un día llega un preso peculiar."},
  {nombre: `DESPUÉS DE MEDIANOCHE`, precio: 2800, genero: "RECOPILACION", img: "ima/despues-de-medianoche.jpg", descripcion: "Una recopilación de cuatro cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {nombre: `CEMENTERIO DE ANIMALES`, precio: 3500, genero: "TERROR", img: "ima/cementerio-de-animales.jpg", descripcion: "Cuando el gato de la familia fallece en un accidente de carretera, es enterrado en un antiguo cementerio. Al otro día aparece vivo... pero no es el mismo."},
  {nombre: `EL BAZAR DE LOS MALOS SUEÑOS`, precio: 3500, genero: "RECOPILACION", img: "ima/EL_BAZAR_DE_LOS_MALOS_SUEÑOS.jpg", descripcion: "Una recopilación de cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {nombre: `QUIÉN PIERDE, PAGA`, precio: 3000, genero: "THRILLER CRIMINAL", img: "ima/QUIEN_PIERDE_PAGA.jpg", descripcion: "El asesinato del escritor John Rothstein, sus notas perdidas y la liberación de su asesino. Bill Hodges, gradualmente empieza a hacer parte de esta historia."},
  {nombre: `LA TORMENTA DEL SIGLO`, precio: 4000, genero: "FANTASIA, CIENCIA FICCION", img: "ima/LA_TORMENTA_DEL_SIGLO.jpg", descripcion: "La llaman la tormenta del siglo. Los habitantes de la isla de Little Tall ya han sido testigos de las violentas tormentas, pero esta es distinta. Esta vez trae algo que nadie quiere ver..."},
  {nombre: `RABIA`, precio: 2500, genero: "SUSPENSO, TERROR", img: "ima/Rabia-Richard-Bachman.jpg", descripcion: "Rabia nos relata la historia de un joven estudiante de preparatoria que causa un tiroteo en su escuela. Cuando sus compañeros escuchen lo que tiene para decir, se podrán ir."},
  {nombre: `MISERY`, precio: 3000, genero: "SUSPENSO, TERROR", img: "ima/misery.webp", descripcion: "Durante un viaje, Paul Sheldon sufre un accidente de auto y es recogido por quién dice ser su admiradora numero uno: una enfermera acusada de asesinato."},
  {nombre: `JOYLAND`, precio: 3000, genero: "TERROR", img: "ima/joyland.jpg", descripcion: "Dos amigos se unen para cumplir el sueño de ir al Joyland, un parque de diversiones que oculta una historia de fantasmas."},
  {nombre: `LA MITAD OSCURA`, precio: 4500, genero: "RECOPILACION", img: "ima/LA_MITAD_OSCURA.jpg", descripcion: "Cuando el Alan Pangborn es acusado de asesinato, Thad quería afirmar su inocencia,¿cómo podía explicar que sus huellas aparecieran por toda la escena del crimen?."},
  {nombre: `EL INSTITUTO`, precio: 3600, genero: "CIENCIA FICCION", img: "ima/The-Institute.jpg", descripcion: "Luke Ellis es un chico especial. Tiene un pequeño poder que otros ansían más que él y por el que asesinarán y harán lo que haga falta."},     
  {nombre: `CHRISTINE`, precio: 2000, genero: "TERROR", img: "ima/CHRISTINE.jpg", descripcion: "Arnie Cunningham compra su primer auto. Pero, cuando la gente comienza a morir en sospechosos accidentes, no se puede negar la verdad: el auto está vivo."} 
]; */


/* localStorage.setItem("libros", JSON.stringify(libros)) */

let libros= JSON.parse(localStorage.getItem("libros"));
libros.sort((v1, v2) => v1.precio - v2.precio);         
console.table(libros);



let carrito = [];
let dueño = "";
const carritoDeCompras = document.querySelector(`#carritoDeCompras`);
const total = document.querySelector(`#total`);
const mainFloor= document.getElementById("mainFloor");
const agregar= document.getElementById("agregar");




/* const buscador= document.querySelector(`#buscarTitulo`)
const resultadoBuscador= document.querySelector(`#resultadoBuscador`)
const lupa= document.querySelector(`.lupa`) */



/* const busqueda= [];
console.log(busqueda)

function buscar(){
  lupa.addEventListener(`click`, ()=>{

      let palabra= buscador.value.toUpperCase();
    
        for(let libro of libros){
          let nombre= libro.nombre.toLocaleUpperCase();
          if(nombre.startsWith(palabra) == true){
            busqueda.push(libro)
          }
          
        }
      })
}
buscar() */






function crearTienda(array){
  array.forEach((libro)=>{
  let card = document.createElement("div");
    card.className= "card"; 
    tienda.append(card) 
    let cardImg = document.createElement("div");
    cardImg.className= "img-box";
    cardImg.innerHTML= `<img src="${libro.img}" class="card-img-top" id="imagen">`;
    card.append(cardImg); 
    let cardBody= document.createElement("div");
    cardBody.className= "card-body"
    cardBody.innerHTML=`
                        <h1 id="libroTitulo">${libro.nombre}</h1>
                        <h2 id="libroPrecio">$${libro.precio}</h2>
                        <b>${libro.genero}</b>
                        <p>${libro.descripcion}</p><br>`;
    card.appendChild(cardBody);
    let boton = document.createElement(`button`);
    boton.className = "botonComprar";
    boton.innerText = "Agregar al carrito";
    cardImg.appendChild(boton);
    boton.addEventListener("click", ()=>{
      
      let carritoDeCompras= document.getElementById("carritoDeCompras");
      let carritoElement= document.createElement("div");
      let borrarElement= document.createElement("button");
      carritoElement.className= "carritoElement"
      carritoElement.innerHTML= `<div>${libro.nombre}</div><div>$${libro.precio}</div>`
      borrarElement.className="borrar";
      borrarElement.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>`;
      borrarElement.addEventListener("click", ()=>{
        carritoElement.parentNode.removeChild(carritoElement)

          let nombre= libro.nombre;
          let buscarSustraer= carrito.find(libro => libro.nombre == nombre);
          let numBuscar= carrito.indexOf(buscarSustraer);
          carrito.splice(numBuscar ,1);

          if(total.innerHTML != ``){
            total.innerHTML= ``;
          }
      })
      carritoElement.appendChild(borrarElement);
      carritoDeCompras.append(carritoElement); 
      
      carrito.push({precio: libro.precio, nombre: libro.nombre})   
    });
  });
} crearTienda(libros) 





  function agregaCarrito(){
    let finalizar = document.getElementById(`finalizar`)
    finalizar.className= "botonFinalizar"
    finalizar.addEventListener(`click`, ()=>{ 

      if(total.innerHTML != ``){
        total.innerHTML= ``;
      }

      let sumar = carrito.reduce((acc, e) => acc + e.precio, 0);
      let valor = document.createElement("div");

      valor.innerHTML= `<div>Precio</div><div>$${sumar}</div>`;
      valor.className= "carritoElement"
      total.appendChild(valor)
      
      if ((sumar >=3000)&&(sumar < 4000)){
        let cardTop= document.createElement("div");
        let cardFloor= document.createElement("div");
        cardTop.className= "carritoElement";
        cardFloor.className= "carritoElement";

        let desc= Math.round(sumar * 0.1);
        let round= Math.round(sumar-desc);

        cardTop.innerHTML= `<div> -10% </div><div> $${desc} </div>`
        cardFloor.innerHTML= `<div> Total </div><div> $${round} </div>`;

        total.appendChild(cardTop);
        total.appendChild(cardFloor);
      }  
      else if((sumar >=4000)&&(sumar < 5000)){
        let cardTop= document.createElement("div");
        let cardFloor= document.createElement("div");
        cardTop.className= "carritoElement";
        cardFloor.className= "carritoElement";

        let desc= Math.round(sumar * 0.2);
        let round= Math.round(sumar-desc);

        cardTop.innerHTML= `<div> -20% </div><div> $${desc} </div>`
        cardFloor.innerHTML= `<div> Total </div><div> $${round} </div>`;

        total.appendChild(cardTop);
        total.appendChild(cardFloor);
      }
      else if(sumar >=5000){
        let cardTop= document.createElement("div");
        let cardFloor= document.createElement("div");
        cardTop.className= "carritoElement";
        cardFloor.className= "carritoElement";

        let desc= Math.round(sumar * 0.3);
        let round= Math.round(sumar-desc);

        cardTop.innerHTML= `<div> -30% </div><div> $${desc} </div>`
        cardFloor.innerHTML= `<div> Total </div><div> $${round} </div>`;

        total.appendChild(cardTop);
        total.appendChild(cardFloor);
      }
      else{
        let cardFloor= document.createElement("div");
        cardFloor.className= "carritoElement";
        cardFloor.innerHTML= `<div> Total </div><div>$${sumar}</div>`;
        total.appendChild(cardFloor);
      }
    }) 
  }agregaCarrito()
    



  function vaciarCarrito() {
    let vaciarCarrito = document.getElementById(`vaciarCarrito`)
    vaciarCarrito.className= "botonFinalizar"
    vaciarCarrito.addEventListener(`click`, ()=>{ 
      carrito = [];
      total.innerHTML= ``;
      carritoDeCompras.innerHTML= ``;
    })
}vaciarCarrito()



                      
  function suscribirse(){
    const susText= document.getElementById("susText");
    let botonSus= document.getElementById("botonSuscripcion");
    botonSus.addEventListener("click", (e)=>{
      const susNombre= document.getElementById(`susNombre`).value.toUpperCase();
      const susApellido= document.getElementById("susApellido").value.toUpperCase();  
      const susMail= document.getElementById("susMail").value.toLowerCase();
      console.log(susNombre)
       e.preventDefault();
        if(susNombre.length == 0){
          susText.innerHTML= `*Escriba su nombre`
        }else if(susMail.length == 0){
          susText.innerHTML= `*Escriba su mail`
        }else{

          function guardarStorage(){
            let suscriptor= {
              nombre: susNombre,
              apellido: susApellido,
              mail: susMail
            }
            localStorage.setItem("suscriptor", JSON.stringify(suscriptor));
          }
          //guardarStorage

          function verDatosSuscriptor(){
            if(localStorage.getItem("suscriptor")){
              let suscriptor= localStorage.getItem("suscriptor");
              console.log("suscriptor");
            }
          }
          //verDatosSuscriptor()

          alert(`¡¡Felisitaciones!! ${susNombre} Te has suscripto a la página de libros de Stephen king`)
        }
      })
      }
suscribirse()  

//Recuperar datos previos
/* let usuario;
let use= JSON.stringify(localStorage.getItem(`usuario`))
//Si había algo almacenado, lo recupero. Si no, le paso un ingreso
if (use){
  usuario = use
}else{
  usuario = prompt(`ingrese su nombre de usuairo`)
}

//Recuparar datos previos
carrito= []
let carri= JSON.stringify(localStorage.getItem(`carrito`))
//inicializo mi carrito con un array vacio o con el registro que haya quedado en LS
if(carri){
  carrito = carri
} */
//Funicon que redendiza el carrito



function contacto(){
  const botonSus= document.getElementById("botonContacto");
  const textContacto= document.getElementById("textContacto");
  botonSus.addEventListener("click", (e)=>{
    e.preventDefault();
    const formNombre= document.getElementById("formNombre").value.toUpperCase();
    const formApellido= document.getElementById("formApellido").value.toUpperCase();  
    const formMail= document.getElementById("formMail").value.toLowerCase(); 
    const formNumero= document.getElementById("formNumero");
    const formText= document.getElementById("formText").value;
       if(formText.length < 50){
        textContacto.innerHTML=`*El mensaje debe tener por lo menos 50 caracteres`;
      }else if(formNombre.length == 0){
        textContacto.innerHTML=`*Escriba un nombre`
      }else if(formApellido.length == 0){
        textContacto.innerHTML=`*Escriba un apellido`
      }else if(formMail.length == 0){
        textContacto.innerHTML=`*Escriba un mail`
      }
      else{
        textContacto.innerHTML=`Su mensaje ha sido enviado correctamente. A la brevedad nos pondremos en contacto con usted`
      }
    })
    }
contacto() 




 function modificar(){
let botonModificar= document.getElementById("botonModificar");
botonModificar.addEventListener("click", ()=>{
const password= document.getElementById('password');
if (password.value === dueño){

  let contenedorModificar= document.createElement("div");
    let agregarElemento= document.createElement("button");
    agregarElemento.innerHTML= 'Agregar libro';
    agregarElemento.addEventListener("click", ()=>{
      addLibro()
    })
  
    let sustraerElemento= document.createElement("button");
    sustraerElemento.innerHTML= 'Quitar libro';
    sustraerElemento.addEventListener("click", ()=>{
      let sustraer= document.getElementById("sustraer");
      
      let titulo= document.createElement("div");
      let input= document.createElement("div");
      let botonSustraer= document.createElement("button");
      
      titulo.innerHTML= '<p>Escriba el libro que desea sustraer</p>';
      input.innerHTML= `<div><input type="text" placeholder="Título" id="libroASustraer"></div>`;
      botonSustraer.innerHTML= `Eliminar`;
      
      botonSustraer.addEventListener("click", ()=>{
        let libros= JSON.parse(localStorage.getItem("libros"));
        let libroASustraer= document.getElementById("libroASustraer").value.toUpperCase();
        let buscarSustraer= libros.find(elemento => elemento.nombre == libroASustraer);
        let numBuscar= libros.indexOf(buscarSustraer);
        
        libros.splice(numBuscar ,1);
        localStorage.setItem("libros", JSON.stringify(libros));
      })

      sustraer.appendChild(titulo);
      sustraer.appendChild(input);
      sustraer.appendChild(botonSustraer);
    })
    
    let modificarElemento= document.createElement("button");
    modificarElemento.innerHTML= 'Modificar';
    
    contenedorModificar.appendChild(agregarElemento);
    contenedorModificar.appendChild(sustraerElemento);
    contenedorModificar.appendChild(modificarElemento);
    mainFloor.appendChild(contenedorModificar);

 
}
 })
}
modificar()
 


/*  
   case 2: 
        function sustraerElemento(){
          let elementos= parseInt(prompt(`¿Cuantos elementos desea sustraer de la tienda?`));
          let libros= JSON.parse(localStorage.getItem("libros"));
          for (i=0; i<elementos; i++){
            let nombreSustraer= prompt("Ingrese el nombre del libro que desea sustraer").toUpperCase();
            let buscarSustraer= libros.find(elemento => elemento.nombre == nombreSustraer);
            let numBuscar= libros.indexOf(buscarSustraer);
            libros.splice(numBuscar ,1);
          }
          localStorage.setItem("libros", JSON.stringify(libros));
        }sustraerElemento()

      break;

        case 3:
          let modificarElemento=  parseInt(prompt(`*1 Modificar título *2 Modificar precio *3 Modificar descripción *4 Modificar imágen *5 Modificar género`));
          switch (modificarElemento) {
            case 1:
              function modificarTitulo(){
                let elementos= parseInt(prompt(`¿A cuantos libros que desea cambiar de título?`));
                let libros= JSON.parse(localStorage.getItem("libros"));
                for (i=0; i<elementos; i++){
                  let nombre= prompt("Título actual del libro").toUpperCase();
                  let newNombre= prompt("Nuevo título del libro").toUpperCase();
                  let elemento= libros.find(elemento => elemento.nombre == nombre);
                  elemento.nombre = newNombre;
                }
                localStorage.setItem("libros", JSON.stringify(libros));
              }modificarTitulo()
              break;
          
            case 2:
              function modificarPrecio(){
                let elementos= parseInt(prompt(`¿A cuantos libros que desea cambiar de precio?`));
                let libros= JSON.parse(localStorage.getItem("libros"));
                for (i=0; i<elementos; i++){
                  let nombre= prompt("A qué libro desea cambiar de precio").toUpperCase();
                  let newPrecio= Number(prompt("Nuevo precio del libro"));
                  let elemento= libros.find(elemento => elemento.nombre == nombre);
                  elemento.precio = newPrecio;
                }
                localStorage.setItem("libros", JSON.stringify(libros));
              }modificarPrecio()

              break;

            case 3:
              function modificarDescripcion(){
                let elementos= parseInt(prompt(`¿A cuantos libros que desea cambiar de descripción?`));
                let libros= JSON.parse(localStorage.getItem("libros"));
                for (i=0; i<elementos; i++){
                  let nombre= prompt("Título del libro que desea modificar").toUpperCase();
                  let newDescription= prompt("Nueva descripción");
                  let elemento= libros.find(elemento => elemento.nombre == nombre);
                  elemento.descripcion = newDescription;
                }
                localStorage.setItem("libros", JSON.stringify(libros));
              }modificarDescripcion()

              break;

            case 4:
              function modificarTitulo(){
                let elementos= parseInt(prompt(`¿A cuantos libros que desea cambiar de imágen?`));
                let libros= JSON.parse(localStorage.getItem("libros"));
                for (i=0; i<elementos; i++){
                  let nombre= prompt("Título del libro a modificar imágen").toUpperCase();
                  let newImagen= prompt("Link de la nueva imágen");
                  let elemento= libros.find(elemento => elemento.nombre == nombre);
                  elemento.img = newImagen;
                }
                localStorage.setItem("libros", JSON.stringify(libros));
              }modificarTitulo()

              break;

            case 5:
              function modificarTitulo(){
                let elementos= parseInt(prompt(`¿A cuantos libros que desea cambiar el género?`));
                let libros= JSON.parse(localStorage.getItem("libros"));
                for (i=0; i<elementos; i++){
                  let nombre= prompt("Título del libro").toUpperCase();
                  let newGenero= prompt("Nuevo genero del libro").toUpperCase();
                  let elemento= libros.find(elemento => elemento.nombre == nombre);
                  elemento.genero = newGenero;
                }
                localStorage.setItem("libros", JSON.stringify(libros));
              }modificarTitulo()

              break;


            default:
              break;
          }
      }
  }
*/

















function addLibro() {

let botonBorrar=  document.createElement("button");
let newLibro= document.createElement("div");
let botonPush= document.createElement("button")
botonBorrar.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`
newLibro.innerHTML= `
<div><input type="text" placeholder="Título" id="newLibroNombre"></div>
<div><input type="number" placeholder="Precio" id="newLibroPrecio"></div>
<div><input type="text" placeholder="Genero" id="newLibroGenero"></div>
<div><input type="text" placeholder="Imágen" id="newLibroImg"></div>
<div><input type="text" placeholder="descripcion" id="newLibroDescripcion"></div>`;
botonPush.innerText= `Guardar`;
botonPush.addEventListener("click", ()=>{
  let newLibroNombre= document.getElementById("newLibroNombre").value.toUpperCase();
  let newLibroPrecio= document.getElementById("newLibroPrecio").value;
  let newLibroGenero= document.getElementById("newLibroGenero").value.toUpperCase();
  let newLibroImg= document.getElementById("newLibroImg").value;
  let newLibroDescripcion= document.getElementById("newLibroDescripcion").value;

  let libros= JSON.parse(localStorage.getItem("libros"));
  libros.push({nombre: newLibroNombre, precio: newLibroPrecio, genero: newLibroGenero, img: newLibroImg, descripcion: newLibroDescripcion});
  localStorage.setItem("libros", JSON.stringify(libros)); 
})
botonBorrar.addEventListener("click", ()=>{
  agregar.innerHTML= '';
})

agregar.appendChild(botonBorrar)
agregar.appendChild(newLibro)
agregar.appendChild(botonPush)
}