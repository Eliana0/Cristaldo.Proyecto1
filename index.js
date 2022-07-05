const tienda = document.getElementById("galeria");

const libros = [
  {id: 1, nombre: `IT`, precio: 6400, genero: "TERROR", img: `ima/IT.jpg`, descripcion: "It es un payaso malvado que vive bajo la ciudad de Derry y se alimenta del miedo de sus victimas. Sólo un grupo de niños unidos por la amistad podrán detenerlo."},
  {id: 2, nombre: `DESPUÉS`, precio: 4200, genero: "CRIMINAL, SUSPENSO", img: `ima/despues.jpg`, descripcion: "Cuando una inspectora le obliga a evitar el último atentado de un asesino, Jamie no tardará en descubrir que el precio que debe pagar por su poder tal vez es demasiado alto."}, 
  {id: 3, nombre: `EL RESPLANDOR`, precio: 3600, genero: "TERROR", img: `ima/EL_RESPLANDOR.jpg`, descripcion: "Jack es contratado para cuidar el hotel Overlook junto con su familia. Lo que no esperaban es que ese lugar despertará el resplandor de su hijo Danny."}, 
  {id: 4, nombre: `LA CÚPULA`, precio: 6500, genero: "CIENCIA FICCION", img: `ima/la-cupula-stephen-king.jpg`, descripcion: "Chester`s Mill es un pueblo normal hasta que un misterioso domo cae alrededor de él. Nadie puede entra... ni salir. Los ciudadanos deberán arreglarse por su cuenta."},
  {id: 5, nombre: `LA EXPEDICIÓN`, precio: 3600, genero: "RECOPILACION", img: `ima/LA_EXPEDICION.jpg`, descripcion: "Una recopilación de cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {id: 6, nombre: `OJOS DE FUEGO`, precio: 4200, genero: "CIENCIA FICCION", img: `ima/OJOS_DE_FUEGO.jpg`, descripcion: "Charly es una niña que, junto con su padre, debe escapar de la organización que años atrás experimentó con ellos y les dió sus poderes."},
  {id: 7, nombre: `EL UMBRAL DE LA NOCHE`, precio: 3700, genero: "RECOPILACION", img: "ima/el-umbral-de-la-noche-1.jpg", descripcion: "Aquellos que mueren rápidamente son el realidad los más afortunados, ya que para los supervivientes Desesperación se convertirá en el escenario de una horrenda pesadilla."},
  {id: 8, nombre: `EL VISITANTE`, precio: 4700, genero: "FANTASIA, TERROR", img: "ima/EL_VISITANTE.jpg", descripcion: "El detective Anderson no está satisfecho. Maitland parece un buen tipo, un ciudadano ejemplar, ¿acaso tiene dos caras? Y ¿cómo es posible que estuviera en dos sitios a la vez?"},
  {id: 9, nombre: `LA MILLA VERDE`, precio: 3500, genero: "FANTASIA, DRAMA", img: "ima/LA_MILLA_VERDE.jpg", descripcion: "La penitenciaría Could Mountain es donde los condenados esperan la muerte. Pero un día llega un preso peculiar."},
  {id: 10, nombre: `DESPUÉS DE MEDIANOCHE`, precio: 2800, genero: "RECOPILACION", img: "ima/despues-de-medianoche.jpg", descripcion: "Una recopilación de cuatro cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {id: 11, nombre: `CEMENTERIO DE ANIMALES`, precio: 3500, genero: "TERROR", img: "ima/cementerio-de-animales.jpg", descripcion: "Cuando el gato de la familia fallece en un accidente de carretera, es enterrado en un antiguo cementerio. Al otro día aparece vivo... pero no es el mismo."},
  {id: 12, nombre: `EL BAZAR DE LOS MALOS SUEÑOS`, precio: 3500, genero: "RECOPILACION", img: "ima/EL_BAZAR_DE_LOS_MALOS_SUEÑOS.jpg", descripcion: "Una recopilación de cuentos escritos por el indiscutido maestro del terror, Stephen King."},
  {id: 13, nombre: `QUIÉN PIERDE, PAGA`, precio: 3000, genero: "THRILLER CRIMINAL", img: "ima/QUIEN_PIERDE_PAGA.jpg", descripcion: "El asesinato del escritor John Rothstein, sus notas perdidas y la liberación de su asesino. Bill Hodges, gradualmente empieza a hacer parte de esta historia."},
  {id: 14, nombre: `LA TORMENTA DEL SIGLO`, precio: 4000, genero: "FANTASIA, CIENCIA FICCION", img: "ima/LA_TORMENTA_DEL_SIGLO.jpg", descripcion: "La llaman la tormenta del siglo. Los habitantes de la isla de Little Tall ya han sido testigos de las violentas tormentas, pero esta es distinta. Esta vez trae algo que nadie quiere ver..."},
  {id: 15, nombre: `RABIA`, precio: 2500, genero: "SUSPENSO, TERROR", img: "ima/Rabia-Richard-Bachman.jpg", descripcion: "Rabia nos relata la historia de un joven estudiante de preparatoria que causa un tiroteo en su escuela. Cuando sus compañeros escuchen lo que tiene para decir, se podrán ir."},
  {id: 16, nombre: `MISERY`, precio: 3000, genero: "SUSPENSO, TERROR", img: "ima/misery.webp", descripcion: "Durante un viaje, Paul Sheldon sufre un accidente de auto y es recogido por quién dice ser su admiradora numero uno: una enfermera acusada de asesinato."},
  {id: 17, nombre: `JOYLAND`, precio: 3000, genero: "TERROR", img: "ima/joyland.jpg", descripcion: "Dos amigos se unen para cumplir el sueño de ir al Joyland, un parque de diversiones que oculta una historia de fantasmas."},
  {id: 18, nombre: `LA MITAD OSCURA`, precio: 4500, genero: "RECOPILACION", img: "ima/LA_MITAD_OSCURA.jpg", descripcion: "Cuando el Alan Pangborn es acusado de asesinato, Thad quería afirmar su inocencia,¿cómo podía explicar que sus huellas aparecieran por toda la escena del crimen?."},
  {id: 19, nombre: `EL INSTITUTO`, precio: 3600, genero: "CIENCIA FICCION", img: "ima/The-Institute.jpg", descripcion: "Luke Ellis es un chico especial. Tiene un pequeño poder que otros ansían más que él y por el que asesinarán y harán lo que haga falta."},     
  {id: 20, nombre: `CHRISTINE`, precio: 2000, genero: "TERROR", img: "ima/CHRISTINE.jpg", descripcion: "Arnie Cunningham compra su primer auto. Pero, cuando la gente comienza a morir en sospechosos accidentes, no se puede negar la verdad: el auto está vivo."} 
];

libros.sort((v1, v2) => v1.precio - v2.precio); 
crearTienda(libros) 
console.table(libros);


let carrito = [];
let n10= "10";
let n20= "20";
let n30= "30";
let p10= 0.1;
let p20= 0.2;
let p30= 0.3;
const carritoDeCompras = document.querySelector(`#carritoDeCompras`);
const vaciarCarrito = document.getElementById(`vaciarCarrito`);
const total = document.querySelector(`#total`);



function ordenarMayor(){
  let botonMayor= document.getElementById(`botonMayor`);
  botonMayor.addEventListener("click", ()=>{
    libros.sort((v1, v2) => v1.precio - v2.precio) && orden(libros.sort((v1, v2) => v2.precio - v1.precio));
  })
}ordenarMayor()

function ordenarMenor(){
  let botonMenor= document.getElementById(`botonMenor`);
  botonMenor.addEventListener("click", ()=>{
    libros.sort((v1, v2) => v2.precio - v1.precio) && orden(libros.sort((v1, v2) => v1.precio - v2.precio));
  })
}ordenarMenor()

function orden(formula){
  tienda.innerHTML="";
  crearTienda(formula)
}



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
      
  agregaCompras(libro)
    });
  });
} 
//crearTienda(libros) 





  function agregaCarrito(){
    let finalizar = document.getElementById(`finalizar`)
    finalizar.className= "botonFinalizar"
    finalizar.addEventListener(`click`, ()=>{ 

        total.innerHTML= ``;

      let sumar = carrito.reduce((acc, e) => acc + e?.precio, 0);
      let valor = document.createElement("div");

      valor.innerHTML= `<div>Precio</div><div>$${sumar}</div>`;
      valor.className= "carritoElement"
      total.appendChild(valor)
      
      if ((sumar >=3000)&&(sumar < 4000)){
        porcentaje(n10, p10, sumar)
      }  
      else if((sumar >=4000)&&(sumar < 5000)){
        porcentaje(n20, p20, sumar)
      }
      else if(sumar >=5000){
        porcentaje(n30, p30, sumar)
      }
      else{
        let cardFloor= document.createElement("div");
        cardFloor.className= "carritoElement";
        cardFloor.innerHTML= `<div> Total </div><div>$${sumar}</div>`;
        total.appendChild(cardFloor);
      }
    }) 
  }agregaCarrito()
    




  function borrarCarrito() {
    
    vaciarCarrito.className= "botonFinalizar";
    vaciarCarrito.addEventListener(`click`, ()=>{ 
      carrito = [];
      total.innerHTML= ``;
      carritoDeCompras.innerHTML= ``;
    })
}borrarCarrito()




                      
  function suscribirse(){
    const susText= document.getElementById("susText");
    let botonSus= document.getElementById("botonSuscripcion");
    botonSus.addEventListener("click", (e)=>{
      const susNombre= document.getElementById(`susNombre`).value.toUpperCase();
      const susApellido= document.getElementById("susApellido").value.toUpperCase();  
      const susMail= document.getElementById("susMail").value.toLowerCase();
  
       e.preventDefault();

         if(susNombre.length == 0){
           susText.innerHTML= `*Escriba su nombre`
         }else if(susApellido.length == 0){
             susText.innerHTML= `*Escriba su apellido`
         }else if(susMail.length == 0){
            susText.innerHTML= `*Escriba su mail`
         }else{
            const suscriptor= {
              nombre: susNombre,
              apellido: susApellido,
              mail: susMail,
             productos: carrito
            };
            
            localStorage.setItem("suscriptor", JSON.stringify(suscriptor));
            
            alert(`¡¡Felisitaciones!! ${susNombre} Te has suscripto a la página de libros de Stephen king`);
            susNombre.innerHTML= "";
            susApellido.innerHTML= "";
            susMail.innerHTML= ""; 
        }
      
      })
    }
    suscribirse()  




    function verDatosSuscriptor(){
      
      const botonUsuario= document.getElementById("botonUsuario");
      botonUsuario.addEventListener("click", ()=>{
        total.innerHTML="";
        
        let mail= document.getElementById('buscarUsuario').value.toLowerCase();
      let suscriptor= JSON.parse(localStorage.getItem(`suscriptor`));
        suscriptor.mail === mail ? bienvenidaUsuario() : alert("Usuario no suscripto");
      })
    }verDatosSuscriptor()




    function cerrarUsuario(){
        const cerrarSesion = document.getElementById("cerrarSesion");
        cerrarSesion.addEventListener("click", ()=>{

        let suscriptor= JSON.parse(localStorage.getItem(`suscriptor`));
        let {nombre, apellido} = suscriptor;
        let mensajeSus= document.getElementById("mensajeSus");
        mensajeSus.innerHTML="";

        alert(`Hasta la proxima, ${nombre} ${apellido}`);

        suscriptor.productos = carrito;
        localStorage.setItem("suscriptor", JSON.stringify(suscriptor));
        carrito = [];
        total.innerHTML= ``;
        carritoDeCompras.innerHTML= ``;
      })
    }cerrarUsuario()



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
      formNombre.innerHTML= "";
      formApellido.innerHTML= "";
      formMail.innerHTML= "";
      formNumero.innerHTML= "";
      formText.innerHTML= "";
    })
    }
contacto() 




function agregaCompras(objeto){

  let carritoElement= document.createElement("div");
  let borrarElement= document.createElement("button");
  carritoElement.className= "carritoElement"
  carritoElement.innerHTML= `<div>${objeto?.nombre}</div><div>$${objeto?.precio}</div>`
  borrarElement.className="borrar";
  borrarElement.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;
  borrarElement.addEventListener("click", ()=>{
    carritoElement.parentNode.removeChild(carritoElement)
    
    let nombre= objeto?.nombre;
    let buscarSustraer= carrito.find(elemento => elemento?.nombre == nombre);
    let numBuscar= carrito.indexOf(buscarSustraer);
    carrito.splice(numBuscar ,1);
    
    total.innerHTML= ``;
  })
  carritoElement.appendChild(borrarElement);
  carritoDeCompras.append(carritoElement); 
  
  carrito.push({precio: objeto?.precio, nombre: objeto?.nombre})
}
   


function porcentaje(n, porcentaje, sumar){
  
  let cardTop= document.createElement("div");
  let cardFloor= document.createElement("div");
  cardTop.className= "carritoElement";
  cardFloor.className= "carritoElement";
  
  let desc= Math.round(sumar * porcentaje);
  let round= Math.round(sumar-desc);
  
  cardTop.innerHTML= `<div> -${n}% </div><div> $${desc} </div>`
  cardFloor.innerHTML= `<div> Total </div><div> $${round} </div>`;
  
  total.appendChild(cardTop);
  total.appendChild(cardFloor);
}



function bienvenidaUsuario(){
  let suscriptor= JSON.parse(localStorage.getItem(`suscriptor`));
  let {nombre, apellido, productos} = suscriptor;
  
  for(let libro of productos){
    agregaCompras(libro)
  }
  let mensajeSus= document.getElementById("mensajeSus");
  mensajeSus.innerHTML="";
  mensajeSus.innerHTML=`<h2>Hola, ${nombre} ${apellido}, bienvenido nuevamente<h2>`;
}