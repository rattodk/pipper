

const URL = "http://localhost:8000";


export async function fetchPips() {
  const response = await fetch(URL + "/pipper", {
    method: "GET"
  });
  let body = await response.json();
  console.log(body);

  return body;
}

export async function postPips(data) {
    console.log(data);
    const response = await fetch(URL + "/pipper", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log(response);
  
    const body = await response.json();
    console.log(body);
  
    return body;
}