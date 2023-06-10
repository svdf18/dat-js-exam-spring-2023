"use strict";

let rooms = [
  {
    name: "Downtown",
    width: 5,
    length: 4,
  },
  {
    name: "Uptown",
    width: 3,
    length: 2,
  },
  {
    name: "Midtown",
    width: 2,
    length: 2,
  },
  {
    name: "Seaside",
    width: 5,
    length: 5,
  }
];

window.addEventListener("load", initApp);

function initApp() {
  console.log(rooms);

  displayRooms();

  document.querySelector("#create-room-form").addEventListener("submit", createRoomClicked);
}

function displayRooms(){
  document.querySelector("#rooms-table").innerHTML = "";

  for (const room of rooms){
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
    )
  }
}

function calculateArea(width, length) {
  return width * length;
}

function createRoom(name, width, length) {
  const room = {
    name: name,
    width: width,
    length: length,
  }

  rooms.push(room);

  displayRooms();
}

function createRoomClicked(event) {
  event.preventDefault();
  console.log("clicked");

  const name = document.querySelector("#name").value;
  const width = document.querySelector("#width").value;
  const length = document.querySelector("#length").value;
  
  createRoom(name, width, length);

  document.querySelector("#create-room-form").reset();
}