const letters = document.querySelectorAll('.bouncy');
letters.forEach((letter) => {
    letter.addEventListener('mouseenter', () => {
        toggleRubberBand(letter);
    });
});

function toggleRubberBand(letter) {
    letter.classList.add('bouncing');
    letter.addEventListener('animationend', () => {
        letter.classList.remove('bouncing');
    });
}
