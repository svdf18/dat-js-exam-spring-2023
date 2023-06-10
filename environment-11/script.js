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
          <button id="like-btn">Like</button>
          <button id="remove-btn">Remove</button>
        </article>
      `
    );

    document.querySelector("#posts-list article:last-child #like-btn").addEventListener("click", () => likePost(post));
    document.querySelector("#posts-list article:last-child #remove-btn").addEventListener("click", () => removePost(post));

  };
}

function sortPostsByLikes() {
  posts.sort((a, b) => b.likes - a.likes)
}

function likePost(post) {
  console.log(post);

  post.likes++;

  displayPosts();
}

function removePost(post) {
  console.log(post);
  const index = posts.indexOf(post);
  console.log(index);
  posts.splice(index, 1);
  displayPosts();
}