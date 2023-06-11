"use strict";

let postalNumbers = [];
let users = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(postalNumbers);
  document.querySelector("#address-form").addEventListener("submit", createUserClicked);
}

async function getData() {
  const response = await fetch("postnumre.json");
  postalNumbers = await response.json();

  return postalNumbers;
}

function createUser(name, address, postalNumber, city, email, newsLetter) {
  const user = {
    name: name,
    address: address,
    postalNumber: postalNumber,
    city: city,
    email: email,
    newsLetter: newsLetter,
  };

  users.push(user);
}

function createUserClicked(event) {
  event.preventDefault();

  let name = document.querySelector("#navn").value;
  let address= document.querySelector("#adresse").value;
  let postalNumber= document.querySelector("#postnr").value;
  let city = document.querySelector("#by").value;
  let email = document.querySelector("#email").value;
  let newsLetter = document.querySelector("#nyhedsbrev").value;

  createUser(name, address, postalNumber, city, email, newsLetter);

  document.querySelector("#address-form").reset();
};

