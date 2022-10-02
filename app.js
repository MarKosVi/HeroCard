
let buttonSelect  = document.querySelectorAll('.card-init');
let imgPerson  = document.querySelector('#person');

buttonSelect.forEach((item)=>{
    item.addEventListener('click', ()=>{
        removeOn();
        item.classList.toggle('on');
        tradePhoto(item.id);
    });
});


function tradePhoto(atribute) {
    if(atribute == 'hero')
        imgPerson.setAttribute('src', './assets/personHero.png');
    if(atribute == 'normal')
        imgPerson.setAttribute('src', './assets/person.png');
}


function removeOn() {
    buttonSelect.forEach((item)=>{
        item.classList.remove('on')
    });
}