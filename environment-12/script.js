"use strict";

let postnumre = [];
let brugere = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(postnumre);

  document.querySelector("#address-form").addEventListener("submit", createBrugerClicked);
  document.querySelector("#postnr").addEventListener("keyup", postnrChanged);
  document.querySelector("#by").addEventListener("keyup", byChanged);
}

async function getData() {
  const response = await fetch("postnumre.json")
  postnumre = await response.json();
}

function createBruger(navn, adresse, postnr, by, email, nyhedsbrev) {
  const bruger = {
    navn: navn,
    adresse: adresse,
    postnr: postnr,
    by: by,
    email: email,
    nyhedsbrev: nyhedsbrev
  };

  brugere.push(bruger);
}

function createBrugerClicked(event) {
  event.preventDefault();
  console.log("clicked");

  const navn = document.querySelector("#navn").value;
  const adresse = document.querySelector("#adresse").value;
  const postnr = document.querySelector("#postnr").value;
  const by = document.querySelector("#by").value;
  const email = document.querySelector("#email").value;
  const nyhedsbrev = document.querySelector("#nyhedsbrev").checked;

  createBruger(navn, adresse, postnr, by, email, nyhedsbrev);

  document.querySelector("#address-form").reset();
}

function postnrChanged() {
  const currentPostnr = document.querySelector("#postnr").value;
  const found = postnumre.find((postnrObject) => currentPostnr === postnrObject.postnr);
  document.querySelector("#by").value = found.by;
}

function byChanged() {
  const currentBy = document.querySelector("#by").value;
  const found = postnumre.find((postnrObject) => currentBy === postnrObject.by);
  document.querySelector("#postnr").value = found ? found.postnr : "";
}