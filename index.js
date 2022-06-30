tienda = document.getElementById("galeria");


let libros= JSON.parse(localStorage.getItem("libros"));
libros.sort((v1, v2) => v1.precio - v2.precio);         
console.table(libros);



let carrito = [];
let dueño = "";
const carritoDeCompras = document.querySelector(`#carritoDeCompras`);
const total = document.querySelector(`#total`);
const mainFloor= document.getElementById("mainFloor");
const agregar= document.getElementById("agregar");
const sustraer= document.getElementById("sustraer");



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

  if (mainFloor.innerHTML != ""){
    mainFloor.innerHTML="";
  }

const password= document.getElementById('password');
if (password.value === dueño){

  let contenedorModificar= document.createElement("div");
  contenedorModificar.className= "contenedorModificar";

    let agregarElemento= document.createElement("button");
    agregarElemento.className="botonFinalizar";
    agregarElemento.innerHTML= 'Agregar libro';
    agregarElemento.addEventListener("click", ()=>{
      addLibro()
    })
  
    let sustraerElemento= document.createElement("button");
    sustraerElemento.className="botonFinalizar"
    sustraerElemento.innerHTML= 'Quitar libro';
    sustraerElemento.addEventListener("click", ()=>{
      sustraerLibro()
    })
    
    contenedorModificar.appendChild(agregarElemento);
    contenedorModificar.appendChild(sustraerElemento);
    mainFloor.appendChild(contenedorModificar);
}
 })
}
modificar()
 



function addLibro() {

if(agregar.innerHTML != ""){
  agregar.innerHTML="";
}

let botonBorrar=  document.createElement("button");
let newLibro= document.createElement("div");
let botonPush= document.createElement("button");
let contentFinalizar= document.createElement("div");

contentFinalizar.className="contentFinalizar";
botonBorrar.className="botonBorrar";
botonBorrar.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`;
newLibro.innerHTML= `
<div class="divContraseña"><input type="text" class="password" placeholder="Título" id="newLibroNombre"></div>
<div class="divContraseña"><input type="number" class="password" placeholder="Precio" id="newLibroPrecio"></div>
<div class="divContraseña"><input type="text" class="password" placeholder="Genero" id="newLibroGenero"></div>
<div class="divContraseña"><input type="text" class="password" placeholder="Imágen" id="newLibroImg"></div>
<div class="divContraseña"> <textarea class="password" placeholder="Descripción" id="formText" style="height: 100px"></textarea></div>
`;

botonPush.innerText= `Guardar`;
botonPush.className= "botonFinalizar";
botonPush.addEventListener("click", ()=>{
  let newLibroNombre= document.getElementById("newLibroNombre").value.toUpperCase();
  let newLibroPrecio= document.getElementById("newLibroPrecio").value;
  let newLibroGenero= document.getElementById("newLibroGenero").value.toUpperCase();
  let newLibroImg= document.getElementById("newLibroImg").value;
  let newLibroDescripcion= document.getElementById("newLibroDescripcion").value;

  let libros= JSON.parse(localStorage.getItem("libros"));
  libros.push({nombre: newLibroNombre, precio: newLibroPrecio, genero: newLibroGenero, img: newLibroImg, descripcion: newLibroDescripcion});
  localStorage.setItem("libros", JSON.stringify(libros)); 

  agregar.innerHTML= '';
  alert("El libro se ha agregado correctamente")
})

botonBorrar.addEventListener("click", ()=>{
  agregar.innerHTML= '';
})

contentFinalizar.append(botonPush)
agregar.appendChild(botonBorrar)
agregar.appendChild(newLibro)
agregar.appendChild(contentFinalizar)
}





function sustraerLibro(){

if(sustraer.innerHTML != ""){
  sustraer.innerHTML="";
}
      
let botonBorrar= document.createElement("button");
let titulo= document.createElement("div");
let input= document.createElement("div");
let botonSustraer= document.createElement("button");
let contentFinalizar= document.createElement("div");

contentFinalizar.className="contentFinalizar";
botonBorrar.className= "botonBorrar";
botonBorrar.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`;
titulo.innerHTML= '<p>Escriba el libro que desea sustraer</p>';
titulo.className= "subtext";
input.innerHTML= `<div class="divContraseña"><input type="text" placeholder="Título" class="password" id="libroASustraer"></div>`;
botonSustraer.innerHTML= `Eliminar`;
botonSustraer.className="botonFinalizar";

botonSustraer.addEventListener("click", ()=>{
  let libros= JSON.parse(localStorage.getItem("libros"));
  let libroASustraer= document.getElementById("libroASustraer").value.toUpperCase();
  let buscarSustraer= libros.find(elemento => elemento.nombre == libroASustraer);
  let numBuscar= libros.indexOf(buscarSustraer);
  
  libros.splice(numBuscar ,1);
  localStorage.setItem("libros", JSON.stringify(libros));

  sustraer.innerHTML=``;
  alert('El libro se ha eliminado correctamente')
})

botonBorrar.addEventListener("click", ()=>{
  sustraer.innerHTML=``;

})

contentFinalizar.append(botonSustraer);
sustraer.appendChild(botonBorrar);
sustraer.appendChild(titulo);
sustraer.appendChild(input);
sustraer.appendChild(contentFinalizar);
}