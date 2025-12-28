const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100 ; 
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "";
        if (link.getAttribute("href") === `#${current}`) {
            link.style.color = "#38bdf8";
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(20px)";
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll("section, article").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});
