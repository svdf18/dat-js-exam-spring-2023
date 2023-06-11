"use strict";

let rooms = [
  {
    name: "Living",
    width: 2,
    length: 3
  },
  {
    name: "Dining",
    width: 1,
    length: 5
  },
  {
    name: "Bed",
    width: 4,
    length: 4
  },
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(rooms);
  
  displayRooms();

  document.querySelector("#create-room-form").addEventListener("submit", createRoomclicked)
}

function displayRooms() {
  document.querySelector("#rooms-table").innerHTML = "";

  for (const room of rooms) {
    const area = calculateArea(room.width, room.length);

    document.querySelector("#rooms-table").insertAdjacentHTML(
      "beforeend", `
      <tr>
        <td>${room.name}</td>
        <td>${room.width}</td>
        <td>${room.length}</td>
        <td>${area}</td>
      <tr>
      `
    );
  };
}

function calculateArea(width, length) {
  return width * length;
}

function createRoom(name, width, length) {
  const room = {
    name: name,
    width: width,
    length: length
  };

  rooms.push(room);

  displayRooms();
}

function createRoomclicked(event) {
  event.preventDefault();
  console.log("clicked");

  let name = document.querySelector("#name").value;
  let width = document.querySelector("#width").value;
  let length = document.querySelector("#length").value;

  createRoom(name, width, length);

  document.querySelector("#create-room-form").reset();
}