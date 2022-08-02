function eventLog() {
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    let rateLi = document.querySelectorAll('#rate_list > li');
    let listEl = Array.from(rateLi);
    listEl.forEach(element => {
        element.addEventListener('click', rate);
    });
}

window.onload = eventLog;

function submit() {
    let addClass = document.getElementById('card_one');
    addClass.classList.add('card_invisible');
    let rmClass = document.getElementById('card_two');
    rmClass.classList.remove('card_invisible');
}

function rate() {
    this.style['background-color']='#fb7413';
}