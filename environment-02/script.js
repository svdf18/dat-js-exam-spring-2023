"use strict";

let athletes = [
  {
    name: "Mohammed",
    topSpeed: 78,
  },
  {
    name: "Simon",
    topSpeed: 74,
  },
  {
    name: "Nikolaj",
    topSpeed: 85,
  }
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(athletes);

  sortByTopSpeed();
  displayAthletes();

  document.querySelector("#create-athlete-form").addEventListener("submit", createAthleteClicked);
}

function displayAthletes(){
  document.querySelector("#athletes-list").innerHTML = "";

  for (const athlete of athletes) {
    document.querySelector("#athletes-list").insertAdjacentHTML(
      "beforeend", `
        <li>${athlete.name} - ${athlete.topSpeed}</li>
      `
    );
  };
}

function sortByTopSpeed() {
  athletes.sort((a, b) => b.topSpeed - a.topSpeed);
}

function createAthlete(name, topSpeed) {
  let athlete = {
    name: name,
    topSpeed: topSpeed,
  }

  athletes.push(athlete);
  sortByTopSpeed();
  displayAthletes();
}

function createAthleteClicked(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const topSpeed = document.querySelector("#topSpeed").value;

  createAthlete(name, topSpeed);

  document.querySelector("#create-athlete-form").reset();
}