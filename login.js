function togglePassword() {
  let pass = document.getElementById("login-password");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
