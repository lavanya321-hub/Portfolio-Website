document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const toggleButton = document.getElementById("darkModeToggle");
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
    
    // Slider functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const slideContainer = document.querySelector(".slides");

    function updateSlidePosition() {
        slideContainer.style.transition = "transform 1s ease-in-out";
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }, 5000);

    // Contact Form Handling
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Message Sent Successfully!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const successPopup = document.getElementById("success-popup");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let subject = document.getElementById("subject");
        let message = document.getElementById("message");

        isValid = validateField(name) && isValid;
        isValid = validateField(email, validateEmail) && isValid;
        isValid = validateField(subject) && isValid;
        isValid = validateField(message) && isValid;

        if (isValid) {
            successPopup.style.display = "block";
            setTimeout(() => successPopup.style.display = "none", 3000);
            contactForm.reset();
        }
    });

    function validateField(field, validationFunction = () => true) {
        let errorMessage = field.nextElementSibling;
        if (field.value.trim() === "" || !validationFunction(field.value)) {
            errorMessage.textContent = "This field is required!";
            field.style.borderColor = "#ff4d4d";
            return false;
        } else {
            errorMessage.textContent = "";
            field.style.borderColor = "rgba(255, 255, 255, 0.3)";
            return true;
        }
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-progress");

    function animateSkills() {
        skillBars.forEach((bar) => {
            let width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
    }

    // Trigger animation when about section is in viewport
    const aboutSection = document.querySelector(".about");
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkills();
        }
    });

    observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animated-text");

    function fadeInEffect() {
        animatedText.style.opacity = "1";
        animatedText.style.transform = "translateY(0)";
    }

    setTimeout(fadeInEffect, 500);
});

