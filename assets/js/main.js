/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// MENU SHOW
// Validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
// Validate if constant exist

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class

  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
  const header = document.getElementById("header");

  // when the scroll is greater then 50vh add the blur-header class to the header id

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_kte08g7",
      "template_re1v1ow",
      "#contact-form",
      "X4GvwasnZk0vC6K2f"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message Sent Successfully 👍";
        // remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        //   clear input field

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message Not Sent (Service Error) ";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  // when the scroll is higher than 350 vh, add the show-scroll class to the tag with the scrollup class

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    sectionTop = current.offsetTop - 58;
    (sectionId = current.getAttribute("id")),
      (sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      ));

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true //animation repeat
});

sr.reveal(".home__data, .home__social, .contact__container, .footer__container");
sr.reveal(".home__image", { origin: "buttom" });
sr.reveal(".about__data, .skills__data", { origin: "left" });
sr.reveal(".about__image, .skills__content", { origin: "right" });
sr.reveal(".services__card, .projects__card", { interval: 100});
