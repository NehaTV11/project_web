function showAlert() {
    alert("Hello! Thanks for visiting this site.");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("formResult");

    if (!name || !email || !message) {
        result.innerText = "Please fill out all fields.";
        result.style.color = "red";
        return;
    }

    result.innerText = `Thank you, ${name}! Your message has been sent.`;
    result.style.color = "green";

    document.getElementById("contactForm").reset();
});

// Optional: Add basic scroll animation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const triggerBottom = window.innerHeight * 0.9;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateY(30px)";
        }
    });
});

// Initialize animation on load
window.addEventListener("load", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.transition = "all 0.6s ease-out";
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });
});
// Smooth scroll to section when nav link is clicked
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Show/hide "Back to Top" button on scroll
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  const scrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
  topBtn.style.display = scrolled ? "block" : "none";
  updateActiveLink(); // Highlight nav link based on scroll
};

// Scroll to top when button is clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Highlight active section's nav link
function updateActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  let current = "";

  sections.forEach(section => {
    const offsetTop = section.offsetTop - 70;
    if (pageYOffset >= offsetTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

