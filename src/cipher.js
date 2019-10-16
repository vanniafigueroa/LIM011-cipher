window.cipher= {
    encode: (offset, string) => {
        let ascii
        let operacion
        let total1
        let sumatoria1=""

        for (let i= 0; i < string.length; i++) {
            ascii= string.charCodeAt(i)
            if ( ascii >= 65 && ascii <= 90) {
                operacion=((ascii - 65) +parseInt(offset))%26+65
                total1= String.fromCharCode(operacion)
                sumatoria1 += total1; 
            }    
        }
       return sumatoria1
    },
    decode: (offset, string) => {
        let ascii
        let operacion
        let totales1
        let suma1=""      
        for (let i= 0; i < string.length; i++) {
            ascii= string.charCodeAt(i)
            if ( ascii >= 65 && ascii <= 90) {
                operacion=((ascii - 90) - parseInt(offset))%26+90
                totales1= String.fromCharCode(operacion)
                suma1 += totales1;
            }  
        }
       return suma1
    }
}