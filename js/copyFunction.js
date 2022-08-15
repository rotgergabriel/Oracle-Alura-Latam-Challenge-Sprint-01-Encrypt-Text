let textOut = document.getElementById('textOut')

let copyButton = document.getElementById('copyButton')

copyButton.addEventListener('click', () => {
    
    let copyText = textOut
    
    copyText.select();
    document.execCommand("copy")
    
    copyButton.style.color = 'rgb(255, 168, 6)'
    copyButton.innerText = 'Copiado...'
    setTimeout(() => {
        copyButton.style.color = '#6a6b6b'
        copyButton.innerText = 'Copiar'
    }, 2000);
})