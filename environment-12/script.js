"use strict";

let postnumre = [];
let brugere = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(postnumre);
  document.querySelector("#address-form").addEventListener("submit", createBrugerClicked);
  document.querySelector("#postnr").addEventListener("keyup", postnummerChanged);
  document.querySelector("#by").addEventListener("keyup", byChanged);
}

async function getData() {
  const response = await fetch("postnumre.json");
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
  console.log("clicked")

  let navn = document.querySelector("#navn").value;
  let adresse = document.querySelector("#adresse").value;
  let postnr = document.querySelector("#postnr").value;
  let by = document.querySelector("#by").value;
  let email = document.querySelector("#email").value;
  let nyhedsbrev = document.querySelector("#nyhedsbrev").value;

  createBruger(navn, adresse, postnr, by, email, nyhedsbrev)

  document.querySelector("#address-form").reset();
}

function postnummerChanged() {
  const currentPostnr = document.querySelector("#postnr").value;
  
  if (currentPostnr.length === 4) {
    const found = postnumre.find((postnrObject) => currentPostnr === postnrObject.postnr);
    
    if (found) {
      document.querySelector("#by").value = found.by;
    }
  } else {
    document.querySelector("#by").value = "";
  }
}

function byChanged() {
  const currentBy = document.querySelector("#by").value;
  const found = postnumre.find((postnrObject) => currentBy === postnrObject.by);
  document.querySelector("#postnr").value = found ? found.postnr : "";
}
