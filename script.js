const complimentBtn = document.getElementById('complimentBtn');
const complimentText = document.querySelector('.compliment-text');

const compliments = [
    "You are the best aunt anyone could ever ask for!",
    "Thank you for all your guidance and support over the years.",
    "Your laugh is truly contagious.",
    "The world is a better place because you're in it.",
    "You have the biggest heart and always know how to cheer me up.",
    "Happy birthday to one of my biggest role models!",
    "I'm so lucky to have you in my life."
];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.setProperty('--hue', Math.random() * 360);
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

complimentBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentText.textContent = compliments[randomIndex];
    
    createConfetti();
});