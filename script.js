/* =========================================================
   BEESEEBYTES
   AI-POWERED DIGITAL MARKETING & AUTOMATION
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");

      if (nav.classList.contains("active")) {
        menuToggle.setAttribute("aria-expanded", "true");
      } else {
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close menu after clicking a navigation link
    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });

  });


  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const contactForm = document.querySelector("form");

  if (contactForm) {

    contactForm.addEventListener("submit", function () {

      /*
       FormSubmit handles the actual email submission.
       This code only saves a small status locally.
      */

      try {
        sessionStorage.setItem("beeSeeBytesFormSubmitted", "true");
      } catch (error) {
        console.log("Session storage unavailable.");
      }

    });

  }


  /* =======================================================
     THANK YOU MESSAGE
     ======================================================= */

  const urlParams = new URLSearchParams(window.location.search);
  const submitted = urlParams.get("submitted");

  const thankYou = document.querySelector(".thank-you");

  if (submitted === "1" && thankYou) {

    if (contactForm) {
      contactForm.style.display = "none";
    }

    thankYou.classList.add("show");

    // Scroll to thank-you message
    setTimeout(function () {
      thankYou.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 300);

  }


  /* =======================================================
     GET A QUOTE BUTTONS
     ======================================================= */

  const quoteButtons = document.querySelectorAll(
    'a[href="#contact"], button[data-target="#contact"]'
  );

  quoteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const contactSection = document.querySelector("#contact");

      if (contactSection) {

        setTimeout(function () {

          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 50);

      }

    });

  });


  /* =======================================================
     SERVICE / PACKAGE QUOTE BUTTON
     ======================================================= */

  const serviceLinks = document.querySelectorAll(
    ".service-card a, .package-card a"
  );

  serviceLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      const serviceName =
        this.closest(".service-card, .package-card")
          ?.querySelector("h3")
          ?.textContent
          ?.trim();

      if (serviceName) {

        try {
          sessionStorage.setItem(
            "beeSeeBytesSelectedService",
            serviceName
          );
        } catch (error) {
          console.log("Could not save selected service.");
        }

      }

    });

  });


  /* =======================================================
     AUTO SELECT SERVICE IN CONTACT FORM
     ======================================================= */

  const serviceSelect = document.querySelector(
    'select[name="service"], select#service'
  );

  let selectedService = null;

  try {
    selectedService = sessionStorage.getItem(
      "beeSeeBytesSelectedService"
    );
  } catch (error) {
    selectedService = null;
  }

  if (serviceSelect && selectedService) {

    const options = Array.from(serviceSelect.options);

    const matchingOption = options.find(function (option) {

      return option.textContent
        .trim()
        .toLowerCase()
        .includes(selectedService.toLowerCase());

    });

    if (matchingOption) {
      serviceSelect.value = matchingOption.value;
    }

  }


  /* =======================================================
     CURRENT YEAR IN FOOTER
     ======================================================= */

  const yearElements = document.querySelectorAll(
    ".current-year, #current-year"
  );

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .package-card, .why-card, .process-card, .ai-card"
  );

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      function (entries, observer) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(function (element) {

      element.style.opacity = "0";
      element.style.transform = "translateY(15px)";
      element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

      observer.observe(element);

    });

  }


  /* =======================================================
     ESC KEY - CLOSE MOBILE MENU
     ======================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      if (nav) {
        nav.classList.remove("active");
      }

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
      }

    }

  });


  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "BeeSeeBytes | Smarter Marketing. Powered by AI."
  );

});
