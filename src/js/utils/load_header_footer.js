function loadHeader() {
  const header = document.querySelector("#main-header");

  fetch("/templates/header.html")
    .then((response) => response.text())
    .then(data => {
      header.innerHTML = data;
    });
}

function loadFooter() {
  const footer = document.querySelector("#main-footer");

  fetch("/templates/footer.html")
    .then((response) => response.text())
    .then(data => {
      footer.innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  if (header) {
    loadHeader();
  }

  if (footer) {
    loadFooter();
  }
});
