document.querySelector("form").addEventListener("submit", function(e) {
  let pass = document.getElementById("signup-pass").value;
  let confirm = document.getElementById("confirm-pass").value;

  if (pass !== confirm) {
    e.preventDefault();
    alert("Passwords do not match!");
  }
});
