let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let myForm = document.getElementById('myForm');
const messageConfirmation = document.getElementById('messageConfirmation');

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    messageConfirmation.textContent = "Merci " + prenom.value + " " + nom.value + " pour votre message ! Nous vous contacterons bientôt.";
    messageConfirmation.style.color = 'green';
    messageConfirmation.style.backgroundColor = 'black';
    myForm.reset();
});