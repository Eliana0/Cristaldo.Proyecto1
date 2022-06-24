/* buscar= document.getElementById("listaBuscar"); */
tienda = document.getElementById("galeria");
const libros = [
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
];
libros.sort((v1, v2) => v1.precio - v2.precio);         
console.table(libros);




const lupa= document.getElementsByClassName("lupa");
const buscadorTitulo= document.getElementById("buscarTitulo");
tienda = document.getElementById("galeria");
buscadorTitulo.addEventListener("keyup", ()=>{

tienda.innerHTML= ``;

  const filter= buscadorTitulo.value.toUpperCase();
  for (let libro of libros){

    let nombre= libro.nombre.toUpperCase();
    (elemento => elemento.nombre.startsWith(filter));

    if(nombre.startsWith(filter) == true){

      function crearTienda(){
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
          precios.push(libro.precio)
          const carrito = [];
          carrito.push({precio: libro.precio, nombre: libro.nombre});
    
          carrito.forEach((libro)=>{
            let carritoDeCompras= document.getElementById("carritoDeCompras");
            let carritoElement= document.createElement("div");
            let borrarElement= document.createElement("button");
            carritoElement.className= "carritoElement"
            carritoElement.innerHTML= `<div>${libro.nombre}</div><div>$${libro.precio}</div>`
            borrarElement.className="borrar";
            borrarElement.innerHTML= `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>`;
            borrarElement.addEventListener("click", ()=>{
              carritoElement.parentNode.removeChild(carritoElement);
            })
            carritoElement.appendChild(borrarElement);
            carritoDeCompras.append(carritoElement);
          }); 
        });
      }
        crearTienda()
      }
    }
    })
        
    
        
      
















const precios= []; 
console.log(precios)










function total(){
 //const sum = precios.reduce((a, b) => a + b, 0);
 // console.log(sum)  


}total()
    

      
      //precios.reduce((acum, elemento)=> acum + elemento, 0)







                      
function suscribirse(){
    const susNombre= document.getElementById("susNombre");
    const susApellido= document.getElementById("susApellido");  
    const susMail= document.getElementById("susMail");
    let botonSus= document.getElementById("botonSuscripcion");
    const susText= document.getElementById("susText")
    botonSus.addEventListener("submit", (e)=>{
       e.preventDefault();
        if(susNombre.value.length == 0){
          susText.innerHTML= `*Escriba su nombre`
        }else if(susMail.value.length == 0){
          susText.innerHTML= `*Escriba su mail`
        }else{
          susText.innerHTML=`¡¡Felisitaciones!! ${susNombre.value} Te has suscripto a la página de libros de Stephen king`
        }
      })
      }
suscribirse()  



function contacto(){
  const formNombre= document.getElementById("formNombre");
  const formApellido= document.getElementById("formApellido");  
  const formMail= document.getElementById("formMail"); 
  const formNumero= document.getElementById("formNumero");
  const formText= document.getElementById("formText");
  const botonSus= document.getElementById("botonContacto");
  const textContacto= document.getElementById("textContacto");
  botonSus.addEventListener("submit", (e)=>{
    e.preventDefault();
       if(formText.value.length < 50){
        textContacto.innerHTML=`*El mensaje debe tener por lo menos 50 caracteres`
      }else if(formNombre.value.length == 0){
        textContacto.innerHTML=`*Escriba un nombre`
      }else if(formApellido.value.length == 0){
        textContacto.innerHTML=`*Escriba un apellido`
      }else if(formMail.value.length == 0){
        textContacto.innerHTML=`*Escriba un mail`
      }
      else{
        textContacto.innerHTML=`Su mensaje ha sido enviado correctamente. A la brevedad nos pondremos en contacto con usted`
      }
    })
    }
contacto()  



 
    let opcion= Number(prompt("*1 buscar libros *2 comprar *3 solo el propietario"));
  
switch (opcion) {
  case 1:

  let opcion1 = Number(prompt("* 1 buscar por precio *2 buscar por nombre *3 buscar por género"));
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
              let generoL= libros.filter(elemento => elemento.genero.startsWith(genero));
              console.log(generoL)
              break;
            default:
            break;
            }
            break;


    case 2:

        let elegir = prompt(`Ingrese el nombre del libro que desea comprar o "esc" para salir`).toUpperCase();
        const comprar = [];
        console.log(comprar)
      while (elegir != 'ESC') {
          comprar.push(libros.find(elemento => elemento.nombre == elegir));
          elegir = prompt(`Ingrese el nombre del libro que desea comprar o "esc" para salir`).toUpperCase();
        }
        let precios= comprar.map(elemento => elemento.precio +"......."+ elemento.nombre)

       for (i= 0; i<precios.length; i++) {
           console.log(precios[i]);
       }

       function suma(comprar){
         let precio= comprar.map(elemento => elemento.precio);
         let sumar= precio.reduce((acum, elemento)=> acum + elemento, 0)
         console.log(sumar)

        if((sumar >=3000)&&(sumar < 4000)){
        let desc= Math.round(sumar*0.1)
        console.log(desc + ".......-10%")
        console.log(Math.round(sumar-desc)+ ".......Total" );
      }
      else if((sumar >=4000)&&(sumar < 5000)){
        let desc= Math.round(sumar*0.2)
        console.log(desc+ ".......-20%")
        console.log(Math.round(sumar-desc)+ ".......Total" );
      }
      else if(sumar >=5000){
        let desc= Math.round(sumar*0.3)
        console.log(desc+ ".......-30%")
        console.log(Math.round(sumar-desc)+ ".......Total" );
      }
      else{
        console.log(`${sumar}.......Total`)
      }
    }
      suma()
      break;


    case 3:
      let usuario= "papita";
      if (usuario=="papita"){
        let opcion= Number(prompt(`*1 agregar elementos *2 Sustraer elementos`))
        switch (opcion) {
          case 1:
            let elementos1= Number(prompt(`¿Cuantos elementos desea agregar a la tienda?`));
            for (i=0; i<elementos1; i++){
              libros.push({nombre: prompt("Ingresa el nombre del libro que desea agregar").toUpperCase(), precio: Number(prompt("Ingrese el precio del libro")), genero: prompt("Ingrese el genero del libro").toUpperCase(), img: prompt("Ingrese la imagen"), descripcion: prompt("ingrese la descripción")})
            }
            libros.sort((v1, v2) => v1.precio - v2.precio);         
            console.table(libros);
            break;

            case 2: 
            let elementos2= Number(prompt(`¿Cuantos elementos desea sustraer de la tienda?`));
            for (i=0; i<elementos2; i++){
              let nombreSustraer= prompt("Ingrese el nombre del libro que desea sustraer").toUpperCase();
              let buscarSustraer= libros.find(elemento => elemento.nombre == nombreSustraer);
              let numBuscar= libros.indexOf(buscarSustraer);
              libros.splice(numBuscar ,1);
            }
            libros.sort((v1, v2) => v1.precio - v2.precio);        
            console.table(libros);
            break;

          default:
            break;
        }
      }
    } 








  /* for(e in libros){
    for (elementos in libros[e]){
      console.log(libros[e][elementos])
    }
  } */



/*  function crearTienda(){
  libros.forEach((libro)=>{
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
      })
      carritoElement.appendChild(borrarElement);
      carritoDeCompras.append(carritoElement); 



 

      const carrito = [];
      console.log(carrito)
      carrito.push({precio: libro.precio, nombre: libro.nombre})   
    });
  });
}crearTienda()   */








 