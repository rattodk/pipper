const mainContent = document.getElementById("main-content");

export function createPost(x) {
  console.log(x.id);

  // Clone template
  const clone = getTemplateClone();

  fillUsername(clone, x);
  fillPost(clone, x);

  // Sætter den udfyldte kopi ind på hjemmesiden
  mainContent.appendChild(clone);
}

function getTemplateClone() {
  // Hiver fat i skabelonen fra HTML
  const template = document.getElementById("template");

  // Clone template
  const clone = document.importNode(template.content, true);
  return clone;
}

function fillUsername(clone, x) {
    console.log(x);
  
    if (x.username) {
      // Hente billede fra usernameUrl
      // Udfylder username på kopien
      const username = clone.getElementById("username");
      username.p = x.username;
      username.id = "username-" + x.id;
    }
  }
function fillPost(clone, x) {
    console.log(x);
    if (x.post) {
      // Hente billede fra postUrl
      // Udfylder post på kopien
      const post = clone.getElementById("post");
      const clonePost = clone.getElementById('post  ')
      post.p = x.post;
      post.id = "post-" + x.id;
    }
  }







function fillP(clone, x) {
  // Udfylde nyt ID for amount p-tag
  const cloneP = clone.getElementById("amount");
  cloneP.id = "amount-" + x.id;
}