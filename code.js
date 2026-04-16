

function showImage(imgId) {
  let modal = document.getElementById(imgId);
  modal.style.display = "flex";
  modal.classList.add("show");
}

function hideImage(imgId) {
  let modal = document.getElementById(imgId);
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
    modal.querySelector(".caption").innerText = "";
  }, 300);
}