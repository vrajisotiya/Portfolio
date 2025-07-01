// // Navbar scroll effect
// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));
//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

// Initialize all tooltips on the page
document.addEventListener("DOMContentLoaded", function () {
  let tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simulate form submission
  alert(
    `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`
  );

  // Reset form
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const projectDetailModal = document.getElementById("projectDetailModal");
  projectDetailModal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    const button = event.relatedTarget;

    // Extract info from data-bs-* attributes
    const title = button.getAttribute("data-title");
    const description = button.getAttribute("data-description");
    const image = button.getAttribute("data-image");
    const technologies = button.getAttribute("data-technologies"); // Comma-separated string

    // Update the modal's content.
    const modalTitle = projectDetailModal.querySelector("#modalProjectTitle");
    const modalDescription = projectDetailModal.querySelector(
      "#modalProjectDescription"
    );
    const modalImage = projectDetailModal.querySelector("#modalProjectImage");
    const modalTechnologies = projectDetailModal.querySelector(
      "#modalProjectTechnologies"
    );
    const modalViewProjectLink = projectDetailModal.querySelector(
      "#modalViewProjectLink"
    );

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;
    modalImage.alt = title + " Image"; // Update alt text for accessibility

    // Clear previous badges
    modalTechnologies.innerHTML = "";
    // Create badges for technologies
    if (technologies) {
      technologies.split(",").forEach((tech) => {
        const badge = document.createElement("span");
        badge.classList.add("badge", "bg-primary-custom", "me-2", "mb-2"); // Added me-2 for margin-right
        badge.textContent = tech.trim();
        modalTechnologies.appendChild(badge);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollBtn");

  // Function to check if the user has scrolled enough to display the button
  function toggleScrollBtn() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  // Add scroll event listener to the window
  window.addEventListener("scroll", toggleScrollBtn);

  // Add click event listener to the scroll button
  scrollBtn.addEventListener("click", scrollToTop);

  // Initially hide the scroll button on page load
  toggleScrollBtn();
});

// Add particle effect to hero section
function createParticles() {
  const hero = document.querySelector(".hero");
  const particlesContainer = document.createElement("div");
  particlesContainer.style.position = "absolute";
  particlesContainer.style.top = "0";
  particlesContainer.style.left = "0";
  particlesContainer.style.width = "100%";
  particlesContainer.style.height = "100%";
  particlesContainer.style.pointerEvents = "none";
  particlesContainer.style.zIndex = "1";

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "2px";
    particle.style.height = "2px";
    particle.style.background = "rgba(255, 255, 255, 0.6)";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      3 + Math.random() * 4
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";

    particlesContainer.appendChild(particle);
  }

  hero.appendChild(particlesContainer);
}

// Initialize particles when page loads
window.addEventListener("load", createParticles);
