

function openForm() {
  document.getElementById("loginPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("loginPopup").style.display = "none";
}

window.onclick = function (event) {
  let modal = document.getElementById('loginPopup');
  if (event.target == modal) {
    closeForm();
  }
}