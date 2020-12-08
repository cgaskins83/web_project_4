//search for btns
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

const inputName = document.querySelector('.popup__name');
const inputJob = document.querySelector('.popup__about');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__gig');



//add the click function to edit btn 

function togglePopupWindow() {
    popup.classList.toggle('popup__open');
}

editButton.addEventListener('click', function(){
   togglePopupWindow()
})

//close the popup using x btn 
closeButton.addEventListener('click', function(){
    togglePopupWindow()
})

form.addEventListener('submit', function(e) {
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;

    console.log(inputName.value, inputJob.value)

    togglePopupWindow()
})

document.querySelectorAll('.card__like') . forEach(card__like => 
    card__like.addEventListener('click', () => card__like.classList.toggle('card__liked'))
);
 
    
