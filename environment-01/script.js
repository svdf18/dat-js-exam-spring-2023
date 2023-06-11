"use strict";

let students = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();
  console.log(students);

  sortStudentsByName();
  displayStudents();
}

async function getData() {
  const response = await fetch("students.json");
  students = await response.json();
}

function displayStudents() {
  document.querySelector("#students-list").innerHTML = "";

  for (const student of students) {
    if (student.enrolled === true) {
    document.querySelector("#students-list").insertAdjacentHTML(
      "beforeend", `
        <li>${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled} </li>
      `
    );
  };
};
}

function sortStudentsByName() {
  students.sort((a, b) => a.name.localeCompare(b.name));
}
