"use strict";

let tickets = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(tickets);

  sortTicketById();
  displayEvents();
}

async function getData() {
  const response = await fetch("tickets.json");
  tickets = await response.json();

  return tickets;
}

function displayEvents() {
  document.querySelector("#tickets-list").innerHTML = "";

  for (const ticket of tickets) {
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

function sortTicketById() {
  tickets.sort((a, b) => a.id - b.id)
}

function removeTicket(ticket) {
  console.log(ticket);

  ticket.used = true;

  displayEvents();
}

// function removeTicket(ticket) {
//   const index = tickets.indexOf(ticket);
//   tickets.splice(index, 1);
//   displayEvents();
// }