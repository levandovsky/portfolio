let sandwich = document.getElementById('sandwich');
sandwich.addEventListener('click', (e) => {
    sandwich.classList.toggle('open');
});

let cardsCollection = document.getElementsByClassName('card');

let cards = Array.from(cardsCollection);


cards.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active-card');
    }) 
});