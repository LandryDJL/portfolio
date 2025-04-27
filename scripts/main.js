// get the year
const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;

//Link the sidebar links to the section and highlight the link of the corresponding section showing and  Animate the elements of the page.
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");
  const topNavBar = document.querySelector("#topbar");
  const heroImage = document.querySelector(".block-hero-img img");
  const sidebar = document.querySelector("#sidebar");
  const menuSidebar = {
    hero: document.querySelector(".home"),
    projects: document.querySelector(".projects"),
    skills: document.querySelector(".skills"),
    contact: document.querySelector(".contact"),
  };

  function callbackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelector("#menu-sidebar .active")
          .classList.remove("active");
        menuSidebar[entry.target.id].classList.add("active");
      }
    });
  }

  const option = {
    rootMargin: "0px",
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(callbackFunction, option);

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// make the label, in the contact form, move to the top when the input is focused and keep it inside the input when empty.
document.addEventListener("DOMContentLoaded", () => {
  const inputs = [
    {
      input: document.getElementById("name"),
      label: document.querySelector('label[for="name"]'),
    },
    {
      input: document.getElementById("email"),
      label: document.querySelector('label[for="email"]'),
    },
    {
      input: document.getElementById("message"),
      label: document.querySelector('label[for="message"]'),
    },
  ];

  inputs.forEach(({ input, label }) => {
    input.addEventListener("focus", () => {
      label.classList.add("label-top");
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        label.classList.remove("label-top");
      }
    });

    if (input.value !== "") {
      label.classList.add("label-top");
    }
  });
});

// showing the btn go to the top only after scrolling
document.addEventListener("scroll", function () {
  const goToTopBtn = document.querySelector(".goTop");
  if (window.scrollY > 700) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none";
  }
});
// Scroll to the top
const backToTopButton = document.querySelector(".goTop");
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Toggle the settings button
const settingContainer = document.querySelector(".block-settings-content");
function settingsToggler() {
  settingContainer.classList.toggle("show-settings");
}

// Close the settings block when the user click anywhere on the page appart from inside the settings block
document.addEventListener("click", (event1) => {
  if (!event1.target.closest(".block-settings")) {
    settingContainer.classList.remove("show-settings");
  }
});

// Open and close the menu sidebar
function hamToggle() {
  sidebar.classList.toggle("opened");
}
function clodeSidebar() {
  sidebar.classList.remove("opened");
}

// Close the sidebar if the click is outside of it and not on the hamburger icon
document.addEventListener("click", (event2) => {
  if (
    !event2.target.closest("#sidebar") &&
    !event2.target.closest(".hamburger-toggler")
  ) {
    sidebar.classList.remove("opened");
  }
});

// Hide the sidebar and the settings panel on scroll
document.addEventListener("scroll", () => {
  if (sidebar.classList.contains("opened")) {
    sidebar.classList.remove("opened");
  }
  if (settingContainer.classList.contains("show-settings")) {
    settingContainer.classList.remove("show-settings");
  }
});

// Dark mode
const moon = document.querySelector(".theme-btn .moon-icon");
const sun = document.querySelector(".theme-btn .sun-icon");
const body = document.querySelector("body");
// Toggle dark mode when the button is clicked
function activateDarkMode() {
  sun.classList.toggle("showed");
  moon.classList.toggle("showed");
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode"));
}
document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "true") {
    body.classList.add("dark-mode");
    sun.classList.add("showed");
  } else {
    body.classList.remove("dark-mode");
    moon.classList.add("showed");
  }
});

// Blue and gold theme
document.addEventListener("DOMContentLoaded", () => {
  body.classList.add("gold-theme");
  const theme = localStorage.getItem("themeColor");
  if (theme === "") {
    localStorage.setItem("theme", "gold-theme");
  }
  if (theme === "gold-theme") {
    body.classList.add("gold-theme");
  }
  if (theme === "blue-theme") {
    body.classList.add("blue-theme");
  }
});

function activateGoldTheme() {
  if (
    !body.classList.contains("gold-theme") ||
    body.classList.contains("blue-theme")
  ) {
    body.classList.remove("blue-theme");
    body.classList.add("gold-theme");
    localStorage.setItem("themeColor", "gold-theme");
  }
}
function activateBlueTheme() {
  if (
    !body.classList.contains("blue-theme") ||
    body.classList.contains("gold-theme")
  ) {
    body.classList.remove("gold-theme");
    body.classList.add("blue-theme");
    localStorage.setItem("themeColor", "blue-theme");
  }
}
