"use strict";

let runners = [
  {
    name: "Mohammed",
    time: 88.99,
  },
  {
    name: "Peter",
    time: 29.22,
  },
  {
    name: "Simon",
    time: 54.33,
  },
  {
    name: "Hannah",
    time: 23.88,
  },
  {
    name: "Sophia",
    time: 34.22,
  }
];

window.addEventListener("load", initApp);

function initApp() {
  sortRunnersByTime();
  displayRunners();

  console.log(runners);
}

function sortRunnersByTime() {
  runners.sort((a, b) => a.time - b.time);
}

function displayRunners() {
  if (runners.length > 0) {
    document.querySelector("#gold-name").textContent = runners[0].name;
    document.querySelector("#gold-time").textContent = runners[0].time;
  }
  if (runners.length > 1) {
    document.querySelector("#silver-name").textContent = runners[1].name;
    document.querySelector("#silver-time").textContent = runners[1].time;
  }
  if (runners.length > 2) {
    document.querySelector("#bronze-name").textContent = runners[2].name;
    document.querySelector("#bronze-time").textContent = runners[2].time;
  }

  const runnerUpsList = document.querySelector("#runnerups-list");
  runnerUpsList.innerHTML = "";

  for (let i = 3; i < runners.length; i++) {
    const runner = runners[i];
    runnerUpsList.insertAdjacentHTML(
      "beforeend", `
        <li>Runner: ${runner.name} - time: ${runner.time}</li>
      `
    );
  }
}
