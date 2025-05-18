// make the label, in the contact form, move to the top when the input is focused and keep it inside the input when empty.
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

document.addEventListener("DOMContentLoaded", () => {
  const sectionContact = document.querySelector("#contact");
  function callBackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "contact") {
          const infoRows = document.querySelectorAll(".info-row");
          const formRows = document.querySelectorAll(".row");
          const submitBtn = document.querySelector(".submit-btn");
          infoRows.forEach((infoRow) => {
            infoRow.classList.add("fadeInRight");
          });
          formRows.forEach((formRow) => {
            formRow.classList.add("fadeInLeft");
          });
          submitBtn.classList.add("fadeInTop");
          submitBtn.style.animationDuration = "0.3s";
          submitBtn.style.animationDelay = "1.8s";
        }
        const sectionTitle = entry.target.querySelector(".section-title");
        if (sectionTitle) {
          sectionTitle.classList.add("fadeInTop");
          sectionTitle.style.animationDelay = "0.5s";
        }
      }
    });
  }
  const options = {
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callBackFunction, options);
  observer.observe(sectionContact);
});
