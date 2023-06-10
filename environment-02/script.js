"use strict";

let athletes = [
  { name: "Mohammed",
    topSpeed: "20.9"
  },
  { name: "Simon",
  topSpeed: "19.8"
  },
  { name: "Nikolaj",
    topSpeed: "21.7"
  }
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(athletes);
  filterByTopSpeed();

  document.querySelector("#create-athlete-form").addEventListener("submit", createAthleteClicked);
}

function displayAthletes() {
  for (const athlete of athletes){
    document.querySelector("#athletes-list").insertAdjacentHTML(
      "beforeend", `
      <li>${athlete.name} - ${athlete.topSpeed}</li>
      `
    );
  };
}

function createAthlete(name, topSpeed) {
  const athlete = {
    name: name,
    topSpeed: parseInt(topSpeed),
  }

  athletes.push(athlete);

  document.querySelector("#athletes-list").innerHTML = "";

  filterByTopSpeed();
}

function createAthleteClicked(event) {
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#name").value;
  let topSpeed = document.querySelector("#topSpeed").value;

  createAthlete(name, topSpeed);

  document.querySelector("#create-athlete-form").reset();
}

function filterByTopSpeed() {
  athletes.sort((a, b) => b.topSpeed - a.topSpeed)

  displayAthletes();
}