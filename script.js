gsap.registerPlugin(ScrollTrigger, TextPlugin);

window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading');
    gsap.to(loadingScreen, {
        opacity: 0, duration: 0.8,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            document.getElementById('navbar').classList.add('visible');

            const navItems = document.querySelectorAll('#navMenu li');
            gsap.fromTo(navItems, { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
                onComplete: function () { this.targets().forEach(el => el.classList.add('visible')); }
            });

            gsap.to('.hero-content', { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", onComplete: function () { document.querySelector('.hero-content').classList.add('animated'); } });
            gsap.to('.hero .tagline', { opacity: 1, y: 0, duration: 1.2, delay: 0.5, onComplete: function () { document.querySelector('.hero .tagline').classList.add('animated'); } });
            gsap.to('.btn', { opacity: 1, y: 0, duration: 1, delay: 1, onComplete: function () { document.querySelectorAll('.btn').forEach(button => { button.classList.add('animated'); }); } });
        }
    });
});

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

function setupScrollAnimations() {
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: title, start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { title.classList.add('animated'); } });
    });

    gsap.fromTo('.about-avatar', { opacity: 0, x: -100, rotation: -30 }, { opacity: 1, x: 0, rotation: 0, duration: 1.5, scrollTrigger: { trigger: '#about', start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { document.querySelector('.about-avatar').classList.add('animated'); } });
    gsap.fromTo('.about-text', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.5, scrollTrigger: { trigger: '#about', start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { document.querySelector('.about-text').classList.add('animated'); } });
    
    gsap.fromTo('.skill-tag', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.skills', start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { document.querySelectorAll('.skill-tag').forEach(tag => { tag.classList.add('animated'); }); } });
    gsap.fromTo('.education-card', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: '#education', start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { document.querySelector('.education-card').classList.add('animated'); } });
    
    // Experience Cards Drop-in
    gsap.fromTo('.experience-card', { opacity: 0, y: 100, rotationX: 20 }, { opacity: 1, y: 0, rotationX: 0, duration: 0.9, stagger: 0.2, scrollTrigger: { trigger: '#experience', start: "top 80%", toggleActions: "play none none none" } });

    // Projects Timeline Animation 
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const card = item.querySelector('.project-card');
        const isEven = index % 2 !== 0; 
        gsap.fromTo(card,
            { opacity: 0, x: isEven ? 100 : -100, rotationY: isEven ? -15 : 15 },
            {
                opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" }
            }
        );
    });

    // Achievements 3D Fly-In
    gsap.utils.toArray('.achievement-card').forEach((card, index) => {
        gsap.fromTo(card, 
            { opacity: 0, y: 150, rotationX: 45, rotationY: -30, z: -200 }, 
            { 
                opacity: 1, y: 0, rotationX: 0, rotationY: 0, z: 0, 
                duration: 1.2, 
                stagger: 0.15,
                ease: "back.out(1.2)", 
                scrollTrigger: { 
                    trigger: card, 
                    start: "top 90%", 
                    toggleActions: "play none none none" 
                } 
            }
        );
    });

    // Certificates Horizontal Scroll
    const certWrapper = document.querySelector('.certificates-horizontal-wrapper');
    if(certWrapper) {
        let scrollTween = gsap.to(certWrapper, {
            x: () => -(certWrapper.scrollWidth - window.innerWidth + 50),
            ease: "none",
            scrollTrigger: {
                trigger: "#certificates",
                start: "top 10%", 
                end: () => "+=" + certWrapper.scrollWidth,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true
            }
        });

        gsap.utils.toArray('.cert-card').forEach(card => {
            gsap.from(card, {
                opacity: 0,
                scale: 0.7,
                rotationY: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    containerAnimation: scrollTween,
                    start: "left 90%", 
                    end: "left 40%", 
                    scrub: true
                }
            });
        });
    }

    gsap.fromTo('.profile-item', { opacity: 0, rotation: 180, scale: 0 }, { opacity: 1, rotation: 0, scale: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.profiles-grid', start: "top 80%", toggleActions: "play none none none" }, onComplete: function () { document.querySelectorAll('.profile-item').forEach(link => { link.classList.add('animated'); }); } });
    
    // Contact Section 3D Fold-In
    gsap.fromTo('.contact-form', 
        { opacity: 0, x: -100, rotationY: 45, z: -200 }, 
        { opacity: 1, x: 0, rotationY: 0, z: 0, duration: 1.2, ease: "back.out(1.2)", scrollTrigger: { trigger: '#contact', start: "top 80%", toggleActions: "play none none none" } }
    );
    gsap.fromTo('.contact-info-card', 
        { opacity: 0, x: 100, rotationY: -45, z: -200 }, 
        { opacity: 1, x: 0, rotationY: 0, z: 0, duration: 1.2, ease: "back.out(1.2)", scrollTrigger: { trigger: '#contact', start: "top 80%", toggleActions: "play none none none" } }
    );
}

// Universal 3D Tilt for all Cards
function apply3DTilt(selectors) {
    document.querySelectorAll(selectors).forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -12; 
            const rotateY = ((x - centerX) / centerX) * 12;
            
            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                y: -8, // Lift effect
                ease: "power1.out",
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotationX: 0,
                rotationY: 0,
                y: 0, // Reset lift
                ease: "power3.out",
                duration: 0.6
            });
        });
    });
}

// Apply tilt effect to specific cards
document.addEventListener('DOMContentLoaded', () => {
    setupScrollAnimations();
    apply3DTilt('.achievement-card, .cert-card, .experience-card, .contact-form, .contact-info-card');
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
});

document.getElementById('mobileMenu').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('active');
    this.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
            const navMenu = document.getElementById('navMenu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('mobileMenu').classList.remove('active');
            }
        }
    });
});
