"use strict";

let runners = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  sortRunnersByTime();

  displayRunners();

  console.log(runners);
}

async function getData() {
  const response = await fetch("runners.json");
  runners = await response.json();

  return runners;
}

function sortRunnersByTime() {
  runners.sort((a, b) => a.time - b.time)
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


  for (let i = 3; i < runners.length; i++) {
    const runner = runners[i];
    document.querySelector("#runnerups-list").insertAdjacentHTML(
      "beforeend", `
        <li>Runner: ${runner.name} - time: ${runner.time}</li>
      `
    )
  }
}