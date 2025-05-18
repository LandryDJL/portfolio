document.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.querySelector(
    "#hero .hero-container .block-hero-img img"
  );
  const blockHeroImage = document.querySelector(
    "#hero .hero-container .block-hero-img"
  );
  const imageOutline = document.querySelector(".outlined");
  const sectionHero = document.querySelector("#hero");
  const heroName = document.querySelector(".block-name");
  const heroProfession = document.querySelector(".block-profession");
  const heroDescription = document.querySelector(".block-description");
  const engResumeButton = document.querySelector(".resume-eng");
  const frResumeButton = document.querySelector(".resume-fr");
  const contactButton = document.querySelector(".contact-btn");

  function callBackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "hero") {
          blockHeroImage.classList.add("fadeInTop");
          heroImage.classList.add("heroImageAnimation");
          imageOutline.classList.add("heroShapeAnimation");
          heroName.classList.add("fadeInTop");
          heroProfession.classList.add("fadeInTop");
          heroDescription.classList.add("fadeInTop");
          contactButton.classList.add("fadeInBounce");
          engResumeButton.classList.add("fadeInBounce");
          frResumeButton.classList.add("fadeInBounce");
        }
        const sectionTitle = entry.target.querySelector(".section-title");
        if (sectionTitle) {
          sectionTitle.classList.add("fadeInTop");
        }
      }
    });
  }
  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callBackFunction, options);
  observer.observe(sectionHero);
});
