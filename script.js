const openPopUp = document.getElementsByClassName('card');
const closePopUp = document.getElementsByClassName('pop_up_close');
const popUp = document.getElementsByClassName('pop_up');
const popUpBody = document.getElementsByClassName('pop_up_body');

console.log(openPopUp);

openPopUp[0].addEventListener('click', function(e) {
    e.preventDefault();
    popUp[0].classList.add('active');
})

openPopUp[1].addEventListener('click', function(e) {
    e.preventDefault();
    popUp[1].classList.add('active');
    popUpBody[1].classList.add('active_second');
})

openPopUp[2].addEventListener('click', function(e) {
    e.preventDefault();
    popUp[2].classList.add('active');
    popUpBody[2].classList.add('active_third');
})

openPopUp[3].addEventListener('click', function(e) {
    e.preventDefault();
    popUp[3].classList.add('active');
    popUpBody[3].classList.add('active_fourth');
})

closePopUp[0].addEventListener('click', () => {
    popUp[0].classList.remove('active');
})

closePopUp[1].addEventListener('click', () => {
    popUp[1].classList.remove('active');
})

closePopUp[2].addEventListener('click', () => {
    popUp[2].classList.remove('active');
})

closePopUp[3].addEventListener('click', () => {
    popUp[3].classList.remove('active');
})