// ==========================================================
// PRACHI MISHRA PORTFOLIO
// main.js
// Premium Interactions & Animations
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {

```
// ======================================================
// AOS INIT
// ======================================================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

// ======================================================
// TYPING EFFECT
// ======================================================

if (typeof Typed !== "undefined") {

    new Typed("#typing", {
        strings: [
            "Full Stack Developer",
            "Application Support Engineer",
            "Hosting & Domain Specialist",
            "Flutter Support Developer",
            "Web Developer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ======================================================
// MOBILE MENU
// ======================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });

        });
}

// ======================================================
// SCROLL PROGRESS BAR
// ======================================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";
});

// ======================================================
// CURSOR GLOW EFFECT
// ======================================================

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

// ======================================================
// DARK / LIGHT MODE
// ======================================================

const themeToggle =
    document.querySelector(".theme-toggle");

const body = document.body;

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light-mode");

    if (themeToggle) {
        themeToggle.innerHTML =
            '<i class="fas fa-sun"></i>';
    }
}

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("light-mode");

        if (
            body.classList.contains("light-mode")
        ) {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeToggle.innerHTML =
                '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeToggle.innerHTML =
                '<i class="fas fa-moon"></i>';
        }

    });
}

// ======================================================
// ANIMATED COUNTERS
// ======================================================

const counters =
    document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target =
        parseInt(
            counter.getAttribute("data-target")
        );

    let count = 0;

    const speed = target / 150;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText =
                Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;
        }
    };

    update();
};

const counterObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(
                        entry.target
                    );

                    counterObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.5
        }
    );

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ======================================================
// PROJECT FILTERING
// ======================================================

const filterButtons =
    document.querySelectorAll(
        ".project-filter button"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        projectCards.forEach(card => {

            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";
                }, 100);

            } else {

                card.style.opacity = "0";
                card.style.transform =
                    "translateY(20px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }

        });

    });

});

// ======================================================
// ACTIVE NAV LINK
// ======================================================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// ======================================================
// CONTACT FORM
// ======================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const submitBtn =
                this.querySelector(
                    "button"
                );

            submitBtn.innerText =
                "Sending...";

            setTimeout(() => {

                submitBtn.innerText =
                    "Message Sent ✓";

                alert(
                    "Thank you! Your message has been submitted."
                );

                contactForm.reset();

                setTimeout(() => {

                    submitBtn.innerText =
                        "Send Message";

                }, 2000);

            }, 1500);

        }
    );
}

// ======================================================
// SMOOTH REVEAL ANIMATION
// ======================================================

const revealElements =
    document.querySelectorAll(
        ".glass-card"
    );

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all .8s ease";

    revealObserver.observe(el);
});

// ======================================================
// FLOATING CARDS PARALLAX
// ======================================================

document.addEventListener(
    "mousemove",
    (e) => {

        const cards =
            document.querySelectorAll(
                ".glass-card"
            );

        const x =
            (window.innerWidth / 2 -
                e.pageX) /
            60;

        const y =
            (window.innerHeight / 2 -
                e.pageY) /
            60;

        cards.forEach(card => {

            card.style.transform =
                `rotateY(${x}deg) rotateX(${y}deg)`;

        });

    }
);

document.addEventListener(
    "mouseleave",
    () => {

        document
            .querySelectorAll(".glass-card")
            .forEach(card => {

                card.style.transform =
                    "rotateX(0) rotateY(0)";
            });

    }
);

// ======================================================
// PARTICLES.JS
// ======================================================

if (
    typeof particlesJS !==
    "undefined"
) {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 70
            },

            color: {
                value: "#6d5dfc"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.4
            },

            size: {
                value: 3
            },

            move: {
                enable: true,
                speed: 2
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: "#6d5dfc",
                opacity: 0.3,
                width: 1
            }

        },

        interactivity: {

            detect_on: "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode: "grab"
                },

                onclick: {
                    enable: true,
                    mode: "push"
                }

            }

        },

        retina_detect: true

    });

}

// ======================================================
// HERO FADE-IN
// ======================================================

const hero =
    document.querySelector(".hero");

if (hero) {

    hero.style.opacity = "0";
    hero.style.transform =
        "translateY(30px)";

    setTimeout(() => {

        hero.style.transition =
            "all 1s ease";

        hero.style.opacity = "1";

        hero.style.transform =
            "translateY(0)";

    }, 300);
}

// ======================================================
// PRELOADER (OPTIONAL)
// ======================================================

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );
});
```

});

// ==========================================================
// GITHUB REPOSITORY PLACEHOLDER
// Actual GitHub API Loader
// will be added in github.js
// ==========================================================

function loadGithubRepos() {

```
console.log(
    "GitHub repositories will load here."
);
```

}
