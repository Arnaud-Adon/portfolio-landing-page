import { projects } from "./ressources/data/projects.js";
import { renderProjects } from "./ressources/data/domRenderProject.js";
import { sendEmail } from "./services/email/smtp.js";

const circleMenuBtn = document.querySelector(".circle-menu-btn");
const nav = document.querySelector(".nav-left");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const row = document.querySelector(".container-row");

circleMenuBtn.addEventListener("click", () => {
  row.classList.toggle("active");
  nav.classList.toggle("visible-nav");
});

if (window.matchMedia("(max-with: 1300px")) {
  let modalContainer = document.querySelector(".modal-container");
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("visible-nav");
      row.classList.toggle("active");
      modalContainer.classList.remove("show");
      for (let element in projectContainerElement) {
        projectContainerElement[element].innerHTML = "";
      }
      modalContainer.classList.remove("show");
    });
  });
}

// type writer animation

const txtAnim = document.querySelector(".txt-animation");

let typeWriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 25,
});

typeWriter
  .pauseFor(1800)
  .changeDelay(20)
  .typeString("<span>Moi c'est Arnaud Adon</span>")
  .pauseFor(300)
  .typeString("<strong>, Développeur</strong> Full-Stack")
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #27ae60">Javascript</span>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<span style="color: #EA39ff">React</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: midnightblue">React Native</span>')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<span style="color: #ff6910">Node.js</span>')
  .start();

/* ANIMATION CONTACT */
const input_fields = document.querySelectorAll("input");

input_fields.forEach((field) => {
  field.addEventListener("input", (e) => {
    e.target.value !== ""
      ? e.target.parentNode.classList.add("animation")
      : e.target.parentNode.classList.remove("animation");
  });
});

/* ANIMATION GREESOCK + SCROLLMAGIC */

const navbar = document.querySelector(".nav-left");
const title = document.querySelector("h1");
const btnAcc = document.querySelectorAll(".btn-acc");
const mediaBtn = document.querySelectorAll(".media");
const circleBtn = document.querySelector(".circle-btn");

const timeleneIntroduction = gsap.timeline({ paused: true });

if (timeleneIntroduction) {
  timeleneIntroduction
    .to(navbar, { left: "0px", ease: Power3.easeOut, duration: 0.6 })
    .from(title, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 })
    .staggerFrom(btnAcc, 1, { opacity: 0 }, 0.2, "-=0.30")
    .staggerFrom(mediaBtn, 1, { opacity: 0 }, 0.2, "-=0.75")
    .from(
      circleBtn,
      { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4 },
      "-=1"
    );

  window.addEventListener("load", () => timeleneIntroduction.play());
}

// ANIMATION SCROLL MAGIC GSAP - PRESENTATION

const presentationContainer = document.querySelector(".presentation");
const presenationTitle = document.querySelector(".presentation-title");
const leftPresentation = document.querySelector(".left-presentation");
const rightPresentation = document.querySelector(".right-presentation");
const itemListPresentation = document.querySelectorAll(".item-list");

const timelinePresenation = new TimelineMax();

timelinePresenation
  .from(presentationContainer, {
    y: 200,
    opacity: 0,
    duration: 0.6,
  })
  .from(leftPresentation, { x: -100, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(itemListPresentation, 1, { opacity: 0 }, 0.2, "-=0.5");

// CONTAINER A ANIMATION - QUI CONTIENT TOUTE ELS SCENE

const controller = new ScrollMagic.Controller();

// CHAQUE ANIMATION DE SCROLL EST APPELLE UNE SCENE
// triggerElement - ELEMENT A PARTIR DUQUEL ELLE EST DECLENCHEE
// reverse - ANIMATION EFFECTUER QU'UNE SEULE FOIS (false)
// triggerHook - INDIQUE LA POSITION SUR L'ECRAN OU SE DECLENCHE L'ANIMATION (trigger 1)
// setTween - CHOIX DE LA TIMELINE
// addTo - ASSOCIER AU CONTROLLER
// addIndicators - OU DEMARRE L'ANIMATION

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(timelinePresenation)
  // .addIndicators()
  .addTo(controller);

// ANIMATION SCROLL MAGIC GSAP - PORTFOLIO

// WAVE 1

const portfolioContainer = document.querySelector(".portfolio");
const portfolioTitle = document.querySelector(".portfolio-title");
const itemPortfolio = document.querySelectorAll(".wave1");

const timelinePortfolio = new TimelineMax();

timelinePortfolio
  .from(portfolioTitle, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemPortfolio, 1, { opacity: 0 }, 0.2, "-=0.5");

const scenePortfolio = new ScrollMagic.Scene({
  triggerElement: portfolioContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(timelinePortfolio)
  // .addIndicators()
  .addTo(controller);

// WAVE 2

const itemPortfolio2 = document.querySelectorAll(".wave2");

const timelinePortfolio2 = new TimelineMax();

timelinePortfolio2.staggerFrom(itemPortfolio2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scenePortfolio2 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(timelinePortfolio2)
  // .addIndicators()
  .addTo(controller);

// WAVE 3

const itemPortfolio3 = document.querySelectorAll(".wave3");

const timelinePortfolio3 = new TimelineMax();

timelinePortfolio3.staggerFrom(itemPortfolio3, 1, { opacity: 0 }, 0.2, "-=0.5");

const scenePortfolio3 = new ScrollMagic.Scene({
  triggerElement: itemPortfolio2,
  triggerHook: 0.2,
  reverse: false,
})
  .setTween(timelinePortfolio3)
  // .addIndicators()
  .addTo(controller);

// ANIMATION SCROLL MAGIC GSAP - SKILL - RANGE

const rangeSection = document.querySelector(".range-section");
const skillTitle = document.querySelector(".skill-title");
const allSkillLabel = document.querySelectorAll(".skill-label");
const allSkillNumber = document.querySelectorAll(".skill-number");
const allSkillBar = document.querySelectorAll(".skill-bar");
const allGreyBar = document.querySelectorAll(".grey-bar");

const timelineSkills = new TimelineMax();

timelineSkills
  .from(skillTitle, { opacity: 0, duration: 0.6 })
  .staggerFrom(allSkillLabel, 0.5, { y: -50, opacity: 0 }, 0.1, "-=0.5")
  .staggerFrom(allSkillNumber, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allGreyBar, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1")
  .staggerFrom(allSkillBar, 0.5, { y: -10, opacity: 0 }, 0.1, "-=1");

const skillScene = new ScrollMagic.Scene({
  triggerElement: rangeSection,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(timelineSkills)
  // .addIndicators()
  .addTo(controller);

const projectContainerElement = {
  name: document.querySelector(".project-name"),
  description: document.querySelector(".project-description"),
  images: document.querySelector(".project-images"),
  functionalities: document.querySelector(".project-functionalities"),
  technicalStack: document.querySelector(".project-technical-stack"),
  links: document.querySelector(".project-link"),
};

const modalContainer = document.querySelector(".modal-container");

renderProjects(projects, modalContainer, projectContainerElement);

const closeModalButton = document.querySelector(".close-modal");

closeModalButton.addEventListener("click", () => {
  for (let element in projectContainerElement) {
    projectContainerElement[element].innerHTML = "";
  }
  modalContainer.classList.remove("show");
});

// CONTACT FORM

const contactForm = document.getElementById("contact-form");
const mailResult = document.querySelector(".mail-result");
const containerMailResult = document.querySelector(".container-mail-result");

// const p = document.createElement("p");
// p.innerText = "Votre message à été transmis.";
// mailResult.classList.add("success");
// mailResult.appendChild(p);
// containerMailResult.classList.add("visible");

const timelineMailResult = gsap.timeline({ paused: true });

timelineMailResult
  .to(mailResult, {
    y: 200,
    opacity: 1,
    ease: Power3.easeOut,
    duration: 2.5,
  })
  .to(
    mailResult,
    { y: -200, opacity: 0, ease: Power3.easeOut, duration: 2.5 },
    "=2.2"
  );

// timelineMailResult.play();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const message = event.target.message.value;
  const p = document.createElement("p");

  sendEmail(firstName, lastName, message)
    .then((message) => {
      p.innerText = "Votre message à été transmis.";
      mailResult.classList.add("success");
    })
    .catch((error) => {
      p.innerText = "Votre message n'a pas été transmis.";
      mailResult.classList.add("error");
    });
  contactForm.reset();
  input_fields.forEach((field) =>
    field.parentNode.classList.remove("animation")
  );
  mailResult.appendChild(p);
  containerMailResult.classList.add("visible");
  timelineMailResult.play();
  setTimeout(() => containerMailResult.classList.remove("visible"), 5000);
});
