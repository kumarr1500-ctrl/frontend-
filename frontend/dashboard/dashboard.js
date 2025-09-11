// Sidebar navigation
const menuItems = document.querySelectorAll(".sidebar nav ul li");
const sections = document.querySelectorAll(".section");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    // remove active class
    menuItems.forEach(i => i.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // add active to clicked
    item.classList.add("active");
    document.getElementById(item.dataset.section).classList.add("active");
  });
});

// Sign out button
document.getElementById("signOut").addEventListener("click", () => {
  alert("Signed out!");
  window.location.href = "login.html"; // redirect
});

// Theme toggle
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
