import { fetchPips, postPips } from "./pip-post.js";

const wrapper = document.querySelector(".wrapper"),
editableInput = wrapper.querySelector(".editable"),
readonlyInput = wrapper.querySelector(".readonly"),
placeholder = wrapper.querySelector(".placeholder"),
counter = wrapper.querySelector(".counter"),
button = wrapper.querySelector("button");



editableInput.onfocus = ()=>{
  placeholder.style.color = "#c5ccd3";
}
editableInput.onblur = ()=>{
  placeholder.style.color = "#98a5b1";
}

editableInput.onkeyup = (e)=>{
  let element = e.target;
  validated(element);
}
editableInput.onkeypress = (e)=>{
  let element = e.target;
  validated(element);
  placeholder.style.display = "none";
}

function validated(element){
  let text;
  let maxLength = 255;
  let currentlength = element.innerText.length;

  if(currentlength <= 0){
    placeholder.style.display = "block";
    counter.style.display = "none";
    button.classList.remove("active");
  }else{
    placeholder.style.display = "none";
    counter.style.display = "block";
    button.classList.add("active");
  }

  counter.innerText = maxLength - currentlength;

  if(currentlength > maxLength){
    let overText = element.innerText.substr(maxLength); //extracting over texts
    overText = `<span class="highlight">${overText}</span>`; //creating new span and passing over texts
    text = element.innerText.substr(0, maxLength) + overText; //passing overText value in textTag variable
    readonlyInput.style.zIndex = "1";
    counter.style.color = "#e0245e";
    button.classList.remove("active");
  }else{
    readonlyInput.style.zIndex = "-1";
    counter.style.color = "#333";
  }
  readonlyInput.innerHTML = text; //replacing innerHTML of readonly div with textTag value
}


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
    createFlower(x);
  });
}

await load();


  