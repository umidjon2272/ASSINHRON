const list = document.getElementById("list");

async function getComments() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();

    list.innerHTML = "";


    for (let i = 0; i < data.length; i++) {
      const c = data[i];

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>Post ID: ${c.postId}</h3>
        <div class="row"><b>ID:</b> ${c.id}</div>
        <div class="row"><b>Name:</b> ${c.name}</div>
        <div class="row email"><b>Email:</b> <a href="mailto:${c.email}">${c.email}</a></div>
        <div class="body"><b>Body:</b> ${c.body}</div>
      `;

      list.appendChild(card);
    }
  } catch (err) {
    list.innerHTML = `<div class="loading">Xatolik: ${err}</div>`;
  }
}

window.addEventListener("load", getComments);