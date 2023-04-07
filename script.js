function atualizando() {
    const texto = document.getElementById('txt-paragrafo');
    const imagem = document.getElementById('imagem');
    const h1 = document.getElementById('txt-h1');
    const data = new Date();
    /*const hora = data.getHours();*/
    const hora = 18


    /* só preciso colocar o innerHRML 1 vez que já troca:*/
    texto.innerHTML = `Agora são ${hora} horas.`;


    if (hora >= 00 && hora < 12) {
        imagem.src = "./bomdia.png";
        /*troca css*/
        document.body.style.background = '#fd9200'


    } else if (hora >= 12 && hora < 18) {
        imagem.src = "./boatarde.jpg";
        document.body,style.background = '#91cae8'

    } else {
        (hora >= 18 && hora < 24)
       imagem.src = "./boanoite.jpg";
       document.body.style.background = '#5e544b'
    }

}