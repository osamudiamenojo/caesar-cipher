import './css/style.css'
import {encode, decode} from './js/cipher'
 
let encryptBtn = document.querySelector('#encrypt-btn')
 let   eInput = document.querySelector('#encryptedInput-1')
let pInput = document.querySelector('#plainInput-1')
let decryptBtn = document.querySelector('#decrypt-btn')
let offset = document.querySelector('#offset')
encryptBtn.addEventListener('click', () => {
    
    if (pInput) {
        let offsetVal = offset.val? +offset.value: 3
        let plainText = pInput.value.toString()
        let encodedMessage = encode(offsetVal, plainText)

        
        console.log(pInput.value)
        console.log(encodedMessage)
        eInput.placeholder = encodedMessage
    } else {
        alert("please put an offset value")
    }
})


decryptBtn.addEventListener('click', () => {
    
        let offsetVal = offset.val? +offset.value: 3
    
    if (eInput) {
        let codedText = eInput.value.toString()
        let decodedMessage = decode(+offset.value, codedText)
        console.log(pInput.value)
        console.log(decodedMessage)
        pInput.placeholder = decodedMessage
    } else {
        alert("please put an offset value")
    }
})
    
