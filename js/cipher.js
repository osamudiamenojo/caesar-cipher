
export function encode(offset = 3, text) {
    console.log(text)
    let encrypted = ""
    for (let i = 0; i < text.length; i++) {
        let letter = text[i]
        let asciiNum = letter.charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            //that means letter is upper case
            asciiNum = ((asciiNum -65 + offset ) % 26) +65
            //console.log(asciiNum)
            encrypted+=String.fromCharCode(asciiNum)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            //letter is lowercase
            asciiNum = ((asciiNum - 97 + offset) % 26) + 97
            //console.log(asciiNum)
            encrypted+=String.fromCharCode(asciiNum)
        } else {
            //otherwise
            encrypted += letter
        }
    } 
return encrypted
}

export function decode(offset=3, text) {
    let decrypted = ""
    for (let letter of text) {
        let asciiNum = letter.charCodeAt()
        if (asciiNum >= 65 && asciiNum <= 90) {
            //that means letter is upper case
            asciiNum = ((asciiNum -65 - offset +26) % 26) +65
            console.log(asciiNum)
            decrypted+=String.fromCharCode(asciiNum)
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            //letter is lowercase
            asciiNum = ((asciiNum - 97 - offset +26) % 26) + 97
            decrypted+=String.fromCharCode(asciiNum)
        } else {
            //otherwise
            decrypted += letter           

        }
    } 
return decrypted
}
