"use strict";

let tickets = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();
  console.log(tickets);

  sortById();
  displayTickets();
}

async function getData() {
  const response = await fetch("tickets.json");
  tickets = await response.json();
}

function displayTickets() {
  document.querySelector("#tickets-list").innerHTML = "";

  for (const ticket of tickets){
    if (ticket.used === false){
    document.querySelector("#tickets-list").insertAdjacentHTML(
      "beforeend", `
      <article>
      <h3>${ticket.eventName}</h3>
      <p class="ticketid">id: ${ticket.id}</p>
      <button>Use</button>
      </article>
      `
    );
    document.querySelector("#tickets-list article:last-child button").addEventListener("click", () => removeTicket(ticket))
  };
};
}

function sortById() {
  tickets.sort((a, b) => a.id - b.id);
}

function removeTicket(ticket) {
  console.log(ticket);
  ticket.used = true;

  displayTickets();
}