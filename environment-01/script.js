"use strict";

let students = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();
  console.log(students);

  sortByName();
}

async function getData() {
  const response = await fetch("students.json");
  students = await response.json();
}

function displayStudents() {
  document.querySelector("#students-list").innerHTML = "";
  
  for (const student of students) {
    if (student.enrolled === true){
    document.querySelector("#students-list").insertAdjacentHTML(
      "beforeend", `
        <li>${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled} <button>Remove</button></li>
      ` 
    )
    document.querySelector("#students-list li:last-child button").addEventListener("click", () => removeStudent(student));
  };
  }
}

function sortByName(){
  students.sort((a, b) => a.name.localeCompare(b.name))

  displayStudents();
}

function removeStudent(student){
  console.log(student);

  const index = students.indexOf(student);
  students.splice(index,1);
  displayStudents();
}