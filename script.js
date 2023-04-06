const txtParagrafo = document.getElementById('txt-paragrafo')

 function troca(){
    const textNovo = 'Troquei o texto'
    const trocaTxt = txtParagrafo.value

    trocaTxt.innerHTML = textNovo
}

console.log(troca)