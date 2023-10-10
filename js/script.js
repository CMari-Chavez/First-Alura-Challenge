 var botonEncriptar = document.getElementById("btn__encriptar");
 var botonDesencriptar = document.getElementById("btn__desencriptar");
 var imgPusheen = document.getElementById("img__resultado");
 var parrafo = document.getElementById("container_parrafo");
 var resultado = document.getElementById("texto__resultado");
 //var textoAEncDesc = document.getElementById("input__texto");

 botonEncriptar.onclick = encriptar;
 botonDesencriptar.onclick = desencriptar;

 function encriptar (){ //funcion que llama para encriptar texto
    ocultarAdelante(); //oculta los detalles iniciales de la pagina
    var cajaTexto = recuperarTexto(); //recupera el texto
    if (cajaTexto != ""){
        resultado.textContent = encriptarTexto(cajaTexto);
    }else{
        sinResultado();
        mostrarAdelante();
    }
   
 }

 function desencriptar (){ //funcion que llama para desencriptar texto
    ocultarAdelante(); //oculta los detalles iniciales de la pagina
    var cajaTexto = recuperarTexto(); // recupera el texto
    if (cajaTexto != ""){
        resultado.textContent = desencriptarTexto(cajaTexto);
    }else{
        sinResultado();
        mostrarAdelante();

    } 
 }

 function recuperarTexto (){
    var cajaTexto = document.getElementById("input__texto"); //coloca en la variable el contenido del input texto
    console.log(cajaTexto.value)
    return cajaTexto.value; //devuelve el valor
 }

 function ocultarAdelante (){
    imgPusheen.classList.add("ocultar");
    parrafo.classList.add("ocultar");
 }

 function mostrarAdelante (){
    imgPusheen.classList.remove("ocultar")
    parrafo.classList.remove("ocultar");
 }

 function sinResultado(){
    var resultado = document.getElementById("texto__resultado");
    resultado.textContent = "";
    return resultado.textContent;

 }

 //ENCRIPTAR TEXTO
 function encriptarTexto(mensaje){
    var texto = mensaje.toLowerCase(); //QUITAMOS MAYUSCULAS Y ACENTOS
    var textoSinAcentos = texto
                        .replaceAll("á","a")
                        .replaceAll("é","e")
                        .replaceAll("í","i")
                        .replaceAll("ó","o")
                        .replaceAll("ú","u")
                        
    var textoEncriptado = textoSinAcentos
                        .replaceAll("e","enter")
                        .replaceAll("i","imes")
                        .replaceAll("o","ober")
                        .replaceAll("a","ai")
                        .replaceAll("u","ufat")
                        
    return textoEncriptado;
 }

//DESENCRIPTAR TEXTO
function desencriptarTexto(mensaje){
    var texto = mensaje.toLowerCase();//QUITAMOS MAYUSCULAS Y ACENTOS
    var textoSinAcentos = texto
                        .replaceAll("á","a")
                        .replaceAll("é","e")
                        .replaceAll("í","i")
                        .replaceAll("ó","o")
                        .replaceAll("ú","u")

    var textoDesencriptado = textoSinAcentos
                        .replaceAll("ai","a")
                        .replaceAll("enter","e")
                        .replaceAll("imes","i")
                        .replaceAll("ober","o")
                        .replaceAll("ufat","u")
    return textoDesencriptado;
 }

 const btnCopiar = document.getElementById("btn__copiar"); 
 btnCopiar.addEventListener("click", copiar = () => {
                                 var contenido = document.getElementById("texto__resultado");
                                 console.log("contenido: ", contenido );
                                 navigator.clipboard.writeText(contenido.textContent);
                             });


 /*function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        switch (texto[i]) {
            case "a":
                textoFinal = textoFinal + "ai";
                break;
            case "e":
                textoFinal = textoFinal + "enter";
                break;
            case "i":
                textoFinal = textoFinal + "imes";
                break;
            case "o":
                textoFinal = textoFinal + "ober";
                break;
            case "u":
                textoFinal = textoFinal + "ufat";
                break;
            default:
                textoFinal = textoFinal + texto[i];
            
        }
    }
    return textoFinal;
 }
 

 function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for (var i = 0; i < texto.length; i++){
        switch (texto[i]) {
            case "a":
                textoFinal = textoFinal  ;
                break;
            case "enter":
                textoFinal = textoFinal + "e";
                break;
            case "imes":
                textoFinal = textoFinal + "i";
                break;
            case "ober":
                textoFinal = textoFinal + "o";
                break;
            case "ufat":
                textoFinal = textoFinal + "u";
                break;
            default:
                textoFinal = textoFinal + texto[i];
            
        }
    }
    return textoFinal;
 }
*/
//  const btnCopiar = document.querySelector(".btn__copiar");
//     btnCopiar.addEventListener("click", () =>{
//         var contenido = document.querySelector("texto__resultado").textContent;
//         contenido.select();
//         document.execCommand('copy');
//         // navigator.clipboard.writeText(contenido);
//         // console.log("hola");
//     })

   



