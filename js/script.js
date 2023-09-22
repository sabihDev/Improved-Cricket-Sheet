// import { Hide, Show } from "./Resueables.js";

const liveMenuContainer = document.querySelector(".live-container");
const scorecaedMenuContainer = document.querySelector(".scorecard-container");
const ballsMenuButton = document.querySelector('.menu__balls');

const scorecardMenuButton = document.querySelector(".menu__scorecard");
const liveMenuButton = document.querySelector(".menu__live");

const teamAButton = document.querySelector(".innings-buttons__first-team");
const teamBButton = document.querySelector(".innings-buttons__second-team");

const hr = document.querySelector(".animate-menu");

scorecardMenuButton.onclick = () => {
    if (liveMenuButton.classList.contains("active")) {
        liveMenuButton.classList.remove("active");
    }
    else if (ballsMenuButton.classList.contains('active')) {
        ballsMenuButton.classList.remove("active");
    }

    if (scorecaedMenuContainer.classList.contains("hidden")) {
        scorecaedMenuContainer.classList.remove('hidden');
    }

    liveMenuContainer.classList.add('hidden');
    scorecardMenuButton.classList.add("active");
    hr.style.transform = 'translateX(0) translateY(7px)';
    hr.style.width = '63px';
}

liveMenuButton.onclick = () => {
    if (!scorecardMenuButton.classList.contains('active')) {
        scorecardMenuButton.classList.remove("active");
    }
    if (!ballsMenuButton.classList.contains('active')) {
        ballsMenuButton.classList.remove("active");
    }

    if (!liveMenuContainer.classList.contains("hidden")) {
    liveMenuContainer.classList.add("hidden");
    }

    scorecaedMenuContainer.classList.add("hidden");
    liveMenuButton.classList.add('active');
    hr.style.transform = 'translateX(-53px) translateY(7px)';
    hr.style.width = '30px';
}

teamAButton.style.background = "darkcyan";

teamAButton.onclick = () => {
    teamAButton.style.background = "darkcyan";
    teamAButton.style.color = 'white';
    teamBButton.style.background = 'rgb(237, 237, 237)';
    teamBButton.style.color = 'black';
}

teamBButton.onclick = () => {
    teamBButton.style.background = "darkcyan";
    teamBButton.style.color = 'white';
    teamAButton.style.background = 'rgb(237, 237, 237)';
    teamAButton.style.color = 'black';
}