function mudaTema() {
  document.body.classList.toggle("dark");
  var icon = document.getElementById("icon");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}