$(document).ready(function () {
  $(window).on("scroll", function () {
    $(".navbar").toggleClass("fixed-nav", $(window).scrollTop() > 50);
  });

  
});


// GSAP Animations for a Magical Entrance 

  // Animate the brand logo with a bounce effect
  gsap.from(".navbar-brand", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
  });
  // Animate each navigation link sequentially
  gsap.from(".nav-link", {
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out"
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Create a timeline with a default easing function.
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    // Animate the header overlay fade-in
    tl.from(".header .overlay", { duration: 1, opacity: 0 })
      // Animate the headline sliding in from above
      .from(".header h1", { duration: 1, opacity: 0, y: -50 }, "-=0.5")
      // Animate the description sliding in from below
      .from(".header p", { duration: 1, opacity: 0, y: 50 }, "-=0.7")
      // Animate the search filter form sliding up
      .from(".search-filter", { duration: 1, opacity: 0, y: 50 }, "-=0.7")
      // Animate the Featured Media section header (title & subtitle)
      .from(".featured-media-section .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
      // Animate each media card with a slight stagger
      .from(".media-card", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");
  });