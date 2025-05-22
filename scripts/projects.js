const projects = [
  {
    index: 0,
    title: "Rafting Website Project",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/WDD-130/wwr/index.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic website for a rafting company, allowing users to book trips online. Built with HTML and CSS.",
    imageSource: "assets/images/rafting.jpg",
  },
  {
    index: 1,
    title: "Filtered temples",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/filtered-temples.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page, allowing users to apply some filters on elements that are displayed. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/filtered-temples.jpg",
  },
  {
    index: 2,
    title: "Currency Converter",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/cse121b/project.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page and implementing an API, allowing users to convertion between two currencies. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/cur_converter.jpg",
  },
  {
    index: 3,
    title: "Review form",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/form",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic review form, allowing users to bring a review about a product. Built with HTML and CSS.",
    imageSource: "assets/images/form.jpg",
  },
  {
    index: 4,
    title: "Country Info Webpage",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/place",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page, displaying information about Cote d'Ivoire. Built with HTML and CSS.",
    imageSource: "assets/images/website.jpg",
  },
  {
    index: 5,
    title: "Give someone a smile",
    cardClass: "GD friend",
    link: "#",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/gsas.jpg",
  },
  {
    index: 6,
    title: "Hire a VA flyer",
    cardClass: "GD friend",
    link: "#",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/elevate flyer (3).jpg",
  },
  {
    index: 7,
    title: "Hire a VA flyer",
    cardClass: "GD friend",
    link: "#",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/elevate flyer (4).jpg",
  },
  {
    index: 8,
    title: "Hire a VA flyer",
    cardClass: "GD friend",
    link: "#",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/elevate flyer (5).jpg",
  },
  {
    index: 9,
    title: "rare disease GH award citation",
    cardClass: "GD client",
    link: "#",
    description:
      "A citation of honour made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/rare disease GH award cit..png",
  },
  {
    index: 10,
    title: "methodist church citation Citation",
    cardClass: "GD client",
    link: "#",
    description:
      "A citation of honour made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/methodist church citation.png",
  },
  {
    index: 11,
    title: "Welfare Card book cover",
    cardClass: "GD client",
    link: "#",
    description:
      "A book cover made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/welfare card.png",
  },
  {
    index: 12,
    title: "ATUAS book cover",
    cardClass: "GD client",
    link: "#",
    description:
      "A book cover made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/ATUAS book cover.jpg",
  },

  {
    index: 13,
    title: "Inside Book ATUAS",
    cardClass: "GD client",
    link: "#",
    description:
      "The inside ATUAS book  made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Inside Book ATUAS.png",
  },
  {
    index: 14,
    title: "ATUAS calendar",
    cardClass: "GD client",
    link: "#",
    description:
      "a calendar made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/calendar ATUS.png",
  },
  {
    index: 15,
    title: "Celebration Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/DANNICE AND EUNICE.jpg",
  },
  {
    index: 16,
    title: "Celebration Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/plaq Rev.png",
  },
  {
    index: 17,
    title: "Award Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Ministry of Lands and Natural Resources.jpg",
  },
  {
    index: 18,
    title: "TCP Award Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/TPC.png",
  },
  {
    index: 19,
    title: "VORSA Award Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/VORSA PLAQUES.jpg",
  },
  {
    index: 20,
    title: "Home Builders Award Plaque design",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Home Builders Plaq.png",
  },
  {
    index: 21,
    title: "bakery brands honoring plaque",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/bakery brands honoring plaque.png",
  },
  {
    index: 22,
    title: "Invitation card",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Invitation card.jpg",
  },
  {
    index: 23,
    title: "Shea Label",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/shea Label.png",
  },
  {
    index: 24,
    title: "Shea Circle Label",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Shea Circle Label.jpg",
  },
  {
    index: 25,
    title: "Shea Thank You Card",
    cardClass: "GD client",
    link: "#",
    description:
      "an award palque for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/Shea thk card.jpg",
  },
  {
    index: 26,
    title: "Freshy",
    cardClass: "GD client",
    link: "#",
    description:
      "Logo made for a friend, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/freshy.png",
  },
  {
    index: 27,
    title: "edu sport program certificate",
    cardClass: "GD client",
    link: "#",
    description:
      "certificate made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/edu sport program certificate.png",
  },
  {
    index: 28,
    title: "Phyll tombrown label",
    cardClass: "GD client",
    link: "#",
    description:
      "certificate made for a client, when I was working at Sweet Aroma Print(Ghana).",
    imageSource: "assets/images/PHYLL TOMBROWN.jpg",
  },
];

const sectionProjects = document.querySelector("#projects");

function callBackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector(".section-title");
      if (sectionTitle) {
        sectionTitle.classList.add("fadeInTop");
        sectionTitle.style.opacity = "1";
      }
    }
  });
}
const options = {
  rootMargin: "0px",
  threshold: 0.1,
};
const observer = new IntersectionObserver(callBackFunction, options);
observer.observe(sectionProjects);

document.addEventListener("DOMContentLoaded", () => {
  const projectsBlockContainer = document.querySelector(".projects-grid");
  const slidesContainer = document.getElementById("slidesContainer");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const closingModal = document.querySelector(".closing-modal");
  const modal = document.getElementById("sliderModal");
  let currentSlide = 0;

  modal.style.display = "none";

  function createProjectCard(projectsFiltered) {
    projectsBlockContainer.innerHTML = "";

    projectsFiltered.forEach((project, index) => {
      const card = document.createElement("a");
      const imgContainer = document.createElement("div");
      const img = document.createElement("img");
      const detailProjectCardContainer = document.createElement("div");
      const titleProjectCard = document.createElement("div");
      const descriptionProjectCard = document.createElement("div");

      card.setAttribute("href", "#");
      card.setAttribute("class", `${project.cardClass}`);
      imgContainer.classList.add("image-project-card");
      img.setAttribute("src", project.imageSource);
      img.setAttribute("alt", `image of ${project.title}`);
      img.setAttribute("loading", "lazy");
      detailProjectCardContainer.classList.add("detail-project-card");
      titleProjectCard.classList.add("title-project");
      titleProjectCard.innerHTML = project.title;
      descriptionProjectCard.classList.add("description-project");
      descriptionProjectCard.innerHTML = project.description;

      card.style.opacity = "0";
      card.style.display = "grid";
      card.style.position = "relative";
      card.style.gridTemplateRows = "1fr";
      card.style.alignItems = "start";
      card.style.padding = "0.5rem";
      card.style.overflow = "hidden";

      card.addEventListener("mouseover", () => {
        detailProjectCardContainer.style.gridTemplateRows = "-200px";
        detailProjectCardContainer.style.opacity = "1";
      });
      card.addEventListener("mouseout", () => {
        detailProjectCardContainer.style.opacity = "0";
        detailProjectCardContainer.style.gridTemplate = "0px";
      });

      img.style.transition = "0.5s ease-in-out";
      img.style.width = "100%";
      img.style.margin = "0 auto";
      img.style.objectFit = "cover";

      detailProjectCardContainer.style.gridArea = "1/1/2/2";
      detailProjectCardContainer.style.gridTemplateRows = "0px";
      detailProjectCardContainer.style.position = "absolute";
      detailProjectCardContainer.style.bottom = "0";
      detailProjectCardContainer.style.width = "100%";
      detailProjectCardContainer.style.opacity = "0";
      detailProjectCardContainer.style.zIndex = "1";
      detailProjectCardContainer.style.transition = "0.3s ease-in-out";
      detailProjectCardContainer.style.backgroundImage =
        "linear-gradient(rgba(26,26,26,0.5), rgba(26,26,26,1))";

      titleProjectCard.style.padding = "1rem 0.5rem";
      titleProjectCard.style.color = "#f3f3f3";
      titleProjectCard.style.zIndex = "2";

      imgContainer.style.gridArea = "1/1/2/2";
      imgContainer.style.overflow = "hidden";
      imgContainer.style.zIndex = "0";
      descriptionProjectCard.style.display = "none";
      descriptionProjectCard.style.height = "0px";

      card.appendChild(imgContainer);
      card.appendChild(detailProjectCardContainer);
      imgContainer.appendChild(img);
      detailProjectCardContainer.appendChild(titleProjectCard);
      detailProjectCardContainer.appendChild(descriptionProjectCard);

      projectsBlockContainer.appendChild(card);

      // Open the modal when a card is clicked
      card.addEventListener("click", (event) => {
        event.preventDefault();
        showModal(index);
      });

      function callBackFunction(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add("fadeInTop");
          }
        });
      }

      const options = {
        rootMargin: "0px",
        threshold: 1,
      };

      const observer = new IntersectionObserver(callBackFunction, options);
      observer.observe(card);
    });

    const selectElement = document.getElementById("selector");
    selectElement.addEventListener("change", () => {
      let filteredProjects = projects;
      if (selectElement.value === "1") {
        filteredProjects = projects.filter((param) =>
          param.cardClass.includes("GD")
        );
      } else if (selectElement.value === "2") {
        filteredProjects = projects.filter((param) =>
          param.cardClass.includes("WD")
        );
      }
      createProjectCard(filteredProjects);
    });
  }
  createProjectCard(projects);

  function showModal(startIndex) {
    slidesContainer.innerHTML = "";
    currentSlide = startIndex;

    // Generate and add the images to the slider in the modal. Add also the title, description and the index as a counter
    projects.forEach((project, index) => {
      const slideImg = document.createElement("img");
      slideImg.setAttribute("src", project.imageSource);
      slideImg.setAttribute("alt", `image of ${project.title}`);
      slideImg.setAttribute("loading", "lazy");
      slideImg.setAttribute("class", "slide");

      slideImg.style.width = "100%";
      slideImg.style.height = "100%";
      slideImg.style.objectFit = "contain";
      slideImg.style.margin = "0 auto";
      slideImg.style.transition = "0.5s ease-in-out";
      slideImg.style.display = index === startIndex ? "block" : "none";
      slidesContainer.appendChild(slideImg);
      slideImg.addEventListener("click", () => {
        if (project.link !== "#") {
          slideImg.style.cursor = "pointer";
          window.open(project.link, "_blank");
        }
      });

      const slideTitle = document.createElement("div");
      const slideDescription = document.createElement("div");
      const slideIndex = document.createElement("div");
      const slideDetailContainer = document.createElement("div");

      slideTitle.setAttribute("class", "slide-title");
      slideDescription.setAttribute("class", "slide-description");
      slideIndex.setAttribute("class", "slide-index");
      slideDetailContainer.setAttribute("class", "slide-detail-container");

      slideTitle.innerHTML = projects[index].title;
      slideDescription.innerHTML = projects[index].description;
      slideIndex.innerHTML = `${index + 1} / ${projects.length}`;

      slideIndex.style.position = "absolute";
      slideIndex.style.top = "1rem";
      slideIndex.style.left = "50%";
      slideIndex.style.transform = "translateX(-50%)";
      slideIndex.style.zIndex = "1000";
      slideIndex.style.userSelect = "none";

      slideDetailContainer.style.display = "none";
      slideDetailContainer.style.position = "absolute";
      slideDetailContainer.style.bottom = "0";
      slideDetailContainer.style.left = "50%";
      slideDetailContainer.style.width = "100%";
      slideDetailContainer.style.height = "auto";
      slideDetailContainer.style.transform = "translateX(-50%)";
      slideDetailContainer.style.backgroundColor = "#000000e6";
      slideDetailContainer.style.padding = "2rem";
      slideDetailContainer.style.textAlign = "center";
      slideDetailContainer.style.zIndex = "1000";
      slideDetailContainer.style.userSelect = "none";
      slideDetailContainer.style.cursor = "pointer";
      slideDetailContainer.style.transition = "0.3s ease-in-out";
      slideTitle.style.marginBottom = "1rem";
      slideDescription.style.color = "#f3f3f3";
      slideDescription.style.fontStyle = "italic";
      slideDescription.style.width = "80%";
      slideDescription.style.margin = "0 auto";

      slideDetailContainer.appendChild(slideTitle);
      slideDetailContainer.appendChild(slideDescription);
      slidesContainer.appendChild(slideDetailContainer);
      slidesContainer.appendChild(slideIndex);

      slideIndex.style.display = index === startIndex ? "block" : "none";
      slideTitle.style.display = index === startIndex ? "block" : "none";
      slideDescription.style.display = index === startIndex ? "block" : "none";
      slideDetailContainer.style.display =
        index === startIndex ? "block" : "none";

      slideImg.addEventListener("mouseout", () => {
        slideIndex.style.display = "none";
        slideDescription.style.display = "none";
        slideDetailContainer.style.display = "none";
        slideTitle.style.display = "none";
      });
      slideImg.addEventListener("mouseover", () => {
        slideIndex.style.display = "block";
        slideDescription.style.display = "block";
        slideDetailContainer.style.display = "block";
        slideTitle.style.display = "block";
      });
    });

    modal.style.display = "block";
    showSlide(currentSlide);

    projectsBlockContainer.appendChild(modal);
  }

  function showSlide(index) {
    const slides = slidesContainer.querySelectorAll(".slide");
    slides.forEach((slide, indx) => {
      slide.style.display = indx === index ? "block" : "none";
    });
    const slideTitles = slidesContainer.querySelectorAll(".slide-title");
    const slideDescriptions =
      slidesContainer.querySelectorAll(".slide-description");
    const slideIndexes = slidesContainer.querySelectorAll(".slide-index");
    const slideDetailContainers = slidesContainer.querySelectorAll(
      ".slide-detail-container"
    );
    slideTitles.forEach((title, indx) => {
      title.style.display = indx === index ? "block" : "none";
    });
    slideDescriptions.forEach((description, indx) => {
      description.style.display = indx === index ? "block" : "none";
    });
    slideIndexes.forEach((slideIndex, indx) => {
      slideIndex.style.display = indx === index ? "block" : "none";
    });
    slideDetailContainers.forEach((slideDetailContainer, indx) => {
      slideDetailContainer.style.display = indx === index ? "block" : " none";
    });
  }
  closingModal.style.userSelect = "none";
  if (closingModal) {
    closingModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    showSlide(currentSlide);
  });
  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % projects.length;
    showSlide(currentSlide);
  });
});
