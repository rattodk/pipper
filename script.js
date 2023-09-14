import { fetchPips, postPips } from "./pip-post.js";
import { createPost } from "./create-post.js";





const form = document.getElementById("create-flower");

form.addEventListener("submit", async (event) => {
  console.log("Hello from Form");
  event.preventDefault();
  const data = new FormData(form);

  const brugernavn = data.get("brugernavn");

  const post = data.get("post");

  const image = data.get("image");
  console.log(image);

  //const base64 = await imageToBase64(image);
  //console.log(base64);

  const flower = {
    username: brugernavn,
    post: post,
  };

  const x = await postPips(flower);
});

async function load() {
  const body = await fetchPips();

  body.forEach((x) => {
    createPost(x);
  });
}

await load();


  