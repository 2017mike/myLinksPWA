let myLinks = localStorage.getItem("myLinks") || [];
if (myLinks.length >= 1) {
  myLinks = JSON.parse(myLinks);
}
myLinks.forEach((link, i) => {
  document.getElementById("bigGrid").innerHTML += `
       <div class="card" data-link="${link.link}">
        <a target="_blank" href="${link.link}">${link.title}</a>
        <button data-i="${i}" class="btn-delete">X </button>
        </div>
      `;
});

document.addEventListener("keydown", (event) => {
  // console.log(event)
  if (event.code === "Enter") {
    const newTitle = document.getElementById("titleInput").value;
    const newLink = document.getElementById("linkInput").value;

    if (newTitle === "" || newLink === "") {
      return;
    }

    const newLinkObj = {
      title: newTitle,
      link: newLink,
    };

    myLinks.push(newLinkObj);
    localStorage.setItem("myLinks", JSON.stringify(myLinks));
    bigGrid.innerHTML = "";
    myLinks.forEach((link, i) => {
      document.getElementById("bigGrid").innerHTML += `
       <div class="card" data-link="${link.link}">
        <a target="_blank" href="${link.link}">${link.title}</a>
        <button data-i="${i}" class="btn-delete">X </button>
        </div>
      `;
    });
    document.getElementById("titleInput").value = "";
    document.getElementById("linkInput").value = "";
  }
});

document.getElementById("addLinkBtn").addEventListener("click", (event) => {
  event.preventDefault();

  const newTitle = document.getElementById("titleInput").value;
  const newLink = document.getElementById("linkInput").value;

  if (newTitle === "" || newLink === "") {
    return;
  }

  const newLinkObj = {
    title: newTitle,
    link: newLink,
  };

  myLinks.push(newLinkObj);
  localStorage.setItem("myLinks", JSON.stringify(myLinks));
  bigGrid.innerHTML = "";
  myLinks.forEach((link, i) => {
    document.getElementById("bigGrid").innerHTML += `
       <div class="card" data-link="${link.link}">
        <a target="_blank" href="${link.link}">${link.title}</a>
        <button data-i="${i}" class="btn-delete">X </button>
        </div>
      `;
  });
  document.getElementById("titleInput").value = "";
  document.getElementById("linkInput").value = "";
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-delete")) {
    //  console.log(myLinks)
    let deletedIndex = parseInt(event.target.dataset.i);
    myLinks.splice(deletedIndex, 1);

    localStorage.setItem("myLinks", JSON.stringify(myLinks));

    bigGrid.innerHTML = "";
    myLinks.forEach((link, i) => {
      document.getElementById("bigGrid").innerHTML += `
       <div class="card" data-link="${link.link}">
        <a target="_blank" href="${link.link}">${link.title}</a>
        <button data-i="${i}" class="btn-delete">X </button>
        </div>
      `;
    });
    return;
  }
  if (event.target.classList.contains("card")) {
    window.open(event.target.dataset.link, "_blank");
  }
});
