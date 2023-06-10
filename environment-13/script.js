"use strict";

let tickets = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(tickets);
  displayTickets();
}

async function getData() {
  const response = await fetch("tickets.json");
  tickets = await response.json();

  return tickets;
}

function displayTickets() {
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
    document.querySelector("#tickets-list article:last-child button").addEventListener("click", () => useTicket(ticket));
  };
};
}

function useTicket(ticket) {
  console.log(ticket);

  ticket.used = true;

  displayTickets();
}