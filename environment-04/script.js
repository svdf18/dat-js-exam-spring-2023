import { events } from "./data.js";

window.addEventListener("load", initApp);

function initApp() {
  console.log(events);

  sortEventsByDate();
  displayEvents();

  document.querySelector("#create-event-form").addEventListener("submit", createEventClicked);
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

function sortEventsByDate() {
  events.sort((a, b) => a.date.localeCompare(b.date));
}

function createEvent(title, description, date) {
  const event = {
    title: title,
    description: description,
    date: date, 
  }

  events.push(event);

  sortEventsByDate();
  displayEvents();  
}

function createEventClicked(event) {
  event.preventDefault();
  console.log("clicked");

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const date = document.querySelector("#date").value;

  createEvent(title, description, date);

  document.querySelector("#create-event-form").reset();
}