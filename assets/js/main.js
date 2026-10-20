(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = () => {
    if (body.getAttribute("data-theme") === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    }
  };

  lamp.addEventListener("click", toggleTheme);

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
