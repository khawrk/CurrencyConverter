//Save whether submit the form or not
let submitForm = false;
let submitDataSaved = JSON.parse(localStorage.getItem('submittedForm')); // fetch saveData from localstorage
console.log('SUBMIT FORM', submitDataSaved)
if (submitDataSaved) {
    document.querySelector('.main_container').style.display = "none"
}

/* Rating-Stars Animation */

const ratingContainer = document.querySelector('.stars_container');
const selectedRating = document.getElementById('selectedRating');
const starValueInput = document.getElementById('starValue')

ratingContainer.addEventListener('click', handleStarClick);
ratingContainer.addEventListener('mouseover', handleStarHover);
ratingContainer.addEventListener('mouseout', handleStarMouseOut);

let currentRating = null;

function handleStarClick(event) {
    const selectedValue = event.target.dataset.value;
    currentRating = selectedValue;
    selectedRating.textContent = currentRating;
    starValueInput.value = currentRating;
    resetStarsColor();
    highlightStars(currentRating);
}

function handleStarHover(event) {
    const hoveredValue = event.target.dataset.value;
    resetStarsColor();
    highlightStars(hoveredValue);
}

function handleStarMouseOut() {
    resetStarsColor();
    highlightStars(currentRating);
}

function highlightStars(value) {
    const labels = ratingContainer.querySelectorAll('label');
    labels.forEach((label) => {
        const labelValue = label.dataset.value;
        label.style.color = labelValue <= value ? '#ffcc00' : '';
    });
}

function resetStarsColor() {
    const labels = ratingContainer.querySelectorAll('label');
    labels.forEach((label) => {
        const labelValue = label.dataset.value;
        label.style.color = labelValue <= currentRating ? '#ffcc00' : '';
    })
}

(function () {
    emailjs.init('nF50SAzaV0TyTjuGQ');
})();

window.onload = function () {
    const mainSection = document.querySelector(".container");
    const secondScreen = document.querySelector(".thankyou_section");
    const submitBtn = document.getElementById("submitBtn");
    const textArea = document.getElementById('box');
    const errorMessage = document.getElementById('error');
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        secondScreen.classList.remove("hidden");
        mainSection.style.display = 'none';  
        submitForm = true;
        localStorage.setItem('submittedForm', JSON.stringify(submitForm)); // save to localstorage
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_kmw9akp', 'template_p2a0zng', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}




