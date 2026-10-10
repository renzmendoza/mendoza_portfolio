// 1. Smooth Scroll for Nav Links
const navLinks = document.querySelectorAll('nav ul li a');
const navContainer = document.querySelector('.nav-container');
const navMenuToggle = document.querySelector('.nav-menu-toggle');

navMenuToggle.addEventListener('click', () => {
    const isOpen = navContainer.classList.toggle('is-open');
    navMenuToggle.setAttribute('aria-expanded', String(isOpen));
    navMenuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    navMenuToggle.innerHTML = `<i class="fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>`;
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        navContainer.classList.remove('is-open');
        navMenuToggle.setAttribute('aria-expanded', 'false');
        navMenuToggle.setAttribute('aria-label', 'Open navigation menu');
        navMenuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-container ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Checks if the scroll position is within a specific section
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
    });
});


// 2. Sticky Navbar Logic
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 20);
});

// 3. Scroll Reveal Animation Logic
function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Triggers when 150px of the element is visible

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Typing Effect Initialization
var typed = new Typed('#typed-text', {
    strings: ["", "a Developer", "a Tech Student", "a Designer", "a Problem Solver"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Run on scroll and once on page load
window.addEventListener('scroll', reveal);
reveal();

const projectData = {
    'hecaton': {
        title: "Hecaton Hustle Harmony",
        buttonText: "Play Game",
        images: [
            "html/hecathon_preview.jpg",
            "html/h2.jpg", 
            "html/h3.jpg",
            "html/h4.jpg"
        ],
        desc: "A fast-paced rhythm or logic game built in GDevelop, blending unique mechanics with smooth gameplay harmony. It tests player reflexes and logic skills across various difficulty stages.",
        tech: ["GDevelop", "Game Design", "Rhythm Mechanics", "Logic Puzzles"],
        liveLink: "https://slipihed.itch.io/hecaton-hustle-harmony",
    },
    'kusina': {
        title: "Kusina Adventure",
        buttonText: "Play Game",
        images: [
            "html/kusinaAd_preview.jpg",
            "html/kusina2.jpg", 
            "html/kusina3.jpg",
            "html/kusina4.jpg"
        ],
        desc: "A Filipino culinary-themed 2D platformer and puzzle game. Navigate Filipino recipe challenges using logic and traditional cooking knowledge to advance through levels.",
        tech: ["GDevelop", "2D Platformer", "Puzzle", "Filipino Theme"],
        liveLink: "https://gd.games/instant-builds/19fcfcbc-2d3b-4efb-906b-d1accbe5b4df?fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEeXMF2zNixJ1lYqxxJwyWXbbCq9u8HDG-yEUqkO_yHz_5PzHvPpeBPfllFYCY_aem_3O6G7ny9DkJFxkzu24YSdg",
    },
    'goodby': {
        title: "GoodBy",
        buttonText: "Download App",
        images: [
            "html/goodby_preview.png",
            "html/by2.png", 
            "html/by4.png",
            "html/by3.png"
        ],
        desc: "Android-based inventory tracker that uses a barcode scanner to digitize and monitor product expiration dates. All data is synced to a MySQL database to reduce food waste through real-time notifications.",
        tech: ["Android Studio", "Java", "MySQL", "Google ML Kit", "OpenFoodFacts API"],
        liveLink: "https://goodbyweb.vercel.app/",
    },
    'suklian': {
        title: "Suklian",
        buttonText: "Visit Web App",
        images: [
            "html/suklian1.jpg",
            "html/suklian2.jpg",
            "html/suklian3.jpg",
            "html/suklian4.jpg"
        ],
        desc: "Mobile-first web app that settles the ambagan when friends split a bill and pay with large bills. It computes each person's change, then plans how to hand it back using the cash the payer actually has on hand. When exact change isn't possible, it suggests a swap like “give ₱100, get ₱61 back.” It also supports English, Taglish and Tagalog, plus light and dark mode.",
        tech: ["HTML5", "CSS3", "JavaScript", "Dynamic Programming", "Responsive Design"],
        liveLink: "https://suklian.vercel.app/",
    },
    'fitpulse': {
        title: "FitPulse Studio",
        buttonText: "Visit Web App",
        images: [
            "html/fitpulse1.jpg",
            "html/fitpulse2.jpg",
            "html/fitpulse3.jpg",
            "html/fitpulse4.jpg"
        ],
        desc: "FitPulse Studio is a responsive gym management web application designed to simplify fitness memberships and gym operations. It allows members to sign up, explore membership plans, manage their profiles, book fitness classes, track attendance, and access their digital membership ID through a QR code. Staff can manage members, organize class schedules, process check-ins, and monitor attendance reports through a dedicated dashboard. With secure authentication, online payment integration, and a clean, modern interface, FitPulse Studio delivers a convenient fitness experience on both mobile and desktop devices.",
        tech: ["React 19", "Vite", "Supabase", "PostgreSQL", "Stripe", "Google OAuth", "Bootstrap", "Vercel"],
        liveLink: "https://fitpulse-mauve.vercel.app/",
    }
};

let slideIndex = 1;

function openProject(projectId) {
    const data = projectData[projectId];
    const modal = document.getElementById('project-modal');
    
    if (!data || !modal) {
        console.error("Modal or Data missing for:", projectId);
        return;
    }

    // Inject Text
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;

    const mainButton = document.getElementById('modal-btn-main');
    mainButton.hidden = !data.liveLink;
    if (data.liveLink) {
        mainButton.innerText = data.buttonText;
        mainButton.href = data.liveLink;
    }
    // Inject 4 Images into Slideshow slots
    document.getElementById('modal-img-1').src = data.images[0];
    document.getElementById('modal-img-2').src = data.images[1];
    document.getElementById('modal-img-3').src = data.images[2];
    document.getElementById('modal-img-4').src = data.images[3];

    // Reset Slideshow to first image
    slideIndex = 1;
    showSlides(slideIndex);

    const techContainer = document.getElementById('modal-tech-stack');
    techContainer.innerHTML = '';
    data.tech.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-pill';
        span.innerText = tech;
        techContainer.appendChild(span);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// --- SLIDESHOW NAVIGATION FUNCTIONS ---
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove 'active' from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate dot
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
}

// Close Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    
    // Close using the X button
    document.addEventListener('click', (e) => {
        if (e.target.closest('.close-modal')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close when clicking background
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
