const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");


const USER = "currentUser";
const SHOW = "showing"
const userValue = localStorage.getItem(USER)

function checkName () {
    if (userValue !== null) {
        form.classList.remove(SHOW);
        greeting.classList.add(SHOW);
        greeting.innerText = `Hello, ${userValue}`;   
    } else {
        form.addEventListener("submit", submitHandler);
    }
};

function submitHandler(event) {
    event.preventDefault();
    const ANSWER = input.value;
    if (userValue === null) {
        localStorage.setItem(USER, ANSWER);
        greeting.classList.add(SHOW);
        greeting.innerText = `Hello, ${ANSWER}`;
        form.classList.remove(SHOW);

    } else {
        
    }
};


checkName();