//alert("Alguna vez pensaste hablar y lograr entender como la pelicula Matrix?")

const offset1= document.getElementById("offset1")
let string1 = document.getElementById("ingresar-cifrado")
const offset2= document.getElementById("offset2")
let string2 =document.getElementById("ingresar-descifrado")

document.getElementById("cifrar").addEventListener("click", ()=>{
    let resultadoCifrar = cipher.encode(offset1.value, string1.value);
    document.getElementById("resultado").innerHTML= resultadoCifrar;
})
document.getElementById("descifrar").addEventListener("click", ()=>{
    let resultadoDescifrar = cipher.decode(offset2.value, string2.value);    

document.getElementById("final").innerHTML= resultadoDescifrar;
})
