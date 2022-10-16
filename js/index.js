// Put a blue line under hovered navlink
const navlinks = document.querySelectorAll(`.navlink`);

navlinks.forEach((navlink) => {
  navlink.addEventListener("mouseenter", () => {
    navlink.firstChild.classList.add("active");
  });
});
navlinks.forEach((navlink) => {
  navlink.addEventListener("mouseleave", () => {
    navlink.firstChild.classList.remove("active");
  });
});

// Test

const test = document.getElementById(`test`);

// alert

window.alert(`
Welcome to The Cyber Security Awarness Experimnet
Thank you for participating in this pharming awareness experiment
you have 1 minute to detect any pharming indicators and the outcome will be a score that measures your awareness of pharming attacks
Good luck; Click Ok to start the experiment`);

// form

const loginForm = document.getElementById(`login-form`);
const userName = document.getElementById(`name`);
const email = document.getElementById(`email`);
const inquiry = document.getElementById(`inquiry`);
const submit = document.getElementById(`submit`);
window.onscroll = () => {
  const scrollLimit = 800;
  if (window.scrollY >= scrollLimit) {
    loginForm.style.display = `block`;
  }
};

loginForm.addEventListener("mouseenter", () => {
  loginForm.style.border = `2px solid red`;
});

// running test

const startBtn = document.getElementById(`start-btn`);
const countdownNumberEl = document.getElementById("countdown-number");
const circle = document.getElementById(`circle`);
const countdownEl = document.getElementById(`countdown`);
const finalResultContainer = document.getElementById(`final-result-container`);
const finalResult = document.getElementById(`final-result`);
const err1 = document.getElementById(`err1`);
const err2 = document.getElementById(`err2`);
const err3 = document.getElementById(`err3`);
const err4 = document.getElementById(`err4`);
const err5 = document.getElementById(`err5`);
const err6 = document.getElementById(`err6`);
const err7 = document.getElementById(`err7`);
const err8 = document.getElementById(`err8`);
const err9 = document.getElementById(`err9`);
const errors = [err1, err2, err3, err4, err5, err6, err7, err8, err9];
let isStartBtnClicked = false;
let points = 0;
let pointsPercentage = ((points / 9) * 100).toFixed(2);
let circlePercentage = pointsPercentage * 3.6;
let circleColor;
let countdown = 3;

countdownNumberEl.textContent = countdown;

const startTest = () => {
  circle.style.animation = `countdown 60s linear forwards`;
  setInterval(function () {
    countdown = --countdown < 0 ? endTest() : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);
  const runTest = () => {
    errors.map((e) =>
      e.addEventListener(`click`, () => {
        if (isStartBtnClicked === true && !e.classList.contains(`clicked`)) {
          e.classList.add(`clicked`);
          points++;
          pointsPercentage = ((points / 9) * 100).toFixed(2);
          circlePercentage = pointsPercentage * 3.6;
          e.classList.add(`error-show`);
          e.firstElementChild.style.display = `block`;
        }
      })
    );
  };
  setTimeout(runTest, 300);
  isStartBtnClicked = true;
};

const endTest = () => {
  test.style.height = `100vh`;
  errors.map((e) => {
    e.classList.remove(`error-show`);
    e.firstElementChild.style.display = `none`;
  });
  startBtn.style.display = `none`;
  countdownNumberEl.style.display = `none`;
  circle.style.display = `none`;
  countdownEl.style.display = `none`;
  finalResultContainer.style.display = `flex`;
  if (pointsPercentage < 40) {
    circleColor = `red`;
  } else if (pointsPercentage >= 40 && pointsPercentage < 60) {
    circleColor = `yellow`;
  } else {
    circleColor = `green`;
  }
  finalResult.style.background = `conic-gradient(${circleColor} ${circlePercentage}deg, #ededed ${
    circlePercentage + 5
  }deg)`;
  finalResult.firstElementChild.innerHTML = `${pointsPercentage}%`;
  finalResultContainer.parentElement.classList.remove(
    `justify-content-between`
  );
  finalResultContainer.parentElement.classList.add(`justify-content-center`);
  finalResultContainer.firstElementChild.innerHTML = `Your cybersecurity pharming awareness`;
};

startBtn.addEventListener(`click`, () => {
  isStartBtnClicked === false && startTest();
});
