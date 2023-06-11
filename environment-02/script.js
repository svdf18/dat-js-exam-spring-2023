"use strict";

let athletes = [
  {
    name: "Oliva",
    topSpeed: 59,
  },
  {
    name: "Oliver",
    topSpeed: 98,
  },
  {
    name: "Omar",
    topSpeed: 75,
  },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(athletes);

  sortAthletesByTopSpeed();
  displayAthletes();

  document.querySelector("#create-athlete-form").addEventListener("submit", createAthleteClicked);
}

function displayAthletes() {
  document.querySelector("#athletes-list").innerHTML = "";

  for (const athlete of athletes) {
    document.querySelector("#athletes-list").insertAdjacentHTML(
      "beforeend", `
        <li>${athlete.name} - ${athlete.topSpeed}</li>
      `
    );
  };
}

function sortAthletesByTopSpeed() {
  athletes.sort((a, b) => b.topSpeed - a.topSpeed);
}

function createAthlete(name, topSpeed) {
  const athlete = {
    name: name,
    topSpeed: Number(topSpeed),
  };

  athletes.push(athlete);

  sortAthletesByTopSpeed();
  displayAthletes();
}

function createAthleteClicked(event) {
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#name").value;
  let topSpeed = document.querySelector("#topSpeed").value;

  if (topSpeed >= 50 && topSpeed <= 100) {
    createAthlete(name, topSpeed);
    document.querySelector("#create-athlete-form").reset();
  } else {
    alert("Invalid top speed. Please enter a value between 50 and 100.");
    document.querySelector("#create-athlete-form").reset();
  };  
}