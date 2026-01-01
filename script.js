// Smooth scroll already handled via CSS
// Placeholder for future enhancements like dark mode, form validations etc.
console.log("Welcome to Shafqat's Portfolio");
const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  icon.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");

  icon.classList.toggle("fa-moon", !isLight);
  icon.classList.toggle("fa-sun", isLight);

  localStorage.setItem("theme", isLight ? "light" : "dark");
});
