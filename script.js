"use strict"

const link = document.querySelector(".link-btn_text");
const btns = document.querySelectorAll(".button > div > a");
const timerBtn = document.querySelector(".timer-btn > div > a");

//Hover
link.addEventListener("mouseover", addHoverToLink);
link.addEventListener("mouseout", removeHoverFromLink);

timerBtn.addEventListener("mouseover", addHoverToBtn(timerBtn));
timerBtn.addEventListener("mouseout", removeHoverFromBtn(timerBtn));

btns.forEach(btn => {

    if (!btn.classList.contains("small") && !btn.classList.contains("disable")) {
        addHoverToBtn(btn);
        removeHoverFromBtn(btn);
    }
})

//Active
link.addEventListener("click", () => {
    
    if (link.classList.contains("link-btn__active")) {
        removeActiveFromLink();
        addHoverToLink();
    } else {
        addActiveToLink();
        link.addEventListener("mouseover", removeHoverFromLink);
        window.open('http://google.com');
    }
})

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.classList.contains("active")) {
            removeActiveFromBtn(btn);
        } else {
            addActiveToBtn(btn);
        }
    })
})

//Set timer 
timerBtn.addEventListener("click", () => {

    if (!timerBtn.classList.contains("text-btn_timer-on")) {
        timerBtn.classList.remove("text-btn_timer-off");
        timerBtn.classList.add("text-btn_timer-on");

        timerBtn.innerHTML = `
            Отправить повторно
            <span class="timer" id="timer">00:59</span>
        `;

        startTimer();
    }
})

//Timer function
function startTimer() {
    let min = 0;
    let sec = 58;
    
    let countdown = setInterval(function () {
        let timerDisplay = document.getElementById("timer");
        timerDisplay.innerHTML = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
    
        if (min === 0 && sec === 0) {
            clearInterval(countdown);
            timerBtn.textContent = "Отправить сообщение";
            timerBtn.classList.remove("text-btn_timer-on");
            timerBtn.classList.add("text-btn_timer-off");
            
            return;
        }

        sec--;

    }, 1000);
}

//Functions
function addHoverToLink() {
    link.classList.add("link-btn_text__hover");
}

function removeHoverFromLink() {
    link.classList.remove("link-btn_text__hover");
}

function addActiveToLink() {
    link.classList.add("link-btn__active");
}

function removeActiveFromLink() {
    link.classList.remove("link-btn__active");
}

function addHoverToBtn(btn) {
    btn.addEventListener("mouseover", () => {
        btn.classList.add("hover");
    });
}

function removeHoverFromBtn(btn) {
    btn.addEventListener("mouseout", () => {
        btn.classList.remove("hover");
    });
}

function addActiveToBtn(btn) {
    btn.classList.add("active");
}

function removeActiveFromBtn(btn) {
    btn.classList.remove("active");
}