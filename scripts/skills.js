document.addEventListener("DOMContentLoaded", () => {
  const sectionSkills = document.querySelector("#skills");
  const skillTitles = document.querySelectorAll(".skill-title");

  function callBackFunction(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "skills") {
          skillTitles.forEach((skillTitle) => {
            skillTitle.classList.add("fadeInTop");
            skillTitle.style.animationDelay = "0.7s";
            const skillBlocks = document.querySelectorAll(".skill");
            const skillImgs = document.querySelectorAll(".skill img");
            const skillNames = document.querySelectorAll(".skill-name");
            const skillBars = document.querySelectorAll(".skill .bar");
            const skillFillers = document.querySelectorAll(
              ".skill .bar .filler"
            );
            const skillFillersValues = [
              {
                name: "html-filler",
                value: "100%",
              },
              {
                name: "css-filler",
                value: "90%",
              },
              {
                name: "bootstrap-filler",
                value: "90%",
              },
              {
                name: "js-filler",
                value: "80%",
              },
              {
                name: "react-filler",
                value: "70%",
              },
              {
                name: "wordpress-filler",
                value: "90%",
              },
              {
                name: "illustrator-filler",
                value: "80%",
              },
              {
                name: "photoshop-filler",
                value: "70%",
              },
              {
                name: "canva-filler",
                value: "90%",
              },
            ];
            skillBlocks.forEach((skillBlock) => {
              if (skillBlock) {
                skillImgs.forEach((skillImg) => {
                  skillImg.classList.add("fadeInLeft");
                  skillImg.style.animationDelay = "1s";
                });
                skillNames.forEach((skillName) => {
                  skillName.classList.add("fadeInLeft");
                  skillName.style.animationDelay = "1.2s";
                });
                skillBars.forEach((skillBar) => {
                  skillBar.classList.add("fadeIn");
                  skillBar.style.animationDelay = "2s";
                });

                skillFillers.forEach((skillfiller) => {
                  if (skillfiller) {
                    skillFillersValues.forEach((skillFillersValue) => {
                      // Check if the skillfiller's class includes the skill name from the array skillFillersValues
                      if (
                        skillfiller.classList.contains(
                          `${skillFillersValue.name}`
                        )
                      ) {
                        // Animate the width from 0 to the target value
                        let current = 0;
                        const target = parseInt(skillFillersValue.value, 10);
                        skillfiller.style.width = "0%";
                        skillfiller.style.animationDelay = "3s";
                        skillfiller.textContent = "0%";
                        const duration = target * 20; // total animation duration in milliseconds
                        const stepTime = target / 5; // milliseconds per step
                        const increment = target / (duration / stepTime);

                        const interval = setInterval(() => {
                          current += increment;
                          if (current >= target) {
                            current = target;
                            clearInterval(interval);
                          }
                          skillfiller.style.width = `${current}%`;
                          skillfiller.style.transition = "1s ease-in-out";
                          skillfiller.textContent = `${Math.round(current)}%`;
                        }, stepTime);
                      }
                    });
                  }
                });
              }
            });
          });
          observer.unobserve(entry.target);
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
    threshold: 0.3,
  };

  const observer = new IntersectionObserver(callBackFunction, options);
  observer.observe(sectionSkills);
});
