// let sandwich = document.getElementById('sandwich');
let cardsCollection = document.getElementsByClassName('card');
let cards = Array.from(cardsCollection);
let triggerBtn = document.getElementById('triggerBtn');
let contactBtn = document.getElementById('contact-btn')
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('closeBtn');
let modal_content = document.getElementById('modal-content');
let body = document.getElementById('body');

triggerBtn.addEventListener('click', () => {
    modal.removeAttribute('style');
    modal.classList.add('show-modal');
    modal_content.classList.add('show-modal-content');
    body.classList.add('stop-scroll');
})

contactBtn.addEventListener('click', () => {
    modal.removeAttribute('style');
    modal.classList.add('show-modal');
    modal_content.classList.add('show-modal-content');
    body.classList.add('stop-scroll');
})

closeBtn.addEventListener('click', () => {
    modal_content.classList.remove('show-modal-content');
    modal.style.opacity = 0;
    setTimeout(function() {
        modal.classList.remove('show-modal');
        body.classList.remove('stop-scroll');
    }, 400);
})

window.addEventListener('click', (e) => {
    if(e.target == modal) {
        modal_content.classList.remove('show-modal-content');
        modal.style.opacity = 0;
        setTimeout(function() {
            modal.classList.remove('show-modal');
            body.classList.remove('stop-scroll');
        }, 400);
    }
})

cards.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active-card');
    }) 
});
