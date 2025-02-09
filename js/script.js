$(document).ready(function(){
  $(".articles-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  }); $(".team-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Fixed Navbar Animation (unchanged)
  window.addEventListener("scroll", function () {
    document.querySelector(".navbar").classList.toggle("fixed-nav", window.scrollY > 50);
  });

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

  // Animate Header Section (unchanged)
  gsap.timeline({
    scrollTrigger: {
      trigger: "header.header",
      start: "top center"
    }
  })
    .from("header.header .overlay", { duration: 1, opacity: 0 })
    .from("header.header h1", { duration: 1, opacity: 0, y: -50 }, "-=0.5")
    .from("header.header p", { duration: 1, opacity: 0, y: 50 }, "-=0.7")
    .from("header.header .search-filter", { duration: 1, opacity: 0, y: 50 }, "-=0.7");

  // Animate Featured Media Section (unchanged)
  gsap.timeline({
    scrollTrigger: {
      trigger: "#featured-media",
      start: "top 80%"
    }
  })
    .from("#featured-media .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#featured-media .media-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Thematic Galleries Section (unchanged)
  gsap.timeline({
    scrollTrigger: {
      trigger: "#thematic-galleries",
      start: "top 80%"
    }
  })
    .from("#thematic-galleries .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#thematic-galleries .gallery-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Articles Section Slider Container Only
  gsap.timeline({
    scrollTrigger: {
      trigger: ".articles-slider",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  })
    .from(".articles-slider", { duration: 1, opacity: 0, y: 30, ease: "power2.out" });

  // Animate Latest Updates Section (unchanged)
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
    y: 30,
    ease: "power2.out"
  });
});
