
let buttonSelect  = document.querySelectorAll('.card-init');
let imgPerson  = document.querySelector('#person');

buttonSelect.forEach((item)=>{
    item.addEventListener('click', ()=>{
        removeOn();
        item.classList.toggle('on');
        tradePhoto(item.childNodes[0].nodeValue);
    });
});


function tradePhoto(atribute) {
    if(atribute == 'Hero Costume ')
        imgPerson.setAttribute('src', './assets/personHero.png');
    if(atribute == 'School Uniform ')
        imgPerson.setAttribute('src', './assets/person.png');
}


function removeOn() {
    buttonSelect.forEach((item)=>{
        item.classList.remove('on')
    });
}