
function cifrar(){
const offset= document.getElementById("offset1").value
let string = document.getElementById("ingresar-cifrado").value
    
    for(let i= 0; i < string.length; i++){
        ascii= string.charCodeAt(i)
        operacion=((ascii - 65 +parseInt(offset))%26+65)
        minuscula=((ascii - 97 +parseInt(offset))%26+97)
        result=((ascii - 48 + parseInt(offset))%26+48)
        total1= String.fromCharCode(operacion)
        total2=String.fromCharCode(minuscula)
        total3=String.fromCharCode(result)
        sumatoria1= total1 + sumatoria1
        sumatoria2=total2 + sumatoria2
        sumatoria3=total3 + sumatoria3
        document.getElementById("resultado").innerHTML= sumatoria1
            
    } 
   
}


function decode(){
const offset= document.getElementById("offset2").value
let string =document.getElementById("ingresar-descifrado").value
    for(let i=0; i < string.length; i++){
        ascii= string.charCodeAt(i)
        operacion=((ascii - 90 - parseInt(offset))%26+90)
        minuscula=((ascii - 122 - parseInt(offset))%26+122)
        result=((ascii - 10 - parseInt(offset))%26+10)
        totales1= String.fromCharCode(operacion)
        suma1=totales1 + suma1
        document.getElementById("final").innerHTML= suma1
        }

}


        
window.cipher = {
  // Acá escribe tu código.
  
};
