"use strict";

let students = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();
  console.log(students);

  displayStudents();
}

async function getData() {
  const response = await fetch ("students.json");
  students = response.json();

  return students
}

function displayStudents() {
  document.querySelector("#students-list").innerHTML = "";

  for (const student of students) {
    document.querySelector("#students-list").insertAdjacentHTML(
      "beforeend", `
      <li>${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled} </li>
      `
    )
  }
}