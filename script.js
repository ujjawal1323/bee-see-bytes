/* =========================================================
   BEESEEBYTES
   AI-POWERED DIGITAL MARKETING & AUTOMATION
   COMPLETE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      nav.classList.toggle("active");

      const isOpen = nav.classList.contains("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });


    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.innerHTML = "☰";

      });

    });

  }


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =======================================================
     NAVBAR SCROLL EFFECT
     ======================================================= */

  const header = document.querySelector("header");

  if (header) {

    const updateHeader = () => {

      if (window.scrollY > 30) {

        header.classList.add("scrolled");

      } else {

        header.classList.remove("scrolled");

      }

    };

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();

  }


  /* =======================================================
     SCROLL REVEAL
     ======================================================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .package-card, .why-card, .process-card, .ai-feature, .growth-flow-item"
  );

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach((element, index) => {

      element.style.transitionDelay =
        `${Math.min(index * 0.04, 0.25)}s`;

      revealObserver.observe(element);

    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* =======================================================
     HERO VISUAL PARALLAX
     ======================================================= */

  const heroVisual = document.querySelector(".hero-visual");

  if (heroVisual && window.innerWidth > 780) {

    heroVisual.addEventListener("mousemove", event => {

      const rect = heroVisual.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width - 0.5;

      const y =
        (event.clientY - rect.top) /
        rect.height - 0.5;


      const logo = heroVisual.querySelector(
        ".hero-logo-card"
      );

      const cards = heroVisual.querySelectorAll(
        ".floating-card"
      );


      if (logo) {

        logo.style.transform =
          `translate(${x * 10}px, ${y * 10}px)`;

      }


      cards.forEach((card, index) => {

        const strength = 5 + index * 1.5;

        card.style.marginLeft =
          `${x * strength}px`;

        card.style.marginTop =
          `${y * strength}px`;

      });

    });


    heroVisual.addEventListener("mouseleave", () => {

      const logo = heroVisual.querySelector(
        ".hero-logo-card"
      );

      const cards = heroVisual.querySelectorAll(
        ".floating-card"
      );


      if (logo) {
        logo.style.transform = "";
      }


      cards.forEach(card => {

        card.style.marginLeft = "";
        card.style.marginTop = "";

      });

    });

  }


  /* =======================================================
     AI SYSTEM NODE INTERACTION
     ======================================================= */

  const aiNodes = document.querySelectorAll(".ai-node");

  aiNodes.forEach(node => {

    node.addEventListener("mouseenter", () => {

      aiNodes.forEach(other => {

        if (other !== node) {
          other.style.opacity = "0.45";
        }

      });

    });


    node.addEventListener("mouseleave", () => {

      aiNodes.forEach(other => {

        other.style.opacity = "1";

      });

    });

  });


  /* =======================================================
     SERVICE CARD HOVER
     ======================================================= */

  const serviceCards =
    document.querySelectorAll(".service-card");


  serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.style.zIndex = "5";

    });


    card.addEventListener("mouseleave", () => {

      card.style.zIndex = "";

    });

  });


  /* =======================================================
     PACKAGE CARD HOVER
     ======================================================= */

  const packageCards =
    document.querySelectorAll(".package-card");


  packageCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.style.zIndex = "5";

    });


    card.addEventListener("mouseleave", () => {

      card.style.zIndex = "";

    });

  });


  /* =======================================================
     SELECT SERVICE FROM QUOTE BUTTON
     ======================================================= */

  const serviceSelect =
    document.querySelector("#service");


  document.querySelectorAll(
    ".service-link, .package-card .btn"
  ).forEach(button => {

    button.addEventListener("click", () => {

      const parent =
        button.closest(
          ".service-card, .package-card"
        );


      if (!parent || !serviceSelect) {
        return;
      }


      const title =
        parent.querySelector("h3");


      if (!title) {
        return;
      }


      const serviceName =
        title.textContent.trim();


      const option =
        Array.from(
          serviceSelect.options
        ).find(option =>
          option.textContent
            .trim()
            .toLowerCase()
            .includes(
              serviceName
                .toLowerCase()
                .substring(0, 18)
            )
        );


      if (option) {

        serviceSelect.value =
          option.value;

      }

    });

  });


  /* =======================================================
     CONTACT FORM
     ======================================================= */

  const contactForm =
    document.querySelector(
      ".contact-form-wrapper form"
    );


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      () => {

        try {

          sessionStorage.setItem(
            "beeSeeBytesFormSubmitted",
            "true"
          );

        } catch (error) {

          console.log(
            "Session storage unavailable."
          );

        }

      }
    );

  }


  /* =======================================================
     THANK YOU PAGE / MESSAGE
     ======================================================= */

  const urlParams =
    new URLSearchParams(
      window.location.search
    );


  const submitted =
    urlParams.get("submitted");


  const thankYou =
    document.querySelector(".thank-you");


  if (
    submitted === "1" &&
    thankYou
  ) {

    if (contactForm) {

      contactForm.style.display =
        "none";

    }


    thankYou.classList.add("show");


    setTimeout(() => {

      thankYou.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    }, 300);

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  document.querySelectorAll(
    ".current-year, #current-year"
  ).forEach(element => {

    element.textContent =
      new Date().getFullYear();

  });


  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );


  const navLinks =
    document.querySelectorAll(
      'nav a[href^="#"]'
    );


  if (
    sections.length &&
    navLinks.length &&
    "IntersectionObserver" in window
  ) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return;
            }


            const currentId =
              entry.target.getAttribute(
                "id"
              );


            navLinks.forEach(link => {

              link.classList.remove(
                "active-link"
              );


              if (
                link.getAttribute("href") ===
                `#${currentId}`
              ) {

                link.classList.add(
                  "active-link"
                );

              }

            });

          });

        },
        {
          rootMargin:
            "-25% 0px -65% 0px"
        }
      );


    sections.forEach(section => {

      sectionObserver.observe(
        section
      );

    });

  }


  /* =======================================================
     ESCAPE KEY - CLOSE MENU
     ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        nav
      ) {

        nav.classList.remove(
          "active"
        );


        if (menuToggle) {

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.innerHTML = "☰";

        }

      }

    }
  );


  /* =======================================================
     PREVENT FORM DOUBLE SUBMISSION
     ======================================================= */

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      () => {

        const submitButton =
          contactForm.querySelector(
            'button[type="submit"]'
          );


        if (submitButton) {

          submitButton.disabled =
            true;

          submitButton.innerHTML =
            "Sending Enquiry...";

        }

      }
    );

  }


  /* =======================================================
     CONSOLE
     ======================================================= */

  console.log(
    "BeeSeeBytes | Smarter Marketing. Powered by AI."
  );

});
