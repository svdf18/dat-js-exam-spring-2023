"use strict";

let posts = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(posts);
  sortPostsByLikes();
  displayPosts();

  document.querySelector("#sort-form").addEventListener("change", sortPostsByLikes);
}

async function getData() {
  const response = await fetch("posts.json");
  posts = await response.json();

  return posts;
}

function displayPosts() {
  document.querySelector("#posts-list").innerHTML = "";

  for (const post of posts) {
    document.querySelector("#posts-list").insertAdjacentHTML(
      "beforeend", `
      <article>
        <img src=${post.image} alt="post.caption" />
        <h2>${post.caption}</h2>
        <p>Likes: ${post.likes}</p>
      </article>
      `
    );
  };
}

function sortPostsByLikes() {
  const sortorder = document.querySelector("#sortorder").value;

  if (sortorder === "ascending") {
    posts.sort((a, b) => a.likes - b.likes);
  } else if (sortorder === "descending") {
    posts.sort((a, b) => b.likes - a.likes)
  }

  displayPosts();
}