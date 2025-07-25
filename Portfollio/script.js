// Initialize GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Loading screen
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading');
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            document.getElementById('navbar').classList.add('visible');

            // Animate navigation items
            const navItems = document.querySelectorAll('#navMenu li');
            gsap.fromTo(navItems,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    onComplete: function () {
                        this.targets().forEach(el => el.classList.add('visible'));
                    }
                }
            );

            // Animate hero content
            gsap.to('.hero-content', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                onComplete: function () {
                    document.querySelector('.hero-content').classList.add('animated');
                }
            });

            gsap.to('.hero .tagline', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                delay: 0.5,
                onComplete: function () {
                    document.querySelector('.hero .tagline').classList.add('animated');
                }
            });

            gsap.to('.btn', {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                onComplete: function () {
                    document.querySelector('.btn').classList.add('animated');
                }
            });
        }
    });
});

// Create matrix rain effect
function createMatrixRain() {
    const matrixRain = document.getElementById('matrixRain');
    if (!matrixRain) return;
    const characters = "01";
    const columns = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.animationDelay = `${Math.random() * 5}s`;

        // Add random characters to column
        for (let j = 0; j < 50; j++) {
            const char = document.createElement('span');
            char.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            char.style.opacity = `${0.1 + Math.random() * 0.5}`;
            column.appendChild(char);
        }

        matrixRain.appendChild(column);
    }
}

createMatrixRain();

// Setup scroll animations
function setupScrollAnimations() {
    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onComplete: function () {
                    title.classList.add('animated');
                }
            }
        );
    });

    // Animate about section
    gsap.fromTo('.about-avatar',
        { opacity: 0, x: -100, rotation: -30 },
        {
            opacity: 1,
            x: 0,
            rotation: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#about',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelector('.about-avatar').classList.add('animated');
            }
        }
    );

    gsap.fromTo('.about-text',
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#about',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelector('.about-text').classList.add('animated');
            }
        }
    );

    // Animate skills
    gsap.fromTo('.skill-tag',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.skills',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.skill-tag').forEach(tag => {
                    tag.classList.add('animated');
                });
            }
        }
    );

    // Animate project cards
    gsap.fromTo('.project-card',
        { opacity: 0, y: 100, rotationX: 90 },
        {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#projects',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.project-card').forEach(card => {
                    card.classList.add('animated');
                });
            }
        }
    );

    // Animate achievement cards
    gsap.fromTo('.achievement-card',
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#achievements',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.achievement-card').forEach(card => {
                    card.classList.add('animated');
                });
            }
        }
    );

    // Animate certificate cards
    gsap.fromTo('.cert-card',
        { opacity: 0, y: 100, rotation: 30 },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '#certificates',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.cert-card').forEach(card => {
                    card.classList.add('animated');
                });
            }
        }
    );

    // Animate profile items
    gsap.fromTo('.profile-item',
        { opacity: 0, rotation: 180, scale: 0 },
        {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.profiles-grid',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.profile-item').forEach(link => {
                    link.classList.add('animated');
                });
            }
        }
    );


    // Animate contact section
    gsap.fromTo('.contact-form',
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#contact',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelector('.contact-form').classList.add('animated');
            }
        }
    );

    gsap.fromTo('.contact-info',
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '#contact',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelector('.contact-info').classList.add('animated');
            }
        }
    );

    // Animate social links
    gsap.fromTo('.social-link',
        { opacity: 0, rotation: 180, scale: 0 },
        {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.social-links',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            onComplete: function () {
                document.querySelectorAll('.social-link').forEach(link => {
                    link.classList.add('animated');
                });
            }
        }
    );
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.getElementById('mobileMenu').addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    this.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('mobileMenu').classList.remove('active');
            }
        }
    });
});
