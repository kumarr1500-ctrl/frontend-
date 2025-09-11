const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#111827";
    themeBtn.textContent = " Theme";
  } else {
    document.body.style.background = "#0f172a";
    document.body.style.color = "#e2e8f0";
    themeBtn.textContent = " Theme";
  }
});
