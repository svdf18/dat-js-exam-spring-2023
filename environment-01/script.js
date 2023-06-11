"use strict";

let students = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();
  console.log(students);

  sortStudentsByName();
  // sortStudentsBySemester();
  sortStudentsByEnrolled();
  
  displayStudents();
}

async function getData() {
  const response = await fetch("students.json");
  students = await response.json();

  return students;
}

function displayStudents() {
  document.querySelector("#students-list").innerHTML = "";

  for (const student of students){
    document.querySelector("#students-list").insertAdjacentHTML(
      "beforeend", `
        <li>${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled} </li>
      `
    )
  }
}

function sortStudentsByEnrolled() {
  students.sort((a, b) => b.enrolled - a.enrolled);
}

function sortStudentsBySemester() {
  students.sort((a, b) => b.semester - a.semester);
  sortStudentsByName();
}

function sortStudentsByName() {
  students.sort((a, b) => a.name.localeCompare(b.name));
}

