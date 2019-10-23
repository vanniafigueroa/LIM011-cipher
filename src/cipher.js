window.cipher= {
    encode: (offset, string) => {
        let positionAsciiOfLetter
        let positionLetterCipher
        let letterCipher
        let resultFinal=""

        for (let i= 0; i < string.length; i++) {
            positionAsciiOfLetter= string.charCodeAt(i)
            if ( positionAsciiOfLetter >= 65 && positionAsciiOfLetter <= 90) {
                positionLetterCipher=((positionAsciiOfLetter - 65) +parseInt(offset))%26+65
                letterCipher= String.fromCharCode(positionLetterCipher)
                resultFinal += letterCipher; 
            } else {
                resultFinal += string[i]
            }  
        }
       return resultFinal
    },
    decode: (offset, string) => {
        let positionAsciiOfLetter
        let positionLetterCipher
        let letterCipher
        let resultFinal=""      
        for (let i= 0; i < string.length; i++) {
            positionAsciiOfLetter= string.charCodeAt(i)
            if ( positionAsciiOfLetter >= 65 && positionAsciiOfLetter <= 90) {
                positionLetterCipher=((positionAsciiOfLetter - 90) - parseInt(offset))%26+90
                letterCipher= String.fromCharCode(positionLetterCipher)
                resultFinal += letterCipher;
            }  
        }
       return resultFinal
    }
}