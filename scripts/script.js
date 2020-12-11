//search for btns
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');

const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__form');

const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_about');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__gig');


function editButtonOpen() {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    togglePopupWindow();
}
 
function togglePopupWindow() {
        popup.classList.toggle('popup_display_open');   
}

editButton.addEventListener('click', editButtonOpen);

//close the popup using x btn 
closeButton.addEventListener('click', function(){
    popup.classList.remove('popup_display_open')
})

function handleFormSubmit(e){
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
    togglePopupWindow();
}

// save button submits and closes popup 
form.addEventListener('submit', handleFormSubmit);
   



document.querySelectorAll('.card__like') . forEach(card__like => 
    card__like.addEventListener('click', () => card__like.classList.toggle('card__like_color_black'))
);
 
    
