// =========================================================
// PORTFOLIO JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");


  // =========================
  // MOBILE MENU
  // =========================

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

      navMenu.classList.toggle("open");

    });


    document.querySelectorAll(".nav-link").forEach(link => {

      link.addEventListener("click", () => {

        navMenu.classList.remove("open");

      });

    });

  }


  // =========================
  // DARK / LIGHT THEME
  // =========================

  if (themeToggle) {

    themeToggle.addEventListener("click", () => {

      const currentTheme =
        document.documentElement.getAttribute("data-theme");

      if (currentTheme === "light") {

        document.documentElement.removeAttribute("data-theme");

        themeToggle.textContent = "☼";

      } else {

        document.documentElement.setAttribute(
          "data-theme",
          "light"
        );

        themeToggle.textContent = "☾";

      }

    });

  }


  // =========================
  // BACK TO TOP
  // =========================

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {

        backToTop.classList.add("visible");

      } else {

        backToTop.classList.remove("visible");

      }

    });


    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // =========================
  // ACTIVE NAVIGATION
  // =========================

  const sections =
    document.querySelectorAll("section[id]");

  const navLinks =
    document.querySelectorAll(".nav-link");


  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {

        current = section.getAttribute("id");

      }

    });


    navLinks.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") === `#${current}`
      ) {

        link.classList.add("active");

      }

    });

  });


  // =========================
  // NAVBAR SCROLL EFFECT
  // =========================

  const header =
    document.querySelector(".site-header");


  window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  });

});