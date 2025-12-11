// Reveal-on-scroll animation
const elements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
