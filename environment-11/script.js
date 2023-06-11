"use strict";

let posts = [];

window.addEventListener("load", initApp);

async function initApp() {
  await getData();

  console.log(posts);
  sortPostsByLikes(); 
  displayPosts();
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
        <button>Like</button>
      </article>
      `
    );
    document.querySelector("#posts-list article:last-child button").addEventListener("click", () => addLike(post))
  };
}

function sortPostsByLikes() {
  posts.sort((a, b) => b.likes - a.likes);
}

function addLike(post) {
  console.log(post);
  post.likes++;
  sortPostsByLikes();
  displayPosts();
}