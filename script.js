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

