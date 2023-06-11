import {events} from "./data.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(events);

  sortEventByDate();
  displayEvents();
}

function displayEvents() {
  document.querySelector("#events-list").innerHTML = "";

  for (const event of events) {
    document.querySelector("#events-list").insertAdjacentHTML(
      "beforeend", `
        <li>${event.date} - ${event.title}: ${event.description}</li>
      `
    );
  };
}

function sortEventByDate() {
  events.sort((a, b) => a.date.localeCompare(b.date));
}