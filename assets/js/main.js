let botao = document.querySelector('.btn_dark-white').addEventListener('click', function darkMode(){

    //VARIAVEIS
    let paragrafos = document.querySelectorAll('p');
    let links = document.querySelector('.link');
    //let card = document.querySelector('.card');

    //MUDA A COR DO BACKGROUND
    var element = document.body;
    element.classList.toggle("dark_mode");

    //MUDA A COR DO CARD
    //card.style.backgroundColor = 'transparent';

    //MUDA A COR DO LINK
    links.classList.toggle('dark_mode_p');

    //MUDA A COR DOS PARAGRAFOS
    for(var i = 0; i <= paragrafos.length; i++){
        paragrafos[i].classList.toggle('dark_mode_p');
     }
});
