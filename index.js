
const tienda = document.getElementById("galeria");


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


 
const fetchData = async () => {
  const res = await fetch("data.json");
  const data = await res.json();

  data.sort((v1, v2) => v1.precio - v2.precio);
  console.table(data);




  function ordenarMayor(){
    let botonMayor= document.getElementById(`botonMayor`);
    botonMayor.addEventListener("click", ()=>{
      data.sort((v1, v2) => v1.precio - v2.precio) && orden(data.sort((v1, v2) => v2.precio - v1.precio));
    })
  }ordenarMayor()

  function ordenarMenor(){
    let botonMenor= document.getElementById(`botonMenor`);
    botonMenor.addEventListener("click", ()=>{
      data.sort((v1, v2) => v2.precio - v1.precio) && orden(data.sort((v1, v2) => v1.precio - v2.precio));
    })
  }ordenarMenor()
  
  function orden(formula){
    tienda.innerHTML="";
    crearTienda(formula)
  }




  function crearTienda(){
    data.forEach((libro)=>{
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
        
        boton.innerText= "Agregado";
        
        setTimeout(()=>{
          boton.innerText = "Agregar al carrito";
        }, 1500);
        
      });
    });
  }crearTienda()
}
fetchData();



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
      totalComprar(sumar)
    }) 
  }agregaCarrito()
    




  function borrarCarrito() {
    
    vaciarCarrito.className= "botonFinalizar";
    vaciarCarrito.addEventListener(`click`, ()=>{ 

      vaciar()
    })
}borrarCarrito()



function totalComprar(total){
  let botonComprar= document.getElementById("botonComprar");
  botonComprar.addEventListener("click", ()=>{
    total.innerHTML != "" && swal("¡¡GRACIAS!!", `En momentos recibirá un mail para que pueda recibir su pedido`, "success");
    vaciar()
  })
  }totalComprar(total)


  
function suscribirse(){
  document.getElementById("miFormSuscription").reset();
  const susText= document.getElementById("susText");
  let botonSus= document.getElementById("botonSuscripcion");
  botonSus.addEventListener("click", ()=>{
    const susNombre= document.getElementById(`susNombre`).value.toUpperCase();
    const susApellido= document.getElementById("susApellido").value.toUpperCase();  
    const susMail= document.getElementById("susMail").value.toLowerCase();

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
            
            document.getElementById("miFormSuscription").reset();
            
            swal(`!!Felisitaciones, ${susNombre}!!`, `Te has suscripto a la página de libros de Stephen King`);
          
        }
    
    })
  }
  suscribirse()   




    function verDatosSuscriptor(){
      
      const botonUsuario= document.getElementById("botonUsuario");
      botonUsuario.addEventListener("click", ()=>{
        total.innerHTML="";
        
        swal("Escriba su mail", {
          content: "input",
        })
        .then((value) => {
          let suscriptor= JSON.parse(localStorage.getItem(`suscriptor`));
            suscriptor.mail === value ? bienvenidaUsuario() : swal("Usuario no suscripto"); 
        });

      })
    }verDatosSuscriptor()




    function cerrarUsuario(){
        const cerrarSesion = document.getElementById("cerrarSesion");
        cerrarSesion.addEventListener("click", ()=>{

        let suscriptor= JSON.parse(localStorage.getItem(`suscriptor`));
        let {nombre, apellido} = suscriptor;

        swal({
          title: "¿Desea cerrar sesión?",
          text: "Al cerrar sesión sus libros quedarán guardados en el carrito",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {

          willDelete && swal(`Hasta la próxima, ${nombre} ${apellido}`, {icon: "success",});
      })
        suscriptor.productos = carrito;
        localStorage.setItem("suscriptor", JSON.stringify(suscriptor));
        vaciar()
      })
    }cerrarUsuario()


/*

function contacto(){
  document.getElementById("formContacto").reset();
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
        swal("Mensaje Enviado", "Su mensaje ha sido enviado correctamente. A la bervedad nos pondremos en contacto con usted", "success");
        document.getElementById("formContacto").reset();
      }
    })
    }
contacto() 

*/


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
  swal(`HOLA, ${nombre} ${apellido}`, `Bienvenido/a nuevamente`);
}


function vaciar(){
  carrito = [];
  total.innerHTML= ``;
  carritoDeCompras.innerHTML= ``;
}
