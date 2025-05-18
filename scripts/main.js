// get the year
const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;

// Animate elements of the page on scroll

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
