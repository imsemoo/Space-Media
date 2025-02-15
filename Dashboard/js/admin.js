$(document).ready(function () {
  // Script to Toggle Credit Card Details 
  $('#paymentMethod').on('change', function () {
    let method = $(this).val();
    // Hide all detail sections first
    $('#creditCardDetails, #paypalDetails, #bankTransferDetails').slideUp();
    // Show the selected one
    if (method === 'creditCard') {
      $('#creditCardDetails').slideDown();
    } else if (method === 'paypal') {
      $('#paypalDetails').slideDown();
    } else if (method === 'bankTransfer') {
      $('#bankTransferDetails').slideDown();
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Select the required elements
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');

  // Ensure required elements exist to avoid errors
  if (!hamburger || !sidebar || !mainContent) {
    console.error("Required elements (.hamburger, .sidebar, .main-content) not found.");
    return;
  }

  // Set the initial width of the sidebar to 80px (if not already set via CSS)
  gsap.set(sidebar, { width: "250px" });

  // Add click event listener to the hamburger icon
  hamburger.addEventListener('click', function () {
    // Toggle the active class on sidebar and main content
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active');

    // Animate the sidebar's width using GSAP based on its active state
    if (sidebar.classList.contains('active')) {
      // Expand sidebar to full width (250px)
      gsap.to(sidebar, { duration: 0.3, width: "250px", ease: "power2.out" });
    } else {
      // Collapse sidebar back to 80px width
      gsap.to(sidebar, { duration: 0.3, width: "70px", ease: "power2.in" });
    }
  });
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Initialize the modal using Bootstrap's Modal API
  const transactionModalEl = document.getElementById('transactionModal');
  const transactionModal = new bootstrap.Modal(transactionModalEl);

  // Add click event listener to each transaction row
  document.querySelectorAll('.transaction-row').forEach(row => {
    row.addEventListener('click', function () {
      const date = this.getAttribute('data-date');
      const id = this.getAttribute('data-id');
      const type = this.getAttribute('data-type');
      const amount = this.getAttribute('data-amount');
      const status = this.getAttribute('data-status');
      const details = this.getAttribute('data-details');
      
      // Populate modal fields
      document.getElementById('modalDate').textContent = date;
      document.getElementById('modalId').textContent = id;
      document.getElementById('modalType').textContent = type;
      document.getElementById('modalAmount').textContent = amount;
      document.getElementById('modalStatus').textContent = status;
      document.getElementById('modalDetails').textContent = details;
      
      // Show the modal
      transactionModal.show();
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  // Toggle notifications dropdown
  const notificationsIcon = document.querySelector(".notifications-icon");
  const notificationsWrapper = document.querySelector(".icon-wrapper.notifications");
  notificationsIcon.addEventListener("click", function (e) {
    e.preventDefault();
    notificationsWrapper.classList.toggle("active");
    // Close messages dropdown if open
    document.querySelector(".icon-wrapper.messages").classList.remove("active");
  });

  // Toggle messages dropdown
  const messagesIcon = document.querySelector(".messages-icon");
  const messagesWrapper = document.querySelector(".icon-wrapper.messages");
  messagesIcon.addEventListener("click", function (e) {
    e.preventDefault();
    messagesWrapper.classList.toggle("active");
    // Close notifications dropdown if open
    document.querySelector(".icon-wrapper.notifications").classList.remove("active");
  });

  // Close dropdowns if clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".icon-wrapper")) {
      document.querySelectorAll(".icon-wrapper").forEach(wrapper => {
        wrapper.classList.remove("active");
      });
    }
  });

});




// Chart.js - Revenue Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
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
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Chart.js - Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
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
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



