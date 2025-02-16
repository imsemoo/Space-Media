$(function () {
  /* ======================================================
     Payment Method Toggle on Checkout
  ====================================================== */
  $('#paymentMethodCheckout').on('change', function () {
    const method = $(this).val();
    // Hide both payment details sections
    $('#creditCardDetails, #paypalDetails').slideUp();
    // Show the selected method's details
    if (method === 'creditCard') {
      $('#creditCardDetails').slideDown();
    } else if (method === 'paypal') {
      $('#paypalDetails').slideDown();
    }
  });

  /* ======================================================
     Owl Carousel Initializations
  ====================================================== */
  // Initialize Articles and Team sliders with the same settings
  $(".articles-slider, .team-slider").owlCarousel({
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
  });

  // Initialize Testimonial slider with custom settings
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1, // Display one testimonial at a time
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ]
  });

  /* ======================================================
     Collection Panels - Active State Toggle
  ====================================================== */
  $('.collection-panel').on('click', function () {
    $('.collection-panel').removeClass('active');
    $(this).addClass('active');
  });

  /* ======================================================
     Fixed Navbar & GSAP Animations
  ====================================================== */
  // Toggle "fixed-nav" class on navbar upon scrolling
  $(window).on("scroll", function () {
    $(".navbar").toggleClass("fixed-nav", window.scrollY > 50);
  });

  // Animate navbar brand and links on page load
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

  // Animate Header Section with GSAP ScrollTrigger
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

  // Animate Featured Media Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#featured-media",
      start: "top 80%"
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

  // Animate Latest Updates (Collections) Section
  gsap.timeline({
    scrollTrigger: {
      trigger: "#collections",
      start: "top 80%"
    }
  })
    .from("#collections .section-header", { duration: 1, opacity: 0, y: -30, delay: 0.3 })
    .from("#collections .collections-container", { duration: 1, opacity: 0, y: 30, stagger: 0.2 }, "-=0.5");

  // Animate Articles Slider Container
  gsap.timeline({
    scrollTrigger: {
      trigger: ".articles-slider",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  })
    .from(".articles-slider", { duration: 1, opacity: 0, y: 30, ease: "power2.out" });

  // Animate Footer Section
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

  /* ======================================================
     Video Cards - Play/Pause on Hover
  ====================================================== */
  $(".video-card video").on({
    mouseenter: function () {
      this.play();
    },
    mouseleave: function () {
      this.pause();
      this.currentTime = 0; // Reset video to beginning
    }
  });

  /* ======================================================
     Shopping Cart Dropdown & Remove Item
  ====================================================== */
  const $cartIcon = $("#shoppingCartIcon");
  const $cartDropdown = $("#shoppingCartDropdown");

  // Toggle cart dropdown when clicking the cart icon
  $cartIcon.on("click", function (e) {
    e.preventDefault();
    $cartDropdown.toggleClass("active");
  });

  // Close cart dropdown when clicking outside of it or the cart icon
  $(document).on("click", function (e) {
    if (
      !$cartIcon.is(e.target) &&
      !$cartDropdown.is(e.target) &&
      !$cartIcon.has(e.target).length &&
      !$cartDropdown.has(e.target).length
    ) {
      $cartDropdown.removeClass("active");
    }
  });

  // Remove cart item on clicking the remove button
  $(".remove-item").on("click", function (e) {
    e.stopPropagation();
    $(this).closest(".cart-item").remove();
    // Optionally update cart count/total here
  });
});

// Hide preloader when the window has fully loaded
$(window).on("load", function () {
  $("#preloader").hide();
});
