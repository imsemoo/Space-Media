// Run once the DOM is ready
$(function () {
  /* ======================================================
     Payment Method Toggle
  ====================================================== */
 // Payment Method Toggle for Deposit Form
$('#paymentMethod').on('change', function () {
  const method = $(this).val(); // Expected: 'creditCard', 'paypal', or 'bankTransfer'
  // Hide all deposit payment detail sections
  $('#creditCardDetails, #paypalDetails, #bankTransferDetails').slideUp();
  // Show the selected deposit payment details section (if a method is selected)
  if (method) {
    $('#' + method + 'Details').slideDown();
  }
});

// Payment Method Toggle for Withdrawal Form
$('#withdrawMethod').on('change', function () {
  const method = $(this).val(); // Expected: 'creditCard', 'paypal', or 'bankTransfer'
  // Hide all withdrawal payment detail sections
  $('#withdrawCreditCardDetails, #withdrawPaypalDetails, #withdrawBankTransferDetails').slideUp();
  // If a method is selected, build the corresponding detail section's ID and display it
  if (method) {
    // Capitalize the first letter of the method (e.g., 'creditCard' -> 'CreditCard')
    const capitalizedMethod = method.charAt(0).toUpperCase() + method.slice(1);
    $('#' + 'withdraw' + capitalizedMethod + 'Details').slideDown();
  }
});



  
  /* ======================================================
     Sidebar Toggle with GSAP
  ====================================================== */
  const $hamburger = $('.hamburger');
  const $sidebar = $('.sidebar');
  const $mainContent = $('.main-content');

  if ($hamburger.length && $sidebar.length && $mainContent.length) {
    // Set initial sidebar width (if not set via CSS)
    gsap.set($sidebar, { width: "250px" });

    $hamburger.on('click', function () {
      $sidebar.toggleClass('active');
      $mainContent.toggleClass('active');

      // Animate width based on sidebar's active state
      const isActive = $sidebar.hasClass('active');
      gsap.to($sidebar, {
        duration: 0.3,
        width: isActive ? "250px" : "90px",
        ease: isActive ? "power2.out" : "power2.in"
      });
    });
  } else {
    console.error("Required elements (.hamburger, .sidebar, .main-content) not found.");
  }

  /* ======================================================
     Transaction Modal (Bootstrap)
  ====================================================== */
  const transactionModalEl = document.getElementById('transactionModal');
  if (transactionModalEl) {
    const transactionModal = new bootstrap.Modal(transactionModalEl);
    $('.transaction-row').on('click', function () {
      // Populate modal fields from data attributes
      ['date', 'id', 'type', 'amount', 'status', 'details'].forEach(attr => {
        const value = $(this).data(attr);
        $('#modal' + attr.charAt(0).toUpperCase() + attr.slice(1)).text(value);
      });
      transactionModal.show();
    });
  }

  /* ======================================================
     Notifications & Messages Dropdowns
  ====================================================== */
  const $notificationsIcon = $(".notifications-icon");
  const $notificationsWrapper = $(".icon-wrapper.notifications");
  const $messagesIcon = $(".messages-icon");
  const $messagesWrapper = $(".icon-wrapper.messages");

  $notificationsIcon.on("click", function (e) {
    e.preventDefault();
    $notificationsWrapper.toggleClass("active");
    $messagesWrapper.removeClass("active");
  });

  $messagesIcon.on("click", function (e) {
    e.preventDefault();
    $messagesWrapper.toggleClass("active");
    $notificationsWrapper.removeClass("active");
  });

  // Close any open dropdown if clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".icon-wrapper").length) {
      $(".icon-wrapper").removeClass("active");
    }
  });

  /* ======================================================
     Chart.js Initialization
  ====================================================== */
  // Revenue Line Chart
  const revenueCtx = document.getElementById('revenueChart')?.getContext('2d');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Revenue ($)',
          data: [1200, 1500, 1700, 1400, 1800, 1900, 2200, 2100, 2300, 2500, 2400, 2600],
          backgroundColor: 'rgba(246, 142, 58, 0.2)',
          borderColor: 'rgba(50, 43, 131, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(246, 142, 58, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Sales Bar Chart
  const salesCtx = document.getElementById('salesChart')?.getContext('2d');
  if (salesCtx) {
    new Chart(salesCtx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Sales',
          data: [50, 75, 60, 90],
          backgroundColor: 'rgba(246, 142, 58, 0.5)',
          borderColor: 'rgba(50, 43, 131, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } }
      }
    });
  }
});

// Remove preloader once all assets are loaded
$(window).on("load", function () {
  $("#preloader").hide();
});


     // Multi-Step Form Navigation Script
     document.addEventListener("DOMContentLoaded", function() {
      const prevBtns = document.querySelectorAll(".btn-prev");
      const nextBtns = document.querySelectorAll(".btn-next");
      const progress = document.getElementById("progress");
      const formSteps = document.querySelectorAll(".form-step");
      const progressSteps = document.querySelectorAll(".progress-step");
      let currentStep = 0;
      // Update form and progress bar
      function updateFormSteps() {
          formSteps.forEach((step, index) => {
              step.classList.toggle("form-step-active", index === currentStep);
          });
      }

      function updateProgressBar() {
          progressSteps.forEach((step, index) => {
              if (index <= currentStep) {
                  step.classList.add("progress-step-active");
              } else {
                  step.classList.remove("progress-step-active");
              }
          });
          // Calculate progress bar width based on current step
          progress.style.width = (currentStep / (progressSteps.length - 1)) * 100 + "%";
      }
      // Next button event
      nextBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
              if (currentStep < formSteps.length - 1) {
                  currentStep++;
                  updateFormSteps();
                  updateProgressBar();
              }
          });
      });
      // Previous button event
      prevBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
              if (currentStep > 0) {
                  currentStep--;
                  updateFormSteps();
                  updateProgressBar();
              }
          });
      });
      // Toggle payment fields based on selected method
      const paymentMethodSelect = document.getElementById("paymentMethod");
      const creditCardFields = document.getElementById("creditCardFields");
      const paypalFields = document.getElementById("paypalFields");
      paymentMethodSelect.addEventListener("change", function() {
          if (this.value === "creditCard") {
              creditCardFields.style.display = "block";
              paypalFields.style.display = "none";
          } else if (this.value === "paypal") {
              paypalFields.style.display = "block";
              creditCardFields.style.display = "none";
          } else {
              creditCardFields.style.display = "none";
              paypalFields.style.display = "none";
          }
      });
  });