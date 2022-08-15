let decryptButton = document.getElementById('decryptButton')

decryptButton.addEventListener('click', () => {

        let textIn = document.getElementById('textIn')
        let textValue = textIn.value
        let textOut = document.getElementById('textOut')
        let encryptBoxVisibility = document.getElementById('encryptBoxVisibility')
        let encryptImage = document.getElementById('encryptImage')

        let text = []
        text = (textValue)

        const vowels = ['a', 'e', 'i', 'o', 'u']
        const keys = ['ai', 'enter', 'imes', 'ober', 'ufat']
        
        for (let index = 0; index < text.length; index++){
            text = text.replace(keys[0], vowels[0])
                        .replace(keys[1], vowels[1])
                        .replace(keys[2], vowels[2])
                        .replace(keys[3], vowels[3])
                        .replace(keys[4], vowels[4])
        }
        
        encryptImage.style.visibility = 'hidden'
        encryptImage.style.transition = '0.5s all'

        setTimeout(() => {
            textOut.innerText = text
            encryptBoxVisibility.style.visibility = 'visible'
        }, 650);
    }
)