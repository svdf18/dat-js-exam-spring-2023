import { events } from "./data.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(events);

  sortByName();

  displayEvents();

  document.querySelector("#create-event-form").addEventListener("submit", createEventClicked);
}

function displayEvents() {
  for (const event of events) {
    document.querySelector("#events-list").insertAdjacentHTML(
      "beforeend", `
        <li>${event.date} - ${event.title}: ${event.description}</li>
      `
    );
  };
}

function sortByName(){
  events.sort((a, b) => a.title.localeCompare(b.title));
}

function createEvent(title, description, date) {
  const event = {
    title: title,
    description: description,
    date: date,
  };

  events.push(event);

  document.querySelector("#events-list").innerHTML = "";

  sortByName();

  displayEvents();
}

function createEventClicked(event) {
  event.preventDefault();
  console.log("clicked")

  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let date = document.querySelector("#date").value;

  createEvent(title, description, date);

  document.querySelector("#create-event-form").reset();
}