document.addEventListener("DOMContentLoaded", function () {
  // Fixed Navbar: Toggle 'fixed-nav' class when scrolling past 50px
  window.addEventListener("scroll", function () {
    document.querySelector(".navbar").classList.toggle("fixed-nav", window.scrollY > 50);
  });

  // Initial Navbar Animations
  gsap.from(".navbar-brand", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
  });
  gsap.from(".nav-link", {
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out"
  });

  // Animate Header Section on scroll (or on page load if in view)
  gsap.timeline({
    scrollTrigger: {
      trigger: "header.header",
      start: "top center"  // when header reaches center of viewport
    }
  })
    .from("header.header .overlay", { duration: 1, opacity: 0 })
    .from("header.header h1", { duration: 1, opacity: 0, y: -50 }, "-=0.5")
    .from("header.header p", { duration: 1, opacity: 0, y: 50 }, "-=0.7")
    .from("header.header .search-filter", { duration: 1, opacity: 0, y: 50 }, "-=0.7");

  // Animate Featured Media Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#featured-media",
      start: "top 80%"  // animation triggers when top of section is 80% down viewport
    }
  })
    .from("#featured-media .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#featured-media .media-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Thematic Galleries Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#thematic-galleries",
      start: "top 80%"
    }
  })
    .from("#thematic-galleries .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#thematic-galleries .gallery-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Articles Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#articles",
      start: "top 80%"
    }
  })
    .from("#articles .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#articles .article-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Latest Updates Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#latest-updates",
      start: "top 80%"
    }
  })
    .from("#latest-updates .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#latest-updates .update-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Footer Section (optional)
  gsap.from("footer.footer", {
    scrollTrigger: {
      trigger: "footer.footer",
      start: "top 90%"
    },
    duration: 1,
    opacity: 0,
    y: 30
  });
});