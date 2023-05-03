const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const content = document.querySelector('p');

const increase = function () {
    content.textContent++;
    console.log(content.textContent);
    if (content.textContent > 0) {
        content.classList.add('increase_color')
        content.classList.remove('decrease_color')
    }

}

const decrease = function () {
    content.textContent--;
    console.log(content.textContent);
    if (content.textContent < 0) {
        content.classList.remove('increase_color')
        content.classList.add('decrease_color')
    }
}

const reset = function () {
    content.textContent = 0;
    content.classList.remove('increase_color')
    content.classList.remove('decrease_color')
}

resetBtn.addEventListener('click', reset)
increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)