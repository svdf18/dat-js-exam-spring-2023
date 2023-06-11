"use strict";

let posts = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(posts);

  displayPosts();

  document.querySelector("#all").addEventListener("change", displayPosts)
}

async function getData() {
  const response = await fetch("posts.json");
  posts = await response.json();
}

function displayPosts() {
  document.querySelector("#posts-list").innerHTML = "";

  const showAll = document.querySelector("#all").checked;

  for (const post of posts) {
    if (showAll || post.published === true) {
      document.querySelector("#posts-list").insertAdjacentHTML(
        "beforeend", `
        <article>
          <img src=${post.image} alt=${post.caption} />
          <h2>${post.caption}</h2>
          <p>Likes: ${post.likes}</p>
        </article>
        `
      );
    };
  };
}
