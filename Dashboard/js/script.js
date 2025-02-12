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



document.addEventListener("DOMContentLoaded", function(){
  // Animate Dashboard Header

  // GSAP Animation for header (optional)
  gsap.from(".dashboard-header", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out"
  });
  // Animate Sidebar Links (if desired)
  gsap.from(".sidebar nav ul li", {
    duration: 1,
    opacity: 0,
    x: -20,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out"
  });
  // Animate Main Content
  gsap.from(".main-content", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
    delay: 0.8
  });
  // Animate Dashboard Cards
  gsap.from(".chart-card", {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 1,
    ease: "power2.out"
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