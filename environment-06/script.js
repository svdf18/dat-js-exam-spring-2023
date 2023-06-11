"use strict";

let runners = [
  {
    name: "Oliva",
    time: 43.33
  },
  {
    name: "Oliver",
    time: 33.33
  },
  {
    name: "Omar",
    time: 53.33
  },
  {
    name: "Olga",
    time: 63.33
  },
  {
    name: "Othaniel",
    time: 23.33
  },
];

window.addEventListener("load", initApp);

function initApp() {

  sortRunnersByTime();
  displayRunners();
  console.log(runners);
}

//add runner in console
function addRunner(name, time) {
  runners.push({ name: name, time: time })

  sortRunnersByTime();
  displayRunners();
}


function displayRunners() {
  if (runners.length > 0){
    document.querySelector("#gold-name").textContent = runners[0].name;
    document.querySelector("#gold-time").textContent = runners[0].time;
  }
  if (runners.length > 1){
    document.querySelector("#silver-name").textContent = runners[1].name;
    document.querySelector("#silver-time").textContent = runners[1].time;
  }
  if (runners.length > 2){
    document.querySelector("#bronze-name").textContent = runners[2].name;
    document.querySelector("#bronze-time").textContent = runners[2].time;
  }

  for (let i = 3; i < runners.length; i++) {
    const runner = runners[i];
    document.querySelector("#runnerups-list").insertAdjacentHTML(
      "beforeend", `
        <li>${runner.name} - time: ${runner.time}</li>
      `
    )
  }
}

function sortRunnersByTime() {
  runners.sort((a, b) => a.time - b.time);
}