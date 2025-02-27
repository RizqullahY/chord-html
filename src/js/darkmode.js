document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkmodeToggle");
    const htmlElement = document.documentElement;
    if (localStorage.getItem("theme") === "dark") {
      htmlElement.classList.add("dark");
    }
    toggleButton.addEventListener("click", function () {
      htmlElement.classList.toggle("dark");
  
      if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  });
  