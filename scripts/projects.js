const projects = [
  {
    title: "Rafting Website Project",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/WDD-130/wwr/index.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic website for a rafting company, allowing users to book trips online. Built with HTML and CSS.",
    imageSource: "assets/images/rafting.jpg",
  },
  {
    title: "Review form",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/form",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic review form, allowing users to bring a review about a product. Built with HTML and CSS.",
    imageSource: "assets/images/form.jpg",
  },
  {
    title: "Filtered temples",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/cse121b/w03-task.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page, allowing users to apply some filters on elements that are displayed. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/filtered-temples.jpg",
  },
  {
    title: "Currency Converter",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/filtered-temples.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page and implementing an API, allowing users to convertion between two currencies. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/cur_converter.jpg",
  },
  {
    title: "Country Info Webpage",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/cse121b/project.html",
    description:
      "This project was to test our understanding of the course material and our knowledge in building basic web page, displaying information about Cote d'Ivoire. Built with HTML and CSS.",
    imageSource: "assets/images/website.jpg",
  },
  {
    title: "Functions, arrays and Selection Structure",
    cardClass: "WD school",
    link: "https://landrydjl.github.io/wdd131/place",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/functions_arrays_selection_Structure.jpg",
  },
  {
    title: "Give someone a smile",
    cardClass: "GD friend",
    link: "#",
    description:
      "This project was to test our understanding of the course material and our knowledge about functions, arrays and selection structure, allowing users to make some basic operations. Built with HTML, CSS and JavaScript.",
    imageSource: "assets/images/gsas.jpg",
  },
];

function createProjectCard(projectsFiltered) {
  const projectsBlockContainer = document.querySelector(".projects-grid");
  projectsBlockContainer.innerHTML = "";
  projectsFiltered.forEach((project) => {
    let card = document.createElement("a");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let detailProjectCardContainer = document.createElement("div");
    let titleProjectCard = document.createElement("div");
    let descriptionProjectCard = document.createElement("div");

    card.setAttribute("href", project.link);
    card.setAttribute("target", "_blank");
    card.setAttribute("class", `${project.cardClass}`);
    imgContainer.classList.add(".image-project-card");
    img.setAttribute("src", project.imageSource);
    img.setAttribute("alt", `image of ${project.title}`);
    detailProjectCardContainer.classList.add(".detail-project-card");
    titleProjectCard.classList.add(".title-project");
    titleProjectCard.innerHTML = project.title;
    descriptionProjectCard.classList.add(".description-project");
    descriptionProjectCard.innerHTML = project.description;

    card.style.display = "block";
    card.style.padding = "1rem";
    card.style.marginBottom = "1rem";
    card.style.overflow = "hidden";

    img.style.transition = "0.5s ease-in-out";
    img.style.width = "100%";
    img.style.margin = "0 auto";
    img.style.objectFit = "cover";

    imgContainer.style.overflow = "hidden";
    descriptionProjectCard.style.display = "none";

    card.appendChild(imgContainer);
    card.appendChild(detailProjectCardContainer);
    imgContainer.appendChild(img);
    detailProjectCardContainer.appendChild(titleProjectCard);
    detailProjectCardContainer.appendChild(descriptionProjectCard);
    projectsBlockContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createProjectCard(projects);
});
